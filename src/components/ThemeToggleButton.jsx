import { useEffect, useState } from "react";

const ThemeToggleButton = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setTheme(saved);
    document.body.classList.add(saved);
  }, []);

  const toggleTheme = () => {
    const current = document.body.classList.contains("dark")
      ? "dark"
      : "light";
    const next = current === "dark" ? "light" : "dark";
    setTheme(next);
    document.body.classList.remove(current);
    document.body.classList.add(next);
    localStorage.setItem("theme", next);
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-copy-primary font-bold bg-transparent border-none cursor-pointer"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeToggleButton;