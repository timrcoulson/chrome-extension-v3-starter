// This script gets injected into any opened page
// whose URL matches the pattern defined in the manifest
// (see "content_script" key).
// Several foreground scripts can be declared
// and injected into the same or different pages.

console.log("This prints to the console of the page (injected only if the page url matched)")
console.log("This prints to the console of the page (injected only if the page url matched)")
console.log("This prints to the console of the page (injected only if the page url matched)")
console.log("This prints to the console of the page (injected only if the page url matched)")
console.log("This prints to the console of the page (injected only if the page url matched)")
console.log("This prints to the console of the page (injected only if the page url matched)")
console.log("This prints to the console of the page (injected only if the page url matched)")
console.log("This prints to the console of the page (injected only if the page url matched)")
console.log("This prints to the console of the page (injected only if the page url matched)")
console.log("This prints to the console of the page (injected only if the page url matched)")

function nativeSelector() {
    var elements = document.querySelectorAll("body, body *");
    var results = [];
    var child;
    for(var i = 0; i < elements.length; i++) {
        child = elements[i].childNodes[0];
        if(elements[i].hasChildNodes() && child.nodeType == 3) {
            results.push(child);
        }
    }
    return results;
}

var textnodes = nativeSelector(),
    _nv;
for (var i = 0, len = textnodes.length; i<len; i++){
    _nv = textnodes[i].nodeValue;
    textnodes[i].nodeValue = _nv.
    replace(/#themetaverse/gi,'#theDystopianNightmare').
    replace(/#metaverse/gi,'#dystopianNightmare').
    replace(/metaverse/gi,'Dystopian Nightmare')
}