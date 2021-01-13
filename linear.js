//Twice linear

function dblLinear(numb){
    let emp = [1];
    let ind = 0;
    while(emp.length < 2 * numb){
        let i = 0;
        for(; i< emp.length; i++){
            // console.log(emp[i], emp[numb]);
            ind = emp[i];
            if (!emp.includes(2 * emp[i] + 1)){
                emp.push(2 * emp[i] + 1);
            }
            if (!emp.includes(3 * emp[i] + 1)){
                emp.push(3 * emp[i] + 1);
            }
            console.log(emp);
            emp = emp.slice(0,i).concat(emp.slice(i).sort((a,b)=> a-b));
            // console.log(x, 2*x+1 , 3*x+1, emp);
            console.log(emp);
            // console.log("길이 : "+emp.length);
            if(ind > emp[numb]){
                break;
            }
            // console.log(emp[i], ind);
            console.log();
        }
        if(ind > emp[numb]){
            console.log("끝");
            break;
        }
    }
    // console.log(emp);
    return emp[numb];
}

console.log(dblLinear(10));

//sort랑, break 조건을 fix하자.

// function dblLinear(n) {
  
//     var u = [1], pt2 = 0, pt3 = 0; //two pointer
    
//     for(var i = 1;i<=n;i++){
//       u[i] = Math.min(2* u[pt2] + 1, 3*u[pt3] + 1);
//       if(u[i] == 2 * u[pt2] + 1) pt2++;
//       if(u[i] == 3 * u[pt3] + 1) pt3++;
//     }

//     return u[n];
  
// }