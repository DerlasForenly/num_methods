function Jacobi(matrix, b) {
    if (check_diag(matrix) === false) {
        return false
    }
    if (!invertible(matrix)) {
        return false
    }

    matrix = createCopy(matrix)
    let n = matrix.length
    let x_tmp = new Array(n)
    let x = new Array(n)
    let e = new Array(n)
    let eps = 0.000001
    
    for (let i = 0; i < n; i++) {
        x[i] = 0
        x_tmp[i] = 0
        b[i] = +b[i]
    }

    for (let i = 0; i < n; i++) {
        matrix[i].push(b[i])
    }
    
    for (let i = 0; i < n; i++) {
        let tmp = matrix[i][i]
        matrix[i][i] = matrix[i][n]
        matrix[i][n] = tmp
    }
    
    matrix = createCopy(matrix)

    do {
        console.log('iterations.....')
        for (let i = 0; i < n; i++) {
            x[i] = f(matrix[i], i, x_tmp)
            e[i] = Math.abs(x_tmp[i] - x[i])
            if (!isFinite(x[i])) {
                return false;
            }
        }
        for (let i = 0; i < n; i++)
            x_tmp[i] = x[i];
    } while(all_true(e, eps));

    return x

    function check_diag(matrix) {
        for (let i = 0; i < matrix.length; i++) {
            let sum = 0
            for (let j = 0; j < matrix.length; j++) {
                if (i === j) continue
                sum += matrix[i][j]
            }
            if (Math.abs(matrix[i][i]) < Math.abs(sum))
                return false
        }
        return true
    }

    function f(row, number, x) {
        let result = 0
    
        for (let i = 0; i < row.length - 1; i++) {
            if (i == number) result += row[i]
            else result += row[i] * x[i] * (-1)
        }
        
        result = result / row[row.length - 1]
        return result
    }
    
    function all_true(e, eps) {
        for (let i = 0; i < e.length; i++)
            if (e[i] <= eps)
                return false
        return true
    }
}
