"use client";

import { useEffect } from "react";

const SCRIPT_SRC =
  "https://pl29903820.effectivecpmnetwork.com/40/0c/ef/400cef333756e0813e54102a8c7c1f87.js";
const SCRIPT_ID = "meccha-social-bar-script";

function injectSocialBarScript() {
  if (document.getElementById(SCRIPT_ID)) return;

  const script = document.createElement("script");
  script.id = SCRIPT_ID;
  script.type = "text/javascript";
  script.src = SCRIPT_SRC;
  script.setAttribute("data-cfasync", "false");
  document.body.appendChild(script);
}

export default function SocialBar() {
  useEffect(() => {
    if (document.readyState === "complete") {
      injectSocialBarScript();
      return;
    }

    window.addEventListener("load", injectSocialBarScript, { once: true });
    return () => window.removeEventListener("load", injectSocialBarScript);
  }, []);

  return null;
}
