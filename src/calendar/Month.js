import React from 'react';
import {IoCaretBack, IoCaretForward} from 'react-icons/io5';
import './styles/Month.scss';

const Month = ({month}) => {
    const formMonth = month + 1 < 10 ? `0${month + 1}` : month;

    return (
        <div className="Header">
            <div className="header-sort">
                <div className="nav"><IoCaretBack /></div>
                <div className="month" type="text">{`${formMonth}`}</div>
                <div className="nav"><IoCaretForward /></div>
            </div>
        </div>
    );
};

export default Month;