import React from 'react';
import {MdNavigateBefore, MdNavigateNext} from 'react-icons/md';
import './styles/Month.scss';

const Month = ({year, month}) => {

    return (
        <div className="Header">
            <div className="header-sort">
                <div className="nav"><MdNavigateBefore /></div>
                <div className="month" type="text">{`${year}. ${month + 1}`}</div>
                <div className="nav"><MdNavigateNext /></div>
            </div>
        </div>
    );
};

export default Month;