function solution()
{
    /**
     * 배열의 인덱스는 노드 번호를 뜻하고
     * 배열의 인덱스의 값은 부모 노드를 의미한다.
     * 
     * 최초 배열에는 자기 자신이 부모 노드로 존재한다.
     */
    let arr = [];
    for (let i = 1; i <= 10; i++){
        arr[i] = i;
    }
    //초기 값엔 노드 와 부모가 동일.

    console.log(arr);
    unionParent(arr, 1, 2); //합친다 = 연결되어있다.
    unionParent(arr, 2, 3);
    unionParent(arr, 3, 4);
    unionParent(arr, 5, 6);
    
    console.log(arr);
    
    console.log(findParent(arr, 1, 2)); // true
    console.log(findParent(arr, 1, 3)); // true
    console.log(findParent(arr, 1, 3)); // true
    console.log(findParent(arr, 4, 5)); // false
    console.log(arr);
}

// 두 개의 노드를 같은 부모 노드로 합친다.
export function unionParent(arr, a, b)
{
    a = getParent(arr, a);
    b = getParent(arr, b);

    // 두 노드 중 작은 부모 노드값을 가진 값으로 합친다.
    if (a < b)
        arr[b] = a;
    else
        arr[a] = b;
}

// 부모 노드를 찾는 재귀함수
export function getParent(arr, x)
{
    if (arr[x] === x) return x;
    return arr[x] = getParent(arr, arr[x]);
}

// 같은 부모 노드를 갖는지 확인한다.
export function findParent(arr, a, b)
{
    a = getParent(arr, a);
    b = getParent(arr, b);
    
    if (a === b)
        return true;
    else
        return false;
}

console.log(solution());
