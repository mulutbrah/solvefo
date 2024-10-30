"use client";

import { PromptInput } from "@/components/prompt-input";

export function Header() {
  return (
    <header className="sticky top-0 z-[5]">
      <div className="mx-auto hidden max-w-screen-2xl grow items-center justify-center p-6 md:flex">
        <div className="w-full grow">
          <PromptInput />
        </div>
      </div>
    </header>
  );
}
