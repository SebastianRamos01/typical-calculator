    const operationDisplay = document.querySelector(".display")
    const resultDisplay = document.querySelector(".result")
    const butonsNumbers = document.querySelectorAll(".number")
    const butonsoperators = document.querySelectorAll(".operator")
    const numbers = [0,1,2,3,4,5,6,7,8,9]
    
    butonsNumbers.forEach(number => {
        number.addEventListener('click', () => {
            console.log(number.value)
            const clickedButon = number.value

            if (operationDisplay.value === "0") {
                operationDisplay.value = clickedButon
            }else{
                operationDisplay.value += clickedButon
            }

        })
    })
    butonsoperators.forEach(operation => {
        operation.addEventListener('click', () => {
            console.log(operation.value)

            if (operation.value === 'Del') {
                operationDisplay.value = operationDisplay.value.slice(0, -1)
                return
            }
            if (operation.value === '()') {
                if (operationDisplay.value.includes('(')) {
                    operationDisplay.value += ')'
                }else{
                    operationDisplay.value += '('
                }
                return
            }
            if (operation.value === '=') {
                try {
                    resultDisplay.value = eval(operationDisplay.value)
                } catch{
                    resultDisplay.value = 'Syntax Error'
                }
                return
            }
            if (operation.value === "Clear") {
                operationDisplay.value = ''
                resultDisplay.value = ''
            }else{
                const clickedButon = operation.value
                operationDisplay.value += clickedButon
            }

        })
    })