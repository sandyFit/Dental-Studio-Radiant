import React from 'react'
import { Email, LocationOn, PhoneIphone } from '@mui/icons-material';

const BookingContactCard = () => {
    return (
        <article className="flex mt-4 gap-32">
            <div className="flex justify-center w-80"> {/* Wrap the text next to the icon in a div */}
                <LocationOn style={{ color: '#0084FF', fontSize: '1.6rem', marginRight: '.3rem' }}/>
                <p className='text-xl font-medium'>
                    Radiant Dental Studio
                    11.63 Main Street
                    Anytown, NJ 07001
                </p>
            </div>

            <div className='flex justify-center ml-2 w-72'> {/* Add ml-8 or another gap value here */}
                <PhoneIphone style={{ color: '#0084FF', fontSize: '1.6rem', marginRight: '.3rem' }} />
                <p className='text-xl font-medium'>
                    991 318 66 99
                </p>
            </div>

            <div className='flex justify-center ml-2'> {/* Add ml-8 or another gap value here */}
                <Email style={{ color: '#0084FF', fontSize: '1.6rem', marginRight: '.3rem' }} />
                <p className='text-xl font-medium'>
                    info@radiantdental.com
                </p>
            </div>
        </article>
    )
}

export default BookingContactCard