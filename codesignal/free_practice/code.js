let n = 10

var pyramid = function(n) {

    let totalWidth = ((n - 1) * 2) + 1
    let space = (n - 1)
    let star = 1
    let row = ""
    let Spaces = (space) => {for(let j = space; j > 0; j--) {row += " "};}
    let Stars = (star) => {for(let k = 0; k < star; k++) row += "*";}

    for (let i = 0; i < n; i++) {
        row = ""
        Spaces(space)
        Stars(star)
        if (stars > 1) Stars(star);
        Spaces(space)     
        console.log(row)
        star++
        space--
    };
};

pyramid(n)