import React from 'react';

const SelectPaperButton = ({label, onClick}) => {
    return (
        <button onClick={onClick}>Choose {label} Paper</button>
    );
};

export default SelectPaperButton;