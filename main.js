const readline = require('readline');
const { setTimeout } = require('timers');

const rl = readline.createInterface({

input: process.stdin,

output: process.stdout

});
let i=0;
let queue = true;
let qtime = [1000,2000,3000,4000];
let qtimeran = qtime[Math.floor(Math.random()* qtime.length)];
let custName = ["ali","abu","ahmad","syamil"]

let counter = ["O","0","O","O","O"] ;


           while(queue){
                
                
                if(counter[i]=="O"){
                    
                    counter[i]=custName[Math.floor(Math.random()* custName.length)];
                    console.log(counter);
               
                }
                else{
    
                    counter[i]="O";
                  setTimeout(()=>{  
                    console.log(counter);
                   
                },1000000);
                };

                if (i==5) i = 0;
                else i++;
               
                
             };
      