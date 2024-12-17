// let i = 1;
// while(i <= 100) //true
// {
//     console.log(i);
//     //i++; 
//     i = i + 1;
// }

// let str = "Anna";
// let nLetter = 0;
// i = 0;
// while(i < str.length)
// {
//     if(str[i] === "n")
//     {
//         nLetter = nLetter + 1;
//     }        
//     i++;
// }
// console.log(`В слове ${str} букв n: ${nLetter}`);

for(i = 1; i <= 100; i++)
{
    if (i % 3 === 0 && i % 5 ===0)
    {
        console.log(`Число ${i} - кратно 3 и 5`);
    }
    else if (i % 3 === 0)
    {
        console.log(`Число ${i} - кратно 3`);
    }
    else if (i % 5 === 0)
    {
        console.log(`Число ${i} - кратно 5`);
    }
    else
    {
        console.log(i);
    }
    
}