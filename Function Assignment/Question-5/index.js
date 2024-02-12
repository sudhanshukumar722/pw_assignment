function Factorialofnumber(num){
     if(num>=0){
        if(num===0){
            return 1;
           }
           return num*Factorialofnumber(num-1);
      }else{
        //if num is negative the output is -1; 
        return -1;
      }
      
}
console.log(Factorialofnumber(5));
console.log(Factorialofnumber(4));
