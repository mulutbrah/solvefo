"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Settings2Icon } from "lucide-react";

export function PromptInput() {
  return (
    <form>
      <div className="relative z-10 flex items-center rounded-xl border bg-background p-2 dark:bg-zinc-900">
        <div className="flex-[0_0_auto]">
          <Button
            size="icon"
            variant="link"
            className="size-10 text-muted-foreground/60 hover:text-primary"
            type="button"
          >
            <Settings2Icon className="size-5" />
          </Button>
        </div>
        <div className="flex-[1_0_0%]">
          <Input
            className="block h-10 border-none p-2 text-muted-foreground shadow-none placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-0"
            placeholder="Add your goals..."
          />
        </div>
      </div>
    </form>
  );
}
