"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

type Theme = "dark" | "system" | "light";

type Props = {
  currentTheme?: Theme;
};

const ThemeIcon = ({ currentTheme }: Props) => {
  switch (currentTheme) {
    case "dark":
      return <Moon size={12} />;
    case "system":
      return <Monitor size={12} />;
    default:
      return <Sun size={12} />;
  }
};

export const ThemeSwitch = () => {
  const { theme, setTheme, themes } = useTheme();

  return (
    <div className="relative flex items-center">
      <Select
        defaultValue={theme}
        onValueChange={(value: Theme) => setTheme(value)}
      >
        <SelectTrigger className="h-[32px] w-full rounded-sm bg-transparent text-xs capitalize shadow-none outline-none">
          <SelectValue placeholder="Select theme" />
        </SelectTrigger>
        <SelectContent className="shadow-none">
          <SelectGroup>
            {themes.map((theme) => (
              <SelectItem key={theme} value={theme} className="capitalize">
                <div className="flex items-center space-x-1">
                  <ThemeIcon currentTheme={theme as Theme} />
                  <span>{theme}</span>
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
