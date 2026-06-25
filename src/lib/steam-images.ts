/** Official Meccha Chameleon Steam store screenshots (appid 4704690) */
export const STEAM_SCREENSHOTS = [
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
] as const;

export function steamScreenshot(index: number): string {
  return STEAM_SCREENSHOTS[index % STEAM_SCREENSHOTS.length];
}
