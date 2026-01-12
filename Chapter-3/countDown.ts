function countDown(i:number){
    console.log(i);
    if(i<=1) {
        return
    } else {
        countDown(i-1)
    } 
}

countDown(10)