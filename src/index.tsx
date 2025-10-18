import React from "react";
import { createRoot } from "react-dom/client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import App from "./App";

import { AuthProvider } from "./context/AuthContext";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

const queryKeyTest = "TEST_WORKS";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 2,
    },
  },
});

queryClient.invalidateQueries([queryKeyTest]);

const RenderDevTool = () => {
  if (import.meta.env.NODE_ENV === "development") {
    return <ReactQueryDevtools initialIsOpen={true} />;
  }
  return null;
};

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <App />
      </AuthProvider>

      <RenderDevTool />
    </QueryClientProvider>
  </React.StrictMode>,
);
