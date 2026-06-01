import { useState } from "react";

const results = [
  { concern: "Gaps", duration: "8 months" },
  { concern: "Crooked Teeth", duration: "8 months" },
  { concern: "Open Bite", duration: "8 months" },
  { concern: "Protruding Teeth", duration: "8 months" },
];

// const styles = {
//   "*": { margin: 0, padding: 0, boxSizing: "border-box" },
// };

const faqItems = [
  { q: "What are Aligners?", a: "Aligners are clear, removable dental devices used to straighten teeth. Unlike traditional braces, they are virtually invisible and can be taken out while eating or brushing." },
  { q: "How long does the treatment take?", a: "Treatment duration varies by case complexity, typically ranging from 6 to 18 months. Our orthodontists will give you a precise timeline after your 3D scan." },
  { q: "Is the treatment painful?", a: "You may feel mild pressure or discomfort when switching to a new set of aligners, but this is usually temporary and much less than traditional braces." },
  { q: "Are Whistle Aligners covered by insurance?", a: "Coverage depends on your insurance plan. We recommend checking with your insurer. We also offer easy EMI and financing options to make treatment affordable." },
  { q: "What happens after the treatment?", a: "After completing your aligner treatment, you'll receive retainers to maintain your new smile. Regular follow-ups with our orthodontists ensure long-lasting results." },
];

