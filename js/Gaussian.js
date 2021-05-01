function Gaussian(matrix, b) {
    if (!invertible(matrix)) {
        return false
    }

    let n = matrix.length
    let x = array_fill(0, n, 0)

    function array_fill(i, n, v) {
        let a = []
        for (; i < n; i++) a.push(v)
        return a
    }
    matrix = createCopy(matrix)

    for (let i = 0; i < n; i++) { 
        matrix[i].push(b[i])
    }


    for (let i = 0; i < n; i++) { 
        let maxEl = Math.abs(matrix[i][i])
        maxRow = i
        for (let k = i + 1; k < n; k++) { 
            if (Math.abs(matrix[k][i]) > maxEl) {
                maxEl = Math.abs(matrix[k][i])
                maxRow = k
            }
        }

        for (let k = i; k < n + 1; k++) { 
            let tmp = matrix[maxRow][k]
            matrix[maxRow][k] = matrix[i][k]
            matrix[i][k] = tmp
        }

        for (let k = i + 1; k < n; k++) {
            let c = parseFloat(-matrix[k][i] / matrix[i][i])

            for (let j = i; j < n + 1; j++) { 
                if (i === j)
                    matrix[k][j] = 0
                else
                    matrix[k][j] = parseFloat(matrix[k][j]) + parseFloat(c) * parseFloat(matrix[i][j])
            }
        }
    }
    
    for (let i = n - 1; i > -1; i--) { 
        x[i] = matrix[i][n] / matrix[i][i];
        for (let k = i - 1; k > -1; k--) { 
            matrix[k][n] -= matrix[k][i] * x[i];
        }
    }

    return x;
}
