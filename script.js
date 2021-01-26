let num = document.querySelector('.top');
let but = document.querySelector('button');
but.onclick = () => { 
    let res = +num.value;
    switch (res) {
        case 50: 
        console.log("vau");
        break;
    }
    if ( res <  3 ) {
    console.log(res);
    }
    else if  ( res = 4) {
        console.log(res+1); 
    }
    else {
        console.log(res+5);  
    }

}
console.log(num.value);


let range = document.querySelector('.range');
console.log(range.value);
let ran = document.querySelector('.ran');
let p = document.querySelector('p');
ran.onclick = () => {
p.innerHTML = "hello"
    let rangeAfter = +range.value;
    switch (range) {
        case 50: 
        console.log("vau");
        break;
    }
if ( rangeAfter > 40) {

    console.log(rangeAfter + 10);
}


    console.log(range.value);
}

switch (range) {
    case 50: 
    console.log("vau");
    break;
}


    document.querySelector('.age').onclick = () => {
        for ( let i = 0; i < 5 ; i++ ){
            console.log(i);
        document.querySelector('.out').innerHTML = i;
    }
}

let item  = document.querySelectorAll('.item');
console.log(item);
for (i = 0; i < item.length; i+=2 ){
    if (i == 4) {
        console.log('ohhhh')
        document.querySelector('.out1').innerHTML = "waaaaah <br>"
    }
    console.log([i]);
    document.querySelector('.out').innerHTML += i + "hi " ;
}

for (i = 1; i < 4; i++){
    
    
    for (k = 1; k <= i; k++ ) {
        document.querySelector('.out1').innerHTML += i ;
            
    }
    document.querySelector('.out1').innerHTML +=  "<br>" ;
    
}
let out2 = document.querySelector(".out2");
let j = 0;
let outStr = "*";
while ( j < 6 ) {
 
    let jRes = "*"; 
    j++;
    let o = 2;
    while ( o < 7 ){
        outStr += "_";
        o++;
    }
    outStr += jRes;
  
    console.log(jRes);

  
    out2.innerHTML = outStr;
}



let toggle = document.querySelector(".toggle");

toggle.onclick = function () {
    this.classList.toggle('tog');
}

let gas = document.querySelectorAll('.gas');
for (i = 0; i < gas.length; i++){
    gas[i].onclick = function(){ 
    let gallon = document.querySelector('.gallon').value;
    let amount = this.getAttribute('data');
    console.log(gallon*amount);
    } 
}

let a = document.createElement('div');
a.innerHTML = "Hello";
a.classList.add('tog');
a.onclick = function () {
    alert('hello');
}

document.querySelector('.test').appendChild(a);

console.log(a);
