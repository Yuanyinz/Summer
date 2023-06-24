import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Userinput2 from "../client/Userinput2";
import userEvent from '@testing-library/user-event';

describe('Testing Userinput2', () => {
    let component;
    const mockSetNewItem = jest.fn();
    const mockNewItem = jest.fn();
    const mockAddTodo = jest.fn();


    const props = {
        setNewItem: mockSetNewItem,
        addTodo: mockAddTodo,
        newItem: mockNewItem,
      }

    beforeEach(() => {
        component = render(<Userinput2 {...props}/>)
    });
    
    //test label toDo display
    test('should display toDo:', () => {
        expect(component.getByText('To Do:')).toBeInTheDocument();
    });

    //test input display
    test('should display input', () =>{
        expect(component.getByRole('textbox')).toBeInTheDocument();
    });

    //test button display and able to click
    test('should invoke addTodo when clicking the add button', async () =>{
        const button = component.getByRole('button', { name: 'Add' })
    
        // console.log('button element', button)
        expect(mockAddTodo).toHaveBeenCalledTimes(0);
        // simulate user click
        await userEvent.click(button);
    
        expect(mockAddTodo).toHaveBeenCalledTimes(1);
    })
})