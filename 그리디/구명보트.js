// 탐욕법(Greedy) - 구명보트


// function solution(people, limit) {
//     // let answer = 0;
//     people.sort((a, b) => b - a);
//     let count = 0;
//     console.log(people);
//     while(people.length > 0){
//         let first = people.shift();
//         for(let i = 0; i < people.length;i++){
//             let p = people[i];
//             console.log(p);
//             if(p <= limit/2){
//                 count = count + Math.ceil(people.length/2) + 1;
//                 return count;
//             }
//             if(limit - first < 40){
//                 break;
//             }
//             if(limit - first >= p ){
//                 people.splice(people.indexOf(p),1);
//                 break;
//             }
//         }
//         count++;
//     }
//     return count;
// }


function solution(people, limit) {
    let count = 0;

    people.sort((a, b) => b - a);

    let first = 0;
    let second = people.length - 1;
    while (first <= second) {
        if (people[first] <= limit / 2) {
            count += Math.ceil((second + 1 - first) / 2);
            break;
        }
        count++;
        if (people[first] + people[second] <= limit) {
            first++;
            second--;
        }else{
            first++;
        }
    }

    return count;
}

console.log(solution([70, 50, 80, 50], 100));