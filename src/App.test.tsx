import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App.test.tsx", () => {
  it("should render default router when component is mount", () => {
    render(<App />);

    expect(screen.getByText(/Contador/i)).toBeTruthy();
  });
});
