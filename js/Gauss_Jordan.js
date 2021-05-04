function Gauss_Jordan(matrix, b) {
    if (!invertible(matrix)) {
        return false
    }
    let x = []
    let n = matrix.length
    b = [...b]
    matrix = createCopy(matrix)

    for (let i = 0; i < n; i++)
        matrix[i].push(parseFloat(b[i]))

    for (let k = 0; k < n; k++)
        for (let i = k + 1; i < n; i++) {
            let mu = parseFloat(matrix[i][k] / matrix[k][k])
            for (let j = 0; j < n + 1; j++)
                matrix[i][j] -= parseFloat(matrix[k][j]) * parseFloat(mu)
            b[i] -= b[k] * mu
        }

    for (let i = 0; i < n; i++) {
        let mu = matrix[i][i]
        for (let j = 0; j < n + 1; j++)
            matrix[i][j] = parseFloat(matrix[i][j]) / parseFloat(mu)
    }

    for (let a = n - 1; a > 0; a--)
        for (let i = 0; i < a; i++) {
            let k = matrix[i][a]
            for (let j = 0; j <= n; j++)
                matrix[i][j] = matrix[i][j] - k * matrix[a][j]
        }

    for (let i = 0; i < n; i++)
        x.push(matrix[i][matrix[i].length - 1])

    return x
}
