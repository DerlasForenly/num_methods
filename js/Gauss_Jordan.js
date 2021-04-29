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


    for (let i = 0; i < matrix.length; i++) {
        matrix[0][i] =
    }


    return x
}