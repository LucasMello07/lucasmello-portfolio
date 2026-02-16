"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const ThemeSwitch = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) => {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    const dark = stored ? stored === "dark" : true;
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.classList.toggle("light", !dark);
  }, []);

  const toggle = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;
      localStorage.setItem("theme", next ? "dark" : "light");
      document.documentElement.classList.toggle("dark", next);
      document.documentElement.classList.toggle("light", !next);
      return next;
    });
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      className={cn(
        "fixed top-4 right-4 z-[60] p-2.5 rounded-full bg-secondary border border-border text-foreground hover:text-primary transition-all duration-200",
        className
      )}
      aria-label="Toggle theme"
      {...props}
    >
      {isDark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
    </button>
  );
};

export default ThemeSwitch;
