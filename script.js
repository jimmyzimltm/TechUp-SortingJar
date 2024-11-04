// var age = 20
// age = age + 45

// var isMale = false
// var isLoggedIn = false



// console.log(age)
// console.log(isMale);
// console.log(isLoggedIn);



// if (isMale == true) {

//     console.log("You are male")

// } else {

//     console.log("You are not male")
// }

// while (age < 70) {

//     console.log("Your age is " + age );

//     age = age + 1;

// }


function captureName() {
    var user_name = document.getElementById("user-name-input").value

    const allNameFieldByClass = document.getElementsByClassName("namefield");
    let result = "document.getElementsByClassName('namefield')";
    for (let i = 0; i < allNameFieldByClass.length; i++) {
      allNameFieldByClass[i].textContent = user_name;
    }

//   document.getElementById("user-name").textContent = user_name
}



