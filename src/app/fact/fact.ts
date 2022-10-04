export function fact(n:number){
    var t =1;
    if(n<0 || n>16){
        t=0;
    }
    if(n==0){
        t=1;
    }
    else{
        for( var i=n;i>0;i--){
            t=t*i;
        }
        
    }
    return t;
}