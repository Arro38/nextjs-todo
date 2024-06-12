import { Section, Container } from "@/components/craft";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="not-prose border-t ">
      <Section>
        <Container className="grid gap-6">
          <div className="flex flex-col md:flex-row gap-4 underline underline-offset-4 text-sm text-muted-foreground">
            <Link href="/#">Privacy Policy</Link>
            <Link href="/#">Terms of Service</Link>
            <Link href="/#">Cookie Policy</Link>
          </div>
          <p className="text-muted-foreground">
            © <a href="https://github.com/Arro38">Etienne VAYTILINGOM</a>. All
            rights reserved. 2024-present.
          </p>
        </Container>
      </Section>
    </footer>
  );
}
