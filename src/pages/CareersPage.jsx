import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Upload } from "lucide-react";

export default function CareersPage() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        position: "",
        message: "",
    });

    const [touched, setTouched] = useState({});
    const [resumeFile, setResumeFile] = useState(null);
    const formRef = useRef();
    
    const patterns = {
        firstName: /^[A-Za-z ]{2,}$/,
        lastName: /^[A-Za-z ]{2,}$/,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        mobile: /^[0-9]{10}$/,
        position: /^[A-Za-z /]{2,}$/,
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        const fieldMap = {
            from_name: "firstName",
            last_name: "lastName",
            from_email: "email",
            phone: "mobile",
            position: "position",
            message: "message",
        };
    
        const stateField = fieldMap[name] || name;
    
        setFormData((prev) => ({
            ...prev,
            [stateField]: value,
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
                patterns.firstName.test(formData.firstName) &&
                patterns.lastName.test(formData.lastName) &&
                patterns.email.test(formData.email) &&
                patterns.mobile.test(formData.mobile) &&
                patterns.position.test(formData.position);
        
            if (!allValid) {
                setTouched({
                    firstName: true,
                    lastName: true,
                    email: true,
                    mobile: true,
                    position: true,
                });
                return;
            }
        
            if (!resumeFile) {
                alert("Please upload your resume in PDF format.");
                return;
            }
        
            emailjs
                .sendForm(
                    "elife_email_Service",
                    "template_hpn70is",
                    formRef.current,
                    {
                        publicKey: "guB2rDIMzvDoBNYQ1",
                    }
                )
                .then(() => {
                    alert("Your application has been submitted successfully.");
        
                    setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        mobile: "",
                        position: "",
                        message: "",
                    });
        
                    setTouched({});
                    setResumeFile(null);
        
                    if (formRef.current) {
                        formRef.current.reset();
                    }
                })
                .catch((error) => {
                    console.error("EmailJS error:", error);
                    alert("Something went wrong. Please try again.");
                });
        };

    return (
        <>
            <Navbar />

            <main>
                <section className="bg-gray-50 py-16 px-6">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
                        {/* Left Content */}
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                                    Careers
                                </span>{" "}
                                <span className="text-gray-900">
                                    at eLife IT Solutions
                                </span>
                            </h1>

                            <p className="text-gray-700 leading-7 mb-4">
                                eLife IT Solutions hires the brightest minds of the industry to
                                provide state of the art IT integration services for the
                                regulated industry on all levels.
                            </p>

                            <p className="text-gray-700 leading-7 mb-4">
                                We believe that our consultants and IT business professionals
                                are our main asset and key to our success. Our dedication to
                                provide a professional, fair and fun work environment leaves
                                room for your personal priorities.
                            </p>

                            <p className="text-gray-700 leading-7 mb-6">
                                As a fast growing company, we are currently looking for MES
                                consultants, project managers and young talents who are willing
                                to step into the manufacturing digitalization arena.
                            </p>

                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                                We hire:
                            </h2>

                            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                                <li>MES Consultants</li>
                                <li>MBR / GMBR Designers</li>
                                <li>Interns</li>
                                <li>OSI PI Consultant</li>
                                <li>CSV Consultant</li>
                                <li>Automation Engineer</li>
                            </ul>

                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                                We offer:
                            </h2>

                            <p className="text-gray-700">
                                Remote / Onsite contract role opportunity
                            </p>
                        </div>

                        {/* Right Form */}
                        <div className="bg-blue-50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Job Application Form
                            </h2>

                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            type="text"
                                            name="from_name"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            onBlur={() => handleBlur("firstName")}
                                            placeholder="First Name"
                                            className={inputClass("firstName")}
                                        />
                                        {isInvalid("firstName") && (
                                            <p className="text-red-500 text-sm mt-1">
                                                Enter at least 2 letters. Example: John
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <input
                                            type="text"
                                            name="last_name"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            onBlur={() => handleBlur("lastName")}
                                            placeholder="Last Name"
                                            className={inputClass("lastName")}
                                        />
                                        {isInvalid("lastName") && (
                                            <p className="text-red-500 text-sm mt-1">
                                                Enter at least 2 letters. Example: Smith
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <input
                                        type="email"
                                        name="from_email"
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

                                <div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        onBlur={() => handleBlur("mobile")}
                                        placeholder="Mobile Number"
                                        className={inputClass("mobile")}
                                    />
                                    {isInvalid("mobile") && (
                                        <p className="text-red-500 text-sm mt-1">
                                            Enter exactly 10 digits. Example: 9876543210
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        name="position"
                                        value={formData.position}
                                        onChange={handleChange}
                                        onBlur={() => handleBlur("position")}
                                        placeholder="Position Applying For"
                                        className={inputClass("position")}
                                    />
                                    {isInvalid("position") && (
                                        <p className="text-red-500 text-sm mt-1">
                                            Enter a valid position. Example: MES Consultant
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">
                                 Upload Resume
                                    </label>

                                    <label className="flex items-center gap-3 w-full border-2 border-dashed border-blue-300 rounded-lg px-4 py-4 bg-white cursor-pointer hover:border-blue-500 transition">
                                    <Upload className="w-6 h-6 text-blue-600" />
                            
                                    <span className="text-gray-600">
                                        {resumeFile ? resumeFile.name : "Upload Resume PDF only"}
                                    </span>

                                    <input 
                                                type="file"
                                                name="resume"
                                                accept="application/pdf,.pdf"
                                                className="hidden"
                                                onChange={(e) => {
                                                    const file = e.target.files?.[0];
                                    
                                                    if (!file) {
                                                        setResumeFile(null);
                                                        return;
                                                    }

                                                    if (file.type !== "application/pdf") {
                                                        alert("Please upload a PDF file only.");
                                                        e.target.value = "";
                                                        setResumeFile(null);
                                                        return;
                                                    }

                                                    setResumeFile(file);
                                                }}
                                            />
                                        </label>

                                        {resumeFile ? (
                                            <p className="text-green-600 text-sm mt-2">
                                                Resume selected successfully: {resumeFile.name}
                                            </p>
                                        ) : (
                                            <p className="text-gray-500 text-sm mt-1">
                                                Accepted format: PDF only. Example: resume.pdf
                                            </p>
                                        )}
                                </div>

                                <textarea
                                    rows="5"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Message"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                ></textarea>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
                                >
                                    Submit Application
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