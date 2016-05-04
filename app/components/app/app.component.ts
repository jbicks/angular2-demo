import {Component} from 'angular2/core';
import {LoginComponent} from '../login/login.component'
import {CatalogComponent} from '../catalog/catalog.component'

@Component({
  selector: 'app',
  template: `
      <login></login>
      <catalog></catalog>
    `,
  directives: [LoginComponent, CatalogComponent]
})
export class AppComponent {
}
