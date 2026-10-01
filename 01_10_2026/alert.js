
const pocz=-10, kon= 10, n=10;
let y="";
let x;

for(let i=0;i<=n;i++){
    do { x=Math.floor(Math.random()*(kon-pocz+1)+kon)
    }   while (x%2!=0);
    y+=x + ", ";  
}
alert("Moje liczby:\n" + y);