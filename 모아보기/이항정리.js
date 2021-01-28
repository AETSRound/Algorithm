function parseAandB(expr) {
    let i = 1;
    let a = '';
    while(expr[i] === '-' || !isNaN(parseInt(expr[i])))
      a+=expr[i++];
    if(a==='-') a = '-1';
    let variable = expr[i++];
    let b = '';
    while(expr[i] === '+' || expr[i] === '-' || !isNaN(parseInt(expr[i])))
      b+=expr[i++];
    let n = expr.slice(i+2, expr.length);
    return {a: parseInt(a || 1), variable: variable, b: parseInt(b), n: parseInt(n)};
  }
  function bin(n,m) {
    const h = m > (n-m) ? m : n-m;
    const l = m > (n-m) ? n-m : m;
    let res = 1;
    for(let i = h+1; i <= n; i++) res*=i;
    for(let i = 1; i <= l; i++) res/=i;
    return res;
  }
  function expand(expr) {
    const nums = parseAandB(expr);
    let res = '';
    for(let i = 0; i <= nums.n; i++) {
      const binC = bin(nums.n, i);
      const a = Math.pow(nums.a, nums.n - i);
      const b = Math.pow(nums.b, i);
      let c = binC * a * b;
      if(c===0) continue;
      let variable = '';
      let varPower = nums.n - i;
      if(varPower === 1)
        variable = nums.variable;
      else if(varPower > 1)
        variable = `${nums.variable}^${varPower}`;
      if(c === 1 && varPower !== 0) c = '';
      if(c === -1 && varPower !== 0) c = '-';
      if(i > 0 && c > 0)
        c = `+${c}`;
      res += `${c}${variable}`;
    }
    return res;
}