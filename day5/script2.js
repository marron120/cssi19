// 
function f(x)
{
     return 3 * x + 7;
     console.log ("done");
}
// Display the result of
// calling the
console.log (f(2));
console.log (f(12));
console.log (f(7));


function g(x)
{
    return 5 * x + 5;
}
console.log (g(5));
console.log (g(13));
console.log (g(9));

function i(x,y)

{
    return x*x - y*y;
}
console.log(i(3,4));
console.log(i(4,3));
console.log(i(5,2));

function j(x,y,z)
{
    return x + y + z;
}
console.log (j(3,4,5))
console.log (j(6,8,1))
console.log (j(9,4,5))

function k(r)

{
    return 2 * Math.PI * r;
}
console.log ("\n");
console.log (k(1));
console.log (k(1.5));

function l(a,b,c)

    {
    var d = b**2 - 4 * a * c;
    if(d>=0)
    }
    {var srd =  Math.sqrt(d);
    return (-1 * b + srd/(2*a));

    }  
     else
    {
    return NaN;
    }

console.log (l(1,4,4));
console.log (l(1,1,-1));