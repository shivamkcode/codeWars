/*Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"*/

function removeUrlAnchor(url) {
    return url.slice(0, url.indexOf('#') !== -1? url.indexOf('#'): url.length)
}

function removeUrlAnchor(url) {
    return url.split('#')[0];
}