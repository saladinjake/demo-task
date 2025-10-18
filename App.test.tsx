import React from "react";
import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

it("renders the heading with the correct class", () => {
  const queryClient = createTestQueryClient();
  const { getByText } = render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>,
  );
  const headingElement = getByText("Available Balance");
  expect(headingElement).toBeInTheDocument();
});
