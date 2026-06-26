"use client";

import { useEffect } from "react";

const SCRIPT_ID = "popunder";
const SCRIPT_SRC =
  "https://pl29908360.effectivecpmnetwork.com/b4/81/0f/b4810ff4487e3687e89055dbfa93af1b.js";

export default function Popunder() {
  useEffect(() => {
    if (document.getElementById(SCRIPT_ID)) return;

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = SCRIPT_SRC;
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return null;
}
