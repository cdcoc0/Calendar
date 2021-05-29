import React from 'react';
import {IoCaretBack, IoCaretForward} from 'react-icons/io5';
import './styles/Month.scss';

const Month = ({year, month}) => {
    const formMonth = month + 1 < 10 ? `0${month + 1}` : month;

    return (
        <div className="header">
            <div className="navLeft"><IoCaretBack /></div>
            <div className="month" type="text">{`${year}. ${formMonth}`}</div>
            <div className="navRight"><IoCaretForward /></div>
        </div>
    );
};

export default Month;