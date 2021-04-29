function Cramer(matrix, vector) {
    let x = []
    let delta_i = []
    let delta = det(matrix)

    for (let i = 0; i < matrix.length; i++) {
        let tmp = []
        for (const arr of matrix) {
            tmp.push([...arr])
        }

        for (let j = 0; j < matrix[i].length; j++) {
            tmp[j][i] = vector[j]
        }

        delta_i.push([...tmp])
        delta_i[i] = det(delta_i[i])
        x.push(parseFloat((delta_i[i]) / parseFloat(delta)))
        tmp = []
    }

    return x;
}