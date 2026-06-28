import { useEffect } from "react";

const STYLESHEET_ID = "font-awesome-styles";

export const FontAwesomeStyles = () => {
  useEffect(() => {
    const existingStylesheet = document.getElementById(STYLESHEET_ID);

    if (existingStylesheet) return undefined;

    const stylesheet = document.createElement("link");
    stylesheet.id = STYLESHEET_ID;
    stylesheet.rel = "stylesheet";
    stylesheet.href = `${process.env.PUBLIC_URL}/fontawesome/css/all.min.css`;
    document.head.appendChild(stylesheet);

    return () => stylesheet.remove();
  }, []);

  return null;
};
