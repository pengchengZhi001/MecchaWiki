'use client';
import { useEffect } from 'react';

const TIER1_COUNTRIES = ['US', 'CA', 'GB', 'FR', 'DE', 'AU'];

export default function Popunder() {
  useEffect(() => {
    const loadScript = (src: string) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.body.appendChild(script);
    };

    const fetchCountry = async () => {
      try {
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();
        const country = data.country_code;

        if (TIER1_COUNTRIES.includes(country)) {
          loadScript('https://pl29908360.effectivecpmnetwork.com/b4/81/0f/b4810ff4487e3687e89055dbfa93af1b.js');
        }
        loadScript('https://pl29903820.effectivecpmnetwork.com/40/0c/ef/400cef333756e0813e54102a8c7c1f87.js');
      } catch {
        // 接口打不开，只加载社交栏，不弹低价弹窗
        loadScript('https://pl29903820.effectivecpmnetwork.com/40/0c/ef/400cef333756e0813e54102a8c7c1f87.js');
      }
    };

    fetchCountry();
  }, []);

  return null;
}