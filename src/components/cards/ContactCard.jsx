import { BsEnvelopeAtFill,  BsTwitterX } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { ImLocation2 } from 'react-icons/im';
import { FaInstagram, FaPhoneAlt } from 'react-icons/fa';

const ContactCard = () => {
  return (
    <article className='bg-custom-gradient-bg-cards h-[38.70rem] w-[30rem] flex flex-col items-center space-y-4 
      relative z-10'>
          <h4 className='text-white text-center text-2xl font-[600] mt-20'>
            CONTACT US
          </h4>

      <div className='flex flex-col items-center pt-8 px-16'>
        <h5 className='text-spaceCadet text-center text-[1.1rem] uppercase font-[700]'>
          Call us or book online
        </h5>

        <div className="flex flex-col justify-start">        
            <div className='flex gap-2 text-[1.5rem] mx-4 mt-6'> 
              <ImLocation2/>
              <p className='w-48 ml-2 text-[1.1rem] font-medium'>
                Radiant Dental Studio
                123 Main Street
                Anytown, NJ 07001
              </p>
            </div>

            <div className='flex gap-2 text-[1.3rem] mx-4 mt-6'>
              <FaPhoneAlt />
              <p className='ml-2 text-[1.1rem] font-medium'>
                991 318 66 99
              </p>
            </div>

            <div className='flex gap-2 text-[1.4rem]  mx-4 mt-6'>
              <BsEnvelopeAtFill />
              <p className='ml-2 text-[1.1rem] font-medium'>
                info@radiantdental.com 
              </p>
            </div>
          </div>
      </div>
      
      <h5 className='text-spaceCadet text-center text-[1.1rem] uppercase font-[700] pt-12'>
          Follow us everywhere
        </h5>

          <div className='flex justify-between space-x-16 '>
            <FaInstagram 
                style={{ fontSize: '3rem', color: 'inherit', cursor: 'pointer', transition: 'opacity 0.3s' }}
                onMouseOver={(e) => e.target.style.opacity = 0.75}
                onMouseOut={(e) => e.target.style.opacity = 1}
            />
            <AiFillLinkedin
                style={{ fontSize: '3rem', color: 'inherit', cursor: 'pointer', transition: 'opacity 0.3s' }}
                onMouseOver={(e) => e.target.style.opacity = 0.75}
                onMouseOut={(e) => e.target.style.opacity = 1}
            />
            <BsTwitterX 
                style={{ fontSize: '2.4rem', color: 'inherit', cursor: 'pointer', transition: 'opacity 0.3s', marginTop: '4px' }}
                onMouseOver={(e) => e.target.style.opacity = 0.75}
                onMouseOut={(e) => e.target.style.opacity = 1}
            />       
        </div>
    </article>

  )
}

export default ContactCard
