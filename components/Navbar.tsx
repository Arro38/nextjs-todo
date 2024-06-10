import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import { SiGithub } from "@icons-pack/react-simple-icons";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex justify-between w-full flex-row p-4">
      <Button variant="link" asChild className="text-primary h-8 w-8 p-0">
        <a href="https://github.com/Arro38/">
          <SiGithub className="fill-current h-full w-full" />
        </a>
      </Button>
      <Button variant="link" asChild className="text-primary h-16 w-16">
        <Link href="https://workerz.tech">Workerz.tech</Link>
      </Button>
      <ThemeToggle />
    </header>
  );
}
