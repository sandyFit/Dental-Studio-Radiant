import React, { useState } from 'react';
import { startOfWeek, endOfWeek, startOfDay, eachDayOfInterval, addWeeks, isSameDay, format } from 'date-fns';
import "react-day-picker/dist/style.css";
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const BookingCalendar = () => {
    const [currentWeekStart, setCurrentWeekStart] = useState(startOfWeek(new Date(), { weekStartsOn: 1 }));

    const weekDays = eachDayOfInterval({
        start: currentWeekStart,
        end: endOfWeek(currentWeekStart, { weekStartsOn: 1 }),
    });

    // Get today's date reset to the start of the day for accurate comparison
    const today = startOfDay(new Date());

    const handlePrevWeek = () => {
        setCurrentWeekStart(addWeeks(currentWeekStart, -1));
    };

    const handleNextWeek = () => {
        setCurrentWeekStart(addWeeks(currentWeekStart, 1));
    };

    // Assuming the month will be the same for all days in the rendered week,
    // we take the month from the first day of the week.
    // For boundary cases, you might want to adjust this or show the month for each day.
    const monthTitle = format(currentWeekStart, 'MMMM');

    return (
        <div className="flex flex-col items-center">
            <div className="text-azure text-2xl mb-4">{monthTitle}</div>
            <div className="flex justify-center items-center bg-oceanBlue ">
                <button
                    onClick={handlePrevWeek}
                    className='text-azure'
                >
                    <HiChevronLeft style={{ fontSize: '3rem' }} />
                </button>
                <ul className='flex justify-center gap-[6.8rem] bg-slate-100 px-10'>
                    {weekDays.map((day) => (
                        <li key={day.toString()} className={isSameDay(day, today) ? 'bg-yellow-200' : ''}>
                            <button
                                style={{
                                    padding: '10px',
                                }}
                            >
                                {format(day, 'EEE')}<br />
                                {format(day, 'd')}
                            </button>
                        </li>
                    ))}
                </ul>
                <button
                    onClick={handleNextWeek}
                    className='text-azure'
                >
                    <HiChevronRight style={{ fontSize: '3rem' }} />
                </button>
            </div>
        </div>
    );
};

export default BookingCalendar;
