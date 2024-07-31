const input=require("readline-sync")
let a=['1','0','0','1','1','0','0'];
let c=0;

for(let i=0;i<a.length;i++){
    if(a[i]==='0'){
        let t=a[i]
        a[i]=a[c];
        a[c]=t;
        c++;
    }
}
console.log(a);