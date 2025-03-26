import {describe, test, expect, vi} from 'vitest'
import {render, screen} from "@testing-library/react";
import Todo from "../Todos/Todo.jsx";

describe("TodoView", () => {
  test("renders correctly", async () => {
    const todoMock = {
        _id: '67e3f9226121e0e262d8576b',
        text: 'This is a todo mock.',
        done: false
      };
    const onClickDelete = vi.fn();
    const onClickComplete = vi.fn();

    render(
      <Todo
        todo={todoMock}
        onClickDelete={onClickDelete}
        onClickComplete={onClickComplete}
      />
    )

    await expect(await screen.getByText("This is a todo mock.")).toBeDefined()
  })
})