

function filter(arr){
    return arr.filter((num)=> {
        const is = num%3===0 && num%6===0 && num%9!==0
        return is
    })
}


console.log(filter([48, 20, 18, 7, 12,9, 8,10,12, 96, 3,36,51]))