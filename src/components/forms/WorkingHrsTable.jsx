import React from 'react'
import BookOnlineBtn from '../ui/BookOnlineBtn';

const WorkingHrsTable = () => {
  return (
    <article className='flex flex-col justify-center items-center'>      
      <table className='text-zinc-300 text-md font-[200] flex  justify-center'
        style={{ borderCollapse: 'separate', borderSpacing: '0 .6rem' }}>
        <tbody>
          <tr>
            <td>Monday</td>
            <td>09:00 am – 18:00 pm</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>09:00 am – 18:00 pm</td>
          </tr>
          <tr>
            <td>Wednesday &nbsp;</td>
            <td>09:00 am – 18:00 pm</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>09:00 am – 18:00 pm</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>09:00 am – 18:00 pm</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>10:00 am - 15:00 pm</td>
          </tr>
        </tbody>
      </table>

      {/* <button className='btn-filled px-16 py-3 mt-4'>
        book online
      </button> */}

      <div className="flex btn-book-online mt-16 px-12 py-2">
        <BookOnlineBtn/>
      </div>
    </article>
  );
};

export default WorkingHrsTable;
