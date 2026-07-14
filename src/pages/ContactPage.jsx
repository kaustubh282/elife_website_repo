import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, MapPin, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organization: "",
    mobile: "",
    message: "",
  });

  const [touched, setTouched] = useState({});

  const patterns = {
    fullName: /^[A-Za-z ]{2,}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    mobile: /^[0-9]{10,15}$/,
    message: /^.{10,}$/,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({
      ...prev,
      [field]: true,
    }));
  };

  const isInvalid = (field) => {
    return touched[field] && !patterns[field].test(formData[field]);
  };

  const inputClass = (field) =>
    `w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${isInvalid(field)
      ? "border-red-500 focus:ring-red-500"
      : "border-gray-300 focus:ring-blue-500"
    }`;

  const handleSubmit = (e) => {
    e.preventDefault();

    const allValid =
      patterns.fullName.test(formData.fullName) &&
      patterns.email.test(formData.email) &&
      patterns.mobile.test(formData.mobile) &&
      patterns.message.test(formData.message);

    if (!allValid) {
      setTouched({
        fullName: true,
        email: true,
        mobile: true,
        message: true,
      });
      return;
    }

    emailjs
      .send(
      "elife_email_Service",
      "template_wt989xh",
      {
      from_name: formData.fullName,
      from_email: formData.email,
      company: formData.organization || "Not provided",
      subject: "Client Enquiry Mail",
      message: `${formData.message}

     Phone Number: ${formData.mobile}`,
    },
      "guB2rDIMzvDoBNYQ1"
      )
      .then(() => {
        alert("Your enquiry has been sent successfully.");

        setFormData({
          fullName: "",
          email: "",
          organization: "",
          mobile: "",
          message: "",
        });

        setTouched({});
      })
      .catch(() => {
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <>
      <Navbar />

      <main>
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

            {/* Left Contact Info */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                  Contact
                </span>{" "}
                <span className="text-gray-900">Us</span>
              </h1>

              <p className="text-gray-700 leading-7 mb-8">
                Have a project requirement or business enquiry? Get in touch
                with eLife IT Solutions and our team will connect with you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Our Address</h3>
                    <p className="text-gray-700">
                      Pennycress, Sandwood Portlaoise Co. Laois Ireland
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Mail</h3>
                    <p className="text-gray-700">sales@elifeitsolutions.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Contact No.</h3>
                    <p className="text-gray-700">+353 894354361</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-blue-50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Client Enquiry Form
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="hidden"
                  name="subject"
                  value="Client Enquiry Mail"
                />

                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    onBlur={() => handleBlur("fullName")}
                    placeholder="Full Name"
                    className={inputClass("fullName")}
                  />
                  {isInvalid("fullName") && (
                    <p className="text-red-500 text-sm mt-1">
                      Enter at least 2 letters. Example: John Smith
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur("email")}
                    placeholder="Email Address"
                    className={inputClass("email")}
                  />
                  {isInvalid("email") && (
                    <p className="text-red-500 text-sm mt-1">
                      Enter a valid email. Example: john@example.com
                    </p>
                  )}
                </div>

                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Organization Name (Optional)"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <div>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    onBlur={() => handleBlur("mobile")}
                    placeholder="Mobile Number"
                    className={inputClass("mobile")}
                  />
                  {isInvalid("mobile") && (
                    <p className="text-red-500 text-sm mt-1">
                      Enter a valid mobile number. Example: 9876543210
                    </p>
                  )}
                </div>

                <div>
                  <textarea
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={() => handleBlur("message")}
                    placeholder="Message"
                    className={inputClass("message")}
                  ></textarea>
                  {isInvalid("message") && (
                    <p className="text-red-500 text-sm mt-1">
                      Message should be at least 10 characters. Example: I want
                      to discuss an MES implementation project.
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}