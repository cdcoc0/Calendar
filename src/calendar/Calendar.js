import React, {useState, useEffect} from 'react';
import Month from './Month';
import Dates from './Dates';

const Calendar = () => {
    const [dates, setDates] = useState({
        date: new Date()
    });

    const daysArray = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    const getDates = () => {
        setDates({
            date: new Date()
        });
    };

    useEffect(() => {
        getDates();
        //console.log(dates);
    }, []);

    return (
        <div>
            <Month dates={dates} />
            <div>
                {daysArray.map(d => <div key={d}>{d}</div>)}
            </div>
            <Dates />
        </div>
    );
}

export default Calendar;