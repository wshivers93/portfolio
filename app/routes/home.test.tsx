import type { Route } from "./+types/home";

import { describe, expect, it, vi } from "vitest";
import HomeRoute, { meta } from "./home";
import { render, waitFor, screen } from "@testing-library/react";

describe("Home route", () => {
  describe("Home component", () => {
    const mockHomeTestId = "mock-home-component";
    vi.mock("../pages/home", () => ({
      Home: () => <div data-testid="mock-home-component"></div>,
    }));

    it("Renders home component", async () => {
      render(<HomeRoute />);

      await waitFor(() => screen.findByTestId(mockHomeTestId));
    });
  });

  describe("Meta export", () => {
    it("returns array of metadata", async () => {
      const actualResult = meta({} as Route.MetaArgs);

      expect(actualResult).toBeDefined();
      expect(actualResult).toEqual(expect.any(Array));
    });
  });
});
