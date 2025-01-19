// ==UserScript==
// @name        Backstage munich time fix
// @description Fixes the broken time on the backstage details page. The entry and start time is not shown correctly normally on mobile devices
// @author      bierchitekt
// @update      https://github.com/bierchitekt/backstage-timefix/raw/main/backstage-timefix.js
// @version     1.0
// ==/UserScript==
(function() {
    document.querySelector("#maincontent > div.columns > div > div.product-info-main > div.page-title-wrapper.product > div > div.row").style.display = "block"
}
