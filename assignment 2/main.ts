//storing a person name in a variable

let personName:string = "Sehrish Ifitkhar";

//printing a person name in lowercase

console.log("lowercase:", personName.toLowerCase());

//printing a person name in Uppercase

console.log("Uppercase:",personName.toUpperCase());

//printing a person name in Titlecase

console.log("Titlecase:", personName.replace(/\b\w/g, c => c.toUpperCase()))