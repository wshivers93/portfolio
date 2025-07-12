import { describe, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { TopNav } from './TopNav';

describe("TopNav component", () => {
	it("renders component with title", async () => {
		render(<TopNav />);

		await waitFor(() => screen.findByText("LOGO PLACEHOLDER"));
	});
});
