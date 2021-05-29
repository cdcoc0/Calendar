import React from 'react';
import {IoCaretBack, IoCaretForward} from 'react-icons/io5';
import './styles/Month.scss';

const Month = ({dates}) => {
    //const initYear = dates.getFullYear();
    const initMonth = dates.date.getMonth() + 1;

    return (
        <div className="header">
            <div className="navLeft"><IoCaretBack /></div>
            <div className="month" type="text">{initMonth < 10 ? `0${initMonth}` : `${initMonth}`}</div>
            <div className="navRight"><IoCaretForward /></div>
        </div>
    );
};

export default Month;