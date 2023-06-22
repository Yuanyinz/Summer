import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import ToDoDisplay from "../client/ToDoDisplay";
import userEvent from '@testing-library/user-event';


describe('Testing ToDoDisplay', () => {
  let component;
  const mockDeleteFun = jest.fn();
  const mockClickEdit = jest.fn();
  const mockEdit = jest.fn();
  const mockSetNewItem = jest.fn();

  const props = {
    toDoList: [{id: 'test-id', value: 'Unit Test'}],
    deletefun: mockDeleteFun,
    clickEdit: mockClickEdit,
    Edit: mockEdit,
    makeEdit: false,
    setNewItem: mockSetNewItem
  }
//beforeAll 是什么
  beforeEach(() => {
    component = render(<ToDoDisplay {...props}/>)
  });


  test('Render the passed-in value as a span', () => {
    expect(component.getByText('Unit Test')).toBeInTheDocument();
  });

  test('should display two buttons', () =>{
    expect(component.getAllByRole('button').length).toBe(2);
  });

  // TODO: make sure one button is Edit the other is Delete

  test('should invoke deletefun when clicking the Delete button', async () => {
    const button = component.getByRole('button', { name: 'Delete' })

    // console.log('button element', button)
    expect(mockDeleteFun).toHaveBeenCalledTimes(0);
    // simulate user click
    await userEvent.click(button);

    expect(mockDeleteFun).toHaveBeenCalledTimes(1);
  });


  // TODO: test the edit button also invokes clickEdit
  test('should invoke clickEdit when clicking the edit button', async () => {
    const button = component.getByRole('button', { name: 'Edit' })

    // console.log('button element', button)
    expect(mockClickEdit).toHaveBeenCalledTimes(0);
    // simulate user click
    await userEvent.click(button);

    expect(mockClickEdit).toHaveBeenCalledTimes(1);
  });


  // TODO: set up component test for UserInput2
})