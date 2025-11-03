import { QueryProvider } from "../lib/query";
import ContactSection from "../sections/ContactSection";

export default function ContactPage() {
  return (
    <QueryProvider>
      <div>
        <ContactSection />
      </div>
    </QueryProvider>
  );
}
