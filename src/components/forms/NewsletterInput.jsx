import { useState } from "react";
import { showAlert } from "../../utils/functions";
import Button from "../cards/Button";

const NewsletterInput = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!email) {
            showAlert('Fields should NOT be empty.', 'error',);
        }
        else if (!emailRegex.test(email)) { // Notice the `!` to correctly apply the logic
            showAlert('Email should follow the standard format: john@doe.com', 'error');
            setEmail('')
        }
        else {
            showAlert('Your email was submitted successfully.', 'success');
            setEmail('');
        }
    };

    return (
        <div className='flex flex-col items-center w-[16rem] gap-6'>
            <form onSubmit={handleSubmit} noValidate className="w-full flex flex-col"> 
                {/* <label htmlFor="text" className="text-xxsmall-white pb-3">Enter your email</label> */}
                <input
                    type="email"
                    id="email"
                    className="bg-niceBlue border-4 border-blue-400 
                            text-azure text-lg rounded-lg focus:outline-none
                            focus:ring-2 focus:ring-azure focus:border-azure
                            block w-full p-2.5"
                    placeholder="john.doe@company.com"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <div className="mt-6 transparent-btn w-[10rem] py-2 hover:text-zinc-50">
                    <Button text={'submit'}/>
                </div>
            </form>
            <p className='text-zinc-300 text-xxsmall font-thin '>
                Occasionally we send newsletters containing practice news. If you'd like to receive this
                information, sign up to our email above. We take your privacy seriously and ensure that your
                information will not be passed on to anyone.
            </p>
        </div>
    );
};

export default NewsletterInput;
