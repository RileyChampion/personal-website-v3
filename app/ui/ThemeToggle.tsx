"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const emptySubscribe = () => () => {};

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  if (!mounted) {
    return <button className="bg-transparent text-primary p-2 rounded-md border-2 border-transparent hover:border-border hover:bg-raised cursor-pointer transition-colors" aria-label="Toggle theme" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      className="bg-transparent text-primary p-2 rounded-md border-2 border-transparent hover:border-border hover:bg-raised cursor-pointer transition-colors"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {isDark ? <Moon /> : <Sun />}
    </button>
  );
}
