// ==UserScript==
// @name         Stove Dark Mode
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Forces a dark theme on the page.onstove.com
// @author       x1101
// @match        *://page.onstove.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const darkThemeCss = `
        /* 1. Target both the article box and the top navigation bar */
        article.article.box,
        .\\$gnb-stove-gnb-inner {
            /* Invert the background and text, then rotate the colors back to normal */
            filter: invert(95%) hue-rotate(180deg) contrast(95%) !important;

            /* Force a white background BEFORE the filter applies so the invert turns it dark gray */
            background-color: #ffffff !important;
        }

        /* 2. Reverse the filter on media inside BOTH elements so images/icons look normal */
        article.article.box img,
        article.article.box video,
        article.article.box iframe,
        article.article.box canvas,
        article.article.box svg,
        article.article.box .emoticon,
        article.article.box .avatar,
        article.article.box .s-profile-symbol-image,
        article.article.box [style*="background-image"],
        .\\$gnb-stove-gnb-inner img,
        .\\$gnb-stove-gnb-inner svg,
        .\\$gnb-stove-gnb-inner [style*="background-image"] {
            filter: invert(100%) hue-rotate(180deg) !important;
        }

        /* 3. Slightly adjust contrast for interactive elements to keep them legible */
        article.article.box button,
        article.article.box input,
        article.article.box textarea,
        article.article.box select,
        .\\$gnb-stove-gnb-inner button,
        .\\$gnb-stove-gnb-inner input {
            filter: contrast(90%);
        }
    `;

    // Inject the CSS into the page
    const styleNode = document.createElement('style');
    styleNode.type = 'text/css';
    styleNode.appendChild(document.createTextNode(darkThemeCss));
    document.head.appendChild(styleNode);

})();
