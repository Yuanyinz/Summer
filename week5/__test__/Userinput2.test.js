import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import UserInput2 from "../client/Userinput2";
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
    test('',() =>{

    })

    //test input display

    //test button display

    //test button able to click
})