import {render} from '@testing-library/react';
import { screen } from '@testing-library/react';
import ParentCompoennt from './parentcomponent';

describe("parent component testing suite", ()=>{
    it("testing basic render ", async ()=>{
        render(<ParentCompoennt/>)
        let element = screen.getByTestId("registration-form")
        expect(element).toBeInTheDocument();
    })
    
    
});