import React, { useState } from 'react';

const BookNow = () => {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setResult("Sending....");
    
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    
    if (!accessKey || accessKey === "YOUR_ACCESS_KEY_HERE") {
      setStatus("error");
      setResult("Missing API Key. Please add your Web3Forms Access Key to the .env file and restart the server.");
      return;
    }

    const formData = new FormData(event.target);
    formData.append("access_key", accessKey);
    formData.append("subject", "New Booking Request from Magical Waters");
    formData.append("from_name", "Magical Waters Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setResult("Form Submitted Successfully!");
        event.target.reset();
      } else {
        console.error("Web3Forms Error:", data);
        setStatus("error");
        setResult(data.message || "Submission failed. Please check your Access Key.");
      }
    } catch (error) {
      console.error("Submission Exception:", error);
      setStatus("error");
      setResult("Network error. Please check your connection and try again.");
    }
  };

  return (
    <section id="booknow" className="min-h-screen bg-slate-50 flex items-center justify-center p-6 py-24">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Form */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl lg:text-5xl font-serif italic text-blue-900">
              Book Your <span className="text-blue-600">Sacred Session</span>
            </h1>
            <p className="mt-4 text-slate-500 text-lg leading-relaxed max-w-md">
              Reserve your sacred space — choose a date that feels right and we'll connect to confirm your journey.
            </p>
          </div>
          
          <form onSubmit={onSubmit} className="bg-white p-8 rounded-[2rem] border border-blue-100 shadow-2xl shadow-blue-900/5 relative overflow-hidden">
            {/* Status Overlays */}
            {status === "success" && (
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-6 animate-in fade-in duration-500">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mb-4">✓</div>
                <h3 className="text-2xl font-serif text-slate-800 mb-2">Message Sent!</h3>
                <p className="text-slate-500 mb-6">Thank you for reaching out. We'll be in touch soon.</p>
                <button onClick={() => setStatus("idle")} className="px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold">Send Another</button>
              </div>
            )}

            {/* Honey pot for spam */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col">
                <label className="text-xs font-semibold uppercase tracking-wider text-blue-800 mb-2 ml-1">First Name</label>
                <input 
                  type="text" 
                  name="first_name"
                  required
                  placeholder="Jane" 
                  className="px-4 py-3 rounded-xl border border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50 transition-all"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-semibold uppercase tracking-wider text-blue-800 mb-2 ml-1">Last Name</label>
                <input 
                  type="text" 
                  name="last_name"
                  required
                  placeholder="Smith" 
                  className="px-4 py-3 rounded-xl border border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50 transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col mb-4">
              <label className="text-xs font-semibold uppercase tracking-wider text-blue-800 mb-2 ml-1">Email Address</label>
              <input 
                type="email" 
                name="email"
                required
                placeholder="jane@example.com" 
                className="px-4 py-3 rounded-xl border border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50 transition-all"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label className="text-xs font-semibold uppercase tracking-wider text-blue-800 mb-2 ml-1">Preferred Date</label>
              <input 
                type="date" 
                name="preferred_date"
                required
                className="px-4 py-3 rounded-xl border border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50 text-slate-700 transition-all"
              />
            </div>

            <div className="flex flex-col mb-6">
              <label className="text-xs font-semibold uppercase tracking-wider text-blue-800 mb-2 ml-1">Your Intentions</label>
              <textarea 
                rows="4"
                name="message"
                required
                placeholder="Tell us about what you're seeking..." 
                className="px-4 py-3 rounded-xl border border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50 resize-none transition-all"
              ></textarea>
            </div>
            
            <button 
              disabled={status === "sending"}
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-bold rounded-full transition-all flex items-center justify-center gap-2 group shadow-xl shadow-blue-500/20"
            >
              {status === "sending" ? "SENDING..." : "CONFIRM BOOKING REQUEST"}
              {status !== "sending" && <span className="group-hover:translate-x-1 transition-transform">→</span>}
            </button>
            
            {status === "error" && <p className="mt-4 text-red-500 text-sm text-center font-medium">{result}</p>}
          </form>
        </div>

        {/* Right Side: Image with Circular Rotation */}
        <div className="relative flex justify-center items-center">
          <style>{`
            @keyframes spinSlow {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}</style>
          <div 
            className="w-full max-w-md aspect-square overflow-hidden rounded-full border-4 border-blue-200 shadow-2xl shadow-blue-200/40"
            style={{ animation: 'spinSlow 20s linear infinite' }}
          >
              <img 
                src="/Necklace Stainless Steel  The Seals Of The 7 Archangels - Gold.jpg" 
              alt="Book Now" 
                className="w-full h-full object-cover"
              />
          </div>
        </div>

      </div>
    </section>
  );
};

export default BookNow;
