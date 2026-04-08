function mapa(){
    const frutas = new Map();

    frutas.set("Maçã", 500);
    frutas.set("Pera", 300);
    //frutas.set("Pera", 200);
    frutas.set("Banana", 300);
    frutas.set("Laranja", 400);
   
    let preco = frutas.get("Pera")
console.log(preco);

    //size pe uma propriedade que armazena o tamanho do mapa
console.log(frutas.size)
     

   // o metodo has() retorna verdadeirp ou falso para uma determinada chabe
   console.log(frutas.has('banana'))
   frutas.forEach((valor, chave) => console.log( `${chave} = R$${valor},00`))

   //O método keys() retorna uma coleção com as chaves do mapa
    //A estrutura de repetição for of itera sobre os valores
    //de uma coleção
   for (const x of frutas.keys()){
   console.log(x);

   }

   //values() é um metodo é um metodo que retorna a coleção 
   // contendo todos os valores de um mapa
   for (const x of frutas.values()){
   console.log(x);
   }
}
mapa();