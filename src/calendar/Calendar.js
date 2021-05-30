import React, {useState, useEffect} from 'react';
import Month from './Month';
import Dates from './Dates';
import {MdNavigateBefore} from 'react-icons/md';
import './styles/Calendar.scss';

const Calendar = () => {
    const [dates, setDates] = useState({date: new Date()});
    const daysArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const getDates = () => {
        setDates({
            date: new Date()
        });
    };

    useEffect(() => {
        getDates();
    }, []);

    const initYear = dates.date.getFullYear();
    const initMonth = dates.date.getMonth();
    const initDate = dates.date.getDate();

    return (
        <div className="Calendar">
            <Month year={initYear} month={initMonth} />
            <div className="navSpace">
                <div className="nav">
                        <MdNavigateBefore />
                </div>
                <div className="body">
                    <div className="daysArray">
                        {daysArray.map(d => <div key={d} className="days">{d}</div>)}
                    </div>
                    <Dates year={initYear} month={initMonth} date={initDate} />
                </div>
            </div>
        </div>
    );
}

export default Calendar;