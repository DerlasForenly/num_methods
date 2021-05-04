let matrix_size = document.getElementById('size')
let matrix_input = document.getElementById('matrix')
let resultsField = document.getElementById('results_field')
let method = document.getElementById('method')
let file_input = document.getElementById('file')
let success_or_fail = document.getElementById('success')
let roots = document.getElementById('roots')

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

method.onchange = () => {
    file_input.files[0] = undefined
    deleteChilds(resultsField)
    success_or_fail.textContent = ""
    roots.textContent = ""
}

matrix_size.onchange = () => {
    file_input.files[0] = undefined
    deleteChilds(matrix_input)
    deleteChilds(resultsField)
    success_or_fail.textContent = ""
    roots.textContent = ""

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

file_input.onchange = () => {
    deleteChilds(matrix_input)
    deleteChilds(resultsField)
    success_or_fail.textContent = ""
    roots.textContent = ""

    let file = file_input.files[0]

    let reader = new FileReader()

    reader.readAsText(file)

    reader.onload = function() {
        let matrix = reader.result.split('\n')

        if (matrix[matrix.length - 1] == '') matrix.pop()
        matrix = matrix.slice(1, matrix.length)
  
        
        for (let i = 0; i < matrix.length; i++) {
            matrix[i] = matrix[i].split(' ')
        }
        for (let i = matrix.length / 2 - 1; i >= 0 ; i--) {
            let tmp = matrix[matrix.length - 1]
            matrix[i].push(tmp[0])
            matrix.pop()
        }
        matrix_size.value = matrix.length

        //console.table(matrix)

        for (let i = 0; i < matrix.length; i++) {
            let div = document.createElement("div")
            div.setAttribute("class", "input_row")
        
            let b = document.createElement('input');
            b.setAttribute("class", "b_input")
            b.setAttribute("value", matrix[i][matrix[i].length - 1])
        
            let label = document.createElement('label')
            label.textContent = "="
        
            for (let j = 0; j < matrix.length; j++) {
                let number = document.createElement("input")
                number.setAttribute("type", "number")
                number.setAttribute("class", "number_input")
                number.setAttribute("value", matrix[i][j])
        
                div.appendChild(number)
                div.appendChild(label)
                div.appendChild(b);
            }
        
            matrix_input.appendChild(div)
        }
    }

    reader.onerror = function() {
        console.log(reader.error);
        let error_label = document.createElement('label')
        error_label.setAttribute('id', 'error_label')
        error_label.textContent = reader.error

        matrix_input.appendChild(error_abel)
    }
}

function renderResults(x) {
    deleteChilds(resultsField)

    let method_label = document.createElement('label')
    method_label.setAttribute('id', 'method_name_label')
    method_label.textContent = "Current method: " + method.value
    resultsField.appendChild(method_label)

    for (let i = 0; i < x.length; i++) {
        let label = document.createElement('label')
        label.setAttribute('class', 'result_label')
        label.textContent = `x${i} = ${x[i]}`

        resultsField.appendChild(label)
    }
}

function deleteChilds(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}
