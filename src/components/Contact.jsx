import React from 'react';

const Contact = () => {
   const submitHandler = (e) => {
      e.preventDefault();

   };
   return (
      <div className="contact">
         <div>
            <h1>Contact Us</h1>
            <form method='post'>
               <div><p>Name</p> <input type="text" required placeholder='Abc' /></div>
               <div><p>Email</p> <input type="email" required placeholder='Abc@xyz.com' /></div>
               <div><p>Message</p> <input type="text" required placeholder='Tell us about you query' /></div>
               <button type="submit" onClick={submitHandler}>Send</button>
            </form>
         </div>
      </div>
   );
};

export default Contact;