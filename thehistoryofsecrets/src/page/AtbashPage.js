import atbashCipher from '../algo/atbash';
import React, {useState, useEffect, useCallback} from 'react'
import EncryptToggle from "../helperComponents/EncryptToggle";
import EncryptedContent from "../helperComponents/EncryptedContent";

const AtbashCipherExample = () => {
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerAlphabet = "abcdefghijklmmnopqrstuvwxyz";

    const [cipherAlphabet] = useState(atbashCipher(upperAlphabet));
    const [plainText, setPlainText] = useState('');
    const [cipherText, setCipherText] = useState('');

    const handleTextInput = (event) => {
        setPlainText(event.target.value);
    }

    useEffect(() => {
        setCipherText(atbashCipher(plainText));
    }, [plainText]);

    return(
        <>
            {upperAlphabet}<br/>
            {cipherAlphabet}<br/>
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

const AtbashCipherPage = () => {
    const [encryptPage, setEncryptPage] = useState(0);
    const pageEncryptionCipher = (text) => atbashCipher(text);
    return(
    <>
        <h1>Atbash Cipher</h1>
        <p><EncryptedContent encrypt={encryptPage} algorithm={pageEncryptionCipher}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </EncryptedContent></p>
        <AtbashCipherExample/>
        <p><EncryptedContent encrypt={encryptPage} algorithm={pageEncryptionCipher}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </EncryptedContent></p>
        <EncryptToggle encryptPage={encryptPage} setEncryptPage={setEncryptPage}/> 
    </>
    )
}

export default AtbashCipherPage