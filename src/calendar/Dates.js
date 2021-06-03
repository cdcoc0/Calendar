import React, {useCallback, useEffect, useState} from 'react';
import Todos from './Todos';
import './styles/Dates.scss';

const getPrevDates = (plDay, plDate, prev) => {
    if(plDay !== 6) {
        for(let i = 0; i < plDay + 1; i++) {
            prev.unshift(plDate - i);
        }
    }
};

const getNextDates = (tlDay, next) => {
    for(let i = 1; i < 7 - tlDay; i++) {
        next.push(i);
    }
};

const Dates = ({info, openModal}) => {
    const {year, month, date} = info;
    const [prevLast, setPrevLast] = useState({date: new Date(year, month, 0)});
    const [thisLast, setThisLast] = useState({date: new Date(year, month + 1, 0)});
    const [today, setToday] = useState({date});
    const [page, setPage] = useState([]);

    const getPage = useCallback(() => {
        const plDate = prevLast.date.getDate();
        const plDay = prevLast.date.getDay();
        const tlDate = thisLast.date.getDate();
        const tlDay = thisLast.date.getDay();
        const prev = [];
        const current = [...Array(tlDate + 1).keys()].slice(1);
        const next = [];
        getPrevDates(plDay, plDate, prev);
        getNextDates(tlDay, next);
        setPage(prev.concat(current, next));
    }, [prevLast, thisLast]);
    
    useEffect(() => {
        getPage();
        const oneMinCall = setInterval(() => {
            setPrevLast({date: new Date(year, month, 0)});
            setThisLast({date: new Date(year, month + 1, 0)});}, 1000);
        //setToday({year, month: month + 1, date});
        return () => clearInterval(oneMinCall);
    }, [year, month, date, getPage]);

    const initPage = useCallback(() => {
        //console.log(page);
        const firstDateIndex = page.indexOf(1);
        const lastDateIndex = page.lastIndexOf(thisLast.date.getDate());
        if(!page) {return;}
        //console.log(firstDateIndex, lastDateIndex);
        return (page.map((p, index) => {
            if(index >= firstDateIndex && index < lastDateIndex + 1) {
                return (
                    <div key={index} onClick={() => setToday({...today, date: p})} className="dateBlock">
                        <div className={`this ${p === today.date ? 'today' : ''}`} onDoubleClick={openModal}>
                            {p}
                            <div className="todo"></div>
                        </div>
                    </div>
                );
            } else {
                return (
                    <div key={index} className="dateBlock"><span className="other">{p}</span></div>
                );
            }
        }));
    }, [page, thisLast, today, openModal]);

    return (
        <div className="Dates">
            {initPage()}
        </div>
    );
}

export default Dates;