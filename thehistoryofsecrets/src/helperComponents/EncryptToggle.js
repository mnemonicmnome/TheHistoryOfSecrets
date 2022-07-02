import React, { useState } from "react";

const EncryptToggle = ({encryptPage, setEncryptPage}) => {
    //For use encrypting the whole page with a pre-determined algorithm
    //TODO: Find a way to disable toggling until encryption of page is complete
    //Seems challenging considering differet segments will complete at different times
    const handleEncryptChange = event => {
        setEncryptPage(parseInt(event.target.value));
    }

    return (
    <>
        <div>Encrypt this Page: </div>
        <input       
            type = "range"
            min = "0"
            max = "1"
            value = {encryptPage}
            onChange = {handleEncryptChange}
        />
    </>
    );
}

export default EncryptToggle;