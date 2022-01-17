const  xValue=(value)=>{
while (value>0) {
console.log(value) 
value-=.5   
}
}
const oddNumber=()=>{
    let value=0
while (value<=100) {
    value%2 != 0 ?console.log(value):{} 
    value++
}
}
const print1ThroughN=(n)=>{
    let i=1 ,res=`n = ${n} print=`
    while (i<=n) {
        res+=`[${i}] `
        i++
    }
    /*n = 6 print [1] [2] [3] [4] [5] [6]*/
    console.log(res)
}
const sumOfFirstNNumber=(n)=>{
    let i=1 ,res=0
    while (i<=n) {
        res+=i
        i++
    }
    /*n = 5 suma = 15*/
    console.log(`n = ${n} sum = ${res}`)

}
print1ThroughN(2)