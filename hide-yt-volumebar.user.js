// ==UserScript==
// @name     Hide yt volumebar
// @description Hides the YouTube volume control, so people in a party can't mess with it
// @license MIT
// @version  1.0
// @grant    none
// @match    https://www.youtube.com/*
// @namespace
// ==/UserScript==

const getVideoElem = () => document.querySelector("video.html5-main-video");
const elementToObserve = document.querySelector("body");

const observer = new MutationObserver(function(mutations_list) {
	mutations_list.forEach(function(mutation) {
		mutation.addedNodes.forEach(function(added_node) {
			if(added_node.id == 'movie_player') {
                const volumeArea = document.querySelector(".ytp-volume-area");

                volumeArea.style.pointerEvents = "none";

				observer.disconnect();
			}
		});
	});
});

observer.observe(elementToObserve, {subtree: true, childList: true});
