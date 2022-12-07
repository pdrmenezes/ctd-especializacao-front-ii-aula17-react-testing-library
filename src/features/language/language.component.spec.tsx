import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import LanguageComponent from "./language.component";
import { LanguageProvider } from "./language.context";

describe("LanguageComponent", () => {
  describe("when using the default language", () => {
    it("renders all buttons with english as active language correctly", () => {
      render(
        <LanguageProvider>
          <LanguageComponent />
        </LanguageProvider>
      );

      const spanishButton = screen.queryByText("Spanish");
      const englishButton = screen.queryByText("English");
      const portugueseButton = screen.queryByText("Portuguese");

      expect(spanishButton).toBeInTheDocument();
      expect(englishButton).toBeInTheDocument();
      expect(portugueseButton).toBeInTheDocument();
    });
    it("snapshots the correct render", () => {
      const { container } = render(
        <LanguageProvider>
          <LanguageComponent />
        </LanguageProvider>
      );

      expect(container).toMatchSnapshot();
    });
  });
  describe("when spanish is the active language", () => {
    it("renders all buttons with spanish as the active language", () => {
      const { container } = render(
        <LanguageProvider>
          <LanguageComponent />
        </LanguageProvider>
      );

      userEvent.click(screen.getByText("Spanish"));
      expect(container).toMatchSnapshot();
    });
  });
  describe("when portuguese is the active language", () => {
    it("renders all buttons with portuguese as the active language", () => {
      const { container } = render(
        <LanguageProvider>
          <LanguageComponent />
        </LanguageProvider>
      );

      userEvent.click(screen.getByText("Portuguese"));
      expect(container).toMatchSnapshot();
    });
  });
});
