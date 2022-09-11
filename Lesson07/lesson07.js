var g = 1000;

function a () {
    var b = 100;

    // console.log(b);
}

a();

// console.log(b);

let c = 100;
c = 1000;
const H = 1000;
// shouldn't use var

// Arrow function
function d (x, y, z) {
    const sum = x + y + z;

    return sum;
}

const d2 = (x, y, z) => {
    const sum = x + y + z;

    return sum;
};

const d3 = (x, y, z) => x + y +z;

const d4 = () => {
    return "OKE";
};

const d5 = () => "OKE"

const d6 = x => x*2;

// console.log(d(1, 2, 3));







// Bài 1:
function student (){
    name: "Peter";
    age: "15";
    adress: "Hoan Kiem";
}

console.log(student);

// Bài 2:
var smartPhones = [ 
    { name: 'iphone', price: 649 }, 

    { name: 'Galaxy S6', price: 576 }, 

    { name: 'Galaxy Note 5', price: 489 } 

];


// Bài 3:
const foo1 = (x,y,z) => {
    console.log(x,y,z);
};
console.log(foo1(1,2,3));

const foo2 = () => alert("Hello");

const foo3 = (a,b) => {
    let m = a+b*100;
    return m;
}
console.log(foo3(3,5));