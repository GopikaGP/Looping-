// amstrong or not 
//  number is that equal to the  

num=1634
temp=num
reminder=0
ams=0
str=String(num)

while(num>0){
   reminder=num%10
   ams=ams+reminder**str.length 
   num=Math.floor(num/10)


}
if(ams==temp){
   console.log("ams");
}else{
    console.log("not ams");
}

