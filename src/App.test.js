import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Welcome", () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
});

// tester que l'App contient bien "Learn React"
// https://testing-library.com/docs/react-testing-library/api#queries

// Tester que nous avons bien 3 éléments button
//https://testing-library.com/docs/queries/about

// Tester que le titre du bouton est bien click me !

// Tester qu'au click d'un bouton le text du header change
// https://testing-library.com/docs/dom-testing-library/api-events
