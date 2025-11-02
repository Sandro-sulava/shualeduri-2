import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create one QueryClient for the whole app
export const queryClient = new QueryClient();

export function QueryProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
