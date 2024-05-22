import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedinIcon from '@mui/icons-material/Linkedin';
import TwitterIcon from '@mui/icons-material/Twitter';

const ContactCard = () => {
  return (
    <article className='bg-custom-gradient-bg-cards h-[38.70rem] w-[30rem] flex flex-col items-center space-y-4 
      relative z-10'>
          <h4 className='text-white text-center text-2xl font-semibold mt-20'>
            CONTACT US
          </h4>

      <div className='flex flex-col items-start px-16'>
        <h5 className='text-spaceCadet text-center text-xl font-medium mb-4'>
          Call today or request an appointment online.
        </h5>
            <div className='flex m-4'> 
              <LocationOnIcon/>
              <p className='w-48 ml-2 text-xl font-medium'>
                Radiant Dental Studio
                123 Main Street
                Anytown, NJ 07001
              </p>
            </div>

            <div className='flex m-4'>
              <PhoneIcon />
              <p className='ml-2 text-xl font-medium'>
                991 318 66 99
              </p>
            </div>

            <div className='flex m-4'>
              <EmailIcon />
              <p className='ml-2 text-xl font-medium'>
                info@radiantdental.com 
              </p>
            </div>
          </div>

          <div className='flex justify-between space-x-16 pt-6'>
            <InstagramIcon 
                style={{ fontSize: '3rem', color: 'inherit', cursor: 'pointer', transition: 'opacity 0.3s' }}
                onMouseOver={(e) => e.target.style.opacity = 0.75}
                onMouseOut={(e) => e.target.style.opacity = 1}
            />
            <LinkedinIcon 
                style={{ fontSize: '3rem', color: 'inherit', cursor: 'pointer', transition: 'opacity 0.3s' }}
                onMouseOver={(e) => e.target.style.opacity = 0.75}
                onMouseOut={(e) => e.target.style.opacity = 1}
            />
            <TwitterIcon 
                style={{ fontSize: '3rem', color: 'inherit', cursor: 'pointer', transition: 'opacity 0.3s' }}
                onMouseOver={(e) => e.target.style.opacity = 0.75}
                onMouseOut={(e) => e.target.style.opacity = 1}
            />
        
      </div>
    </article>

  )
}

export default ContactCard
