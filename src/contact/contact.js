
import './contact.css'
import { Link } from 'react-scroll'
import { useForm } from "react-hook-form"
import { ToastContainer } from 'react-toastify'
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

export default () => {


    let data = useForm();


    const contactKaro = (userData) => {

        console.log(userData)
        data.reset();
        toast.success("Send Successfully")

        axios.post('/client-data' , userData)
    }

    return <div id='contact'>



        <div className="contact-main">

            <div className="contact-text">

                <h1>Get in Touch</h1>
                <h2>Contact me</h2>
            </div>

            <div className="contact-input">


                <form action="" onSubmit={data.handleSubmit(contactKaro)}>

                    <input id='input' type="text" placeholder='Name'
                        {...data.register("name", { required: true })}
                    />
                    {data.formState.errors.name && <div className='error'>Please enter your name</div>}

                    <input id='input' type="email" placeholder='Email'
                        {...data.register("email", { required: true })}

                    />
                    {data.formState.errors.email && <div className='error'>Please enter your email</div>}


                    <textarea id='textarea' name="" cols="30" rows="10" placeholder='Massage'
                        {...data.register("message", { required: true })}

                    ></textarea>

                    <button>
                        Send
                    </button>

                </form>
            </div>

        </div>
        <ToastContainer className="toaast"></ToastContainer>
    </div>
}