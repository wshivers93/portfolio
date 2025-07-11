import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { createRoutesStub, type ErrorResponse } from 'react-router';
import { ErrorBoundary } from './root';
import { beforeEach } from 'node:test';

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
          ErrorBoundary: ErrorBoundary as any
        },
      ]);
      render(<Stub initialEntries={["/"]} />);

      await waitFor(() => screen.findByText(mockErrorMsg));
      await waitFor(() => screen.findByText("Oops!"));
    });

    it("captures 404 errors", async () => {
      const Stub = createRoutesStub([
        {
          path: "/",
          Component: Mock404Component,
          ErrorBoundary: ErrorBoundary as any,
        }
      ]);
      render(<Stub initialEntries={["/bad/route"]} />);

      await waitFor(() => screen.findByText("The requested page could not be found."));
      await waitFor(() => screen.findByText("404"));
    });
  });
});
