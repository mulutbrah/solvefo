"use client";

import { SignOut } from "@/components/sign-out";
import { ThemeSwitch } from "@/components/theme-switch";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useClerk } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export function UserMenu() {
  const { user } = useClerk();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="size-8 cursor-pointer rounded-full">
          {user?.imageUrl && (
            <Image
              src={user?.imageUrl}
              alt={user?.fullName as string}
              width={32}
              height={32}
              priority
            />
          )}
          <AvatarFallback>
            <span className="text-xs">
              {user?.fullName?.charAt(0)?.toUpperCase()}
            </span>
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="mx-4 w-[240px] shadow-none"
        sideOffset={10}
      >
        <DropdownMenuLabel>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="truncate">{user?.fullName}</span>
              <span className="truncate text-xs font-normal text-muted-foreground">
                {user?.emailAddresses.map((item) => item.emailAddress)}
              </span>
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <Link href="#">
            <DropdownMenuItem>Account</DropdownMenuItem>
          </Link>

          <Link href="#">
            <DropdownMenuItem>Pricing</DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <div className="flex flex-row items-center justify-between p-2">
          <p className="text-sm">Theme</p>
          <ThemeSwitch />
        </div>

        <DropdownMenuSeparator />

        <SignOut />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
