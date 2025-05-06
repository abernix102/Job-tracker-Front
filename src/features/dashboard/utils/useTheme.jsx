import { useEffect } from "react";
import { useState } from "react";

const THEMES = { LIGHT: "light", DARK: "dark", SYSTEM: "system" };

export const useTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || THEMES.SYSTEM
  );
  const root = document.documentElement;
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  //Esto crea un objeto MediaQueryList que representa si el navegador prefiere el modo oscuro.
   // Aplicar clase al montar y cuando cambie `theme` o la preferencia del SO
   useEffect(() => {
    const apply = () => {
      if (theme === THEMES.DARK || (theme === THEMES.SYSTEM && mediaQuery.matches)) {
        //La propiedad .matches es un booleano que indica si la media query coincide actualmente con el entorno del usuario.
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    };

    apply();

    //reacciona o cambios SO
    if (theme === THEMES.SYSTEM) {
      mediaQuery.addEventListener("change", apply);
      return () => mediaQuery.removeEventListener("change", apply);
    }
  }, [theme, mediaQuery]);


  useEffect(()=> {
    if(theme === THEMES.SYSTEM){
        localStorage.removeItem("theme");
    }else {
        localStorage.setItem("theme", theme);
      }
  },[theme])
  return {theme, setTheme}
};
