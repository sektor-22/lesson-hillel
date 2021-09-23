const arrr1 = [];
const arrr2 = [];
const arrr3 = [];
for(x=0;x < 5; x++) arrr1[x] = x;
for(x=0;x < 10; x++) arrr2[x] = x;
for(x=0;x < 15; x++) arrr3[x] = x;

const arr = [arrr1,arrr2,arrr3];

for(let i=0;i < arr.length; i++){
    for(let j=0;j < arr[i].length; j++){
       console.log(arr[i][j]);
       
   };
};
