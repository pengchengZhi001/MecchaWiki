"use client";

import { useEffect } from "react";

const SCRIPT_ID = "social-bar";
const SCRIPT_SRC =
  "https://pl29903820.effectivecpmnetwork.com/40/0c/ef/400cef333756e0813e54102a8c7c1f87.js";

export default function SocialBar() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = SCRIPT_SRC;
      script.async = true;
      document.head.appendChild(script);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
