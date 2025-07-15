import React from 'react';
import { Home } from "../pages/home";

export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function HomeRoute() {
  return <Home />;
}
