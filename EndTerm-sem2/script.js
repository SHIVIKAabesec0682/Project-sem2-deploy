function checkNumber() {
    let number = document.getElementById("num").value;
    let result = document.getElementById("result");

    if (number === "") {
        result.innerHTML = "Please enter a number.";
    }
    else if (number % 2 === 0) {
        result.innerHTML = "The number " + number + " is Even.";
    }
    else {
        result.innerHTML = "The number " + number + " is Odd.";
    }
}