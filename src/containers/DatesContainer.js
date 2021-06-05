import React from 'react';
import {connect} from 'react-redux';
import Dates from '../calendar/Dates';

const DatesContainer = ({year, month, initDate, prevLast, thisLast, openModal}) => {
    return (
        <Dates year={year} month={month} initDate={initDate} openModal={openModal} prevLast={prevLast} thisLast={thisLast} />
    );
};

const mapStateToProps = state => ({
    year: state.year,
    month: state.month,
    initDate: state.initDate,
    prevLast: state.prevLast,
    thisLast: state.thisLast
});

export default connect(
    mapStateToProps
)(DatesContainer);