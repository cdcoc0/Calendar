import React, {useState, useEffect, useCallback} from 'react';
import Background from './Background';
import Month from './Month';
import Dates from './Dates';
import {MdNavigateBefore} from 'react-icons/md';
import './styles/Calendar.scss';

const Calendar = () => {
    const [dates, setDates] = useState({date: new Date()});
    const [info, setInfo] = useState({year: dates.date.getFullYear(), month: dates.date.getMonth(), date: dates.date.getDate()});
    const daysArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const getDates = useCallback(() => {
        setDates({
            date: new Date()
        });
        setInfo({
            year: dates.date.getFullYear(),
            month: dates.date.getMonth(),
            date: dates.date.getDate()
        });
    }, []);

    const onMonthIncrease = useCallback(() => {
        console.log('increase');
        if(info.month === 11) {
            setInfo({
                ...info,
                year: info.year + 1,
                month: 0
            });
        } else {
            setInfo({...info, month: info.month + 1});
        }
    }, [info])

    const onMonthDecrease = useCallback(() => {
        console.log('decrease');
        if(info.month === 0) {
            setInfo({
                ...info,
                year: info.year - 1,
                month: 11
            });
        } else {
            setInfo({...info, month: info.month - 1});
        }
    }, [info])

    useEffect(() => {
        getDates();
    }, []);

    // const initYear = dates.date.getFullYear();
    // const initMonth = dates.date.getMonth();
    // const initDate = dates.date.getDate();
    return (
        <div className="Calendar">
            <Background />
            <Month year={info.year} month={info.month} onIncrease={onMonthIncrease} onDecrease={onMonthDecrease} />
            <div className="navSpace">
                <div className="nav">
                    {/* <MdNavigateBefore /> */}
                </div>
                <div className="body">
                    <div className="daysArray">
                        {daysArray.map(d => <div key={d} className="days">{d}</div>)}
                    </div>
                    <Dates info={info} />
                </div>
            </div>
        </div>
    );
}

export default Calendar;