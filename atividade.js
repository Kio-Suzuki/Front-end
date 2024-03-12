let x = 'palavra';
let valor = 1;

function trocaVogal(x, y) {
    let separa = x.split('');
    separa.forEach((letra, index) => {
        if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
            separa[index] = y;
        }    
    });
    x = separa.join('');
    return x;
}

console.log(trocaVogal(x, valor));