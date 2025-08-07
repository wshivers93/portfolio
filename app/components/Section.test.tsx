import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import { axe } from "vitest-axe";
import { Section } from './Section';

describe("Section component", () => {
  it("renders header and children props", async () => {
    render(
      <Section
        header="Mock header"
      >
        <p>Mock content</p>
      </Section>
    );

    const header = await screen.findByText("Mock header");
    const content = await screen.findByRole("paragraph");

    expect(header).toBeDefined();
    expect(header.nodeName).toEqual("HEADER");
    expect(content).toBeDefined();
    expect(content.textContent).toStrictEqual("Mock content");
  });

  it("renders complex header props", async () => {
    render(
      <Section
        header={
          <>
            <h2>Mock h2</h2>
            <h3>Mock h3</h3>
            <p>Mock paragraph</p>
          </>
        }
      >
        <p>Mock content</p>
      </Section>
    );

    const header1 = await screen.findByText("Mock h2");
    const header2 = await screen.findByText("Mock h3");
    const headerP = await screen.findByText("Mock paragraph");

    expect(header1).toBeDefined();
    expect(header2).toBeDefined();
    expect(headerP).toBeDefined();
    expect(header1.nodeName).toEqual("H2");
    expect(header2.nodeName).toEqual("H3");
    expect(headerP.nodeName).toEqual("P");

  });

  it("is accessible", async () => {
    const { container } = render(
      <Section
        header="Mock header"
      >
        <p>Mock content</p>
      </Section>
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
