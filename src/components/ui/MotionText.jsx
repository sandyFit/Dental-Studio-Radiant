const MotionText = ({text}) => {
    return (
        <div className="text-slider-container font-anybody text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] z-10"
            style={{ overflow: 'hidden' }}>
            <h2 className='text-center text-navyBlue motion-text font-regular tracking-wider'>
                <div style={{display: 'flex', whiteSpace: 'nowrap'}}>
                    <span className='app-title' style={{margin: '0 8rem'}}>
                        {text} 
                    </span>

                    <span className='app-title' style={{margin: '0 1rem'}}>
                        {text} 
                    </span>                    
                </div>
            </h2>
        </div>
    );
};

export default MotionText;