function GotQuestions() {
  // const [open, setOpen] = useState(null);
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div style={{ background: "#fff", padding: "36px 16px 40px" }}>
      <h2 style={{ textAlign: "center", fontSize: 21, fontWeight: 900, color: "#111", marginBottom: 28 }}>
        <span style={{ color: "#7B5EA7" }}>Got Questions?</span>{"  "}
        <span style={{ color: "#111" }}>We've got answers</span>
      </h2>
      <div style={{ border: "1px solid #e4e4ee", borderRadius: 12, overflow: "hidden" }}>
        {faqItems.map((item, i) => (
          <div key={i} style={{ borderBottom: i < faqItems.length - 1 ? "1px solid #efefef" : "none" }}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width: "100%", background: "#fff", border: "none", cursor: "pointer",
                padding: "16px 18px", display: "flex", justifyContent: "space-between", alignItems: "center",
                textAlign: "left"
              }}
            >
              <span style={{ fontSize: 13.5, fontWeight: 600, color: "#111" }}>{item.q}</span>
              <svg
                width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="#7B5EA7" strokeWidth="2.5" strokeLinecap="round"
                style={{ flexShrink: 0, marginLeft: 8, transform: open === i ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
            {open === i && (
              <div style={{ padding: "0 18px 16px", fontSize: 13, color: "#666", lineHeight: 1.65, background: "#faf9ff" }}>
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const comparisonRows = [
  { label: "Easy to complex cases", whistle: "text", whistleVal: "Yes, mild to complex", other: "text", otherVal: "No, only mild to moderate" },
  { label: "Clear-cut Pricing",      whistle: "check", other: "cross" },
  { label: "Aligner Change",         whistle: "text", whistleVal: "Every 10 days", other: "text", otherVal: "Every 2 weeks" },
  { label: "Clinical Partnership",   whistle: "check", other: "cross" },
  { label: "Movement Between Cities",whistle: "check", other: "cross" },
  { label: "Complimentary Teeth Scaling", whistle: "check", other: "cross" },
];

function CheckIcon() {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      width: 26, height: 26, borderRadius: "50%", background: "#22c55e"
    }}>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2.5 7l3 3 6-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function CrossIcon() {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      width: 26, height: 26, borderRadius: "50%", background: "#ef4444"
    }}>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M3 3l8 8M11 3l-8 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function WhistleComparison() {
  const [openRows, setOpenRows] = useState<Record<number, boolean>>({});
  const toggle = (i: number) => setOpenRows((prev: Record<number, boolean>) => ({
  ...prev,
  [i]: !prev[i],
  }));
  
  return (
    <div style={{ background: "#fff", padding: "36px 16px 40px" }}>
      <h2 style={{ textAlign: "center", fontSize: 22, fontWeight: 900, color: "#111", marginBottom: 28 }}>
        What sets Whistle apart?
      </h2>
      <div style={{ border: "1px solid #e4e4ee", borderRadius: 12, overflow: "hidden" }}>

        <div style={{
          display: "grid", gridTemplateColumns: "1fr 110px 110px",
          background: "#f7f7fb", borderBottom: "1px solid #e4e4ee"
        }}>
          <div style={{ padding: "12px 16px", fontSize: 13, fontWeight: 700, color: "#222" }}>Features</div>
          <div style={{
            padding: "10px 8px", textAlign: "center",
            borderLeft: "1px solid #e4e4ee"
          }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: "#7B5EA7", letterSpacing: -0.3 }}>whistle</div>
            <div style={{ fontSize: 8, color: "#aaa", letterSpacing: 2, textTransform: "uppercase" }}>AND SMILE</div>
          </div>
          <div style={{
            padding: "12px 8px", textAlign: "center",
            borderLeft: "1px solid #e4e4ee",
            fontSize: 12, fontWeight: 700, color: "#444",
            display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            Other Brands
          </div>
        </div>

        {comparisonRows.map((row, i) => (
          <div key={i}>
           
            <div
              style={{
                display: "grid", gridTemplateColumns: "1fr 110px 110px",
                borderBottom: i < comparisonRows.length - 1 ? "1px solid #efefef" : "none",
                background: "#fff", cursor: "pointer"
              }}
              onClick={() => toggle(i)}
            >
              
              <div style={{
                padding: "14px 16px",
                display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8
              }}>
                <span style={{ fontSize: 13, color: "#222" }}>{row.label}</span>
                <svg
                  width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="#aaa" strokeWidth="2" strokeLinecap="round"
                  style={{ flexShrink: 0, transform: openRows[i] ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>

          
              <div style={{
                padding: "14px 8px", textAlign: "center",
                borderLeft: "1px solid #efefef",
                display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                {row.whistle === "check" ? <CheckIcon /> :
                  <span style={{ fontSize: 11.5, color: "#444", fontWeight: 600, lineHeight: 1.4, textAlign: "center" }}>{row.whistleVal}</span>
                }
              </div>

           
              <div style={{
                padding: "14px 8px", textAlign: "center",
                borderLeft: "1px solid #efefef",
                display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                {row.other === "cross" ? <CrossIcon /> :
                  <span style={{ fontSize: 11.5, color: "#888", lineHeight: 1.4, textAlign: "center" }}>{row.otherVal}</span>
                }
              </div>
            </div>

            {openRows[i] && (
              <div style={{
                padding: "10px 16px 12px",
                background: "#faf9ff",
                borderBottom: i < comparisonRows.length - 1 ? "1px solid #efefef" : "none",
                fontSize: 12, color: "#666", lineHeight: 1.55
              }}>
                {row.whistle === "check"
                  ? `Whistle includes ${row.label.toLowerCase()} as part of its complete package at no extra cost.`
                  : `Whistle offers ${row.whistleVal} vs competitors who provide ${row.otherVal}.`
                }
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WhistleLanding() {
  const [teethGap, setTeethGap] = useState("yes");
  const [fullName, setFullName] = useState("Ajay Kumar");
  const [mobile, setMobile] = useState("");
  const [consent, setConsent] = useState(false);

  return (
   <div style={{ 
  fontFamily: "'Segoe UI', sans-serif", 
  background: "#fff", 
}}>
     
      <nav style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "12px 20px", borderBottom: "1px solid #eee", background: "#fff"
      }}>
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
          <span style={{ fontWeight: 700, fontSize: 22, color: "#7B5EA7", letterSpacing: -0.5 }}>whistle</span>
          <span style={{ fontSize: 9, color: "#9E8FC0", letterSpacing: 2, textTransform: "uppercase", marginTop: 1 }}>AND SMILE</span>
        </div>
        <button style={{
          width: 40, height: 40, borderRadius: "50%", background: "#7B5EA7",
          border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center"
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
          </svg>
        </button>
      </nav>

      
      <div style={{
        background: "#C8F0D8", textAlign: "center", padding: "6px 16px",
        fontSize: 12.5, color: "#1a6b3c", fontWeight: 500
      }}>
        Starting at{" "}
        <span style={{ textDecoration: "line-through", color: "#888", fontWeight: 400 }}>Rs 53,380</span>{" "}
        <strong>Rs 47,999.</strong> Hurry! Offer ends soon.
      </div>
    
      <div style={{
        background: "linear-gradient(135deg, #f0edfa 0%, #e8e4f7 100%)",
        padding: "32px 24px 0 24px", display: "flex",
        justifyContent: "space-between", alignItems: "flex-end", minHeight: 180, position: "relative", overflow: "hidden"
      }}>
<div className="responsive-text-block">
  <h1 style={{ 
    fontSize: "44px", 
    fontWeight: 800, 
    color: "#1a1a2e", 
    lineHeight: 1.2, 
    marginBottom: "16px", 
    letterSpacing: "-1px",
    whiteSpace: "nowrap" 
  }}>
    Invisible Aligners for a dream smile
  </h1>
  <p style={{ 
    fontSize: "20px", 
    color: "#444", 
    lineHeight: 1.5, 
    fontWeight: 500
  }}>
    Book a Scan and avail a free <br />
    Orthodontist Consult <span style={{ color: "#9e8fc0", fontWeight: 700 }}>worth ₹1500</span>
  </p>
</div>
  <div className="silhouette-wrapper">
 
  <div className="silhouette-gradient-box">
    <svg viewBox="0 0 100 130" className="silhouette-svg">
   
      <ellipse cx="50" cy="32" rx="22" ry="26" fill="#f5c9a0" />
   
      <ellipse cx="50" cy="16" rx="24" ry="18" fill="#2d1b00" />
      <ellipse cx="30" cy="28" rx="10" ry="22" fill="#2d1b00" />
      <ellipse cx="70" cy="26" rx="10" ry="20" fill="#2d1b00" />

      <rect x="43" y="55" width="14" height="14" rx="4" fill="#f5c9a0" />
     
      <path d="M15 130 Q20 68 43 66 L57 66 Q80 68 85 130 Z" fill="#f0eefc" />
     
      <path d="M43 42 Q50 48 57 42" fill="none" stroke="#c0705a" strokeWidth="1.5" strokeLinecap="round" />
    
      <ellipse cx="43" cy="35" rx="3" ry="3.5" fill="#2d1b00" />
      <ellipse cx="57" cy="35" rx="3" ry="3.5" fill="#2d1b00" />
    </svg>
  </div>
</div>
      </div>
      <div style={{ padding: "24px 20px 12px", textAlign: "center" }}>
        <p style={{ fontWeight: 600, fontSize: 14.5, color: "#222", marginBottom: 14 }}>
          Do you have Teeth Gaps or Crooked Teeth?
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 32 }}>
          {["yes", "no"].map((opt) => (
            <label key={opt} style={{ display: "flex", alignItems: "center", gap: 6, cursor: "pointer", fontSize: 14, color: "#333" }}>
              <input
                type="radio"
                name="teethGap"
                value={opt}
                checked={teethGap === opt}
                onChange={() => setTeethGap(opt)}
                style={{ accentColor: "#7B5EA7", width: 16, height: 16 }}
              />
              {opt.charAt(0).toUpperCase() + opt.slice(1)}
            </label>
          ))}
        </div>
      </div>

      <div className="hero-form-container">
  <div className="hero-form-row">
    
    <div className="form-input-group">
      <label className="form-floating-label">Full Name*</label>
      <input
        type="text"
        placeholder="Ajay Kumar"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        className="form-text-input"
      />
    </div>


    <div className="form-input-group">
      <label className="form-floating-label">Mobile number*</label>
      <div className="form-mobile-wrapper">
        <span className="form-mobile-prefix">+91</span>
        <input
          type="tel"
          value={mobile}
          placeholder="Mobile number*"
          onChange={(e) => setMobile(e.target.value)}
          className="form-mobile-input"
        />
      </div>
    </div>

   
    <button className="form-submit-btn">
      Book a Free Scan
    </button>
  </div>


  <label className="form-consent-label">
    <input
      type="checkbox"
      checked={consent}
      onChange={(e) => setConsent(e.target.checked)}
      className="form-consent-checkbox"
    />
    <span className="form-consent-text">
      I hereby consent to receive calls / messages from Whistle and its partners and override DND settings.
    </span>
  </label>
</div>

     
      <div className="clove-banner-card">
  <div className="clove-banner-flex">
    
   
    <div className="clove-text-section">
      <p className="clove-banner-text">
        Book a Free 3D Teeth Scan and Orthodontist Consult in a Clove Dental Clinic near you.
      </p>
      
      <button className="clove-find-btn">
        Find Clinic
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    </div>

 
    <div className="clove-logo-box">
      <div className="clove-brand-main">clove</div>
      <div className="clove-brand-smile">:)</div>
      <div className="clove-brand-sub">DENTAL</div>
    </div>

  </div>
</div>

<div style={{ background: "#1a1a2e", padding: "10px 0", overflow: "hidden", position: "relative" }}>
        <div style={{
          display: "flex", gap: 40, whiteSpace: "nowrap",
          animation: "ticker 18s linear infinite"
        }}>
          {[
            { label: "Our inaugural launch benefit" },
            { label: "Free teeth scan", highlight: "worth ₹500" },
            { label: "Free orthodontic consultation", highlight: "worth ₹1500" },
            { label: "Our inaugural launch benefit" },
            { label: "Free teeth scan", highlight: "worth ₹500" },
            { label: "Free orthodontic consultation", highlight: "worth ₹1500" },
          ].map((item, i) => (
            <span key={i} style={{ fontSize: 12.5, color: "#e0d9f5", flexShrink: 0 }}>
              {item.label}
              {item.highlight && (
                <strong style={{ color: "#fff", marginLeft: 4 }}>{item.highlight}</strong>
              )}
              <span style={{ marginLeft: 24, color: "#7B5EA7" }}>•</span>
            </span>
          ))}
        </div>
        <style>{`
          @keyframes ticker {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
   
      <div style={{ background: "#eef2f8", padding: "40px 20px" }}>
        <div style={{ display: "flex", gap: 24, alignItems: "flex-start", flexWrap: "wrap" }}>
          {/* Left Text */}
          <div style={{ flex: "1 1 220px" }}>
            <h2 style={{ fontSize: 28, fontWeight: 900, color: "#111", lineHeight: 1.2, marginBottom: 16 }}>
              Dream smiles<br />achieved secretly
            </h2>
            <p style={{ fontSize: 13, color: "#444", lineHeight: 1.65, marginBottom: 12 }}>
              Experience the superior quality of our Whistle Aligners crafted with 3-layer PU material. With 450+ clinics nationwide, enjoy comfortable treatment by expert orthodontists at House of Clove
            </p>
            <p style={{ fontSize: 13, color: "#444", lineHeight: 1.65 }}>
              The pricing is different for every case. Cases with higher complexity requiring more aligners and additional time and effort from our dentists.
            </p>
          </div>

       
          <div style={{
            flex: "1 1 240px", background: "#fff", borderRadius: 12,
            padding: "20px 20px 16px", boxShadow: "0 2px 12px rgba(0,0,0,0.07)"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <p style={{ fontSize: 16, fontWeight: 800, color: "#111", marginBottom: 4 }}>Whistle Aligners</p>
                <p style={{ fontSize: 12, color: "#888", marginBottom: 2 }}>
                  <span style={{ textDecoration: "line-through" }}>₹84,000</span>
                </p>
                <p style={{ fontSize: 12, color: "#555" }}>
                  starting at{" "}
                  <span style={{ fontSize: 20, fontWeight: 800, color: "#7B5EA7" }}>₹47,999</span>
                </p>
                <p style={{ fontSize: 11, color: "#aaa", marginTop: 2 }}>inc. of all taxes</p>
              </div>
              {/* Aligner product image mock */}
              <div style={{
                width: 72, height: 72, borderRadius: "50%",
                background: "radial-gradient(circle at 35% 35%, #a07bd0, #4a2d80)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0
              }}>
                <svg viewBox="0 0 60 60" width="52" height="52">
                  <ellipse cx="30" cy="38" rx="22" ry="14" fill="#3d2270" opacity="0.6" />
                  <ellipse cx="30" cy="30" rx="22" ry="16" fill="#7B5EA7" />
                  <ellipse cx="30" cy="26" rx="18" ry="10" fill="#9d7ecf" opacity="0.5" />
                  <text x="30" y="32" textAnchor="middle" fontSize="7" fill="#fff" fontWeight="bold">whistle</text>
                </svg>
              </div>
            </div>

            <div style={{ borderTop: "1px solid #f0f0f0", margin: "14px 0 10px", paddingTop: 10 }}>
              {[
                "Offer valid for a limited time",
                "Easy financing options"
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <svg width="16" height="16" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8" fill="#22c55e" />
                    <path d="M4.5 8l2.5 2.5 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                  <span style={{ fontSize: 12, color: "#444" }}>{item}</span>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "right" }}>
              <button style={{
                background: "none", border: "none", cursor: "pointer",
                color: "#7B5EA7", fontSize: 13, fontWeight: 700,
                display: "inline-flex", alignItems: "center", gap: 4
              }}>
                Learn more
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7B5EA7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

     
      <div style={{ background: "#fff", padding: "36px 16px 32px" }}>
        <h2 style={{ textAlign: "center", fontSize: 22, fontWeight: 800, color: "#111", marginBottom: 24 }}>
          Results You'll Love
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
          {results.map((item, i) => (
            <div key={i} style={{ border: "1px solid #eee", borderRadius: 10, overflow: "hidden", background: "#fff" }}>
              {/* Before / After image placeholder */}
              <div style={{ display: "flex" }}>
                {["Before", "After"].map((label, j) => (
                  <div key={j} style={{ flex: 1, position: "relative" }}>
                    <div style={{
                      height: 90,
                      background: j === 0
                        ? `linear-gradient(135deg, #d4c4a8 0%, #c2a882 100%)`
                        : `linear-gradient(135deg, #f5e8d0 0%, #e8d5b0 100%)`,
                      display: "flex", alignItems: "center", justifyContent: "center"
                    }}>
                     
                      <svg viewBox="0 0 40 20" width="50" height="25">
                        <rect x="2" y="2" width="36" height="16" rx="8" fill={j === 0 ? "#c08060" : "#e0a080"} />
                        {j === 1 && (
                          <>
                            <rect x="8" y="5" width="6" height="10" rx="2" fill="#fff" />
                            <rect x="15" y="4" width="5" height="12" rx="2" fill="#fff" />
                            <rect x="21" y="4" width="5" height="12" rx="2" fill="#fff" />
                            <rect x="27" y="5" width="6" height="10" rx="2" fill="#fff" />
                          </>
                        )}
                        {j === 0 && (
                          <>
                            <rect x="8" y="5" width="5" height="10" rx="2" fill="#e8c090" transform="rotate(-5 10 10)" />
                            <rect x="14" y="4" width="5" height="11" rx="2" fill="#e8c090" transform="rotate(3 16 10)" />
                            <rect x="20" y="4" width="5" height="11" rx="2" fill="#e8c090" transform="rotate(-4 22 10)" />
                            <rect x="26" y="5" width="5" height="10" rx="2" fill="#e8c090" transform="rotate(5 28 10)" />
                          </>
                        )}
                      </svg>
                    </div>
                    <p style={{
                      textAlign: "center", fontSize: 11, color: "#666",
                      padding: "4px 0", borderTop: "1px solid #f0f0f0"
                    }}>{label}</p>
                  </div>
                ))}
              </div>
           
              <div style={{ padding: "10px 12px 12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ fontSize: 11.5, color: "#888" }}>Concern</span>
                  <span style={{ fontSize: 11.5, color: "#222", fontWeight: 600 }}>{item.concern}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 11.5, color: "#888" }}>Treatment Duration</span>
                  <span style={{ fontSize: 11.5, color: "#222", fontWeight: 600 }}>{item.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


     <div className="why-whistle-section">
  <h2 className="why-whistle-heading">Why Whistle?</h2>
  
  <div className="why-whistle-grid">
    
    {/* Card 1 */}
    <div className="why-whistle-card">
      <div className="why-whistle-img-box">
        <img 
          src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=400&q=80" 
          alt="Custom-made & invisible" 
        />
      </div>
      <div className="why-whistle-text-block">
        <p className="why-whistle-title">Custom-made & invisible</p>
        <p className="why-whistle-desc">Tailored for your teeth and smile with a clear, discreet appearance.</p>
      </div>
    </div>

    <div className="why-whistle-card">
      <div className="why-whistle-img-box">
        <img 
          src="https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?auto=format&fit=crop&w=400&q=80" 
          alt="Predictable results" 
        />
      </div>
      <div className="why-whistle-text-block">
        <p className="why-whistle-title">Predictable results</p>
        <p className="why-whistle-desc">Advanced 3D modeling and AI-technology for precise planning and predictable results.</p>
      </div>
    </div>


    <div className="why-whistle-card">
      <div className="why-whistle-img-box">
        <img 
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=400&q=80" 
          alt="Partnership with Clove Dental" 
        />
      </div>
      <div className="why-whistle-text-block">
        <p className="why-whistle-title">Partnership with Clove Dental</p>
        <p className="why-whistle-desc">Led by highly experienced Orthodontists of Clove Dental and Whistle that have corrected over 2 lakh smiles.</p>
      </div>
    </div>

<div className="why-whistle-card">
  <div className="why-whistle-img-box">
    <img 
      src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=400&q=80" 
      alt="Unlimited Aligners*" 
    />
  </div>
  <div className="why-whistle-text-block">
    <p className="why-whistle-title">Unlimited Aligners*</p>
    <p className="why-whistle-desc">Unlimited aligners and doctor consults at no extra cost.</p>
  </div>
</div>

  </div>
</div>


      <section className="difference-section">
        <div className="difference-container">
          
       
          <div className="difference-content">
            <h2 className="difference-heading">The Whistle Difference</h2>
            
        
            <div className="feature-item">
              <div className="feature-icon-wrapper">🦷</div>
              <div className="feature-text-block">
                <p className="feature-title">Next-Gen</p>
                <p className="feature-desc">
                  Crafted with top-notch 3D printing, laser tech, and Zendura FLX material.
                </p>
              </div>
            </div>

         
            <div className="feature-item">
              <div className="feature-icon-wrapper">📈</div>
              <div className="feature-text-block">
                <p className="feature-title">Hassle-Free</p>
                <p className="feature-desc">
                  Predictable, comfortable & lifestyle-friendly for an easy smile transformation.
                </p>
              </div>
            </div>

         
            <div className="feature-item">
              <div className="feature-icon-wrapper">🪙</div>
              <div className="feature-text-block">
                <p className="feature-title">Transparent Pricing</p>
                <p className="feature-desc">
                  Everything's included - from scans to aligners, doctor consults, and retainers - no hidden costs.
                </p>
              </div>
            </div>
          </div>

       
          <div className="difference-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=500&q=80" 
              alt="Whistle Aligners Production" 
              className="difference-img"
            />
          </div>

        </div>
      </section>

      <WhistleComparison />

    
      <div style={{ background: "#eef2f8", padding: "20px 16px 28px" }}>
        <div style={{
          background: "#fff", borderRadius: 14, padding: "24px 20px",
          border: "1px solid #e4e4ee"
        }}>
          <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
            {/* Left: heading + steps grid */}
            <div style={{ flex: "1 1 55%" }}>
              <h2 style={{ fontSize: 20, fontWeight: 900, color: "#111", lineHeight: 1.3, marginBottom: 22 }}>
                Get your perfect smile in four simple steps
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px 12px" }}>
                {[
                  { n: 1, title: "Scan",      desc: "We use an AI-powered scanner to take a detailed 3D image of your teeth." },
                  { n: 2, title: "Plan",      desc: "Our Orthodontists design your customized smile enhancement plan using highly advanced software" },
                  { n: 3, title: "Fabricate", desc: "We manufacture your custom aligners leveraging 3D printing & laser technology" },
                  { n: 4, title: "Wear",      desc: "Your Whistle Aligners and expert Clove Dental Orthodontists monitor your progress across the journey" },
                ].map((step) => (
                  <div key={step.n} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    
                    <div style={{
                      width: 26, height: 26, borderRadius: "50%",
                      background: "#7B5EA7", color: "#fff",
                      fontSize: 12, fontWeight: 800,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, marginTop: 1
                    }}>
                      {step.n}
                    </div>
                    <div>
                      <p style={{ fontSize: 13, fontWeight: 700, color: "#111", marginBottom: 3 }}>{step.title}</p>
                      <p style={{ fontSize: 11.5, color: "#666", lineHeight: 1.55 }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

         
            <div style={{
              flex: "1 1 40%", borderRadius: 10, overflow: "hidden",
              background: "#2a2060", position: "relative", minHeight: 190,
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
            
              <svg viewBox="0 0 160 190" width="100%" height="190">
              
                <rect width="160" height="190" fill="#4a3888" />
              
                <rect x="0" y="0" width="6" height="190" fill="#7B5EA7" />
             
                <ellipse cx="100" cy="60" rx="22" ry="26" fill="#f5c9a0" />
                <path d="M70 190 Q75 110 88 105 L112 105 Q125 110 130 190 Z" fill="#fff" />
                <path d="M75 190 Q78 130 88 125 L112 125 Q122 130 125 190 Z" fill="#e0e0e0" />
             
                <ellipse cx="55" cy="130" rx="18" ry="22" fill="#8a7060" />
                <path d="M30 190 Q32 155 45 150 L65 150 Q78 155 80 190 Z" fill="#404040" />
               
                <rect x="80" y="65" width="30" height="16" rx="6" fill="#90cce8" opacity="0.8" />
             
                <ellipse cx="75" cy="105" rx="8" ry="5" fill="#90cce8" />
              
                <rect x="72" y="90" width="3" height="20" rx="1.5" fill="#c0c0c0" />
              </svg>
              
              <div style={{
                position: "absolute", top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                width: 44, height: 44, borderRadius: "50%",
                background: "rgba(255,255,255,0.9)",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", boxShadow: "0 2px 12px rgba(0,0,0,0.2)"
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24">
                  <polygon points="6,3 20,12 6,21" fill="#7B5EA7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: "#eef2f8", position: "relative", overflow: "hidden", minHeight: 260 }}>
        <div style={{ display: "flex", alignItems: "stretch" }}>
          {/* Left text */}
          <div style={{ flex: "1 1 50%", padding: "36px 20px 80px" }}>
            <h2 style={{ fontSize: 22, fontWeight: 900, color: "#111", lineHeight: 1.3, marginBottom: 16 }}>
              We are Doctor-led, not direct-to-customers
            </h2>
            <p style={{ fontSize: 13, color: "#555", lineHeight: 1.65, marginBottom: 20 }}>
              We don't offer direct-to-customer invisible aligners. We treat you in a Dental clinic with an Orthodontist. Aligners are just the beginning; we ensure comprehensive treatment in over 450+ clinics.
            </p>
            <button style={{
              padding: "12px 22px", background: "#3b82f6", color: "#fff",
              border: "none", borderRadius: 8, fontSize: 13.5, fontWeight: 700,
              cursor: "pointer", letterSpacing: 0.2
            }}>
              Get a Callback
            </button>
          </div>

          <div style={{
            flex: "1 1 50%", background: "#c8b8a0", minHeight: 260,
            display: "flex", alignItems: "flex-end", justifyContent: "center",
            overflow: "hidden", position: "relative"
          }}>
            <svg viewBox="0 0 200 260" width="100%" height="260">
             
              <rect width="200" height="260" fill="#d4c4a8" />
            
              <rect x="100" y="0" width="100" height="180" fill="#e8dfc8" opacity="0.5" />
             
              <rect x="120" y="0" width="8" height="60" rx="3" fill="#a0a0b0" />
              <ellipse cx="124" cy="60" rx="18" ry="10" fill="#d0d0e0" />
              
              <ellipse cx="80" cy="80" rx="26" ry="30" fill="#f0c8a0" />
              <rect x="54" y="105" width="52" height="100" rx="8" fill="#ffffff" />
              <rect x="60" y="108" width="40" height="6" rx="3" fill="#e0e0e0" />
            
              <ellipse cx="80" cy="62" rx="26" ry="20" fill="#1a0a00" />
            
              <rect x="130" y="150" width="60" height="20" rx="8" fill="#b8a890" />
              <rect x="140" y="120" width="40" height="35" rx="6" fill="#c8b898" />
            
              <ellipse cx="155" cy="115" rx="16" ry="18" fill="#e8c090" />
              <ellipse cx="155" cy="100" rx="17" ry="14" fill="#8a5a30" />
            </svg>
          </div>
        </div>
      </div>

      <div style={{ background: "#fff", padding: "32px 0 28px" }}>
        <h2 style={{ textAlign: "center", fontSize: 22, fontWeight: 900, color: "#111", marginBottom: 22 }}>
          Happy Smilers!
        </h2>

      
        <div style={{
          display: "flex", gap: 10,width:"100%",
          scrollbarWidth: "none", msOverflowStyle: "none"
        }}>
          {[
            { name: "Priya S.",    by: "BY VK",       bw: false, color: "#c084fc" },
            { name: "Ananya R.",   by: "",             bw: false, color: "#a855f7" },
            { name: "Meera T.",    by: "BY WHISTLE",   bw: false, color: "#9333ea" },
            { name: "Arjun K.",    by: "",             bw: true,  color: "#7e22ce" },
            { name: "Divya M.",    by: "",             bw: true,  color: "#6b21a8" },
          ].map((person, i) => (
            <div key={i} style={{
              flex: 1, minWidth: 0, borderRadius: 10, overflow: "hidden",
              background: person.bw ? "#e8e8e8" : "#f3e8ff",
              border: `1.5px solid ${person.color}20`, position: "relative"
            }}>
            
              <div style={{
                background: person.color, padding: "5px 8px",
                display: "flex", alignItems: "center", gap: 4
              }}>
                <span style={{ fontSize: 9, fontWeight: 800, color: "#fff", letterSpacing: 0.3 }}>whistle</span>
                <span style={{ fontSize: 6, color: "rgba(255,255,255,0.7)", letterSpacing: 1.5 }}>AND SMILE</span>
              </div>

            
              <div style={{
                height: 130, background: person.bw
                  ? "linear-gradient(180deg, #b0b0b0 0%, #888 100%)"
                  : `linear-gradient(180deg, ${person.color}40 0%, ${person.color}20 100%)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                position: "relative", filter: person.bw ? "grayscale(1)" : "none"
              }}>
                
                <svg viewBox="0 0 80 120" width="80" height="120">
                  <ellipse cx="40" cy="32" rx="18" ry="22" fill={person.bw ? "#a0a0a0" : "#f5c9a0"} />
                  <ellipse cx="40" cy="18" rx="20" ry="14" fill={person.bw ? "#606060" : "#2d1b00"} />
                  <path d="M15 120 Q18 72 30 68 L50 68 Q62 72 65 120 Z" fill={person.bw ? "#808080" : "#d0c0f0"} />
                </svg>
           
                <div style={{
                  position: "absolute", bottom: 6, right: 6,
                  background: person.color, borderRadius: 4,
                  width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                  <span style={{ color: "#fff", fontSize: 14, fontWeight: 900, lineHeight: 1 }}>"</span>
                </div>
              </div>

              
              <div style={{ background: person.color, padding: "8px 10px" }}>
                <p style={{ fontSize: 10, fontWeight: 800, color: "#fff", letterSpacing: 0.3 }}>HAPPY- MONIALS</p>
                {person.by && <p style={{ fontSize: 8, color: "rgba(255,255,255,0.75)", marginTop: 2 }}>{person.by}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>

    
      <GotQuestions />

     
   <footer className="footer-container">
   
      <div className="footer-grid">

      
        <div className="footer-column">
          <p className="footer-heading">Quick Links</p>
          {(["Home", "Book a Free Scan", "How it Works", "Range of Aligners", "Aligners vs Braces", "FAQs"] as string[]).map((link) => (
            <p key={link} className="footer-link">{link}</p>
          ))}
        </div>

      
        <div className="footer-column">
          <p className="footer-heading">Get in Touch Now!</p>
          
          <div className="footer-contact-row">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
            </svg>
            <span className="footer-contact-text">011-6932-8350</span>
          </div>
          
          <div className="footer-contact-row" style={{ marginBottom: 0 }}> {/* Pehle row ka bottom margin fix karne ke liye */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
            </svg>
            <span className="footer-contact-text">support@whistle.in</span>
          </div>
        </div>

       
        <div className="footer-column">
          <p className="footer-heading">Follow us on</p>
          <div className="footer-social-row">
            <svg className="footer-social-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            <svg className="footer-social-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
            </svg>
            <svg className="footer-social-icon" width="22" height="22" viewBox="0 0 24 24" fill="#ccc">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.733-8.835L1.254 2.25H8.08l4.261 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </div>
        </div>

    
        <div className="footer-legal-column">
          {(["Privacy Policy", "Terms of Service"] as string[]).map((item) => (
            <span key={item} className="footer-legal-link">{item}</span>
          ))}
        </div>

      </div>

     
      <div className="footer-copyright-section">
        <span className="footer-copyright-text">© 2024 Whistle and Smile. All rights reserved.</span>
      </div>
    </footer>

     
      <div style={{
        position: "sticky", bottom: 0, zIndex: 100,
        background: "#fff", borderTop: "1px solid #e8e8ee",
        padding: "12px 16px",
        display: "flex", alignItems: "center", gap: 10,
        boxShadow: "0 -4px 16px rgba(0,0,0,0.08)"
      }}>
        <span style={{ flex: "0 0 auto", fontSize: 12.5, fontWeight: 600, color: "#222" }}>
          Ready for your perfect smile?
        </span>
        <button style={{
          flex: 1, padding: "11px 4px", background: "#7B5EA7", color: "#fff",
          border: "none", borderRadius: 8, fontSize: 12, fontWeight: 700,
          cursor: "pointer", whiteSpace: "nowrap"
        }}>
          Book scan at Home
        </button>
        <button style={{
          flex: 1, padding: "11px 4px", background: "#fff", color: "#555",
          border: "1.5px solid #ddd", borderRadius: 8, fontSize: 12, fontWeight: 700,
          cursor: "pointer", whiteSpace: "nowrap"
        }}>
          Book scan at Clinic
        </button>
      </div>

    </div>
  );
}
