const CountToN=(x)=1
{
    let absx = Math.abs(x);
    let index=1;
    while (index <= absx)
    {
        console.log(index);
        index=index + 1;//index++ index+=1
    }
}
const Prompt = () =>
{
    while (true)
    {
        let response = prompt ("Enter a Number")
        response=Number(response)
        if (isNaN(response)){
        return response;}
    }
}
function Multiples(multi,m,n)
{
    for(let i=0; i<n; i++)
        multi(i)m*(i+1); 
    
    {
    return multi;

    }
}
let Array = [];
console.log(Multiples(myArray,5, 10));

function Multiples(mult,m,n)
{
    let absx= Math.abs(n);
    let index= 1;
    while(index <= absx)
    {
        mult push(index*m);
        index=index+1;
    }
}