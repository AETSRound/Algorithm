
function kruskal(nodes){
    let temp = nodes.sort((a,b)=> a[2] - b[2]);
    console.log(temp);
}

let arr = [[1,7,12], [1,4,28], [1,2,67], [1,5,17], [2,4,24], [2,5,62], [3,5,20], [3,6,37], [4,7,13], [5,6,45], [5,7,73]];
kruskal(arr);