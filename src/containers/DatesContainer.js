import React from 'react';
import {connect} from 'react-redux';
import Dates from '../calendar/Dates';

const DatesContainer = ({year, month, dates, openModal}) => {
    return (
        <Dates year={year} month={month} dates={dates} openModal={openModal} />
    );
};

const mapStateToProps = state => ({
    year: state.year,
    month: state.month,
    dates: state.dates
});

export default connect(
    mapStateToProps
)(DatesContainer);