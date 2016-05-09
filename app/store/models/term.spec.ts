import { TermModel } from './term.model';

describe('TermModel', () => {

    it('has Key', () => {
        let term: TermModel = { Key: "termKey", Value: 'Super Cat' };
        expect(term.Key).toEqual("termKey");
    });

    it('has Value', () => {
        let term: TermModel = { Key: "termKey", Value: 'Super Cat' };
        expect(term.Value).toEqual('Super Cat');
    });

});
