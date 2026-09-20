import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Thank you for contacting A2 Microtech. We will get back to you soon."
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="contact-page">

      {/* Header */}
      <section className="contact-header">
        <p>GET IN TOUCH</p>

        <h1>Contact Us</h1>

        <p className="contact-intro">
          Have a question about our products, services or
          technology solutions? Get in touch with the
          A2 Microtech team.
        </p>
      </section>

      {/* Contact Content */}
      <section className="contact-layout">

        {/* Left Side */}
        <div className="contact-information">

          <p className="section-label">
            CONTACT INFORMATION
          </p>

          <h2>
            Let's talk about
            <br />
            your requirements.
          </h2>

          <p className="contact-description">
            Whether you need electronic components,
            technology solutions, project support or
            have a business enquiry, our team is here
            to help.
          </p>

          <div className="contact-details">

            {/* Founders */}
            <div className="contact-detail">
              <div className="contact-icon">
                <UserRound size={20} />
              </div>

              <div>
                <span>Founders</span>

                <strong>
                  Akash Chechare
                </strong>

                <strong>
                  Avinash Ghalme
                </strong>
              </div>
            </div>

            {/* Phone 1 */}
            <div className="contact-detail">
              <div className="contact-icon">
                <Phone size={20} />
              </div>

              <div>
                <span>Phone</span>

                <a href="tel:+917758931307">
                  77589 31307
                </a>

                <a href="tel:+919175702325">
                  91757 02325
                </a>
              </div>
            </div>
            <div className="contact-detail">
  <div className="contact-icon">
    <Mail size={20} />
  </div>
  <div>
    <span>Email</span>
    <a href="mailto:support@a2microtech.in">
      support@a2microtech.in
    </a>
  </div>
</div>
            {/* Location */}
            <div className="contact-detail">
              <div className="contact-icon">
                <MapPin size={20} />
              </div>

              <div>
                <span>Location</span>

                <strong>
                  Talwade, Pimpri-Chinchwad,
                  <br />
                  Maharashtra - 411062
                </strong>
              </div>
            </div>

            {/* Business Hours */}
            <div className="contact-detail">
              <div className="contact-icon">
                <Clock size={20} />
              </div>

              <div>
                <span>Business Hours</span>

                <strong>
                  Monday – Saturday
                </strong>

                <strong>
                  Contact for timings
                </strong>
              </div>
            </div>

          </div>

          {/* Google Maps */}
          <a
            href="https://maps.app.goo.gl/ZLdJrVezVBjDa11b9?g_st=aw"
            target="_blank"
            rel="noopener noreferrer"
            className="map-button"
          >
            <MapPin size={17} />
            View Location on Google Maps
          </a>

        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-form-wrapper">

          <h2>Send us a message</h2>

          <form onSubmit={handleSubmit}>

            <div className="contact-form-row">

              <div className="contact-form-group">
                <label>Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-form-group">
                <label>Email</label>

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            <div className="contact-form-row">

              <div className="contact-form-group">
                <label>Phone</label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="contact-form-group">
                <label>Subject</label>

                <input
                  type="text"
                  name="subject"
                  placeholder="What can we help with?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            <div className="contact-form-group">
              <label>Message</label>

              <textarea
                name="message"
                placeholder="Tell us about your requirement..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="contact-submit-button"
            >
              Send Message
              <Send size={17} />
            </button>

          </form>

        </div>

      </section>

      {/* Bottom CTA */}
      <section className="contact-bottom">

        <h2>Need help choosing a product?</h2>

        <p>
          Our team can help you find the right components
          for your project.
        </p>

        <a
          href="tel:+917758931307"
          className="contact-email-button"
        >
          Call A2 Microtech →
        </a>

      </section>

    </main>
  );
}

export default Contact;