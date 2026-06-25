/** Steam Workshop subscribe link — opens Steam client and downloads the map */
export function getSteamSubscribeUrl(workshopId: string): string {
  return `steam://url/CommunityFilePage/${workshopId}`;
}

export function getSteamWorkshopUrl(workshopId: string): string {
  return `https://steamcommunity.com/sharedfiles/filedetails/?id=${workshopId}`;
}
