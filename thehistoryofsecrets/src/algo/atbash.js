const atbashCipher = (plainText) => {
    //For ascii english
    const ALPHABET_SIZE = 26;
    const UPPER_OFFSET = 65;
    const LOWER_OFFSET = 97;

    let inputArray = plainText.split("");
    let outputArray = [];

    inputArray.forEach(letter => {
        let plainTextAscii = letter.charCodeAt();
        let CASE_OFFSET = null;
        let cipherTextAscii = plainTextAscii;

        //Establishing the case offset is neccesary to normalize the values for modular arithmetic
        if (plainTextAscii >= 65 && plainTextAscii <= 90) {CASE_OFFSET = UPPER_OFFSET}
        else if (plainTextAscii >= 97 && plainTextAscii <= 122) {CASE_OFFSET = LOWER_OFFSET}

        //Checks to see if the character is alphabetical
        if (CASE_OFFSET){
            //Normalizes values to 1-26
            //Inverts them
            //Converts them to the apropriate modulus value i.e. -1 % 26 should be equivalent to 25, not -1
            //Applies modulus
            //De-normalizes back to proper ascii value 
            cipherTextAscii = (((-1 * (plainTextAscii - CASE_OFFSET + 1)) + ALPHABET_SIZE) % ALPHABET_SIZE + CASE_OFFSET);
        }

        //Add the new letter to an array
        outputArray.push(String.fromCharCode(cipherTextAscii));
    });

    //Create a string from the array of shifted letters
    let cipherText = outputArray.join("");
    return cipherText;
}

export default atbashCipher;