function Cramer(matrix, vector) {
    let x = []
    let delta_i = []
    let delta = det(matrix)
    let n = matrix.length

    if (delta === 0) {
        console.log('Cramer: delta=0')
        return false
    }

    for (let i = 0; i < n; i++) {
        let tmp = []
        for (const arr of matrix) {
            tmp.push([...arr])
        }

        for (let j = 0; j < matrix[i].length; j++) {
            tmp[j][i] = parseFloat(vector[j])
        }

        delta_i.push([...tmp])
        console.log(delta_i[i], det(delta_i[i]))
        delta_i[i] = parseFloat(det(delta_i[i]))
        x.push(parseFloat((delta_i[i]) / parseFloat(delta)))
        tmp = []
    }

    return x;
}
