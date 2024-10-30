import { BotIcon, CompassIcon, HomeIcon, SettingsIcon } from "lucide-react";

export type SidebarConfig = typeof sidebarConfig;

export const sidebarConfig = [
  {
    path: "/",
    name: "Home",
    icon: () => <HomeIcon size={20} />,
  },
  {
    path: "/explore",
    name: "Explore",
    icon: () => <CompassIcon size={20} />,
  },
  {
    path: "/bot",
    name: "Bot",
    icon: () => <BotIcon size={20} />,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: () => <SettingsIcon size={20} />,
  },
];
