import { Section, Container } from "@/components/craft";
import { SiGithub } from "@icons-pack/react-simple-icons";
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
          <p className="text-muted-foreground flex flex-col gap-2 items-center md:flex-row">
            <a href="https://github.com/Arro38">
              <SiGithub className="fill-current h-full w-full" />
            </a>
            <a href="https://coding974.com">Coding974.com</a>© 2024-present
          </p>
        </Container>
      </Section>
    </footer>
  );
}
