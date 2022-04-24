const lista = [
    {
        name: 'sabao em po',
        preco: 30,
    },
    {
        name: 'azeite',
        preco: '110',
    },
    {
        name: 'ovos',
        preco: '20',
    },
    {
        name: 'tapioca',
        preco: '10',
    },

];


const saldoDisponivel = 200;
function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current, index){

        console.log('rodada', index +1);
        console.log({prev});
        console.log({current});
        

        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel,lista));