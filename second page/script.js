const int = setInterval(() => {
    i++
    document.getElementById('figma').innerHTML = i
    
    if (i == 50) {
        clearInterval(int);
    }
}, 50);
const intr = setInterval(() => {
    j++
    document.getElementById('html').innerHTML = j
    
    if (j == 80) {
        clearInterval(intr);
    }
}, 50);
const intrv = setInterval(() => {
    h++
    document.getElementById('js').innerHTML = h
    
    if (h == 38) {
        clearInterval(intrv);
    }
}, 50);
const intrvl = setInterval(() => {
    k++
    document.getElementById('css').innerHTML = k
    
    if (k == 63) {
        clearInterval(intrvl);
    }
}, 50);

var i = -1
var j = -1
var h = -1
var k = -1