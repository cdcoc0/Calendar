import React, {createContext, useState} from 'react';

const TodayContext = createContext({
    state: {todayYear: 2000, todayMonth: 10, todayDate: 1},
    actions: {
        setYear: () => {},
        setMonth: () => {},
        setDate: () => {}
    }
});

const TodayProvider = ({children}) => {
    const [todayYear, setTodayYear] = useState(2000);
    const [todayMonth, setTodayMonth] = useState(10);
    const [todayDate, setTodayDate] = useState(1);

    const value = {
        state: {todayYear, todayMonth, todayDate},
        actions: {setTodayYear, setTodayMonth, setTodayDate}
    };

    return (
        <TodayContext.Provider value={value}>{children}</TodayContext.Provider>
    );
};

const {Consumer: TodayConsumer} = TodayContext;
export {TodayProvider, TodayConsumer};

export default TodayContext;