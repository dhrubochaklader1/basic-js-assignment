// 1----------------------------

function radianToDegree(value) {
    if (typeof value === "string" || value <= 0) {
        return "enter correct number"
    }
    return (57.2958 * value).toFixed(2);
}
const element = radianToDegree(1);
console.log(element);

// 2-----------------------------------------------

function isJavaScriptFile(fileName) {
    if (fileName.length <= 2) {
        return "Enter another input. Because .Js portion that must be written at last of the file name or just .Js portion also correct.";
    }
    const firstest = fileName.split(".");
    const first1 = firstest.length - 1;
    const second = ("." + firstest[first1])
    if (second.toLowerCase() === ".js") {
        return true;
    }
    else {
        return false;
    }
}

const fileNameInput = "D.Js.jS";
const fileNameSet = isJavaScriptFile(fileNameInput)
console.log(fileNameSet)

// 3----------------------------------------

function oilPrice(Diesel, Petrol, Octane) {
    if (typeof Diesel === "string" || typeof Petrol === "string" || typeof Octane === "string") {
        return "enter number";
    }
    const diesel = 114;
    const petrol = 130;
    const octane = 135;
    return diesel * Diesel + petrol * Petrol + octane * Octane;
}
const sendOil = oilPrice(1, 1, "j");
console.log(sendOil);

// 4------------------------------------------

function publicBusFare(totalPeople) {
    if (totalPeople <= 61) {
        return "Increase People Number"
    }
    const reservedBus = 50;
    const microBus = 11;
    const publicBusPeopleFare = 250;
    let remainingOfReservedBus = totalPeople - reservedBus;
    let remainingOfMicroBus = remainingOfReservedBus - microBus;
    let remainingOfPublicBusFare = publicBusPeopleFare * remainingOfMicroBus;
    return remainingOfPublicBusFare;
}
const peopleNumber = publicBusFare(65);
console.log(peopleNumber);

// 5--------------------------------------------

function isBestFriend(obj1, obj2) {
    if (obj1.name === obj2.friend && obj1.friend === obj2.name) {
        return true;
    }
    else {
        return false;
    }
}

const firstObject =
{
    name: "tom",
    friend: "rock"
}

const secondObject = {
    name: "roc",
    friend: "tom"
}
const result = isBestFriend(firstObject, secondObject);
console.log(result);