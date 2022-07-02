//Affine mathematical expression: E(x) = (ax + b) % m
//a and m must be co-prime

const greatestCommonDivisor = (a, b) => {
    //Assumes integers as arguments

    if (a === 0 || b === 0){
        return 0;
    }
    else if (a == b){
        return a;
    }
    else if (a > b){
        return greatestCommonDivisor(a - b, b);
    }
    else{
        return greatestCommonDivisor(a, b - a);
    }
}

const isCoprime = (a, b) => {
    return (greatestCommonDivisor(a,b) === 1);
}

const affineCipher = (plainText, a, b) => {
    //Function assumes english alphabet
    const ALPHABET_SIZE = 26;
    
    const UPPER_OFFSET = 65;
    const LOWER_OFFSET = 97;

    let inputArray = plainText.split("");
    let outputArray = [];

    inputArray.forEach(letter => {
        //Get the ascii code for the letter
        let plainTextAscii = letter.charCodeAt();
        let CASE_OFFSET = null;
        let cipherTextAscii = plainTextAscii;
        if(!isCoprime(ALPHABET_SIZE, a)){
            //TODO: implement proper error checking
            return("Variable a and the length of the alphabet must be coprime.");
        }
        //Establishing the case offset is neccesary to normalize the values for modular arithmetic
        if (plainTextAscii >= 65 && plainTextAscii <= 90) {CASE_OFFSET = UPPER_OFFSET}
        else if (plainTextAscii >= 97 && plainTextAscii <= 122) {CASE_OFFSET = LOWER_OFFSET}

        //Checks to see if the character is alphabetical
        if (CASE_OFFSET){
            cipherTextAscii = ((a * (plainTextAscii - CASE_OFFSET) + b) % ALPHABET_SIZE + CASE_OFFSET);
        }

        //Add the new letter to an array
        outputArray.push(String.fromCharCode(cipherTextAscii));
    });

    //Create a string from the array of shifted letters
    let cipherText = outputArray.join("");
    return cipherText;
}

export default affineCipher;