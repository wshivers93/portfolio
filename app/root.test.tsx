import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import { createRoutesStub } from 'react-router';
import { ErrorBoundary } from './root';
import { axe } from "vitest-axe";

type MockError = {
  error: unknown;
};

describe("App root", () => {
  describe("Error Boundary", () => {
    const mockErrorMsg = "mock error";
    const MockComponent = () => {
      throw new Error(mockErrorMsg);
    };
    const Mock404Component = () => {
      return (<div>Mock404Component</div>);
    };

    beforeEach(() => {
      vi.resetAllMocks();
      vi.restoreAllMocks();
    });

    it("captures errors", async () => {
      const Stub = createRoutesStub([
        {
          path: "/",
          Component: MockComponent,
          ErrorBoundary: ({ error }: MockError) => (<ErrorBoundary params="" error={error} />)
        },
      ]);
      render(
        <Stub initialEntries={["/"]} />
      );

      const errorMsg = await screen.findByText(mockErrorMsg);
      const errorHeader = await screen.findByText("Oops!");

      expect(errorMsg).toBeDefined();
      expect(errorHeader).toBeDefined();
    });

    it("captures 404 errors", async () => {
      const Stub = createRoutesStub([
        {
          path: "/",
          Component: Mock404Component,
          ErrorBoundary: ({ error }: MockError) => (<ErrorBoundary params="" error={error} />)
        }
      ]);
      render(<Stub initialEntries={["/bad/route"]} />);

      const errorMsg = await screen.findByText("The requested page could not be found.");
      const errorStatus = await screen.findByText("404");

      expect(errorMsg).toBeDefined();
      expect(errorStatus).toBeDefined();
    });

    it("is accessible", async () => {
      const Stub = createRoutesStub([
        {
          path: "/",
          Component: Mock404Component,
          ErrorBoundary: ({ error }: MockError) => (<ErrorBoundary params="" error={error} />)
        }
      ]);
      const { container } = render(<Stub initialEntries={["/bad/route"]} />);

      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
