import { readFileSync } from "fs";

function getFileData(fileLocation) {
    const fileData = readFileSync(fileLocation, "utf8", (err, data) => {
        if(err) throw err; 
        return data;
    });
    return fileData;
};
const inputLocation = "./input.txt";
const inputData = getFileData(inputLocation);

//Part 1;
    // For each line combine the first and last digits to form a two digit number
        // example: 1abc2 = 12
    // Then sum up all the numbers
    // Answer was 56042
//Part 2;
    // Numbers spelled out in letters also now count 
        // example 1ba2fiveoad = 15 because of "five" being the last number

const inputArray = inputData.split("\n");
let sum = 0;
inputArray.forEach((item) => {
    const letterNum = /one|two|three|four|five|six|seven|eight|nine|zero/g
    const firstRegexp = new RegExp("\d" + "|" + letterNum); 
    const lastRegexp = new RegExp("")
    const firstDigit = item.match(firstRegexp);
    const lastDigit = item.match(/\d(?=\D+$)|\d$/g);
    // const firstDigit = item.match(/\d/); // part1 code
    // const lastDigit = item.match(/\d(?=\D+$)|\d$/g); // part1 code
    const newDigit = String(firstDigit)+String(lastDigit);
    sum += parseInt(newDigit);
});
console.log(sum);
