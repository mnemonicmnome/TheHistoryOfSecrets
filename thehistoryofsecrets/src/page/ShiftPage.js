import shiftCipher from "../algo/shift";
import React, {useState, useEffect} from 'react'
import EncryptedContent from "../helperComponents/EncryptedContent";
import EncryptToggle from "../helperComponents/EncryptToggle";

const ShiftCipherExample = () => {
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerAlphabet = "abcdefghijklmmnopqrstuvwxyz";

    const [plainText, setPlainText] = useState('');
    const [cipherText, setCipherText] = useState('');
    const [shiftValue, setShiftValue] = useState(0);

    const handleTextInput = (event) => {
        setPlainText(event.target.value);
    };

    const handleShiftChange = (event) => {
        setShiftValue(parseInt(event.target.value));
    }

    useEffect(() => setCipherText(shiftCipher(plainText, shiftValue))
    , [plainText, shiftValue]);

    return(
        <>
            {upperAlphabet}<br/>
            {shiftCipher(upperAlphabet, shiftValue)}<br/>
            <input 
                type = "range"
                min = "0"
                max = "25"
                value = {shiftValue}
                onChange={handleShiftChange}
            />
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

const ShiftCipherPage = () => {
    const [encryptPage, setEncryptPage] = useState(0);
    const pageEncryptionCipher = (text) => shiftCipher(text, 13);
    return(
    <>
        <h1>Shift Ciphers</h1>
        <p>
            <EncryptedContent 
            encrypt = {encryptPage} 
            algorithm = {pageEncryptionCipher}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </EncryptedContent>
            <EncryptedContent 
            encrypt = {encryptPage} 
            algorithm = {pageEncryptionCipher}>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </EncryptedContent>
            <EncryptedContent 
            encrypt = {encryptPage} 
            algorithm = {pageEncryptionCipher}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </EncryptedContent>
            <EncryptedContent 
            encrypt = {encryptPage} 
            algorithm = {pageEncryptionCipher}>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </EncryptedContent>
        </p>
        <ShiftCipherExample/>
        <EncryptToggle encryptPage={encryptPage} setEncryptPage={setEncryptPage}/>
    </>
    )
}

export default ShiftCipherPage