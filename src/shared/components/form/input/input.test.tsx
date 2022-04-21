import { render, screen } from "@testing-library/react";
import { Input } from ".";
import { MockTheme } from "../../../utils/tests/mocktheme";

describe("input.test.tsx", () => {
  it("should render component correctly", () => {
    const id = "mock_id";
    render(
      <MockTheme>
        <Input
          id={id}
          defaultValue="mock value"
          type="text"
          label="mock input"
        />
      </MockTheme>
    );

    const inputEl = screen.getByTestId(id);
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");
  });
});
