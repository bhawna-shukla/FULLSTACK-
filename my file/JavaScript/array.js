let fruit=['banana', 'apple','mango','grapes']
console.log(fruit)

// array methods
console.log('-----------')
// 1. push ()- add element at the end of the array
// 2. pop()- remove element from the end of the array
// 3. shift()- remove element from the beginning of the array 
// 4, unshift()- add elemt fron the beginning  of the array
// 5. splice()-add or remove element of the array
// 6. slice()-copy element of the array
// 7. indexOf()- find the index of the elements 
// 8. concat()- merge to arrays
// 9. map()-iterate over the array
// 10. filter()-filter the elements of the array
// 11. forEach()-iterate over the array
console.log(fruit[3])
console.log(fruit.length)
console.log(fruit.slice(2,4))
// elements
fruit.push('stawberry')
console.log(fruit)

fruit.pop()
console.log(fruit)
 
fruit.shift()
console.log(fruit)
 fruit.unshift('watermelon')
 console.log(fruit)
   

 let veg=['potato','tomato', 'onion', ]
 let newarray =veg.concat(fruit)
 console.log(newarray)

let index =fruit.indexOf('mango')
console.log(index)
 
console.log('-------------------------')
let num =[1,2,3,4,5,6,7,8,9,10]
// iteration using
for(let i=0;i<num.length;i++){
    console.log(num[i]**2)
}
console.log('---------------')
 //iteration using forEach
num.forEach((i)=> {
    console.log(i**2)
})
console.log('-----------')
//interate using map
let square=num.map((x) => x**2)
console.log(square)
console.log('------------')
//filter function 
let evenNum =[]
for( let i=0;i<num.length;i++){
    if(i%2==0){
        evenNum.push(i)
    }
}
console.log(evenNum)


let even =num.filter((x)=> x%2==0)
console.log(even)

let odd =num.filter((x)=> x%2!=0)
console.log(odd)


//print a array of color
let color=['red','blue','violet','pink','skyblue','safron','yellow']
let newcolor =color.filter((x)=> x.length>4)
console.log(newcolor)


//print 1000 bt 3000
let nums =[999.1000,2453,2345,4567,2678,2567]
let findnums= nums.filter((x)=>x.length>3000 & x.length<1000)
console.log(findnums)

