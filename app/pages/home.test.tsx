import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from "@testing-library/react";
import { Home } from "./home";
import { axe } from "vitest-axe";

describe('Home page', () => {
  it('renders', async () => {
    render(<Home />);

    const title = await screen.findByText("Hi, my name is Will");

    expect(title).toBeDefined();
  });
  it('is accessible', async () => {
    const { container } = render(<Home />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
