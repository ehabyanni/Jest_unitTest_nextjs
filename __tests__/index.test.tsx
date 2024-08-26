import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe } from "node:test";
import Home from "../app/page";

describe("Calculator", () => {
  it("renders a calculator", () => {
    render(<Home />);
    // check if all components are rendered
    expect(screen.getByTestId("result")).toBeInTheDocument();
    expect(screen.getByTestId("num1")).toBeInTheDocument();
    expect(screen.getByTestId("num2")).toBeInTheDocument();
    expect(screen.getByTestId("add")).toBeInTheDocument();
    expect(screen.getByTestId("subtract")).toBeInTheDocument();
    expect(screen.getByTestId("multiply")).toBeInTheDocument();
    expect(screen.getByTestId("divide")).toBeInTheDocument();
  });

  it("adds numbers", async () => {
    render(<Home />);
    // check if adds properly
    const num1input = screen.getByTestId("num1");
    const num2input = screen.getByTestId("num2");
    const addButton = screen.getByTestId("add");
    const resultArea = screen.getByTestId("result");

    fireEvent.change(num1input, { target: { value: 5 } });
    fireEvent.change(num2input, { target: { value: 8 } });

    addButton.click();
    // using async-await because the expect function must waiting to read 
    // the state change and get the right value
    await waitFor(() => expect(resultArea).toHaveTextContent("13"));
  });

  it("subtracts numbers", async () => {
    render(<Home />);
    // check if subtracts properly
    const num1input = screen.getByTestId("num1");
    const num2input = screen.getByTestId("num2");
    const subtractButton = screen.getByTestId("subtract");
    const resultArea = screen.getByTestId("result");

    fireEvent.change(num1input, { target: { value: 8 } });
    fireEvent.change(num2input, { target: { value: 5 } });

    subtractButton.click();

    await waitFor(() => expect(resultArea).toHaveTextContent("3"));
  });

  it("multiplies numbers", async () => {
    render(<Home />);
    // check if multiplies properly
    const num1input = screen.getByTestId("num1");
    const num2input = screen.getByTestId("num2");
    const multiplyButton = screen.getByTestId("multiply");
    const resultArea = screen.getByTestId("result");

    fireEvent.change(num1input, { target: { value: 5 } });
    fireEvent.change(num2input, { target: { value: 8 } });

    multiplyButton.click();

    await waitFor(() => expect(resultArea).toHaveTextContent("40"));
  });

  it("divides numbers", async () => {
    render(<Home />);
    // check if divides properly
    const num1input = screen.getByTestId("num1");
    const num2input = screen.getByTestId("num2");
    const divideButton = screen.getByTestId("divide");
    const resultArea = screen.getByTestId("result");

    fireEvent.change(num1input, { target: { value: 20 } });
    fireEvent.change(num2input, { target: { value: 2 } });

    divideButton.click();

    await waitFor(() => expect(resultArea).toHaveTextContent("10"));
  });
});