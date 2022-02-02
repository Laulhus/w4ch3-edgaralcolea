import { render, screen } from "@testing-library/react";
import Info from "./Info";

describe("Given an Info component", () => {
  describe("When instantiated", () => {
    test('It should render a span with the text"Calling..."', () => {
      const text = "Calling...";

      render(<Info className={""} isCalling={false} />);
      const foundText = screen.queryByText(text);

      expect(foundText.textContent).toBe(text);
    });
  });

  describe("Given an Info component", () => {
    describe("When instantiated wit callStatus off", () => {
      test("It should'nt render any text", () => {
        const text = "Calling...";

        render(<Info callStatus={"off"} />);

        const foundText = screen.getByText(text);

        expect(foundText).not.toBeVisible();
      });
    });
  });
});
