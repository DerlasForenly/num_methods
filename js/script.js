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


var abs = Math.abs;

function array_fill(i, n, v) {
    var a = [];
    for (; i < n; i++) {
        a.push(v);
    }
    return a;
}

function Gaussian(A, x) {

    var i, k, j;

    console.table(A)

    // Just make a single matrix
    for (i=0; i < A.length; i++) { 
        A[i].push(x[i]);
    }
    var n = A.length;

    console.table(A)

    for (i=0; i < n; i++) { 
        // Search for maximum in this column
        var maxEl = abs(A[i][i]),
            maxRow = i;
        for (k=i+1; k < n; k++) { 
            if (abs(A[k][i]) > maxEl) {
                maxEl = abs(A[k][i]);
                maxRow = k;
            }
        }


        // Swap maximum row with current row (column by column)
        for (k=i; k < n+1; k++) { 
            var tmp = A[maxRow][k];
            A[maxRow][k] = A[i][k];
            A[i][k] = tmp;
        }

        // Make all rows below this one 0 in current column
        for (k=i+1; k < n; k++) { 
            var c = -A[k][i]/A[i][i];
            for (j=i; j < n+1; j++) { 
                if (i===j) {
                    A[k][j] = 0;
                } else {
                    A[k][j] += c * A[i][j];
                }
            }
        }
    }

    // Solve equation Ax=b for an upper triangular matrix A
    x = array_fill(0, n, 0);
    // 0 0 0
    for (i=n-1; i > -1; i--) { 
        x[i] = A[i][n]/A[i][i];
        for (k=i-1; k > -1; k--) { 
            A[k][n] -= A[k][i] * x[i];
        }
    }
    // nan nan nan

    return x;
}


    // function solve(m, b) {
    //     let lu = ludcmp(m)
    //     if (lu === undefined) return 
    //     return lubksb(lu, b)
    // }
    

    // function ludcmp(m) {
    //     let d = true
    //     let n = m.length
    //     let idx = new Array(n) 
    //     let vv = new Array(n)  
    
    //     for (let i = 0; i < n; i++) {
    //         let max = 0
    //         for (let j = 0; j < n; j++) {
    //             let temp = Math.abs(m[i][j])
    //             if (temp > max) max = temp
    //         }
    //         if (max == 0) return 
    //         vv[i] = 1 / max 
    //     }
    
    //     let Acpy = new Array(n)
    //     for (let i = 0; i < n; i++) {		
    //         let Ai = m[i] 
    //         Acpyi = new Array(Ai.length)

    //         for (j = 0; j < Ai.length; j += 1) 
    //             Acpyi[j] = Ai[j]

    //         Acpy[i] = Acpyi
    //     }
    //     m = Acpy
    
    //     let tiny = 1e-20 
    //     for (let i = 0; ; i++) {

    //         for (let j = 0; j < i; j++) {
    //             let sum = m[j][i]

    //             for (let k = 0; k < j; k++) 
    //                 sum -= m[j][k] * m[k][i];

    //             m[j][i] = sum
    //         }

    //         let jmax = 0
    //         let max = 0;

    //         for (let j = i; j < n; j++) {
    //             let sum = m[j][i]

    //             for (let k = 0; k < i; k++) 
    //                 sum -= m[j][k] * m[k][i];

    //             m[j][i] = sum
    //             let temp = vv[j] * Math.abs(sum)

    //             if (temp >= max) {
    //                 max = temp
    //                 jmax = j
    //             }
    //         }

    //         if (i <= jmax) {

    //             for (let j = 0; j < n; j++) {
    //                 let temp = m[jmax][j]
    //                 m[jmax][j] = m[i][j]
    //                 m[i][j] = temp
    //             }

    //             d = !d;
    //             vv[jmax] = vv[i]
    //         }
    //         idx[i] = jmax;

    //         if (i == n-1) 
    //             break;

    //         let temp = m[i][i]

    //         if (temp == 0) 
    //             m[i][i] = temp = tiny

    //         temp = 1 / temp
    //         for (let j = i + 1; j < n; j++) 
    //             m[j][i] *= temp
    //     }

    //     console.log({m:m, idx:idx, d:d});
    //     return {m:m, idx:idx, d:d}
    // }
    
    // function lubksb(lu, b) {
       
    //     let m = lu.m
    //     let idx = lu.idx
    //     let n = idx.length
    
    //     let bcpy = new Array(n) 
    //     for (let i=0; i<b.length; i+=1) bcpy[i] = b[i]
    //     b = bcpy
    
    //     for (let ii =- 1, i = 0; i < n; i++) {
    //         let ix = idx[i]
    //         let sum = b[ix]
    //         b[ix] = b[i]
    //         if (ii > -1)
    //             for (let j = ii; j < i; j++) sum -= m[i][j] * b[j]
    //         else if (sum)
    //             ii = i
    //         b[i] = sum
    //     }
    //     for (let i=n-1; i>=0; i--) {
    //         let sum = b[i]
    //         for (let j=i+1; j<n; j++) sum -= m[i][j] * b[j]
    //         b[i] = sum / m[i][i]
    //     }
    //     return b // solution vector x
    // }

    // return solve(matrix, vector)

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

    vector_X = Gaussian(matrix_A, vector_B)
    //vector_X = Cramer(matrix_A, vector_B)
    console.log(vector_X)
}



// let test_A = [
//     [2, 5, 4],
//     [1, 3, 2],
//     [2, 10, 9]
// ]

// let test_B = [30, 150, 110]
// let test_X = [] //-152 270 -254
