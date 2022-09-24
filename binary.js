let ConverttoBinary = (num) =>
{

    let binnum=0;
    let rem,i=1,quo;

    while(num != 0) 
        {
            rem= num % 2;
            quo=parseInt(num/2);
            num=quo;

            binnum= binnum + rem *i;
            i=i*10;
     }

     console.log(`The binary conversion of the ${num} ====> ${binnum}`);
   
}

ConverttoBinary(17);
ConverttoBinary(15);
ConverttoBinary(140);
ConverttoBinary(1700);
ConverttoBinary(5);
