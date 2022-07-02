import affineCipher from "./affine";

// const shiftCipher = (plainText, shiftAmount) => {
//     //funciton assumes an ascii sttring for plainText and an integer shiftAmount
//     //Considerations for a unicode equivalent seem outside of the scope of the current project
//     //Numerals, punctuation, symbols, etc. remain unaltered by this function

//     let inputArray = plainText.split("");
//     let outputArray = [];

//     inputArray.forEach(letter => {
//         //Get the ascii code for the letter
//         let plainTextAscii = letter.charCodeAt();
//         //Initialize storage variable for clarity
//         let cipherTextAscii = plainTextAscii;
//         //Handles shifting the upper case characters
//         if (plainTextAscii >= 65 && plainTextAscii <= 90){
//             cipherTextAscii = ((plainTextAscii - 65 + shiftAmount) % 26) + 65;
//         }
//         //Handles shifting the lower case characters
//         if (plainTextAscii >= 97 && plainTextAscii <= 122){
//             cipherTextAscii = ((plainTextAscii - 97 + shiftAmount) % 26) + 97;
//         }
//         //Add the new letter to an array
//         outputArray.push(String.fromCharCode(cipherTextAscii));
//     });

//     //Create a string from the array of shifted letters
//     let cipherText = outputArray.join("");
//     return cipherText;
// }

const shiftCipher = (plainText, shiftAmount) => {
    return affineCipher(plainText, 1, shiftAmount);
}

export default shiftCipher;