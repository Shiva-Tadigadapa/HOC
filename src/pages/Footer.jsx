import logo1 from "../assets/logo.png";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import grid from "../assets/lines.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" jost">
      <HausOfChaos />
    </div>
  );
};

const HausOfChaos = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      alert("Please fill in all fields.");
      return;
    }

    emailjs
      .send(
        "service_wlj3cut", // Your EmailJS service ID
        "template_6e6i8qf", // Your EmailJS template ID
        {
          from_name: formData.name, // User's Name
          user_email: formData.email, // User's Email
          to_name: "Author Name", // Author's Name (Optional)
          to_email: "author@example.com", // Replace with the author's email
          message: "Hello, I would like to connect with you and learn more.", // Static message
        },
        "ZpapHrtsf3dC50o_5" // Your EmailJS Public Key
      )
      .then(() => {
        alert("Email sent successfully!");
        setFormData({ name: "", email: "" }); // Clear form after submission
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send email. Please try again.");
      });
  };

  return (
    <div className="min-h-screen bg-[#060ebb] text-white relative">
      {/* Background Grid Overlay */}
      <div
        className="absolute inset-0 opacity-50 rotate-[0.5deg]"
        style={{ backgroundImage: `url(${grid})`, backgroundSize: "cover" }}
      />

      {/* Main Content */}
      <div className="relative px-4 py-20 md:px-20 md:py-48 min-h-screen flex flex-col justify-between">
        {/* Logo and Description */}
        <img
          src={logo1}
          className="w-1/2 md:hidden block mb-8"
          alt="Haus Of Chaos"
        />
        <div className="flex">
          <div className="md:max-w-xl">
            <img
              src={logo1}
              className="md:w-40 md:block hidden mb-4"
              alt="Haus Of Chaos"
            />
            <p className="text-lg md:block hidden text-left mb-6">
              Step into the chaos of creativity <br />
              Where bold ideas and designs <br /> collide Stay ahead with
              innovative <br />
              thoughts Experience transformative <br /> journeys Embrace the
              unexpected <br /> and disrupt the norm
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="max-w-xl mt-20 ml-auto">
            <form className="space-y-4 flex flex-col" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name*"
                  className="w-full p-4 bg-white/10 backdrop-blur-sm text-white placeholder-white border border-white/20 focus:outline-none focus:border-white/40"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address*"
                  className="w-full mt-6 p-4 bg-white/10 backdrop-blur-sm text-white placeholder-white border border-white/20 focus:outline-none focus:border-white/40"
                />
              </div>
              <p className="text-sm text-left opacity-80">
                Where ideas collide and stories unfold, Haus of Chaos transforms
                narratives into immersive brand experiences. Explore innovation,
                redefine design, and disrupt the ordinary with us.{" "}
              </p>
              <button
                type="submit"
                className="px-12 py-3 w-fit border-2 border-white bg-black text-[#E3E1E6] rounded-full hover:bg-black/90 transition-colors"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>

        {/* Footer Section */}
        <div className="relative whitespace-normal md:pt-16 pt-6 md:pb-0 pb-20">
          <div className="flex md:justify-end gap-4 text-sm">
            <a href="mailto:explore@hausofchaos.co" className="hover:underline">
              MAIL
            </a>
            <span>|</span>
            <a
              href="https://www.linkedin.com/company/105575916/"
              className="hover:underline"
              target="_blank"

            >
              LINKEDIN
            </a>
            <span>|</span>
            <a
              href="https://www.instagram.com/hausofchaos.co/"
              className="hover:underline"
              target="_blank"
            >
              INSTAGRAM
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="absolute left-0 px-4 md:px-20 bottom-6 md:bottom-10 flex flex-col-reverse md:flex-row items-start md:gap-0 gap-12 md:justify-between w-full">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="text-sm !-mt-10 ">
              <span className="  uppercase">2025 © Haus Of Chaos  </span>Ltd.
            </div>
          </Link>

        
          <div className="text-sm   md:!-mt-10  md:text-base">
            Design by{" "}
            <a
              href="https://theinternetcompany.one/"
              className="hover:underline"
              target="_blank"
            >
              TIC GLOBAL
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
