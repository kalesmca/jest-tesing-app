import {render} from '@testing-library/react';
import { screen } from '@testing-library/react';
import ParentCompoennt from './parentcomponent';

describe("parent component testing suite", ()=>{
    it("should basic render ", async ()=>{
        render(<ParentCompoennt/>)
        let text = screen.getByText(/My Parent Components/i)
        expect(text).toBeInTheDocument();
    })
    
    
});