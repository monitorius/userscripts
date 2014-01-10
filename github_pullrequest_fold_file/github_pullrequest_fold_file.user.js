// ==UserScript==
// @name        github pullrequest fold file
// @namespace   my_github
// @include     https://github.yandex-team.ru/*/*/pull/*
// @include     https://github.yandex-team.ru/*/*/commit/*
// @include     https://github.yandex-team.ru/*/*/compare/*
// @include     https://github.com/*/*/pull/*
// @include     https://github.com/*/*/commit/*
// @include     https://github.com/*/*/compare/*
// @version     1
// @grant       none
// ==/UserScript==


$('.diff-view .file.js-details-container .meta').on('click', function() {
	$(this).next().toggle();
});
