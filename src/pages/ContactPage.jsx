import React from "react";
import { QueryProvider } from "../lib/query";
import ContactSection from "../sections/ContactSection";

// Default: safe page that includes the QueryClientProvider wrapper
export default function ContactPage() {
  return (
    <QueryProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <ContactSection />
      </div>
    </QueryProvider>
  );
}

// If your app already provides a global QueryClientProvider, you can
// alternatively render <ContactSection /> directly in your route.
