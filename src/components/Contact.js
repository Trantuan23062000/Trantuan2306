import React from 'react';
import '../styles/Contact.css'

const Contact = () => {
  const handleContactClick = () => {
    // Xử lý sự kiện khi người dùng nhấp vào nút "Liên hệ"
    alert('Chức năng liên hệ đang được phát triển.');
  };

  return (
    <section className="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <p>Feel free to contact me through the following channels:</p>
        <button onClick={handleContactClick}>Contact</button>
      </div>
    </section>
  );
};

export default Contact;
