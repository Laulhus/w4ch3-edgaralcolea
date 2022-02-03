import { render, screen } from "@testing-library/react";
import PhoneContextProvider from "../Context/PhoneContextProvider";
import Key from "./Key";

describe("Given a Key component", () => {
  describe("When instantiated with a 4", () => {
    test("It should render a button with number 4", () => {
      const value = "4";

      render(
        <PhoneContextProvider>
          <Key value={value} />
        </PhoneContextProvider>
      );
      const element = screen.queryByRole("button");

      expect(element.textContent).toBe(value);
    });
  });
});
