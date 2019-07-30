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