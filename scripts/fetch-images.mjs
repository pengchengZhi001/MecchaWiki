const STEAM_SS = [
  "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4704690/6c0a47cc2fba1b160901d1553637a764198bdc98/ss_6c0a47cc2fba1b160901d1553637a764198bdc98.1920x1080.jpg?t=1781108224",
  "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4704690/0383a711ed93bf8edd848df4b63b331fc44f3ad5/ss_0383a711ed93bf8edd848df4b63b331fc44f3ad5.1920x1080.jpg?t=1781108224",
  "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4704690/51b0a906d1767b1b5abde623350dec64c6877c93/ss_51b0a906d1767b1b5abde623350dec64c6877c93.1920x1080.jpg?t=1781108224",
  "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4704690/0a8a562016b13a349349e685f7a4d5a6cbccef3e/ss_0a8a562016b13a349349e685f7a4d5a6cbccef3e.1920x1080.jpg?t=1781108224",
  "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4704690/2764a4a42c24a88d0bbb9b67e5c2bde979a24ac9/ss_2764a4a42c24a88d0bbb9b67e5c2bde979a24ac9.1920x1080.jpg?t=1781108224",
  "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4704690/c0c3ab9f5f2b41e86606a1c790fef432fe2d65cf/ss_c0c3ab9f5f2b41e86606a1c790fef432fe2d65cf.1920x1080.jpg?t=1781108224",
  "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4704690/25f5c021fcaf118dee1ed17d638a35c05f0eec2f/ss_25f5c021fcaf118dee1ed17d638a35c05f0eec2f.1920x1080.jpg?t=1781108224",
  "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4704690/b5a025eff8156f561590b3863ee5628353d5d41c/ss_b5a025eff8156f561590b3863ee5628353d5d41c.1920x1080.jpg?t=1781108224",
  "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4704690/8c63f28b06fcb680e4234b34a3b391818e9895e8/ss_8c63f28b06fcb680e4234b34a3b391818e9895e8.1920x1080.jpg?t=1781108224",
  "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4704690/e38c8f1a5457304900196a133ecd49c6632fc19e/ss_e38c8f1a5457304900196a133ecd49c6632fc19e.1920x1080.jpg?t=1781108224",
];


async function fetchTheGamer() {
  try {
    const res = await fetch(
      "https://www.thegamer.com/mecca-chameleon-best-hiding-spots-guide/",
      { headers: { "User-Agent": "Mozilla/5.0" } }
    );
    const html = await res.text();
    const imgs = [
      ...html.matchAll(
        /https:\/\/static0\.thegamerimages\.com\/[^"'\s>]+\.(?:jpg|png|webp)/g
      ),
    ].map((m) => m[0]);
    return [...new Set(imgs)];
  } catch (e) {
    console.error("TheGamer failed:", e.message);
    return [];
  }
}

async function fetchWorkshopBrowse() {
  try {
    const url =
      "https://steamcommunity.com/workshop/browse/?appid=4704690&browsesort=trend&section=readytouseitems&actualsort=trend&p=1&numperpage=30&json=1";
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    const data = await res.json();
    return (data.response?.publishedfiledetails || []).map((item) => ({
      id: item.publishedfileid,
      title: item.title,
      preview: item.preview_url,
      votes: item.vote_data?.score,
      subscriptions: item.subscriptions,
      creator: item.creator,
    }));
  } catch (e) {
    console.error("Workshop browse failed:", e.message);
    return [];
  }
}

async function fetchWorkshopItem(id) {
  try {
    const res = await fetch(
      `https://steamcommunity.com/sharedfiles/filedetails/?id=${id}`,
      { headers: { "User-Agent": "Mozilla/5.0" } }
    );
    const html = await res.text();
    const og = html.match(/property="og:image" content="([^"]+)"/)?.[1];
    const title = html.match(/<title>Steam Workshop::([^<]+)<\/title>/)?.[1];
    return { id, title, preview: og };
  } catch (e) {
    return { id, error: e.message };
  }
}

async function main() {
  console.log("=== STEAM SCREENSHOTS ===");
  STEAM_SS.forEach((u, i) => console.log(i, u));

  console.log("\n=== THEGAMER IMAGES ===");
  const gamer = await fetchTheGamer();
  gamer.forEach((u, i) => console.log(i, u));

  console.log("\n=== WORKSHOP BROWSE ===");
  const workshop = await fetchWorkshopBrowse();
  workshop.slice(0, 25).forEach((w) =>
    console.log(JSON.stringify(w))
  );

  if (workshop.length === 0) {
    console.log("\n=== WORKSHOP ITEM FALLBACK ===");
    for (const id of ["3743061744"]) {
      console.log(JSON.stringify(await fetchWorkshopItem(id)));
    }
  }
}

main();
