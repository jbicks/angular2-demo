import {Directive, Attribute, ElementRef, DynamicComponentLoader, ViewContainerRef} from 'angular2/core';
import {Router, RouterOutlet, ComponentInstruction} from 'angular2/router';
import {UserService} from '../services/user/user.service';

@Directive({
  selector: 'router-outlet',
  providers:[UserService]
})
export class LoggedInRouterOutlet extends RouterOutlet {
  publicRoutes: any;
  private parentRouter: Router;

  constructor(_elementRef: ViewContainerRef, 
              _loader: DynamicComponentLoader,
              _parentRouter: Router, 
              @Attribute('name') nameAttr: string, 
              private _userService:UserService) {
                
    super(_elementRef, _loader, _parentRouter, nameAttr);

    this.parentRouter = _parentRouter;
    // The Boolean following each route below denotes whether the route requires authentication to view
    this.publicRoutes = {
      'login': true
    };
  }

  activate(instruction: ComponentInstruction) {
    console.log('activating outlet')
    
    let url = instruction.urlPath;
    
    if (!this.publicRoutes[url] && !this._userService.isLoggedIn()) {
      // todo: redirect to Login, may be there a better way?
      
      this.parentRouter.navigate(['Login']);
      return;
    }
    return super.activate(instruction);
  }
}