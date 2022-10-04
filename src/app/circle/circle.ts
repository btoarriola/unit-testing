export function circle(r:number){
    var t =0;
    if(r<=0){
        t=0;
    }
    else{
        var pi=3.1416;
        t=pi*(r*r);
    }
    return t;
}