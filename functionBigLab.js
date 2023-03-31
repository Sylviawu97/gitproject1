//greetCustomer that will log "Welcome to the store" + the name parameter

const greetCustomer =(name)=>{
    console.log("Welcome to the store "+ name)
}
greetCustomer("Sylvia")

//Write a function called logPositiveOrNegative that will log if the number parameter is a negative number, positive number, or 0

const logPositiveOrNegative = (number) =>{
    if(number<0){
          console.log("It is negative")
    }
    else if(number===0){
          console.log("It is 0.")
    }
    else if(number>0){
        console.log("It is positive")
    }
}
logPositiveOrNegative(6)

//3. Write a function called returnIsPositive that will return if the number parameter is a positive "true" or not  positive "false"

const returnIsPositive =(number)=>{
    if (number>0){
        console.log(true);
    }
    else if(number<=0){
        console.log(false);
    }
}
returnIsPositive(30)


//4. Write a function called returnIsTooShort that will return true if the password parameter is shorter than 8 characters

const returnIsTooShort =(passwordArray)=>{
    if (passwordArray.length<8){
        console.log(true)
    }
}
returnIsTooShort([1,3,5])

//5. Write a function called returnIsBreakingLaw that will return true if the age parameter is < 21 AND drink parameter is "alcohol"

const returnIsBreakingLaw=(age,drink)=>{
    if(age>21 && drink==="alcohol"){
        console.log(true)
    }
}
returnIsBreakingLaw(18,"coke")