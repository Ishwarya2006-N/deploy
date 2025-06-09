import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b91ba3a3-84bc-4543-a61a-d53880a9330e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a message<img src={msg_icon}></img></h3>
            <p>Feel free to reach out to us with any questions, feedback, or inquiries. Whether you're a prospective student,
                 a current learner, or just curious about what we do, we're here to help.</p>
                 <ul>
                    <li><img src={mail_icon} alt="" />ishwarya@gmail.com</li>
                    <li><img src={phone_icon} alt="" />9677440320</li>
                    <li><img src={location_icon} alt="" />77 Massachusetts Ave, Cambridge<br/>MA 021345, United States</li>
                 </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type='text' name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                <label>Write your message here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now<img src={white_arrow}></img></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact