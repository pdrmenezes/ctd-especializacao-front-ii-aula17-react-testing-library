import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FollowingButtonComponent from "./following-button.component";

describe("FollowingButtonComponent", () => {
  describe("when the isFav prop is true", () => {
    it("renders the star-filled image", () => {
      const mockToggleFavorite = jest.fn();
      render(<FollowingButtonComponent isFav={true} onToggleFavorite={mockToggleFavorite} />);
      // screen.debug();

      expect(screen.getByAltText("is_favorite")).toBeInTheDocument();
    });
  });
  describe("when the isFav prop is false", () => {
    it("renders the star-filled image", () => {
      const mockToggleFavorite = jest.fn();
      render(<FollowingButtonComponent isFav={false} onToggleFavorite={mockToggleFavorite} />);

      expect(screen.getByAltText("is_not_favorite")).toBeInTheDocument();
    });
  });
  describe("when the button is clicked", () => {
    it("calls the callback function", () => {
      const mockToggleFavorite = jest.fn();
      render(<FollowingButtonComponent isFav={false} onToggleFavorite={mockToggleFavorite} />);

      userEvent.click(screen.getByAltText("is_not_favorite"));
      expect(mockToggleFavorite).toHaveBeenCalled();
    });
  });
});
