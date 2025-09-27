import { Sun, Moon } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "../lib/utils"

// button toggle theme
export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // use effect buat nginget kalo theme dark ato light
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark") {
            setIsDarkMode(true)
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false)
        }
    }, []);

    // function toggle theme
    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            // local storage buat nyimpen data theme dark ato light
            localStorage.setItem("theme", "light");
            setIsDarkMode(false)
        } else {
            document.documentElement.classList.add("dark");
            // local storage buat nyimpen data theme dark ato light
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true)
        }
    }

    return (
      <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outlin-hidden"
      )}
      >

        {isDarkMode ? (
          <Sun className="h-6 w-6 stroke-yellow-300" />
        ) : (
          <Moon className="h-6 w-6 stroke-blue-900" />
        )}
      </button>
    );

}