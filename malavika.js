var x = prompt("Please enter The number of Test cases:");
var t = parseInt(x)

for (var i=0; i<t; i++) {

    var string = prompt("Enter the String:", '0');
    var amber = 0;
    var brass = 0;
    var n = string.length;


    for (j = 0; j < n; j++) {
        if (string[j] == 'a') {
            amber += 1;
        }
        else {
            brass += 1;
        }
    }
    if (amber <= brass) {
        console.log(amber)
    }
    else {
        console.log(brass)
    }
}