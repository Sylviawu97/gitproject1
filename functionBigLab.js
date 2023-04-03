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

//6. Make a variable called count.Write a function called addToCount that will add the number parameter to the count variable.Call addToCount 4 times with different numbers
let count=0;
const addToCount = (num) => {
  count += num;
  console.log(count);
}
addToCount(4)
addToCount(12)
addToCount(43)
addToCount(90)

//7. Write a function called returnIsChase that will return true if the name parameter is "Chase" - Make case insensitive "Chase" "CHASE" "CHasE" all return true
const returnIsChase = (name) => {
    if(name === "Chase" ||name === "CHASE" || name === "CHasE" ){
        console.log(true);
        return true;
    }
    
  }

returnIsChase("Chase")

//8. Make a variable called class that is an array ["Sally", "Sam", "Frodo", "Gandalf", "Eragorn", "Gimley"].Write a function called returnClassIsTooSmall that will return true if the students parameter has less than 10 students

let nameList = ["Sally", "Sam", "Frodo", "Gandalf", "Eragorn", "Gimley"];

const returnClassIsTooSmall =(studentName)=>{
    if(studentName.length < 10){
        console.log(true);
    }
}
returnClassIsTooSmall(nameList)

//9. Make a variable called combineStrings that will take stringOne parameter and stringTwo parameter and return them combined.call this function 3 times with 6 strings.
const combineStrings=(stringOne, stringTwo) =>{
    console.log(stringOne + stringTwo);
  }
  combineStrings('HELLO','WORLD')
  combineStrings('HELLO','SYLVIA')
  combineStrings('HEL','LO')

  //10.data type

  const returnDataType =(data)=>{
    console.log(typeof data)
  }
  returnDataType(4)

  //11. Write a function called addStudentToClass that will push the student parameter to the class array from problem number 8.Call this function 2 times.

  const addStudentToClass =(nameOfStudent)=>{
    nameList.push(nameOfStudent)
     console.log(nameList);
  }

  addStudentToClass("Peter")
  addStudentToClass("HAHA")