import { readFileSync } from "fs";

function getFileData(fileLocation) {
    const fileData = readFileSync(fileLocation, "utf8", (err, data) => {
        if(err) throw err; 
        return data;
    });
    return fileData;
};
const inputLocation = "./Day1/input.txt";
const inputData = getFileData(inputLocation);

//Part 1;
    // For each line combine the first and last digits to form a two digit number
        // example: 1abc2 = 12
    // Then sum up all the numbers
    // Answer was 56042
//Part 2;
    // Numbers spelled out in letters also now count 
        // example 1ba2fiveoad = 15 because of "five" being the last number

function convertTextToNum(text) {
    switch(text) {
        case "zer":
            return 0;
        case "on":
            return 1;
        case "tw":
            return 2;
        case "thre":
            return 3;
        case "fou":
            return 4;
        case "fiv":
            return 5;
        case "si":
            return 6;
        case "seve":
            return 7;
        case "eigh":
            return 8;
        case "nin":
            return 9;
        default:
            return text;
    };
};

const inputArray = inputData.split("\n");
let sum = 0;
inputArray.forEach((item) => {
    // const letterNum = "(one|two|three|four|five|six|seven|eight|nine|zero)";
    const letterNum = "(on(?=e)|tw(?=o)|thre(?=e)|fou(?=r)|fiv(?=e)|si(?=x)|seve(?=n)|eigh(?=t)|nin(?=e)|zer(?=o))"
    const regExp = new RegExp(`\\d|${letterNum}`, "g");
    const digits = item.match(regExp);

    let firstDigit = digits[0];
    let lastDigit = digits[digits.length-1];

    firstDigit = convertTextToNum(firstDigit);
    lastDigit = convertTextToNum(lastDigit);

    const newDigit = String(firstDigit)+String(lastDigit);
    sum += parseInt(newDigit);
    // const firstDigit = item.match(/\d/); // part1 code
    // const lastDigit = item.match(/\d(?=\D+$)|\d$/g); // part1 code
    // const newDigit = String(firstDigit)+String(lastDigit); //part1 code
    // sum += parseInt(newDigit); part1 code
});
console.log(sum);

