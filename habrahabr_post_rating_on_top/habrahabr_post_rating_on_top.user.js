// ==UserScript==
// @name        habrahabr_post_rating_on_top
// @namespace   habrahabr
// @include     http://habrahabr.ru/post/*
// @include     http://habrahabr.ru/company/*/blog/*/
// @version     1
// @grant       none
// ==/UserScript==

var rating = $('.infopanel .voting .score')
var post_header = $('.post .title')
post_header.append('<span style="color:green">' + rating.text() + '</span>')
