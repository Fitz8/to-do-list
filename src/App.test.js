import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("Testing that the main heading for the application renders", () => {
  render(<App />);
  let header = screen.getByText("To-Do List");
  expect(header).toBeInTheDocument();
});

describe("Testing that the form renders correctly", () => {
    
  test("Rendering the subheader", () => {
    render(<App />);
    let subheader = screen.getByText("Create a task");
    expect(subheader).toBeInTheDocument();
  });

  test("Rendering the create button", () => {
    render(<App />);
    let button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Rendering the input area for the form submission", () => {
    render(<App />);
    let textInput = screen.getByRole("textbox");
    expect(textInput).toBeInTheDocument();
  });
});

describe("Testing that the form renders correctly", () => {

  test("Checking that the checkbox is rendered after a task is created", () => {
    render(<App />);
    let button = screen.getByRole("button");
    fireEvent.click(button);
    let checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
  });

  test("Checking that 2 buttons are now rendered on the screen after a task has been created", () => {
    render(<App />)
    let button = screen.getByRole("button");
    fireEvent.click(button);
    let buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(2);
  });

  test("Checking that 2 buttons are now rendered on the screen after a task has been created", () => {
    render(<App />)
    let formInput = screen.getByRole("textbox");
    fireEvent.change(formInput, { target: { value: "This is a test task" }});
    let button = screen.getByRole("button");
    fireEvent.click(button);
    let task = screen.getByText("This is a test task");
    expect(task).toBeInTheDocument();

    //This text is definitely found in the task, as setting expect to ".not.toBeInTheDocument" gives the failed error: 
    //expected document not to contain element, found <p style="color: rgb(238, 238, 238);">This is a test task</p> instead
  });
});
