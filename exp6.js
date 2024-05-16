// w a p of reverse of a given number?

number=123;
reminder=0;
reverse=0
while (number>0 ){
reminder=number%10
reverse=reverse*10+reminder
number=Math.floor(number/10)
}

console.log("the revirse of the number",reverse);