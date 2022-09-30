//
const pruebaArray = [1,3,5,7,8,10,11,4,2,2,2,3]

const grupo1 = 1;
let sum = 0;
let sum2= 0;
let sum3 = 0;

const conjunto = pruebaArray.reduce((res, pA) => {
   
    if(pA <=5) {
        sum = sum + 1
        
        res['1-5'] = sum;
        
    }
    if(pA <=8 && pA >=6) {
        sum2 = sum2 + 1
     
        res['6-8'] = sum2;
        
    }
    if(pA <=10 && pA >=9) {
        sum3 = sum3 + 1;
        
        res['9-10'] = sum3;
        
    } else {

    }
   
   
    




    
  return res;
},{});


