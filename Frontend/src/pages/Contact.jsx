import { useState } from "react";
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  X, // Instead of Twitter
  Facebook, 
  Instagram, 
  Linkedin, 
  Sparkles // Use Sparkles instead of Sparkle for better compatibility
} from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    searchSubject: "",
    message: "",
    referrer: "",
    termsAgreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    // Dark background and overall layout container
    <div className="min-h-screen bg-[#09090c] text-neutral-300 font-sans p-6 md:p-12 lg:p-20 flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 w-full max-w-screen-2xl">
        
        {/* Left Section - Text and Info */}
        <div className="space-y-12">
          <div>
            {/* Styled "Contact" tag with sparkle icon */}
            <div className="inline-flex items-center gap-2 bg-[#1b1a29] border border-[#2b2a3a] px-3 py-1.5 rounded-full text-xs text-[#a7a6ba]">
              Contact
              <Sparkle className="size-3 text-[#7977a4]" />
            </div>
            
            {/* Large multi-line title */}
            <h2 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-light text-neutral-50 leading-tight">
              Contact Us<br />
              For More<br />
              <span className="italic font-normal">Information</span>
            </h2>
            
            {/* Description text */}
            <p className="mt-6 max-w-lg text-neutral-400 font-light leading-relaxed">
              Whether you're seeking expert assistance, our dedicated team is prepared to support you every step of the way.
            </p>
          </div>

          {/* Icon/Detail rows (phone, email, chat) */}
          <div className="space-y-6">
            <div className="flex items-center gap-5">
              <div className="bg-[#1b1a29] p-3 rounded-lg border border-[#2b2a3a]">
                <Phone className="size-5 text-[#8b5cf6]" />
              </div>
              <div>
                <span className="text-sm font-medium text-neutral-50">Call us now</span>
                <span className="block mt-0.5 text-neutral-400 font-light">+1-202-555-0190</span>
              </div>
            </div>
            
            <div className="flex items-center gap-5">
              <div className="bg-[#1b1a29] p-3 rounded-lg border border-[#2b2a3a]">
                <Mail className="size-5 text-[#8b5cf6]" />
              </div>
              <div>
                <span className="text-sm font-medium text-neutral-50">Email us</span>
                <span className="block mt-0.5 text-neutral-400 font-light">example@gmail.com</span>
              </div>
            </div>
            
            <div className="flex items-center gap-5">
              <div className="bg-[#1b1a29] p-3 rounded-lg border border-[#2b2a3a]">
                <MessageSquare className="size-5 text-[#8b5cf6]" />
              </div>
              <div>
                <span className="text-sm font-medium text-neutral-50">Chat with us</span>
                <span className="block mt-0.5 text-neutral-400 font-light">@example</span>
              </div>
            </div>
          </div>

          {/* Social Media Card */}
          <div className="bg-[#1b1a29] border border-[#2b2a3a] p-8 rounded-xl max-w-sm">
            <span className="block text-sm font-medium text-neutral-50 mb-6">Follow us on social media</span>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <div key={idx} className="bg-[#2b2a3a] p-3 rounded-xl cursor-pointer hover:bg-[#3b3a4a] transition-colors">
                  <Icon className="size-5 text-neutral-100" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <form onSubmit={handleSubmit} className="space-y-8 lg:mt-10">
          
          {/* Responsive Form Grid (2 cols on md+, 1 col on mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Form Input fields */}
            {[
              { label: "Full Name", name: "name", type: "text" },
              { label: "Email Address", name: "email", type: "email" },
              { label: "Phone Number", name: "phone", type: "tel" },
              { label: "Company", name: "company", type: "text" },
              { label: "Subject", name: "subject", type: "select" },
              { label: "Subject With Search", name: "searchSubject", type: "selectWithSearch" },
            ].map((field) => (
              <div key={field.name}>
                {field.type === "select" ? (
                  // Custom styled select input
                  <div className="relative">
                    <select
                      id={field.name}
                      name={field.name}
                      className="peer w-full bg-[#1b1a29] border border-[#2b2a3a] px-5 py-4 rounded-xl text-neutral-50 placeholder-transparent focus:outline-none focus:ring-1 focus:ring-[#8b5cf6] transition-colors appearance-none"
                      onChange={handleChange}
                      value={form[field.name]}
                    >
                      <option value="">Select subject</option>
                      {/* options here */}
                    </select>
                    <label className="absolute left-5 top-4 text-sm font-medium text-neutral-400 transition-all peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs">{field.label}</label>
                  </div>
                ) : field.type === "selectWithSearch" ? (
                   // Custom styled select with search input (concept)
                   <div className="relative">
                    <input
                      id={field.name}
                      name={field.name}
                      type="text"
                      className="peer w-full bg-[#1b1a29] border border-[#2b2a3a] px-5 py-4 rounded-xl text-neutral-50 placeholder-transparent focus:outline-none focus:ring-1 focus:ring-[#8b5cf6] transition-colors"
                      placeholder={field.label}
                      onChange={handleChange}
                      value={form[field.name]}
                    />
                     <label className="absolute left-5 top-4 text-sm font-medium text-neutral-400 transition-all peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs">{field.label}</label>
                   </div>
                ) : (
                  // Custom styled text inputs (material-style floating labels)
                  <div className="relative">
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      className="peer w-full bg-[#1b1a29] border border-[#2b2a3a] px-5 py-4 rounded-xl text-neutral-50 placeholder-transparent focus:outline-none focus:ring-1 focus:ring-[#8b5cf6] transition-colors"
                      placeholder={field.label}
                      onChange={handleChange}
                      value={form[field.name]}
                    />
                    <label className="absolute left-5 top-4 text-sm font-medium text-neutral-400 transition-all peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs">{field.label}</label>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Textarea field */}
          <div className="relative">
            <textarea
              id="message"
              name="message"
              rows="6"
              className="peer w-full bg-[#1b1a29] border border-[#2b2a3a] px-5 py-4 rounded-xl text-neutral-50 placeholder-transparent focus:outline-none focus:ring-1 focus:ring-[#8b5cf6] transition-colors resize-none"
              placeholder="Enter your message."
              onChange={handleChange}
              value={form.message}
            />
            <label className="absolute left-5 top-4 text-sm font-medium text-neutral-400 transition-all peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs">Enter your message.</label>
          </div>

          {/* Radio Buttons section */}
          <div>
            <span className="block text-sm font-medium text-neutral-50 mb-4">How did you hear about us?</span>
            <div className="space-y-3">
              {[
                { label: "Google Search", value: "google" },
                { label: "Social Media", value: "social" },
                { label: "Referral", value: "referral" },
                { label: "Other", value: "other" },
              ].map((option) => (
                <div key={option.value} className="flex items-center">
                  <input
                    id={option.value}
                    name="referrer"
                    type="radio"
                    value={option.value}
                    className="size-4 bg-[#1b1a29] border-[#2b2a3a] text-[#8b5cf6] focus:ring-[#8b5cf6] focus:ring-offset-0 focus:ring-offset-[#09090c]"
                    onChange={handleChange}
                    checked={form.referrer === option.value}
                  />
                  <label htmlFor={option.value} className="ml-3 text-sm font-medium text-neutral-300">
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-center">
            <input
              id="termsAgreed"
              name="termsAgreed"
              type="checkbox"
              className="size-4 rounded-md bg-[#1b1a29] border-[#2b2a3a] text-[#8b5cf6] focus:ring-[#8b5cf6] focus:ring-offset-0 focus:ring-offset-[#09090c]"
              onChange={handleChange}
              checked={form.termsAgreed}
            />
            <label htmlFor="termsAgreed" className="ml-3 text-sm text-neutral-400 font-light">
              I agree to the <a href="#" className="underline hover:text-neutral-50">terms and conditions</a> and <a href="#" className="underline hover:text-neutral-50">privacy policy</a>.
            </label>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="inline-flex items-center gap-3 bg-[#8b5cf6] hover:bg-[#a78bfa] text-white font-medium py-3.5 px-10 rounded-full text-base transition-colors group active:scale-[0.98]"
            >
              Submit
              <Sparkle className="size-5 text-neutral-50 group-hover:animate-pulse" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}