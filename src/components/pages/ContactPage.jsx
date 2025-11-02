import { QueryProvider } from "../lib/query";
import ContactSection from "../sections/ContactSection";

export default function ContactPage() {
  return (
    <QueryProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <ContactSection />
      </div>
    </QueryProvider>
  );
}
