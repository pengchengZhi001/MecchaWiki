"use client";

import { useEffect } from "react";

const SCRIPT_ID = "popunder-adsterra";
const SCRIPT_SRC =
  "https://pl29908360.effectivecpmnetwork.com/b4/81/0f/b4810ff4487e3687e89055dbfa93af1b.js";

export default function Popunder() {
  useEffect(() => {
    // 防止重复加载
    if (document.getElementById(SCRIPT_ID)) return;

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = SCRIPT_SRC;
    // 移除 async，保证弹窗正常唤起，不被浏览器拦截
    document.body.appendChild(script);

    return () => {
      // 可选：组件卸载时清理脚本
      const el = document.getElementById(SCRIPT_ID);
      if (el) el.remove();
    };
  }, []);

  return null;
}