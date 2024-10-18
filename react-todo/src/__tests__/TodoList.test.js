// src/__tests__/TodoList.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TodoList from '../TodoList'; // Correct import of the TodoList component

describe('TodoList Component', () => {
  test('renders correctly with initial todos', () => {
    render(<TodoList />);
    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems.length).toBe(3);
  });

  test('allows adding a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const button = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);

    const newTodoItem = screen.getByText('New Todo');
    expect(newTodoItem).toBeInTheDocument();
  });

  test('allows toggling a todo item', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');

    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: none');
  });

  test('allows deleting a todo item', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    const deleteButton = todoItem.querySelector('button');

    fireEvent.click(deleteButton);

    expect(todoItem).not.toBeInTheDocument();
  });
});
