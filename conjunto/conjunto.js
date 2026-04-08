function conjunto(){
    const letras = new Set();
    letras.add("a"); 
    letras.add("b");
    letras.add("c"); 

    console.log(letras.has("g"))

    //delete é um metodo para remover um elemento do conjunto
    letras.delete("c");
    console.log(letras);
    
    //como no conjunto a chave é igual ao valos, os métodos values() e
    //keys
    for (const x of letras.values()){
        console.log(x);
    }

    for (const x of letras.keys()){
        console.log(x);
    }


}
conjunto();