import fetch from "isomorphic-fetch";
const BASEURL = "http://localhost:3001/api/";
const session = "SESSIONTOKEN";

//https://www.pathofexile.com/character-window/get-stash-items?accountName=tris790&tabIndex=1&league=Flashback%20Event%20(BRE001)&tabs=0
//https://www.pathofexile.com/character-window/get-stash-items?accountName=tris790&tabIndex=2&league=Flashback%20Event%20(BRE001)&tabs=0
//https://www.pathofexile.com/character-window/get-stash-items?accountName=tris790&tabIndex=0&league=Incursion&tabs=1
export const getStashFromIndex = async (
    account,
    index,
    league,
    includeTabsLayout
) => {
    const url =
        BASEURL +
        `character-stash/get-stash-items?account=${account}&index=${index}&league=${league}&includeTabsLayout=${includeTabsLayout}&session=${session}`;

    const response = await fetch(url, {
        mode: "cors"
    });
    return response.json();
};

export const getRates = async () => {
    const url = BASEURL + `rates`;
    const response = await fetch(url, { mode: "cors" });
    return response.json();
};
