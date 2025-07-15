import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from "@testing-library/react";
import { Home } from "./home";

describe('Home page', () => {
  it('renders', async () => {
    render(<Home />);

    const title = await screen.findByText("HOME PAGE");

    expect(title).toBeDefined();
  });
});
