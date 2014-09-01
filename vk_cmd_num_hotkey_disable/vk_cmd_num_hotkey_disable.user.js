// ==UserScript==
// @name        vk_cmd_num_hotkey_disable
// @namespace   my
// @include     https://vk.com/*
// @include     http://vk.com/*
// @version     1
// @grant       none
// ==/UserScript==

function disable_meta_all() {
	function disable_meta(e) {
		// cmd + <number> hotkeys disable
		if(e.metaKey && e.keyCode >= 49 && e.keyCode <= 57) {
			e.stopPropagation(); 
			return false;
		}
		
	}

	['keypress', 'keyup', 'keydown'].forEach(function (eventName) {
		document.addEventListener(eventName, disable_meta, true);
	})
}

disable_meta_all();