import {render, fireEvent} from '@testing-library/react';
import { screen } from '@testing-library/react';
import ParentCompoennt from './parentcomponent';

import userEvent from '@testing-library/user-event'


describe("parent component testing suite", ()=>{
    it("testing basic render ", async ()=>{
        render(<ParentCompoennt/>)
        let element = screen.getByTestId("registration-form")
        expect(element).toBeInTheDocument();
        expect(screen.getByText(/Registration Form/i)).toBeInTheDocument();
    })

    it("test agree terms and conditions dbl click test", async()=>{
        const onChange = jest.fn()
        render(<ParentCompoennt/>)
        // const agreeElement = screen.getByTestId("agree");
        const checkbox = screen.getByRole('checkbox')
        fireEvent.dblClick(checkbox)
        // expect(onChange).toHaveBeenCalledTimes(2)

//   userEvent.dblClick(checkbox) //userEvent also not working properly
//   await expect(onChange).toHaveBeenCalledTimes(2)   //Not working toHavebeen called
  await expect(screen.getByTestId("agree")).not.toBeChecked()

        
    })

    it("test agree terms condition only", async()=>{
        
        const onChange = jest.fn()
        render(<ParentCompoennt/>)
        const agreeElement = screen.getByTestId("agree");
                const checkbox = screen.getByRole('checkbox')

        fireEvent.click(checkbox);
        await expect(screen.getByTestId("agree")).toBeChecked();
        // await expect(onChange).toHaveBeenCalledTimes(1)

    })

    it("text box testing", async()=>{
        render(<ParentCompoennt/>)
         userEvent.type(screen.getByTestId('name-test'), 'Hello World!')
        expect(screen.getByTestId('name-test')).toHaveValue('Hello World!')
    })

    
    
});