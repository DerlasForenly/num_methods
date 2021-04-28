const chunk = (arr, chunk) => {
    if (chunk < 1) {
      return null
    }
    const chunkedArray = []
    let array = [...arr]
    while (array.length) {
       const chunkedPart = array.slice(0, chunk)
       chunkedArray.push(chunkedPart)
       array = array.slice(chunk)
    }
    return chunkedArray
}

function det(m) {
    if (m.length == 2) { 
        return (m[0][0] * m[1][1]) - (m[0][1] * m[1][0])
    }

    let answer = 0

    for (let i = 0; i < m.length; i++) { 
        answer += Math.pow(-1,i) * m[0][i] * det(minor(m, i))
    }

    return answer;
}

function minor(m, index) {
    let temp = []

    for (let i = 0; i < m.length; i++) { 
        temp.push(m[i].slice(0)) 
    } 

    temp.splice(0, 1)

    for (let i = 0; i < temp.length; i++) { 
        temp[i].splice(index, 1)
    } 

    return temp
}

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

let matrix_size = document.getElementById('size')
let matrix_input = document.getElementById('matrix')

for (let i = 0; i < matrix_size.value; i++) {
    let div = document.createElement("div")
    div.setAttribute("class", "input_row")

    let b = document.createElement('input');
    b.setAttribute("class", "b_input")
    b.setAttribute("value", "0")

    let label = document.createElement('label')
    label.textContent = "="

    for (let j = 0; j < matrix_size.value; j++) {
        let number = document.createElement("input")
        number.setAttribute("type", "number")
        number.setAttribute("class", "number_input")
        number.setAttribute("value", "0")

        div.appendChild(number)
        div.appendChild(label)
        div.appendChild(b);
    }

    matrix_input.appendChild(div)
}

matrix_size.onchange = () => {
    while (matrix_input.firstChild) {
        matrix_input.removeChild(matrix_input.firstChild)
    }

    for (let i = 0; i < matrix_size.value; i++) {
        let div = document.createElement("div")
        div.setAttribute("class", "input_row")
    
        let b = document.createElement('input');
        b.setAttribute("class", "b_input")
        b.setAttribute("value", "0")
    
        let label = document.createElement('label')
        label.textContent = "="
    
        for (let j = 0; j < matrix_size.value; j++) {
            let number = document.createElement("input")
            number.setAttribute("type", "number")
            number.setAttribute("class", "number_input")
            number.setAttribute("value", "0")
    
            div.appendChild(number)
            div.appendChild(label)
            div.appendChild(b);
        }
    
        matrix_input.appendChild(div)
    }
}

calculate.onclick = () => {
    let matrix_A = []
    let vector_B = []
    let vector_X = []

    for (let i = 0; i < document.getElementsByClassName('b_input').length; i++) {
        vector_B.push(document.getElementsByClassName('b_input')[i].value);
    }

    let input = [...document.getElementsByClassName('number_input')]
    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].value;
    }

    matrix_A = chunk(input, matrix_size.value)

    console.log(matrix_A)
    console.log(vector_B)

    vector_X = Cramer(matrix_A, vector_B)
    console.log(vector_X)
}



// let test_A = [
//     [2, 5, 4],
//     [1, 3, 2],
//     [2, 10, 9]
// ]

// let test_B = [30, 150, 110]
// let test_X = [] //-152 270 -254

//cramersRule(test_A, test_B);
