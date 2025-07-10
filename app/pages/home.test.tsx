import { describe, it } from 'vitest';
import { render, waitFor, screen } from "@testing-library/react";
import { Home } from "./home";

describe('Home page', () => {
  it('renders', async () => {
    render(<Home />);

    await waitFor(() => screen.findByText("TEST"));
  });
});
