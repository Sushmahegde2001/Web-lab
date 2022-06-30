let disirium=(n)=>{ 
    let numb=parseInt(n),p=0,q=0; 
    while(numb>0) 
    { 
    p++; 
    numb=parseInt(numb/10); 
    } 
    let a=parseInt(0); 
    q=n; 
    while(n>0) 
    { 
    a=a+Math.pow(n%10,p); 
    p--; 
    n=parseInt(n/10); 
} 
if(q==a) 
return 1; 
else 
return 0; 
} 
for(let i=1;i<=100;i++) 
{ 
if(disirium(i)) 
console.log(i); 
} 