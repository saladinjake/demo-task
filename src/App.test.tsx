import React from "react";
import { it, expect } from "vitest";
import { render } from "@testing-library/react";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

it("renders the heading with the correct title", () => {
  const queryClient = createTestQueryClient();
  const { getByText } = render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>,
  );
  const headingElement = getByText("Available Balance");
  expect(headingElement).toBeInTheDocument();
});
