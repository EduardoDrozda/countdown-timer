import { render, screen } from "@testing-library/react";
import { CountdownProvider } from ".";
import { MockTheme } from "../../utils/tests/mocktheme";

describe("countdownProvider.test.tsx", () => {
  it("should render context correctly", () => {
    render(
      <MockTheme>
        <CountdownProvider>
          <div>Mock children</div>
        </CountdownProvider>
      </MockTheme>
    );

    expect(screen.getByText(/Mock children/i)).toBeTruthy();
  });
});
