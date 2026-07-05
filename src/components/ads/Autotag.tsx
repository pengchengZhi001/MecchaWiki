import Script from "next/script";

const ZONE_ID = "uzaeciqxmo";

export default function Autotag() {
  return (
    <>
      <Script
        id="aclib"
        src="https://acscdn.com/script/aclib.js"
        strategy="afterInteractive"
      />
      <Script id="aclib-autotag" strategy="afterInteractive">
        {`aclib.runAutoTag({ zoneId: '${ZONE_ID}' });`}
      </Script>
    </>
  );
}
