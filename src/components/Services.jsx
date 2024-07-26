import React from "react";
import "./Services.css";
// import favicon from "../img/favicon.png";
import logo from "../img/logo.png";

export default function Contactform() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "90d68976-a66d-4e66-a3a6-aabdb2a9c0d6");
    // 5e17ba4e-ab19-4ecd-88c8-62d49b0db596

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Failed to send the form. Please try again later.");
    }
  };

  return (
    <section className="contact">
      <form onSubmit={onSubmit} style={{ maxWidth: '500px',
    width: '90%',
    background: '#fff',
    padding: '25px 25px 30px',
    borderRadius:' 8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, .1)',
    color: '#333',
    margin: '25',
    height: '35rem', }} >
        <div className="image d-flex">
        <img src={logo} alt="Smart Tech Logo" style={{ 
  maxWidth: '50px',
  maxHeight: '50px',
  marginLeft: '18px', // Add space between logo and form
}} />

        <h2>Contact Form</h2>
        </div>
        <div className="input-box">
          <label>Full Name</label>
          <input
            type="text"
            className="field"
            name="name"
            placeholder="Enter Your name"
            required
          />
        </div>
        <div className="input-box">
          <label>Email Address</label>
          <input
            type="email"
            className="field"
            name="email"
            placeholder="Enter Your email"
            required
          />
        </div>
        <div className="input-box">
          <label>Contact No</label>
          <input
            type="text"
            className="field"
            name="text"
            placeholder="Enter Your number"
            required
          />
        </div>
        <div className="input-box">
          <label>Your Message</label>
          <textarea
            name="message"
            className="field mess"
            placeholder="Enter Your message"
          ></textarea>
        </div>
        <button
          className="btn"
          type="submit"
          style={{
            width: "95%",
            height: "55px",
            background: "#F28D30",
            border: "none",
            borderRadius: "6px",
            boxShadow: "0 0 10px rgba(0, 0, 0, .1)",
            cursor: "pointer",
            fontSize: "16px",
            color: "#fff",
            fontweight: "500",
            marginTop: "10px",
            transition: " .5s",
            marginLeft: "10px",
          }}
        >
          Send Message
        </button>
      </form>
      {result && <p>{result}</p>}
    </section>
  );
}
