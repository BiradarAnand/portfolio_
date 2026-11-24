function add(a,b){
    return a-b;
}
function fact(n){
    if(n==0 || n==1){
        return 1;
    }
    let x=n;
    return n*fact(n-1);
}
module.exports=fact,add