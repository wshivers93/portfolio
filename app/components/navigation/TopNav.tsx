import React from 'react';

export function TopNav() {
	return (
		<nav className="flex flex-row justify-between p-8 border-b">
			<h1>LOGO PLACEHOLDER</h1>
			<div className="flex flex-row gap-4">
				<a href="https://github.com/wshivers93">
					<i className="fa-brands fa-github fa-xl"></i>
				</a>
				<a href="https://www.linkedin.com/in/william-shivers-0a133461">
					<i className="fa-brands fa-linkedin fa-xl"></i>
				</a>
			</div>
		</nav>
	);
};
