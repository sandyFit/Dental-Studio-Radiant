import React from 'react'

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

      <button class="group relative overflow-hidden overflow-x-hidden btn-filled px-16 py-3 mt-16">
        <span class="relative z-10">book online</span>
        <span class="absolute inset-0 overflow-hidden rounded-md">
          <span class="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-blue-500
            transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
        </span>
      </button>
    </article>
  );
};

export default WorkingHrsTable;
