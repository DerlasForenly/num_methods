function chunk(arr, chunk) {
    chunk = parseInt(chunk)
    let matrix = []

    for (let i = 0; i < chunk; i++) {
        matrix.push(arr.slice(i * chunk, i * chunk + chunk))
    }

    return matrix
}

function createCopy(matrix) {
    let copy = []
    for (const arr of matrix) {
        copy.push([...arr])
    }
    return copy
}

function invertible(matrix, b) {
    if (det(matrix) === 0) return false
    return true
}