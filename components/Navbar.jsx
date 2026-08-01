"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const shouldUseDarkMode = savedTheme === "dark";

    setIsDark(shouldUseDarkMode);
    document.documentElement.classList.toggle("dark", shouldUseDarkMode);
  }, []);

  const toggleTheme = () => {
    const nextThemeIsDark = !isDark;

    setIsDark(nextThemeIsDark);
    document.documentElement.classList.toggle("dark", nextThemeIsDark);
    localStorage.setItem("theme", nextThemeIsDark ? "dark" : "light");
  };

  return (
    <div className="flex text-sd items-center justify-between md:justify-end md:gap-3">
      <Link href="/">
        <span>home</span>
      </Link>
      <div className="w-1 mt-1 h-1 rounded-full bg-gray-600 opacity-50"></div>
      <Link href="/crafts">
        <span>work✨</span>
      </Link>
      <div className="w-1 mt-1 h-1 rounded-full bg-gray-600 opacity-50"></div>
      <Link href="/#socials">
        <span>contact</span>
      </Link>
      <div className="w-1 mt-1 h-1 rounded-full bg-gray-600 opacity-50"></div>
      <Link
        href="https://drive.google.com/file/d/15AW7Y0Q20TlhDihmPEPgXH1yn2Y3Ki00/view?usp=sharing"
        target="_blank"
      >
        <span>resume</span>
      </Link>
      <button
        type="button"
        onClick={toggleTheme}
        className="ml-1 flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-800"
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        title={`Switch to ${isDark ? "light" : "dark"} mode`}
      >
        {isDark ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
      </button>
    </div>
  );
};

export default Navbar;
