//write two functions
//function 1 takes 1 param and console logs it
//function 2 takes 1 param and treats that param like a function and calls it with a string, any string
//at the top of your program call function 2 with function 1 as the param 
myfunction2(myfunction)

function myfunction(param1){
	console.log(param1)
}

function myfunction2(callback){
	callback('mystring')
}

/* create an array
store an array of numbers to a var
define a function that takes a number and multiplys it by itself and console logs it
use for each of the array to call the new function on every member of the array 
*/

let array = [1,2,3,4,5,6]

function math(num1){
	console.log(num1 * num1)
}

array.forEach(math)

///////////////////////////////////////////

var array = [1,2,3,4,5,6,7,8,9,10]

Array.prototype.groupBy = function (callback) {
	let groups = {}
	this.forEach(function(item){
		let key = callback(item)

		if (!groups[key]) {
			groups[key] = []
		}

		groups[key].push(item)
	})
	return groups
}
console.log(array.groupBy(evenOrOdd))

function evenOrOdd(num1) {
	if (num1 % 2 === 0){
		return "even"
	}
	else {
		return "odd"
	}
	
}
