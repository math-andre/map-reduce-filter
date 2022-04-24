const goias = {
    value: 2,
};

const tocantins = {
    value: 3,
};

function mapComThis(arr, thisArg) {
    return arr.map(function(item){
       return item = this.value;
    }, thisArg);

}

const nums = [1, 2];

console.log('this -> goias', mapComThis(nums, goias));
console.log('this -> tocantins', mapComThis(nums, tocantins));

