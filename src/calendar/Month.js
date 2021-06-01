import React from 'react';
import {MdNavigateBefore, MdNavigateNext} from 'react-icons/md';
import moment from 'moment';
import './styles/Month.scss';

const Month = ({year, month, onIncrease, onDecrease}) => {
    const formMonth = moment(`${month + 1}`).format('MMMM')
    return (
        <div className="Header">
            {/* <div className="header-sort"> */}
                <div onClick={onDecrease}><MdNavigateBefore /></div>
                <div className="month" type="text">{`${formMonth} ${year}`}</div>
                <div onClick={onIncrease}><MdNavigateNext /></div>
            {/* </div> */}
        </div>
    );
};

export default Month;