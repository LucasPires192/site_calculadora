let resultado = document.getElementById("resultado");
let historico = document.getElementById("historico");
let valor1;
let valor2;
let operacao;
let fimConta;

function setResultado(x){
    resultado.textContent = x;
}

function getResultado(){
    return resultado.innerText;
}

function setHistorico(x){
    historico.textContent = x;
}

function getHistorico(){
    return historico.innerText;
}

function setValor1(x){
    valor1 = parseFloat(x);
}

function getValor1(){
    return valor1;
}

function setValor2(x){
    valor2 = parseFloat(x);
}

function getValor2(){
    return valor2;
}

function setOperacao(x){
    operacao = x;
}

function getOperacao(){
    return operacao;
}

function setFimConta(x){
    fimConta = x;
}

function getFimConta(){
    return fimConta;
}

function somar(n1 , n2){
    let soma = n1 + n2;

    return soma;
}

function subtrair(n1 , n2){
    let subtracao = n1 - n2;

    return subtracao;
}

function dividir(n1 , n2){
    let divisao

    if(n1 != 0 && n2 != 0){
        divisao = n1 / n2;
    }else{
        divisao = null;
    }

    return divisao;
}

function multiplicar(n1 , n2){
    let multiplicacao = n1 * n2;

    return multiplicacao;
}

function adicionar(n){
    let _n = n.toString();
    let _resultado = getResultado();

    if(_resultado == "Resultado" || getFimConta()){
        _resultado = _n;
    }else{
        _resultado += _n;
    }
    
    setResultado(_resultado);
}   

function adicionarOperacao(x){
    setOperacao(x);

    switch(x){
        case 1: 
            setHistorico(getHistorico() + getResultado() + " + ");
            break;
        case 2: 
            setHistorico(getHistorico() + getResultado() + " - ");
            break;
        case 3: 
            setHistorico(getHistorico() + getResultado() + " * ");
            break;
        case 4: 
            setHistorico(getHistorico() + getResultado() + " / ");
            break;
    }

    if(isNaN(getValor1())){
        setValor1(getResultado());
        setResultado("");
    }
}

function calcular(){
    setValor2(getResultado());
    setHistorico(getHistorico() + getResultado() + " = ")
    
    switch(getOperacao()){
        case 1:
            setResultado(somar(getValor1(), getValor2()));
            break;
        case 2:
            setResultado(subtrair(getValor1(), getValor2()));
            break;
        case 3:
            setResultado(multiplicar(getValor1(), getValor2()));
            break;
        case 4:
            setResultado(dividir(getValor1(), getValor2()));
            break;
    }

    setValor1("");
    setValor2("");
    setOperacao("");
    setFimConta(true);
}

function limpar(){
    setResultado("");
    setHistorico("");
    setValor1("");
    setValor2("");
    setOperacao("");
    setFimConta(false);
}