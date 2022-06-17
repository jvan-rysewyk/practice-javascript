// const firstName = "jason"
// let age = 34
// let isAlive = true
// let houseHoldItems = ["tv",34,true,false]

// console.log(firstName)
// console.log(age)
// console.log(isAlive)
// console.log(houseHoldItems)

// isAlive=false
// houseHoldItems[2] =false
// age= 69

// console.log(firstName)
// console.log(age)
// console.log(isAlive)
// console.log(houseHoldItems)

// this function sums numbers

const calculator = (num1, num2, operator) =>{
    if (operator === "-"){
        return num1 - num2
    } else if (operator === "+"){
        return num1 + num2
    }else if (operator === "*"){
        return num1 * num2
    }else if (operator === "/"){
        return num1 / num2
    } else {
        return "This is not an operator"
    }
}

document.getElementById("total").innerHTML=calculator(1, 2, "+")
