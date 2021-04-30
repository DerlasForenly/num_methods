function Gauss_Seidel(matrix, b) {
    matrix = createCopy(matrix)
    let n = matrix.length
    let x = new Array(n)
    
    for (let i = 0; i < n; i++) {
        x[i] = 0
        b[i] = +b[i]
    }

    console.table(matrix)
    console.table(b)
    console.table(x)
    matrix = createCopy(matrix)

    for (let i = 0; i < n; i++) {
        matrix[i][0] = +b[i];
    }

    console.table(matrix)
    matrix = createCopy(matrix)

    

    return x
}
