function filtraPares(arr) {
    return arr.filter(callback)
}


function filtraImpares(arr){
    return arr.filter(callback1)
}

function callback(item){
    return item % 2 === 0;
}
function callback1(item){
    return item % 2  !== 0;
}



const meuArray = [1, 23, 44, 55, 66, 52, 76, 87, 9];

console.log(filtraPares(meuArray));
console.log(filtraImpares(meuArray));