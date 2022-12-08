

var person = {
    name: "endu",
    age: 27,
    margiage: false
}


var employees = [
    {name: "endu",
    age: 27,
    margiage: false
   },

    {name: "sami",
    age: 27,
    margiage: false
}
    
    ,
    {},{},[]
]

console.log(employees[1].age)



var customer = [
     
    {empName: "endu",
    age: 27,
    salary: 3000,
    margiage: false
   },

    {empName: "sami",
    age: 27,
    salary: 7000,
    margiage: false
   },
   {empName: "sami",
   age: 27,
   salary: 4000,
   margiage: false
  },
  {empName: "debe",
  age: 27,
  salary: 17000,
  margiage: false
 }
]





var hagbtamCustomer = customer.filter(

    function(emp){
         return emp.salary > 3000; 
    }
)


console.log(hagbtamCustomer);

