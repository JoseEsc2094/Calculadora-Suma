function sumar(){
    const forma = document.getElementById("forma");
    let operandoA = forma["operandoA"];
    let operandoB = forma["operandoB"];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = "Por favor ngrese los valores a sumar";
    document.getElementById("resultado").innerHTML = `El resultado de la suma es: ${resultado}`;
}