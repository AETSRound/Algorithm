function solution(N, arr){
    let store = [];
    let temp = 0;
    for(let i in arr){
        console.log(store);
        if(i == 0){
            store.push(arr[i]);
        }else{
            if(temp + arr[i] > N){
                store.push(arr[i]);
            }else{
                let j = store.length -1;
                console.log(arr[i]);
                console.log(store[j]);
                while(arr[i] + store[j] <= N && j>=0){
                    console.log("여기들어옴");
                    j--;
                }
                store[j+1] = store[j+1] + arr[i];
            }
        }
        
        temp = arr[i];
    }
    console.log(store);
    return store;
}

// console.log(solution(4,[2,3,1]));
solution(4,[2,3,1]);
solution(4,[2,3,2,3,1]);
solution(4,[3,4,2,3,1]);