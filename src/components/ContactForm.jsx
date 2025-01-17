import { useState } from "react";
import axios from "axios";
import { validateEmail } from "../utils/helpers";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormChange = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    }
  };

  const sendEmail = (name, email, message) => {
    axios
      .post("https://formsubmit.co/ajax/ethan.owens4@gmail.com", {
        name: name,
        email: email,
        message: message,
      })
      .then((response) => {
        if (response.ok) {
          window.location = '/thanks'
        }
      })
      .catch((error) => console.log(error));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      return;
    }
    if (!name) {
      setErrorMessage("Please enter a name for the message!");
    }
    if (!message) {
      setErrorMessage("Please type a message!");
    }

    sendEmail(name, email, message);
  };

  return (
    <div>
      <div className="card">
        <header
          className="card-header card-title"
          style={{ textAlign: "center" }}
        >
          Contact me!
        </header>
        <div className="card-body">
          <form onSubmit={handleFormSubmit}>
            <input
              type="hidden"
              name="_next"
              value="https://localhost:3001/thanks"
            />
            <input type="hidden" name="_captcha" value="false" />
            <div className="form-group">
              <div className="row align-items-start">
                <div className="col">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your name"
                    onChange={handleFormChange}
                  />
                </div>
                <div className="col">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    onChange={handleFormChange}
                  />
                </div>
              </div>
            </div>
            <div
              className="form-group"
              style={{ marginTop: "10px", marginBottom: "20px" }}
            >
              <textarea
                placeholder="Your Message"
                className="form-control"
                name="message"
                rows="10"
                onChange={handleFormChange}
              ></textarea>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                type="submit"
                className="btn btn-primary btn-block"
                style={{ margin: "0 auto" }}
              >
                Send
              </button>
            </div>
            {errorMessage && (
              <div id="error-message">
                <p className="text-danger">{errorMessage}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
