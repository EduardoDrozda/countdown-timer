import { render, screen } from "@testing-library/react";
import { Button } from ".";
import { MockTheme } from "../../utils/tests/mocktheme";

describe("button.test.tsx", () => {
  it("should render component correctly", () => {
    const id = "mock_id";
    render(
      <MockTheme>
        <Button id={id} type="button" color="primary" label="mock button" />
      </MockTheme>
    );

    const buttonEl = screen.getByTestId(id);
    expect(buttonEl).toBeInTheDocument();
  });
});
