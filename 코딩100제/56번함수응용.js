function nearest() {
    let tMap = new Map();
    tMap.set(220877,'korea');
    tMap.set(17098242,'rusia');
    tMap.set(9596961,'china');
    tMap.set(543965,'france');
    tMap.set(377915,'japan');
    tMap.set(242900,'england');

    let tarr = Array.from(tMap.keys()).sort((a,b) => a - b);
    console.log(tarr);
}


let nationWidth = {
    220877:'korea',
    17098242:'rusia',
    9596961:'china',
    543965:'france',
    377915:'japan',
    242900:'england',
}

nearest();