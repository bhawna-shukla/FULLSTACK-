import React from 'react'

const Contact = () => {
  return (
    <div>
    <div className="container">
<div className="card">
<div className="card_title">
  <h1>Contact Us</h1>
  
</div>
<div className="form">
  <form action="/register" method="post">
    <input
      type="text"
      name="Name"
      id="name"
      placeholder=" Enter Name"
    />
    <input type="email" name="email" placeholder="Enter Your Email" id="email" />
    <input
      type="password"
      name="password"
      placeholder="Enter Password"
      id="password"
    />
     <input type="enter your message" name="email" placeholder="your message" id="message" />
    <input
      type="password"
      name="message"
      placeholder="Enter message "
      id="message"
    />
    <button>Login</button>
  </form>
</div>
</div>
</div>

</div>
  )
}

export default Contact