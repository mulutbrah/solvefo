"use client";

import { Icons } from "@/components/icons";
import { MainMenu } from "@/components/main-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { UserMenu } from "@/components/user-menu";
import Link from "next/link";
import { Suspense } from "react";

export function Sidebar() {
  return (
    <aside className="sticky top-0 z-10 hidden h-screen flex-shrink-0 flex-col items-center justify-between px-4 py-8 md:flex">
      <div className="flex flex-col items-center justify-center space-y-6">
        <div className="flex items-center">
          <Link
            href="/"
            className="relative inline-flex h-6 w-full items-center justify-start"
          >
            <Icons.logo className="size-6" />
          </Link>
        </div>
        <MainMenu />
      </div>

      <Suspense fallback={<Skeleton className="size-8 rounded-full" />}>
        <UserMenu />
      </Suspense>
    </aside>
  );
}
