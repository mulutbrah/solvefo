"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { sidebarConfig } from "@/config/nav";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MainMenu() {
  const pathname = usePathname();
  const part = pathname?.split("/")[1];

  return (
    <nav className="flex flex-col gap-2">
      {sidebarConfig.map((item) => {
        const isActive =
          (pathname === "/" && item.path === "/") ||
          (pathname !== "/" && item.path.startsWith(`/${part}`));

        return (
          <TooltipProvider delayDuration={70} key={item.path}>
            <Link prefetch href={item.path}>
              <Tooltip>
                <TooltipTrigger className="w-full">
                  <div
                    className={cn(
                      "relative flex h-[45px] items-center rounded-full border border-transparent md:w-[45px] md:justify-center",
                      isActive
                        ? "border-red-200 bg-red-50 text-primary text-red-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-primary"
                        : "text-muted-foreground hover:border-zinc-200 hover:bg-zinc-50 dark:hover:border-zinc-700 dark:hover:bg-zinc-800",
                    )}
                  >
                    <div
                      className={cn(
                        "flex items-center space-x-3 p-0 pl-2 md:pl-0",
                      )}
                    >
                      {item.icon()}
                      <span className="flex md:hidden">{item.name}</span>
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="left"
                  className="hidden px-3 py-1.5 text-xs md:flex"
                  sideOffset={10}
                >
                  {item.name}
                </TooltipContent>
              </Tooltip>
            </Link>
          </TooltipProvider>
        );
      })}
    </nav>
  );
}
