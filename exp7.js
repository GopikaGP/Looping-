//  w a p to given number is palindrone or not

num = 121
temp = num
reverse = 0
reminder = 0

while(num!=0){
    reminder=num%10
    reverse=reverse*10+reminder
    num=Math.floor(num/10)
}
if(reverse===temp){
    console.log("the number is palindrone");
}else{
    console.log("the number is not a palindrone");
}