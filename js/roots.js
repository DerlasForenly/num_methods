function check_roots(matrix, b, x) {
    for (let i = 0; i < matrix.length; i++) {
        current_b = 0
        for (let j = 0; j < matrix.length; j++)
            current_b += matrix[i][j] * x[j]
        if (Math.abs(current_b - b[i]) >= 1e-5)
            return false
    }
    return true
}
