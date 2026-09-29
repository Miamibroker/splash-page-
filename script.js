/*
  EASY LINK SETTINGS
  ------------------
  Update only these URLs when needed, then commit the change to GitHub.
  Leave miamiLive blank until that website is ready.
*/
const SITE_LINKS = {
  mortgage: "https://nationwideloansmiami.com/",
  realEstate: "https://areaco.netlify.app/",
  miamiLive: "" // Example later: "https://miamilivenotary.com/"
};

const links = {
  mortgage: document.getElementById("mortgage-link"),
  realEstate: document.getElementById("realestate-link"),
  miamiLive: document.getElementById("notary-link")
};

function applyLink(anchor, url) {
  if (!anchor) return;
  if (url && url.trim()) {
    anchor.href = url.trim();
    anchor.removeAttribute("aria-disabled");
    anchor.removeAttribute("title");
  } else {
    anchor.href = "#";
    anchor.setAttribute("aria-disabled", "true");
    anchor.title = "Website coming soon";
    anchor.addEventListener("click", (event) => event.preventDefault());
  }
}

applyLink(links.mortgage, SITE_LINKS.mortgage);
applyLink(links.realEstate, SITE_LINKS.realEstate);
applyLink(links.miamiLive, SITE_LINKS.miamiLive);
