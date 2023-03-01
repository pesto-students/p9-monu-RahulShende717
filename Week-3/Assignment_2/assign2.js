//*******************************call method*********************************

function fullName(title){
    return `Student full name is ${title} ${this.firstName} ${this.lastName}`;
}

const student1 = {
    firstName: "Rahul",
    lastName: "Shende"
}

const student2 = {
    firstName: "Pankaj",
    lastName: "Lohar"
}



const result1 = fullName.call(student1, "Mr"); 
const result2 = fullName.call(student2, "Miss");

console.log(result1); 
console.log(result2); 






//*******************************Apply Aethod ********************************

function empInfo(title, designation, company){
    return `${title} ${this.firstName} ${this.lastName} worked in ${company} as ${designation}`;
}

const employee1 = {
    firstName: "Rahul",
    lastName: "Shende"
}

const employee2 = {
    firstName: "Pankaj",
    lastName: "Lohar"
}


const result11 = empInfo.apply(employee1, ["Mr", "Senior Developer", "Microsoft"]);
console.log(result11)

const result22 = empInfo.apply(employee2, ["Miss", "Juniour Developer", "Uber"]); 
console.log(result22) 





//**************************************Bind Method*****************************

function fullName(title){
    return `Student full name is ${title} ${this.firstName} ${this.lastName}`;
}

const student111 = {
    firstName: "Rahul",
    lastName: "Shende"
}

const student222 = {
    firstName: "Pankaj",
    lastName: "Lohar"
}


//case-1
const result111 = fullName.bind(student111); //returns function
console.log(result111) //[Function: bound fullName]
console.log(result111("Mr")); //Student full name is Mr Rahul Shede

              //or you can write in concise way

const result222 = fullName.bind(student111, "Mr"); //returns function
console.log(result222) //[Function: bound fullName]
console.log(result222()); //Student full name is Mr Pankaj Lohar             


//case-2
const result333 = fullName.bind(student222); //returns function
console.log(result333) //[Function: bound fullName]
console.log(result3("Miss")); //

              //or you can write in concise way
              
const result4 = fullName.bind(student2, "Miss"); //returns function
console.log(result4) //[Function: bound fullName]
console.log(result4());     


