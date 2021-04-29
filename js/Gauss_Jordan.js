function Gauss_Jordan(matrix, b) {
    let x = []
    let I = []
    matrix = createCopy(matrix)

    for (let i = 0; i < matrix.length; i++) {
        I.push([])
        for (let j = 0; j < matrix.length; j++)
            I[i].push(0)
    }

    for (let i = 0; i < matrix.length; i++)
        for (let j = 0; j < matrix.length; j++)
            if (i === j)
                I[i][j] = 1

    console.log(I)

    a11 = parseFloat(matrix[0][0])

    for (let j = 0; j < matrix.length; j++) {
        matrix[0][j] = parseFloat(matrix[0][j]) / parseFloat(a11)
        I[0][j] = parseFloat(I[0][j]) / a11
    }

    // console.log("matrix", matrix)
    // console.log("I", I)


    for (let j = 1; j < matrix.length; j++) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[j][i] = matrix[j][i] - matrix[0][i] * matrix[j][i]
        }
        
    }

    console.log("matrix", matrix)
    console.log("I", I)


    return x
}