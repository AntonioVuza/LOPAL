async function lagarta(){
    
    let lagarta = "(_)(_)(_)(ಠ╭╮ಠ)";
    let lagarta2 = "(_)(___)(_)(ಠ╭╮ಠ)"
    let espaco = "   ";
    console.log(lagarta);
    function sleep(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    for(let i = 0; i < 60; i++){
        console.log(i % 2 == 0? lagarta = espaco + lagarta:
            lagarta2 = espaco + lagarta2);
        await sleep (600)
        console.clear();

    }
}
