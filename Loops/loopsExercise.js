//Exercise level 1:
//1. Iterate 0 to 10 using for loop, do the same using while and do while loop
for(let i=0; i<=10; i++) {
    console.log(i)
}

let j=0;
while(j<=10) {
    console.log(j);
    j++;
}

let k=0;
do {
    console.log(k);
    k++;
}
while(k<=10)


//2. Iterate 10 to 0 using for loop, do the same using while and do while loop
for(let i=10; i>=0; i--) {
    console.log(i)
}

let i=10;
while(i>=0) {
    console.log(i)
    i--
}

let a=10;
do {
    console.log(a)
    a--
}
while(a>=0)


//3. Iterate 0 to n using for loop
let n=2;
for(let i=0; i<=n; i++)
{
    console.log(i);

}

/*4 Write a loop that makes the following pattern using console.log():

#
##
###
####
#####
######
####### */

console.log('#')
console.log('##')
console.log('###')
console.log('####')
console.log('#####')
console.log('######')
console.log('#######')

/*Use for loop to iterate from 0 to 100 and print only even numbers
*/
for(let i = 0; i<=100; i++) {
    console.log(`${i%2==0}`)
}