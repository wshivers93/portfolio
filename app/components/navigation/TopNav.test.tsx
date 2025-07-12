import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TopNav } from './TopNav';

describe("TopNav component", () => {
	it("renders component with title", async () => {
		render(<TopNav />);

		const logo = await screen.findByText("LOGO PLACEHOLDER");

		expect(logo).toBeDefined();
	});
});
