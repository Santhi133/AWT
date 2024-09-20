let colors=["purple","red","pink","gold","green","black"];
colors.forEach((element,index)=>{
    console.log(element)
})
colors.forEach((element,index)=>{
    console.log(element)
})
let numbers=[1,2,3,4,5];
let new_x=numbers.forEach((ele,i)=>{
    return ele*2;
})
let new_y=numbers.filter((ele,i)=>{
    return ele%2==0;
})
let new_z=numbers.map((ele,i)=>{
    return ele*2;
})
console.log(new_x)
console.log(new_y)
console.log(new_z)