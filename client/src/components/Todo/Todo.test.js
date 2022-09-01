import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { createRoot } from 'react-dom/client';
import { act, Simulate } from "react-dom/test-utils";
import axios from 'axios';
import sampleData from './sampleData.js';

import TodoItem from './TodoItem.jsx';

global.IS_REACT_ACT_ENVIRONMENT = true;

jest.mock('axios');
axios.post.mockResolvedValue('posted new answer');
axios.mockResolvedValue('uploaded new image');
let clickEvent = jest.fn();
let handleStop = jest.fn();

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});
afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(document);
  container.remove();
  container = null;
});

describe('Unit tests on TodoItem', () => {
  beforeEach(async () => {
    await act(async () => {
      let todo = sampleData[0];
      createRoot(container).render(
        <TodoItem
          todo_id={todo.todo_id} todo_body={todo.todo_body} 
          start_date={todo.start_date} end_date={todo.end_date} category={todo.category}
          onClick={(event) => clickEvent(event)}
        />
        );
    });
  });

  it("should display a to-do item in a grid container", () => {
    expect(container.querySelectorAll('#todoItem').length).toBe(1);

  });

})