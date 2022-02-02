import { render, screen } from "@testing-library/react";
import Key from "./Key";

describe("Given a Key component", () => {
  describe("When instantiated with a 4", () => {
    test("It should render a button with number 4", () => {
      const value = "4";

      render(<Key value={value} />);
      const element = screen.queryByRole("button");

      expect(element.textContent).toBe(value);
    });
  });
});
