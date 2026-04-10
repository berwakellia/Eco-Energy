import { useState } from "react";
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  Twitter, 
  Facebook,
  Instagram, 
  Linkedin, 
  Sparkles 
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
    <div className="min-h-screen bg-[#09090c] text-neutral-300 font-sans p-6 md:p-12 lg:p-20 flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 w-full max-w-screen-2xl">
        
        {/* Left Section */}
        <div className="space-y-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#1b1a29] border border-[#2b2a3a] px-3 py-1.5 rounded-full text-xs text-[#a7a6ba]">
              Contact
              <Sparkles className="size-3 text-[#7977a4]" />
            </div>
            
            <h2 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-light text-neutral-50 leading-tight">
              Contact Us<br />
              For More<br />
              <span className="italic font-normal">Information</span>
            </h2>
            
            <p className="mt-6 max-w-lg text-neutral-400 font-light leading-relaxed">
              Whether you're seeking expert assistance, our dedicated team is prepared to support you every step of the way.
            </p>
          </div>

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

          <div className="bg-[#1b1a29] border border-[#2b2a3a] p-8 rounded-xl max-w-sm">
            <span className="block text-sm font-medium text-neutral-50 mb-6">
              Follow us on social media
            </span>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <div
                  key={idx}
                  className="bg-[#2b2a3a] p-3 rounded-xl cursor-pointer hover:bg-[#3b3a4a] transition-colors"
                >
                  <Icon className="size-5 text-neutral-100" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <form onSubmit={handleSubmit} className="space-y-8 lg:mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "Full Name",           name: "name",          type: "text"   },
              { label: "Email Address",        name: "email",         type: "email"  },
              { label: "Phone Number",         name: "phone",         type: "tel"    },
              { label: "Company",              name: "company",       type: "text"   },
              { label: "Subject",              name: "subject",       type: "select" },
              { label: "Subject With Search",  name: "searchSubject", type: "text"   },
            ].map((field) => (
              <div key={field.name} className="relative">
                {field.type === "select" ? (
                  <select
                    name={field.name}
                    className="w-full bg-[#1b1a29] border border-[#2b2a3a] px-5 py-4 rounded-xl text-neutral-50 focus:outline-none focus:ring-1 focus:ring-[#8b5cf6] appearance-none"
                    onChange={handleChange}
                    value={form[field.name]}
                  >
                    <option value="">{field.label}</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Support</option>
                    <option value="billing">Billing</option>
                    <option value="other">Other</option>
                  </select>
                ) : (
                  <>
                    <input
                      name={field.name}
                      type={field.type}
                      className="peer w-full bg-[#1b1a29] border border-[#2b2a3a] px-5 py-4 rounded-xl text-neutral-50 placeholder-transparent focus:outline-none focus:ring-1 focus:ring-[#8b5cf6]"
                      placeholder={field.label}
                      onChange={handleChange}
                      value={form[field.name]}
                    />
                    <label className="absolute left-5 top-4 text-sm font-medium text-neutral-400 transition-all peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs">
                      {field.label}
                    </label>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              name="message"
              rows="6"
              className="peer w-full bg-[#1b1a29] border border-[#2b2a3a] px-5 py-4 rounded-xl text-neutral-50 placeholder-transparent focus:outline-none focus:ring-1 focus:ring-[#8b5cf6] resize-none"
              placeholder="Enter your message."
              onChange={handleChange}
              value={form.message}
            />
            <label className="absolute left-5 top-4 text-sm font-medium text-neutral-400 transition-all peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-neutral-500 peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs">
              Enter your message.
            </label>
          </div>

          {/* Referrer */}
          <div className="space-y-4">
            <span className="block text-sm font-medium text-neutral-50">
              How did you hear about us?
            </span>
            <div className="space-y-3">
              {["Google Search", "Social Media", "Referral", "Other"].map((label) => (
                <div key={label} className="flex items-center">
                  <input
                    type="radio"
                    name="referrer"
                    value={label.toLowerCase().replace(" ", "-")}
                    checked={form.referrer === label.toLowerCase().replace(" ", "-")}
                    className="size-4 bg-[#1b1a29] border-[#2b2a3a] text-[#8b5cf6] focus:ring-[#8b5cf6]"
                    onChange={handleChange}
                  />
                  <label className="ml-3 text-sm text-neutral-300">{label}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-center">
            <input
              name="termsAgreed"
              type="checkbox"
              checked={form.termsAgreed}
              className="size-4 rounded bg-[#1b1a29] border-[#2b2a3a] text-[#8b5cf6]"
              onChange={handleChange}
            />
            <label className="ml-3 text-sm text-neutral-400">
              I agree to the{" "}
              <span className="underline cursor-pointer hover:text-neutral-200 transition-colors">
                terms and conditions
              </span>{" "}
              and{" "}
              <span className="underline cursor-pointer hover:text-neutral-200 transition-colors">
                privacy policy
              </span>.
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!form.termsAgreed}
            className="inline-flex items-center gap-3 bg-[#8b5cf6] hover:bg-[#a78bfa] disabled:opacity-40 disabled:cursor-not-allowed text-white font-medium py-3.5 px-10 rounded-full transition-all active:scale-[0.98]"
          >
            Submit
            <Sparkles className="size-5" />
          </button>
        </form>
      </div>
    </div>
  );
}