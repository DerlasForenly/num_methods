calculate.onclick = () => {
    // let matrix_A = [
    //     [2, 5, 4],
    //     [1, 3, 2],
    //     [2, 10, 9]
    // ]
    // let vector_B = [30, 150, 110]
    // let vector_X = [] //-152 270 -254

    let selected_method

    switch (method.value) {
        case "Cramer's rule":
            selected_method = Cramer;
            break
        case "Gaussian elimination":
            selected_method = Gaussian;
            break
        case "Gauss–Seidel method":
            selected_method = Gauss_Seidel
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

    renderResults(vector_X)
}

