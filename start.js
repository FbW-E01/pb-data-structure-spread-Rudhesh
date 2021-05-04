const euroCountries = [ "finland", "germany", "italy", "spain", "france"];

const asianCountries = ["India", "japan", "China", "Korea", "Sri lanka"];

euroCountries.push(...asianCountries);

console.log(euroCountries);

worldCountries = [...euroCountries, ...asianCountries ]

console.log(worldCountries);

// 2. Copying Arrays

const array = ["A", "B"]
const copyTest = array;

copyTest.push("foobar");
console.log(array)

// 3. Find the Largest...

const randomNumber = [22,33,43,56,77,43,3,23,4,5,66,7,78,88,8];
const biggestNumber = Math.max(...randomNumber);

console.log(biggestNumber);

// 4. Find the Smallest
const randomNumbers = [22,33,43,56,77,43,3,23,4,5,66,7,78,88,8];
const smallestNumber = Math.min(...randomNumber);

console.log(smallestNumber);


// 5. Clone and Merge

const person = {name: "John"}
const job = {role: "Teacher"}

//5.1 Clone the person object.
 
const personClone = {    
    ...person    
};  
console.log(personClone)

// Merge these two objects into one object: "employee". Use the spread operator to do so.
employee = {...person, ...job};

console.log(employee);


//Then change the values of the properties in the employee object.

employee.name = "Rudesh"

employee.role = "Student"

console.log(employee);

//Bonus: 6. Is the average a whole number?


let isWhole = (...num) => {

    let sum = 0;
for (let i = 0; i < num.length; i++) {
    sum = sum + num[i];}
if (sum / num.length % 1 == 0) {
    return true;
}
   
  return false;  
    
}


console.log(isWhole(1, 2, 3, 4));
console.log(isWhole(9, 2, 2, 5));


console.log(isWhole([9, 2, 2, 5]));

