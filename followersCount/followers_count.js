let count = 0;
function increaseCount() {
    count ++
    displayCount();
    checkCountValue();
}
function displayCount() {
    document.getElementById('countDisplay').innerHTML=count;}

function checkCountValue() {
    if(count ===10) {
        alert ("your instagram post gained 20 follwers keep it up")
    }
}