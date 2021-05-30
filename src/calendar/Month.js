import React from 'react';
import {MdNavigateBefore, MdNavigateNext} from 'react-icons/md';
import './styles/Month.scss';

const Month = ({month}) => {
    const formMonth = month + 1 < 10 ? `0${month + 1}` : month;

    return (
        <div className="Header">
            <div className="header-sort">
                <div className="nav"><MdNavigateBefore /></div>
                <div className="month" type="text">{`${formMonth}`}</div>
                <div className="nav"><MdNavigateNext /></div>
            </div>
        </div>
    );
};

export default Month;