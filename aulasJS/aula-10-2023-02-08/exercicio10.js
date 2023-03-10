for(let h = 1; h < 12; h++) {
    for(let m = 0; m <= 59; m++) {
        let a = (30 * h) - (5.5 * m)
        if(a < 0) {
            a = a * (-1)
        }
        if(a === 90) {
            console.log(h, m, a)
        }
    }
}