//Twice linear

function dblLinear(numb){
    let emp = [1];
    while(emp.length < numb){
        for(let x of emp){
            console.log(emp);
            emp.push(2 * x + 1);
            emp.push(3 * x + 1);
            emp = emp.sort((a,b)=> a-b);
            if(emp.length > numb ){
                emp.pop();
                break;
            }
        }
    }
    console.log(emp);
    return emp.pop();
}

console.log(dblLinear(20));