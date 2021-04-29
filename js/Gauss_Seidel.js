function Gauss_Seidel(matrix, b) {
    let x = []
    let n = []
    let m = []
    for (let i = 0; i < matrix.length; i++) {
        m.push(0)
        n.push(0)
    }

    matrix = createCopy(matrix);
    console.log(matrix, n, m)
    
    for (let size = matrix.length; size > 0; size--) {
        for (let i = 0; i < size; i++) {

            n[i] = (b[i] / matrix[i][i]);

            for (let j = 0; j < size; j++) {
                if (j == i) continue;

                n[i] = n[i] - ((matrix[i][j] / matrix[i][i]) * m[j]);
                m[i] = n[i];
            }
            x.push(n[i])
        }
    }

    return x
}