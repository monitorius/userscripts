// ==UserScript==
// @name        github pullrequest fold file
// @namespace   my_github
// @include     https://github.yandex-team.ru/*/*/pull/*
// @include     https://github.com/*/*/pull/*
// @version     1
// @grant       none
// ==/UserScript==


$('.diff-view.commentable .file.js-details-container .meta').on('click', function() {
	$(this).next().toggle();
});
