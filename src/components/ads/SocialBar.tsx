import Script from "next/script";

const SCRIPT_SRC =
  "https://pl29903820.effectivecpmnetwork.com/40/0c/ef/400cef333756e0813e54102a8c7c1f87.js";

/** Site-wide bottom social bar — injected in initial HTML via beforeInteractive */
export default function SocialBar() {
  return (
    <Script
      id="meccha-social-bar-script"
      src={SCRIPT_SRC}
      strategy="beforeInteractive"
      data-cfasync="false"
    />
  );
}
