def echo():
    response = raw_input ("Enter a String : ")
    print response + '\n' + response

echo()

def FizzBuzz(num):
    if  num % 3 == 0 & num % 5 == 0:
        print "FizzBuzz"
    elif num % 3 == 0:
        print "Fizz"
    elif num % 5 == 0:
        print "Buzz"
    else:
        print num

FizzBuzz(9)
FizzBuzz(10)
FizzBuzz(30)
FizzBuzz(7)