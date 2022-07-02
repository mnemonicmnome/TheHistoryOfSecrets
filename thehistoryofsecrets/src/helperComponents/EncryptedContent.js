import React, { Children, useEffect, useState } from "react";

/*
    const EncryptedContent = ({encrypt, algorithm, text}) => {

        //TODO: FIND METHOD TO ANIMATE TEXT CHANGING FROM PLAINTEXT TO CIPHERTEXT
        //Investigate: react-typist package

        return(
            <p>
                {encrypt == 0 && text}
                {encrypt == 1 && algorithm(text)}
            </p>
        );
    }
*/

const EncryptedContent = ({encrypt, algorithm, children: text}) => {
    //Requires a carefully constructed function as argument that requires only the text as an argument
    //Currently only accepts a single string as child. Otherwise it will break
    //TODO: rework to accept multiple children
    //This never changes, throw away function to change it
        //May need to reconsider this if we want to allow the user to change the page cipher
    const [cipherText] = useState(algorithm(text));
    const initialText = () => {
        if(encrypt) return cipherText;
        else return text;
    }
    const [currentText, setCurrentText] = useState(initialText());
    const [targetText, setTargetText] = useState();
    const [tapeHead, setTapeHead] = useState(0);
    const [animationDelay, setAnimationDelay] = useState(10);

    const beginTextAnimation = () => {
        //Reset the tape head
        setTapeHead(0)
        //Decide what the target will be
        if(encrypt){
            setTargetText(cipherText)
        }
        else{
            setTargetText(text)
        }
    }

    const continueTextAnimation = () => {
        if(targetText == currentText || targetText == null || tapeHead == targetText.length){
            return
        }
        setTimeout(() => {
            let currentTextArray = currentText.split('')
            let targetTextArray = targetText.split('')
            //TODO: fix for strings with differing length
            currentTextArray[tapeHead] = targetTextArray[tapeHead]
            setCurrentText(currentTextArray.join(''))
            setTapeHead(tapeHead + 1);
        }, animationDelay)
    }

    useEffect(beginTextAnimation, [encrypt])
    useEffect(continueTextAnimation, [targetText, tapeHead])

    return(
        <>
            {currentText}
        </>
    );
}

export default EncryptedContent;