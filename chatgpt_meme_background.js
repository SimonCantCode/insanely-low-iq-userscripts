// ==UserScript==
// @name     chatgpt_meme_background
// @version  1
// @match    https://chatgpt.com/*
// @grant    none
// ==/UserScript==

// the linear-gradient function is to lower image brightness
document.body.style.backgroundImage = `
  linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),
  url("https://raw.githubusercontent.com/SimonCantCode/insanely-low-iq-userscripts/refs/heads/main/media/chatgpt-server-is-down-meme.gif")
`;
