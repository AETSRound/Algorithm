// 탐욕법(Greedy)- 단속카메라


function solution(routes) {
    let cmr = [];
    routes.sort((a,b) => a[1] - b[1]);
    let point = -30001;
    for(let go of routes){
        if(point < go[0] ){
            cmr.push(point);
            point = go[1];
        }
    }
    return cmr.length;
}



solution([[-20,15], [-14,-5], [-18,-13], [-5,-3]]);