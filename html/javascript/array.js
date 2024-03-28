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