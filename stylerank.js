// Codewars style ranking system

// 랭크 분류 -8 ~ 8 (rank 0는 없음 -1 다음랭크는 1)
// 랭크를 승급하기 위한 progress score는 100점
// (랭크 차이)^2 * 10 progress point를 얻음


class User{

    constructor(){
        console.log(`constructor`);
        this.rank = -8;
        this.progress = 0;
    }

    rank(){
        console.log(`user.rank`);
        return this.rank;
    }
    progress(){
        console.log(`user.progress`);
        return this.progress;
    }

    incProgress(value){
        console.log(`user.incProgress(${value})`);
        let rankList = [-8 , -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8];
        
        if(rankList.indexOf(value) < 0){
            throw new Error();
        }

        let pPoint = 0;

        let  rankIdx = rankList.indexOf(this.rank);
        let  actIdx = rankList.indexOf(value);

        if(actIdx - rankIdx >= 1){
            pPoint = Math.pow(actIdx - rankIdx,2) * 10; 
        }else if(actIdx - rankIdx === 0){
            pPoint = 3;
        }else if(actIdx - rankIdx === -1){
            pPoint = 1;
        }

        // console.log(pPoint);
        this.progress += pPoint;
        let r = 0;
        while(this.progress >= 100){
            this.progress -= 100;
            r = rankList.indexOf(this.rank);
            if(rankList.indexOf(this.rank) != 15){
                r++;
            }
            this.rank = rankList[r];
        }

        if(this.rank === 8){
            this.progress = 0;
        }
    
        // console.log(this.progress);
        // console.log(this.rank);
    }
}


let user = new User()
user.rank; // => -8
user.progress; // => 0
user.incProgress(-7);
user.progress; // => 10
user.incProgress(-5); // will add 90 progress
user.progress; // # => 0 // progress is now zero
console.log(user.rank); // # => -7 // rank was upgraded to -7