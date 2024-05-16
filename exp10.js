// w a p to display numbers whose exponsetial is in the range of 8-36 where user can input power
// const number = parseInt(prompt("Enter a positive number: "));
// power = 2 1,4,9,16,25,36 = 3,4,5,6
power=2
i=1
ans=0
while(i<=36){
  ans=i**power

   if(ans>=8 && ans<=36) {
    console.log(i);
   }
   i++
 
}

