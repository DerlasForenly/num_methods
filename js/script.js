calculate.onclick = () => {
    let selected_method

    switch (method.value) {
        case "Cramer's rule":
            selected_method = Cramer
            break
        case "Gaussian elimination":
            selected_method = Gaussian
            break
        case "Gauss–Seidel method":
            selected_method = Gauss_Seidel
            break
        case "Gauss_Jordan method":
            selected_method = Gauss_Jordan
            break
        default:
            break
    }

    let matrix_A = []
    let vector_B = []
    let vector_X = []

    for (let i = 0; i < document.getElementsByClassName('b_input').length; i++) {
        vector_B.push(document.getElementsByClassName('b_input')[i].value);
    }

    let input = [...document.getElementsByClassName('number_input')]
    for (let i = 0; i < input.length; i++) {
        input[i] = parseFloat(input[i].value)
    }

    matrix_A = chunk(input, matrix_size.value)
    vector_X = selected_method(matrix_A, vector_B)

    if (vector_X === false) success_or_fail.textContent = "failed"
    else success_or_fail.textContent = "success"

    renderResults(vector_X)
}
