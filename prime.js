let n=10;
let coun=1;
for(let i=1;i<=n;i++){
    if(n%i==0){
        coun++;
    }
}
if(coun==2){
    console.log('Prime');
}else{
    console.log('not a prime');
}