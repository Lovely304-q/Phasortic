const add= (...args) => {
    console.log(args);
    let sum = 0;
    // args.forEach((ele) => sum += ele);
    for(let i=0;i<args.length;i++) {
        sum += args[i];
        
    }


}
add(1,2,4,5,6,7,8)