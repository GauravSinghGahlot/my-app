/********************************************************************
 *  src/App.js – Grow Nexus site (logo file path + full CSS)
 *  REQUIREMENTS:
 *    my-app/public/images/grownexus-logo.jpg
 *    other screenshots already placed in public/images/
 *******************************************************************/
import React, { useState, useRef } from "react";

/*────────────────────  LOGO COMPONENT  ─────────────────────────*/
const Logo = ({ className }) => (
  <img
    src="/images/grownexus-logo.jpg"
    alt="Grow Nexus"
    className={className ?? "logo-img"}
  />
);

/*────────────────────  SHARED ICONS & BUTTONS  ───────────────*/
const ArrowIcon = ({ dir = "right" }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 14 14"
    fill="none"
    style={{ transform: dir === "left" ? "rotate(180deg)" : undefined }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 11l5-5-5-5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const BtnPrimary = ({ onClick, children }) => (
  <button className="btn primary" onClick={onClick}>
    {children} <ArrowIcon />
  </button>
);
const BtnGhost = ({ onClick, children, small = false }) => (
  <button
    className={`btn ghost${small ? " sm" : ""}`}
    onClick={onClick}
  >
    {children} <ArrowIcon />
  </button>
);

/*────────────────────  NAVBAR  ───────────────────────────────*/
function NavBar({ onFormOpen, scrollToExpertise }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <Logo />
        
        {/* Desktop Menu */}
        <ul className="menu desktop-menu">
          <li>About <ArrowIcon /></li>
          <li onClick={scrollToExpertise}>Services <ArrowIcon /></li>
          <li>AI Tools <ArrowIcon /></li>
          <li>Education <ArrowIcon /></li>
          <li>Blog <ArrowIcon /></li>
          <li>Portfolio <ArrowIcon /></li>
        </ul>
        
        {/* Desktop Right Section */}
        <div className="right desktop-right">
          <input className="search" placeholder="Search" />
          <BtnGhost onClick={onFormOpen}>Get a Free Consultation</BtnGhost>
        </div>
        
        {/* Mobile Hamburger Button */}
        <button className="hamburger" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMobileMenu}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <Logo />
              <button className="close-btn" onClick={closeMobileMenu}>×</button>
            </div>
            <ul className="mobile-menu-items">
              <li onClick={closeMobileMenu}>About <ArrowIcon /></li>
              <li onClick={() => { scrollToExpertise(); closeMobileMenu(); }}>Services <ArrowIcon /></li>
              <li onClick={closeMobileMenu}>AI Tools <ArrowIcon /></li>
              <li onClick={closeMobileMenu}>Education <ArrowIcon /></li>
              <li onClick={closeMobileMenu}>Blog <ArrowIcon /></li>
              <li onClick={closeMobileMenu}>Portfolio <ArrowIcon /></li>
            </ul>
            <div className="mobile-menu-footer">
              <input className="search mobile-search" placeholder="Search" />
              <BtnGhost onClick={() => { onFormOpen(); closeMobileMenu(); }}>
                Get a Free Consultation
              </BtnGhost>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/*────────────────────  HERO  ────────────────────────────────*/
const Hero = ({ onFormOpen }) => (
  <header className="hero">
    <h1>
      Empowering Businesses with <em>Future‑Ready Software Solutions</em>
    </h1>
    <p>
      Custom‑built web &amp; mobile apps, enterprise platforms, and scalable
      digital products.
    </p>
    <div className="cta">
      <BtnPrimary onClick={onFormOpen}>Get a Free Consultation</BtnPrimary>
      <BtnGhost>View Our Work</BtnGhost>
    </div>
  </header>
);

/*────────────────────  TRUST BAND  ──────────────────────────*/
const TrustBand = () => (
  <section className="trust">
    <p>
      Trusted by <em>Startups, Scaleups</em>, and <em>Enterprise</em> innovators
    </p>
    <div className="brands">
      {["yatra", "rapido", "innisfree", "godrej | PROPERTIES"].map((b) => (
        <span key={b}>{b}</span>
      ))}
    </div>
  </section>
);

/*────────────────────  EXPERTISE  ───────────────────────────*/
const Expertise = () => {
  const services = [
    "Custom Software Development",
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Cloud & DevOps",
    "AI & Automation",
  ];
  return (
    <section className="expertise">
      <h2>
        Our <em>Expertise</em>
      </h2>
      <p className="sub">
        We specialize in delivering cutting‑edge digital solutions across a wide
        range of services
      </p>
      <div className="grid">
        {services.map((t, i) => (
          <div className="card" key={i}>
            <div className="icon-box">{t.slice(0, 2)}</div>
            <h3>{t}</h3>
            <p>This is a sample description for {t.replace("Development", "Dev")}.</p>
          </div>
        ))}
      </div>
    </section>
  );
};

/*────────────────────  WHY PARTNER  ─────────────────────────*/
const WhyPartner = () => {
  const items = [
    ["Agile Development", "We follow agile methodologies to deliver faster results, adapt to change."],
    ["Scalable Architecture", "Our solutions are built with scalability in mind, ensuring they grow with your business."],
    ["End‑to‑End Solutions", "From idea to launch and beyond — we handle everything so you can focus on business."],
    ["Experienced Tech Teams", "Skilled developers, designers, and strategists with years of hands‑on experience."],
    ["Transparent Communication", "We keep you in the loop at every stage with clear updates and collaboration."],
    ["Long‑Term Support", "Reliable maintenance, updates, and ongoing optimization."]
  ];
  return (
    <section className="partner-section">
      <h2>Why <em>Partner</em> With Us?</h2>
      <div className="partner-grid">
        {items.map(([title, desc]) => (
          <div className="partner-card" key={title}>
            <div className="partner-icon">💻</div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

/*────────────────────  CASE STUDIES  – two‑card carousel ─────*/
const CaseStudies = () => {
  const cases = [
    ["/images/buildingneeds.jpg","BuildingNeeds – Material Marketplace","BuildingNeeds simplifies buying building materials with quality products at fair prices."],
    ["/images/helioweb.jpg","HelioWeb – Digital Storytelling","HelioWeb curates stories digitally so audiences anchor to your brand."],
    ["/images/roxstar.jpg","Roxstar – Karaoke Creator","Turning voices into masterpieces with the first India‑born karaoke app."],
    ["/images/yelofast.jpg","YeloFast – Super‑App Delivery","A one‑stop delivery platform for food, grocery, and more with new facilities for everyone."],
    ["/images/easymachine.jpg","Easy Machine – Rent & Buy Equipment","Your one‑stop platform for renting or purchasing heavy machinery, spare parts and more."],
    ["/images/niftytrader.jpg","Nifty Trader – Stock‑Market Suite","NSE option chain, GIFT Nifty, screeners and tools for Indian options traders."],
    ["/images/houseofbanaras.jpg","House of Banaras – Heritage Weaves","Simplicity meets elegance—sharing the timeless traditions and cultural richness of Banaras."],
    ["/images/outlands.jpg","Outlands – Ultimate Frontier Expeditions","#Follow_the_feather to the world's most isolated, unexplored territories."]
  ];
  const [idx,setIdx]=useState(0);
  const prev = () => setIdx(i => (i - 2 + cases.length) % cases.length);
  const next = () => setIdx(i => (i + 2) % cases.length);
  const visible = [0,1].map(o => cases[(idx + o) % cases.length]);

  return (
    <section className="case-section">
      <h2>Case <em>Studies</em></h2>
      <p className="case-tagline">
        Explore real‑world success stories where our innovative solutions have
        transformed ideas into impactful digital experiences.
      </p>
      <div className="case-carousel">
        <button className="case-nav" onClick={prev}>
          <ArrowIcon dir="left" />
        </button>
        {visible.map(([img, title, desc]) => (
          <div className="case-card" key={title}>
            <img src={img} alt={title} />
            <div className="case-body">
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          </div>
        ))}
        <button className="case-nav" onClick={next}>
          <ArrowIcon />
        </button>
      </div>
    </section>
  );
};

/*────────────────────  AI CAPABILITIES  ──────────────────────*/
const AICapabilities = () => {
  const cards = [
    ["/images/chatbot.jpg","Chatbots & NLP","30+ ready‑made AI solutions tailored to meet diverse business needs."],
    ["https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=60","Predictive Analytics","70+ partners delivering specialized AI expertise."],
    ["/images/processautomation.jpg","Process Automation","A powerhouse of 5 000+ AI engineers ready to bring your vision to life."]
  ];
  return (
    <section className="ai-section">
      <h2>
        AI‑Powered <em>Capabilities</em>
      </h2>
      <p className="ai-tagline">
        We harness artificial intelligence to build smarter, more efficient
        systems—from intelligent automation and predictive analytics to
        personalized user experiences.
      </p>
      <BtnGhost small>Explore AI Tools</BtnGhost>
      <div className="ai-grid">
        {cards.map(([img, title, desc]) => (
          <div className="ai-card" key={title}>
            <img src={img} alt={title} />
            <div className="ai-overlay">
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

/*────────────────────  STRATEGIC PARTNERS  ───────────────────*/
const StrategicPartners = () => {
  const logos = [
    ["Twilio","https://cdn.worldvectorlogo.com/logos/twilio-1.svg"],
    ["GitHub","https://cdn.worldvectorlogo.com/logos/github-icon-1.svg"],
    ["Google Cloud","https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg"],
    ["AWS","https://cdn.worldvectorlogo.com/logos/amazon-web-services-1.svg"],
    ["Microsoft","https://cdn.worldvectorlogo.com/logos/microsoft.svg"],
    ["Figma","https://cdn.worldvectorlogo.com/logos/figma-1.svg"]
  ];
  return (
    <section className="partners-section">
      <h2>
        Our Strategic <em>Partners</em>
      </h2>
      <p className="partners-tagline">
        We collaborate with leading technology providers and industry experts to
        deliver reliable, future‑ready solutions that drive mutual growth and
        innovation.
      </p>
      <div className="partners-logos">
        {logos.map(([alt, src]) => (
          <img key={alt} src={src} alt={alt} />
        ))}
      </div>
    </section>
  );
};

/*────────────────────  TESTIMONIALS  ─────────────────────────*/
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviews = [
    [
      "Grow Nexus delivered a stable, slick delivery app that helped us scale city‑wide within weeks.",
      "Nitesh Goyal",
      "Founder, YeloFast",
    ],
    [
      "They turned our storytelling vision into reality—HelioWeb now hooks audiences from the first scroll.",
      "Krishna Ojha",
      "Founder, HelioWeb",
    ],
    [
      "With Roxstar, singers publish karaoke masterpieces instantly. Engineering quality exceeded expectations.",
      "Harshit Jain",
      "Founder, Roxstar",
    ],
    [
      "BuildingNeeds now handles thousands of material orders daily thanks to the robust platform they built.",
      "Mahesh",
      "Founder, BuildingNeeds",
    ],
  ];

  // Auto-scroll effect
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section className="testi-section">
      <h2>
        Trusted by <em>Leaders</em>
      </h2>
      <p className="testi-tagline">Here's what our founders say</p>
      <div className="testi-carousel-container">
        <div 
          className="testi-carousel-track" 
          style={{ transform: `translateX(-${currentIndex * (100 / reviews.length)}%)` }}
        >
          {reviews.map(([text, name, title], index) => (
            <div className="testi-card" key={`${name}-${index}`}>
              <div className="quote">"</div>
              <p className="review">{text}</p>
              <div className="stars">★★★★★</div>
              <div className="person">
                <div className="avatar">{name[0]}</div>
                <div>
                  <strong>{name}</strong>
                  <br />
                  <span>{title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="testi-indicators">
        {reviews.map((_, index) => (
          <button
            key={index}
            className={`testi-indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

/*────────────────────  TECH CAPABILITIES  ─────────────────────*/
const TechCapabilities = () => {
  const data = {
    Frontend: [
      "https://cdn.worldvectorlogo.com/logos/html-1.svg",
      "https://cdn.worldvectorlogo.com/logos/css-3.svg",
      "https://cdn.worldvectorlogo.com/logos/react-2.svg",
      "https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg",
    ],
    "UI/UX": [
      "https://cdn.worldvectorlogo.com/logos/figma-1.svg",
      "https://cdn.worldvectorlogo.com/logos/adobe-xd-1.svg",
      "https://cdn.worldvectorlogo.com/logos/sketch-2.svg",
    ],
    Database: [
      "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
      "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
      "https://cdn.worldvectorlogo.com/logos/mysql-6.svg",
    ],
    Backend: [
      "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
      "https://cdn.worldvectorlogo.com/logos/express-109.svg",
      "https://cdn.worldvectorlogo.com/logos/django-community.svg",
    ],
    Security: [
      "https://cdn.worldvectorlogo.com/logos/jwt-3.svg",
      "https://cdn.worldvectorlogo.com/logos/oauth-2.svg",
      "https://cdn.worldvectorlogo.com/logos/let-s-encrypt.svg",
    ],
  };
  const cats = Object.keys(data);
  const [active, setActive] = useState("Database");
  return (
    <section className="tech-section">
      <h2>
        Driving Digital <em>Transformation</em> through advanced{" "}
        <em>Technology</em> Capabilities.
      </h2>
      <div className="tech-inner">
        <div className="tech-cats">
          {cats.map((c) => (
            <button
              key={c}
              className={`tech-pill${active === c ? " active" : ""}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="tech-content">
          <p>
            Rationalize your data migration by selecting a database that offers
            you the most in functionality and convenience.
          </p>
          <div className="tech-logos">
            {data[active].map((src) => (
              <img key={src} src={src} alt={active} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/*────────────────────  FINAL CTA  ────────────────────────────*/
const FinalCTA = () => (
  <section className="cta-section">
    <div className="cta-text">
      <h2>
        Let's Build the <em>Future</em> of
        <br />
        Your <em>Business</em>
      </h2>
      <BtnPrimary>Contact Us Now</BtnPrimary>
    </div>
    <img
      src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=600&q=60"
      alt="building"
    />
  </section>
);

/*────────────────────  FOOTER  ───────────────────────────────*/
const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <Logo className="logo-img footer" />
      <ul className="foot-links">
        {[
          "Cloud Efficiency and Intelligence",
          "Emerging Tech",
          "Software Studio",
          "Next Gen Talent",
          "Marketing and Experience",
        ].map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <div className="foot-contact">Contact US</div>
    </div>
  </footer>
);

/*────────────────────  FORM PAGE  ───────────────────────────*/
function FormPage({ goBack }) {
  return (
    <div className="form-page">
      <h2>Get a Free Consultation</h2>
      <form>
        <label>
          Name:<input type="text" placeholder="Your Name" />
        </label>
        <label>
          Education:<input type="text" placeholder="Your Education" />
        </label>
        <label>
          Location:<input type="text" placeholder="Your Location" />
        </label>
        <label>
          Contact Number:<input type="text" placeholder="Your Contact No." />
        </label>
        <button className="btn primary" type="submit">
          Submit
        </button>
        <button className="btn ghost" type="button" onClick={goBack}>
          Back to Home
        </button>
      </form>
    </div>
  );
}

/*────────────────────  ROOT APP  ────────────────────────────*/
export default function App() {
  const [showForm, setShowForm] = useState(false);
  const expertiseRef = useRef(null);
  return (
    <>
      <style>{css}</style>
      {showForm ? (
        <FormPage goBack={() => setShowForm(false)} />
      ) : (
        <>
          <NavBar
            onFormOpen={() => setShowForm(true)}
            scrollToExpertise={() =>
              expertiseRef.current?.scrollIntoView({ behavior: "smooth" })
            }
          />
          <main>
            <Hero onFormOpen={() => setShowForm(true)} />
            <TrustBand />
            <div ref={expertiseRef}>
              <Expertise />
            </div>
            <WhyPartner />
            <CaseStudies />
            <AICapabilities />
            <StrategicPartners />
            <Testimonials />
            <TechCapabilities />
            <FinalCTA />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

/*────────────────────  FULL CSS  ───────────────────────────*/
/*────────────────────  FULL CSS  ───────────────────────────*/
const css = String.raw`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Poppins:wght@300;400;500;600&display=swap');
  *{margin:0;padding:0;box-sizing:border-box;}
  body{font-family:'Poppins',sans-serif;color:#1d2d25;background:#fff;}
  h1,h2,h3{font-family:'Playfair Display',serif;}

  /* —— logo —— */
  .logo-img{height:46px;width:auto}
  .logo-img.footer{height:60px}
  @media(max-width:600px){.logo-img{height:38px}}

  /* NAVBAR */
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    background: #fff;
    border-bottom: 1px solid #eee;
    position: sticky;
    top: 0;
    z-index: 1000;
    min-height: 70px;
    flex-wrap: nowrap;
    gap: 15px;
  }
  
  @media (max-width: 1200px) and (min-width: 769px) {
    .navbar {
      padding: 15px 20px;
      gap: 12px;
    }
  }
  
  /* Desktop Menu */
  .desktop-menu {
    display: flex;
    list-style: none;
    gap: 22px;
    flex-shrink: 1;
    min-width: 0;
  }
  
  @media (max-width: 1200px) and (min-width: 769px) {
    .desktop-menu {
      gap: 18px;
    }
  }
  
  @media (max-width: 1024px) and (min-width: 769px) {
    .desktop-menu {
      gap: 15px;
    }
  }
  
  .desktop-menu li {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 4px;
    font-weight: 500;
    white-space: nowrap;
  }
  
  /* Desktop Right Section */
  .desktop-right {
    display: flex;
    gap: 15px;
    align-items: center;
    flex-shrink: 0;
    min-width: 280px;
  }
  
  @media (max-width: 1200px) and (min-width: 769px) {
    .desktop-right {
      gap: 12px;
      min-width: 260px;
    }
  }
  
  @media (max-width: 1024px) and (min-width: 769px) {
    .desktop-right {
      gap: 10px;
      min-width: 240px;
    }
  }
  
  .search {
    padding: 8px 14px;
    border: 1px solid #ccc;
    border-radius: 20px;
    width: 160px;
    flex-shrink: 0;
  }
  
  @media (max-width: 1200px) and (min-width: 769px) {
    .search {
      width: 140px;
    }
  }
  
  @media (max-width: 1024px) and (min-width: 769px) {
    .search {
      width: 120px;
    }
  }
  
  /* Hamburger Menu Button */
  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 24px;
    height: 24px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  }
  
  .hamburger span {
    width: 24px;
    height: 3px;
    background: #2f6b48;
    border-radius: 2px;
    transition: all 0.3s ease;
  }
  
  /* Mobile Menu Overlay */
  .mobile-menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 2000;
    display: none;
  }
  
  .mobile-menu {
    position: fixed;
    top: 0;
    right: 0;
    width: 280px;
    height: 100vh;
    background: #fff;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    transform: translateX(100%);
    animation: slideIn 0.3s ease forwards;
    display: flex;
    flex-direction: column;
  }
  
  @keyframes slideIn {
    to {
      transform: translateX(0);
    }
  }
  
  .mobile-menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #eee;
  }
  
  .close-btn {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #666;
    padding: 0;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .mobile-menu-items {
    list-style: none;
    padding: 0;
    margin: 0;
    flex: 1;
  }
  
  .mobile-menu-items li {
    padding: 16px 20px;
    border-bottom: 1px solid #f0f0f0;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;
    transition: background-color 0.2s ease;
  }
  
  .mobile-menu-items li:hover {
    background-color: #f8f9fa;
  }
  
  .mobile-menu-footer {
    padding: 20px;
    border-top: 1px solid #eee;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  
  .mobile-search {
    width: 100%;
    max-width: none;
  }
  
  /* Mobile Styles */
  @media (max-width: 768px) {
    .desktop-menu {
      display: none;
    }
    
    .desktop-right {
      display: none;
    }
    
    .hamburger {
      display: flex;
    }
    
    .mobile-menu-overlay {
      display: block;
    }
  }
  }

  /* BUTTONS */
  .btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-weight: 600;
    cursor: pointer;
  }
  .btn.primary {
    padding: 11px 20px;
    border-radius: 28px;
    background: #2f6b48;
    color: #fff;
    border: none;
    font-size: 15px;
  }
  .btn.ghost {
    padding: 11px 20px;
    border-radius: 28px;
    background: #fff;
    border: 2px solid #2f6b48;
    color: #2f6b48;
    font-size: 15px;
    white-space: nowrap;
    flex-shrink: 0;
  }
  
  /* Responsive button sizing for desktop/laptop */
  @media (max-width: 1200px) and (min-width: 769px) {
    .btn.ghost {
      font-size: 14px;
      padding: 10px 18px;
    }
  }
  
  @media (max-width: 1024px) and (min-width: 769px) {
    .btn.ghost {
      font-size: 13px;
      padding: 9px 16px;
    }
  }
  
  @media (max-width: 900px) and (min-width: 769px) {
    .btn.ghost {
      font-size: 12px;
      padding: 8px 14px;
    }
  }
  .btn.ghost.sm {
    padding: 8px 18px;
    font-size: 14px;
  }

  /* HERO */
  .hero {
    text-align: center;
    padding: 90px 20px;
    background: #0f3927;
    color: #fff;
  }
  .hero h1 {
    font-size: 46px;
    margin-bottom: 24px;
    line-height: 1.15;
    font-weight: 900;
  }
  .hero em {
    color: #7dd6a4;
    font-style: italic;
  }
  .hero p {
    font-size: 18px;
    max-width: 640px;
    margin: 0 auto 36px;
    color: #e5e5e5;
  }
  .cta {
    display: flex;
    justify-content: center;
    gap: 22px;
    flex-wrap: wrap;
  }

  /* TRUST */
  .trust {
    text-align: center;
    padding: 70px 20px;
  }
  .trust p {
    font-size: 24px;
    margin-bottom: 26px;
  }
  .brands {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
    color: #555;
    font-size: 24px; /* Adjusted font size and gap */
  }

  /* EXPERTISE */
  .expertise {
    text-align: center;
    background: #f6f6f6;
    padding: 100px 20px;
  }
  .expertise h2 {
    font-size: 34px;
    margin-bottom: 12px;
  }
  .expertise .sub {
    font-size: 16px;
    color: #666;
    margin-bottom: 50px;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 34px;
    max-width: 1200px;
    margin: 0 auto;
  }
  .card {
    background: #fff;
    border-radius: 12px;
    padding: 34px;
    text-align: left;
    box-shadow: 0 0 0 1px #e2e8f0;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  .icon-box {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: #2f6b48;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
  }
  .card h3 {
    font-size: 18px;
    font-weight: 600;
  }

  /* PARTNER */
  .partner-section {
    background: #0f3927;
    color: #fff;
    text-align: center;
    padding: 100px 30px;
  }
  .partner-section h2 {
    font-size: 34px;
    margin-bottom: 60px;
  }
  .partner-section h2 em {
    color: #b8e0c8;
  }
  .partner-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto;
    border-top: 1px solid rgba(255, 255, 255, .25);
    border-left: 1px solid rgba(255, 255, 255, .25);
  }
  .partner-card {
    padding: 30px 24px;
    border-right: 1px solid rgba(255, 255, 255, .25);
    border-bottom: 1px solid rgba(255, 255, 255, .25);
    display: flex;
    flex-direction: column;
    gap: 15px;
    text-align: left;
  }
  .partner-icon {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: #d5f4da;
    color: #0f3927;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
  }
  .partner-card h3 {
    font-size: 18px;
    font-weight: 600;
  }
  .partner-card p {
    font-size: 14px;
    line-height: 1.5;
    color: #e2e2e2;
  }

  /* CASE STUDIES */
  /* CASE STUDIES */
.case-section {
  text-align: center;
  padding: 100px 20px;
}
.case-section h2 {
  font-size: 34px;
  margin-bottom: 12px;
}
.case-section h2 em {
  color: #2f6b48;
}
.case-tagline {
  font-size: 16px;
  color: #555;
  max-width: 700px;
  margin: 0 auto 50px;
}
.case-carousel {
  display: flex;
  align-items: center;
  gap: 30px;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap; /* Allow wrapping */
}

.case-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  width: 100%;
  max-width: 320px;
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
  margin: 10px;
}

.case-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
}

.case-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.case-body h3 {
  font-size: 18px;
  font-weight: 600;
}
.case-body p {
  font-size: 14px;
  line-height: 1.45;
  color: #4a4a4a;
}

/* CASE NAV (optional buttons like arrows if used) */
.case-nav {
  background: transparent;
  border: none;
  color: #2f6b48;
  font-size: 22px;
  cursor: pointer;
}

/* Responsive styles */
@media (max-width: 768px) {
  .case-card {
    width: 100%;
    max-width: 100%;
    margin: 10px 0;
  }
}

@media (max-width: 480px) {
  .case-section h2 {
    font-size: 28px;
  }
  .case-tagline {
    font-size: 14px;
  }
  .case-carousel {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
  .case-card img {
    height: 160px;
  }
  .case-body h3 {
    font-size: 16px;
  }
  .case-body p {
    font-size: 13px;
  }
}

  .case-nav {
    background: transparent;
    border: none;
    color: #2f6b48;
    font-size: 22px;
    cursor: pointer;
  }
  .case-card {
    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    width: 300px;
        flex: 0 0 300px;
    display: flex;
    flex-direction: column;
    margin: 10px; /* Added margin */
  }
  .case-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
  }
  .case-body {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .case-body h3 {
    font-size: 18px;
    font-weight: 600;
  }
  .case-body p {
    font-size: 14px;
    line-height: 1.45;
    color: #4a4a4a;
  }

  /* AI SECTION */
  .ai-section {
    position: relative;
    text-align: center;
    color: #fff;
    padding: 100px 20px;
    background: #093322 url('https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&w=1200&q=60') center/cover;
  }
  .ai-section::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, .45);
  }
  .ai-section > * {
    position: relative;
    z-index: 1;
  }
  .ai-section h2 {
    font-size: 34px;
    margin-bottom: 12px;
  }
  .ai-section h2 em {
    color: #b8e0c8;
  }
  .ai-tagline {
    font-size: 16px;
    line-height: 1.6;
    max-width: 780px;
    margin: 0 auto 40px;
    color: #d8d8d8;
  }
  .ai-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 30px;
    max-width: 1100px;
    margin: 60px auto 0;
  }
  .ai-card {
    position: relative;
    border: 2px solid #2f6b48;
    border-radius: 6px;
    overflow: hidden;
  }
  .ai-card img {
    width: 100%;
    height: 260px;
    object-fit: cover;
    filter: brightness(65%);
  }
  .ai-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    background: linear-gradient(to top, rgba(0, 0, 0, .8), rgba(0, 0, 0, 0));
    text-align: left;
  }
  .ai-overlay h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
  }
  .ai-overlay p {
    font-size: 14px;
    line-height: 1.45;
  }

  /* STRATEGIC PARTNERS */
  .partners-section {
    text-align: center;
    padding: 100px 20px;
  }
  .partners-section h2 {
    font-size: 34px;
    margin-bottom: 16px;
  }
  .partners-section h2 em {
    color: #2f6b48;
  }
  .partners-tagline {
    font-size: 16px;
    color: #555;
    max-width: 780px;
    margin: 0 auto 50px;
  }
  .partners-logos {
    display: flex;
    justify-content: center;
    gap: 60px;
    flex-wrap: wrap;
  }
  .partners-logos img {
    height: 34px;
    filter: grayscale(100%);
    transition: filter .3s;
  }
  .partners-logos img:hover {
    filter: none;
  }

  /* TESTIMONIALS */
  .testi-section {
    background: #f6f6f6;
    text-align: center;
    padding: 100px 20px;
  }
  .testi-section h2 {
    font-size: 34px;
    margin-bottom: 12px;
  }
  .testi-section h2 em {
    color: #2f6b48;
  }
  .testi-tagline {
    font-size: 16px;
    color: #555;
    max-width: 640px;
    margin: 0 auto 50px;
  }
  
  .testi-carousel-container {
    overflow: hidden;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
  }
  
  .testi-carousel-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
    width: 400%; /* 4 cards * 100% */
  }
  
  .testi-card {
    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 24px;
    flex: 0 0 25%; /* Each card takes 25% of track width */
    margin: 0 12px;
    box-sizing: border-box;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 16px;
    min-height: 280px;
  }
  
  .quote {
    font-size: 34px;
    color: #2f6b48;
  }
  
  .review {
    font-size: 14px;
    line-height: 1.5;
    color: #444;
    flex-grow: 1;
  }
  
  .stars {
    color: #2f6b48;
    font-size: 14px;
    font-weight: 700;
  }
  
  .person {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
  }
  
  .avatar {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: #2f6b48;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
  }
  
  .testi-indicators {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 30px;
  }
  
  .testi-indicator {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: none;
    background: #d0d0d0;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .testi-indicator.active {
    background: #2f6b48;
  }
  
  .testi-indicator:hover {
    background: #2f6b48;
    opacity: 0.7;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .testi-carousel-track {
      width: 400%; /* Still 4 cards, but only 1 visible */
    }
    
    .testi-card {
      flex: 0 0 25%;
      margin: 0 8px;
    }
  }
  
  @media (min-width: 769px) and (max-width: 1024px) {
    .testi-carousel-track {
      width: 200%; /* Show 2 cards at a time */
    }
    
    .testi-card {
      flex: 0 0 50%;
      margin: 0 10px;
    }
  }
  
  @media (min-width: 1025px) {
    .testi-carousel-track {
      width: 133.33%; /* Show 3 cards at a time */
    }
    
    .testi-card {
      flex: 0 0 33.33%;
      margin: 0 12px;
    }
  }
  
  @media (max-width: 480px) {
    .testi-card {
      padding: 20px;
      margin: 0 6px;
      min-height: 260px;
    }
    
    .review {
      font-size: 13px;
    }
    
    .person {
      font-size: 13px;
    }
  }

  /* TECH SECTION */
  .tech-section {
    text-align: center;
    padding: 100px 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
  .tech-section h2 {
    font-size: 34px;
    margin-bottom: 40px;
  }
  .tech-inner {
    display: flex;
    gap: 40px;
    justify-content: center;
    align-items: flex-start;
  }
  .tech-cats {
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: relative;
  }
  .tech-cats::after {
    content: "";
    position: absolute;
    right: -20px;
    top: 0;
    width: 2px;
    height: 100%;
    background: #2f6b48;
  }
  .tech-pill {
    width: 110px;
    padding: 8px;
    border-radius: 30px;
    border: 2px solid #2f6b48;
    background: #fff;
    color: #2f6b48;
    font-size: 14px;
    cursor: pointer;
    transition: .25s;
  }
  .tech-pill.active {
    background: #2f6b48;
    color: #fff;
  }
  .tech-content {
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: 600px;
  }
  .tech-content p {
    font-size: 16px;
    color: #444;
    line-height: 1.6;
  }
  .tech-logos {
    display: flex;
    gap: 32px;
    flex-wrap: wrap;
    align-items: center;
  }
  .tech-logos img {
    height: 54px;
    filter: grayscale(100%);
    transition: filter .3s;
  }
  .tech-logos img:hover {
    filter: none;
  }

  /* FINAL CTA */
  .cta-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 60px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 120px 20px;
  }
  .cta-text h2 {
    font-size: 36px;
    margin-bottom: 36px;
    line-height: 1.2;
  }
  .cta-text em {
    color: #2f6b48;
  }
  .cta-section img {
    width: 340px;
    height: 220px;
    border-radius: 8px;
    object-fit: cover;
  }

  /* FOOTER */
  .footer {
    background: #0f3927;
    color: #fff;
    padding: 80px 20px;
  }
  .footer-inner {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    gap: 60px;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .foot-links {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-size: 16px;
  }
  .foot-links li:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  .foot-contact {
    font-size: 18px;
    font-weight: 600;
  }

  /* FORM PAGE */
  .form-page {
    max-width: 500px;
    margin: 100px auto;
    padding: 30px;
    border: 1px solid #ddd;
    border-radius: 12px;
  }
  .form-page h2 {
    text-align: center;
    margin-bottom: 32px;
    font-size: 30px;
  }
  .form-page form {
    display: flex;
    flex-direction: column;
    gap: 22px;
  }
  .form-page label {
    display: flex;
    flex-direction: column;
    font-size: 15px;
    font-weight: 500;
  }
  .form-page input {
    padding: 11px;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 14px;
  }

  svg {
    flex: none;
  }

  /* Media Queries for Responsiveness */
  @media (max-width: 768px) {
    .navbar {
      flex-direction: column;
      align-items: flex-start;
    }
    .menu {
      flex-direction: column;
      gap: 10px;
    }
    .hero h1 {
      font-size: 32px;
    }
    .hero p {
      font-size: 16px;
    }
    .case-card {
      width: 100%; /* Full width on mobile */
      margin: 10px 0; /* Add vertical margin */
    }
    .testi-card {
      width: 100%; /* Full width on mobile */
      margin: 10px 0; /* Add vertical margin */
    }
    .tech-inner {
      flex-direction: column;
      align-items: center;
    }
    .tech-cats {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
    .tech-content {
      text-align: center;
    }
    .cta-section {
      flex-direction: column;
      align-items: center;
    }
    .brands {
      font-size: 20px; /* Adjust font size for mobile */
      gap: 20px; /* Adjust gap for mobile */
    }
  }

  @media (max-width: 480px) {
    .hero h1 {
      font-size: 28px;
    }
    .hero p {
      font-size: 14px;
    }
    .btn.primary, .btn.ghost {
      padding: 10px 15px;
      font-size: 14px;
    }
    .testi-card {
      padding: 16px;
    }
    .form-page {
      padding: 20px;
    }
    .case-section h2 {
      font-size: 28px; /* Adjust heading size for mobile */
    }
    .case-tagline {
      font-size: 14px; /* Adjust tagline size for mobile */
    }
    .case-carousel {
      flex-direction: column; /* Stack cards vertically on mobile */
      align-items: center; /* Center cards */
    }
  }
`;