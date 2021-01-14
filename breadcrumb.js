// Breadcrumb Generator
function generateBC(urls, seperator){
    const ANCHOROPENTAG = '<a href="/';
    // 이 곳에 뭔가 들어와야 함.
    const ANCHORMIDTAG = '">';
    console.log(urls);
    const ANCHORCLOSETAG = '</a>';
    const SPANOPENTAG = '<span class="active">';
    const SPANCLOSETAG = '</span>';

    let idx = urls.indexOf("//");
    if(idx > -1){
        temp = urls.split("").splice(idx + 2);
        urls = temp.join("");
    }

    let oneURL = false;
    oneURL = !urls.includes("/");
    let urlArr = urls.split('/');

    if( urlArr[urlArr.length-1].split(".")[0] == "index" ){
        urlArr.pop();
        if(!oneURL && urlArr.length == 1){
            oneURL = true;
        }
        
    }
    if( urlArr[urlArr.length-1].includes("?")){
        urlArr[urlArr.length-1] = urlArr[urlArr.length-1].split("?")[0];
    }
    if( urlArr[urlArr.length-1].includes("#")){
        urlArr[urlArr.length-1] = urlArr[urlArr.length-1].split("#")[0];
    }

    let result = '';

    console.log(urlArr);
    for(let i in urlArr){
        if(oneURL || !urlArr[urlArr.length-1] ){
            result += SPANOPENTAG + "HOME" + SPANCLOSETAG;
            break;
        }else if(i == urlArr.length -1 ){
            result += SPANOPENTAG + shorten(urlArr[i].toUpperCase().split('.')[0]) + SPANCLOSETAG;
            break;
        }else if(i == 0 ){
            result += ANCHOROPENTAG + ANCHORMIDTAG+"HOME" + ANCHORCLOSETAG;
        }else{
            let ucopy = [];
            Object.assign(ucopy, urlArr);
            let temp = ucopy.splice(1, i);
            result += ANCHOROPENTAG + temp.join("/") + "/" +ANCHORMIDTAG+shorten(urlArr[i].toUpperCase())+ ANCHORCLOSETAG;
        }
        result +=seperator;
        console.log(result);
    }

    function shorten(words){
        if(words.length <= 30){
            return words.replace(/-/g, " ");
        }else{
            let sWords = "";
            words = words.replace(/-/g, " ");
            let rArr = words.split(" ");
            let wArr = ["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"];
            let narr =[];
            narr = rArr.filter( word => !wArr.includes(word.toLowerCase()));
            for(let r of narr){
                if(r){
                    sWords += r.split("")[0];
                }
            }
            return sWords;
        } 
    }
    console.log(result);
    return result;
}

// generateBC("mysite.com/very-long-url-to-make-a-silly-yet-meaningful-example/example.htm", " > ")
// generateBC("www.microsoft.com/important/confidential/docs/index.htm#top", " * ")
// generateBC("www.very-long-site_name-to-make-a-silly-yet-meaningful-example.com/users/giacomo-sorbi", " + ");
// generateBC("https://www.linkedin.com/in/giacomosorbi", " + ");
// generateBC("www.agcpartners.co.uk/", " * ");
// generateBC('www.agcpartners.co.uk', " * ");
// generateBC("https://www.agcpartners.co.uk/index.html",  "   ");
generateBC("pippi.pi/and-from-eurasian-paper-transmutation-a-bladder-or-in-uber/bioengineering-insider-and-insider-for-meningitis/by-of-immunity-bioengineering-the-kamehameha/files#images", "/")


// function generateBC(url, separator) {
//     var arr = url.replace(/((\/index)?\.(html?|(ph|as)p))|(\?.+|#.+|https?:\/\/|\/$)/g, '').split('/'), link='';
//     return arr.map(function(v, i, a) {
//       if(a.length === 1) {
//         return '<span class="active">HOME</span>'
//       } else if(i === a.length -1) {
//         return '<span class="active">'+ acronymize(v) +'</span>';   
//       } else if(i===0) {
//         return '<a href="/">HOME</a>';      
//       } else {
//         link = link ? link + '/' + v : v; 
//         return '<a href="/'+ link +'/">'+ acronymize(v) +'</a>';
//       }
//     }).join(separator);
//   }
  
//   function acronymize(str) {
//     var removeList = ["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"],
//         re = new RegExp("^(" + removeList.join('|') + ")$"), newStr = '';
//     if(str.length > 30) {
//       str.split('-').forEach(v => !re.test(v) ? newStr += v[0] : undefined);
//       return newStr.toUpperCase();
//     } else {
//       return str.replace(/-/g, ' ').toUpperCase();;
//     }
//   }