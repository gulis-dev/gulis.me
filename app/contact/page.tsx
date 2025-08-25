import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <h1 className="text-2xl font-semibold">Contact</h1>
      <ul className="mt-6 space-y-3 text-sm">
        <li className="flex items-center gap-2">
          <Mail size={16} />
          <a href="mailto:andrukiewicz.oskar@gmail.com">andrukiewicz.oskar@gmail.com</a>
        </li>
        <li className="flex items-center gap-2">
          <Github size={16} />
          <a href="https://github.com/gulis-dev">github.com/gulis-dev</a>
        </li>
        <li className="flex items-center gap-2">
          <Linkedin size={16} />
          <a href="https://www.linkedin.com/in/oskar-andrukiewicz">linkedin.com/in/oskar-andrukiewicz</a>
        </li>
      </ul>
    </>
  );
}