import React from 'react'

const Button = ({text}) => {
    return (
        <button class=" group relative overflow-hidden rounded-[8px] uppercase">
            <span class="relative inline-flex overflow-hidden">
                <div class="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] 
                    group-hover:skew-y-10">
                    {text}
                </div>
                <div class="absolute translate-y-[110%] skew-y-10 transition duration-500 group-hover:translate-y-0 
                group-hover:skew-y-0">
                    {text}
                </div>
            </span>
        </button>
    )
}

export default Button;
