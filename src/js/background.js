"use strict";
/*global chrome: true*/

chrome.contextMenus.removeAll(() => {
	chrome.contextMenus.create({
		title: "Image Rotate Context",
		contexts: ["image"],
		visible: true,
		id: "rotate"
	}, () => {
		["0", "90", "180", "270"].forEach(dir => {
			chrome.contextMenus.create({
				title: dir,
				contexts: ["image"],
				visible: true,
				parentId: "rotate",
				id: "rotate" + dir,
				onclick: (eventInfo, tab) => chrome.tabs.sendMessage(tab.id, {
					dir: dir
				})
			});
		});
	});
});