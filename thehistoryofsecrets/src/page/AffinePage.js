import affineCipher from "../algo/affine";
import React, {useState, useEffect, useCallback} from 'react'
import EncryptToggle from "../helperComponents/EncryptToggle";
import EncryptedContent from "../helperComponents/EncryptedContent";

const AffineCipherExample = () => {
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerAlphabet = "abcdefghijklmmnopqrstuvwxyz";

    const [cipherAlphabet, setCipherAlphabet] = useState(upperAlphabet);
    const [plainText, setPlainText] = useState('');
    const [cipherText, setCipherText] = useState('');
    const [multiplier, setMultiplier]= useState(1);
    const [shiftValue, setShiftValue] = useState(0);

    const handleTextInput = (event) => {
        setPlainText(event.target.value);
    }

    const handleMultiplierChange = event => {
        setMultiplier(parseInt(event.target.value));
    };

    const handleShiftChange = event => {
        //Must be parsed as an Int due to input range value type
        setShiftValue(parseInt(event.target.value));
    };

    useEffect(() => {
        setCipherAlphabet(affineCipher(upperAlphabet, multiplier, shiftValue));
        setCipherText(affineCipher(plainText, multiplier, shiftValue));
    }, [plainText, multiplier, shiftValue]);

    return(
        <>
            {upperAlphabet}<br/>
            {cipherAlphabet}<br/>
            <input 
                type = "range"
                min = "0"
                max = "25"
                value={shiftValue}
                onChange={handleShiftChange}
            />
            <select onChange={handleMultiplierChange}>
                <option value = "1">1</option>
                <option value = "3">3</option>
                <option value = "5">5</option>
                <option value = "7">7</option>
                <option value = "9">9</option>
                <option value = "11">11</option>
                <option value = "15">15</option>
                <option value = "17">17</option>
                <option value = "19">19</option>
                <option value = "21">21</option>
                <option value = "23">23</option>
                <option value = "25">25</option>
            </select>
            <br/>
            <input
                type = "text"
                placeholder = "Enter your plaintext here"
                onChange = {handleTextInput}
            />
            <br/>
            <pre>{cipherText}</pre>
        </>
    )
}

const AffineCipherPage = () => {
    const [encryptPage, setEncryptPage] = useState(0);
    const pageEncryptionCipher = (text) => affineCipher(text, 3, 7);
    return(
    <>
        <h1>Affine Ciphers</h1>
        <p><EncryptedContent encrypt={encryptPage} algorithm={pageEncryptionCipher}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </EncryptedContent></p>
        <AffineCipherExample/>
        <p><EncryptedContent encrypt={encryptPage} algorithm={pageEncryptionCipher}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </EncryptedContent></p>
        <EncryptToggle encryptPage={encryptPage} setEncryptPage={setEncryptPage}/> 
    </>
    )
}

export default AffineCipherPage