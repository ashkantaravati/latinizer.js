import {Latinizer}  from "../src/latinizer";

import * as mocha from 'mocha';
import * as chai from "chai";


const expect = chai.expect;
describe('Latinizer', () => {
    it('should be able to register input elements', ()=> {
        let element = {id:"age"} as HTMLInputElement;
        Latinizer.setListener(element,"fa");
        // element.keydown
        // expect(element).to.have();
    })
})