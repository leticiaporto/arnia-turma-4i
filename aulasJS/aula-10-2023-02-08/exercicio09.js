function calculaAngulo(hora, minuto) {
    let angulo = (30 * hora) - (5.5 * minuto)
    // como a fómula original está em módulo, se o valor for negativo deve-se multiplicar por -1 para ficar positivo
    if(angulo < 0) {
        angulo = angulo * (-1)
    }
    return angulo
}

console.log(calculaAngulo(3, 30))