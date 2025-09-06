// ### Управляющие конструкции
// - Условные операторы (if/else, switch)

let age = 18;

if (age < 18) {
    console.log("Access denied");
} else {
    console.log("Login Success");
}

let money = 1000;

if (money == 1000) {
    console.log("Can buy boots");
} else if (money == 800) {
    console.log("Can buy jacket");
} else if (money == 200) {
    console.log("Can buy cap");
} else {
    console.log("Not enaught money");
}

let day = 1;

switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Thuesday");
        break;
    default:
        console.log("Not day");
}
 
