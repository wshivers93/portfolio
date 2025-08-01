import type { Route } from "./+types/home";

import React from 'react';
import { describe, expect, it, vi } from "vitest";
import HomeRoute, { meta } from "./home";
import { render, screen } from "@testing-library/react";
import { axe } from "vitest-axe";

describe("Home route", () => {
  describe("Home component", () => {
    const mockHomeTestId = "mock-home-component";
    vi.mock("../pages/home", () => ({
      Home: () => <div data-testid="mock-home-component"></div>,
    }));

    it("Renders home component", async () => {
      render(<HomeRoute />);

      const component = await screen.findByTestId(mockHomeTestId);

      expect(component).toBeDefined();
    });

    it("is accessible", async () => {
      const { container } = render(<HomeRoute />);

      expect(await axe(container)).toHaveNoViolations();
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
