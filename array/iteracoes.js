const numeros = [45, 4, 9, 16, 25]
/*colchetes [ ] indica que é um array
for( i = 0; i < 5; i++){
    console.log(numeros[i]);
}*/

// forEach() é um método que aplica uma 
// função callback a cada elemento do array
    numeros.forEach(valor => console.log(valor));


//map() é um método que a cria um novo array
//  com elementos retor nados por uma callback function
    const numeros2 = numeros.map(valor => valor * 2);
    numeros2.forEach(valor => console.log(valor))

    //filter() é um método que retorna um novo array com
//elementos que atende a um determinado criterio
   

   const numeros3 = numeros.filter(valor => valor > 18)
    numeros3.forEach(valor => console.log(valor))
    
    //reduce() produz um unico valor

    console.log(
        numeros.reduce((total, valor ) => total + valor  )
    );

    //A propriedade length retorna um número
    //  correspondente a quantidade de elementos de um array
    
    console.log(numeros.length);
    numeros.length = 10;
    console.log(numeros);
    console.log(numeros[6]);
    numeros.length = 4;
    console.log(numeros);
    numeros.length = 5;
     console.log(numeros);

    // o metodo push() acrescfenta um valor no fim do array
    numeros.push(25);
    console.log(numeros);

    //o método pop() remove o elemento no fim do array
    numeros.pop();
    console.log(numeros)

    numeros.pop();
    numeros.push(25);
    console.log(numeros);