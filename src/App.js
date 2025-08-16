/********************************************************************
 *  src/App.js – Grow Nexus site (logo file path + full CSS)
 *  REQUIREMENTS:
 *    my-app/public/images/grownexus-logo.jpg
 *    other screenshots already placed in public/images/
 *******************************************************************/
import React, { useState, useRef } from "react";
import TechAccordion from './components/TechAccordion';

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
    style={{ 
      transform: dir === "left" ? "rotate(180deg)" : 
                dir === "down" ? "rotate(90deg)" : undefined 
    }}
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
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMobileMenu}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <ul className="mobile-menu-items">
              <li onClick={closeMobileMenu}>About <ArrowIcon /></li>
              <li onClick={() => { scrollToExpertise(); closeMobileMenu(); }}>Services <ArrowIcon /></li>
              <li onClick={closeMobileMenu}>AI Tools <ArrowIcon /></li>
              <li onClick={closeMobileMenu}>Education <ArrowIcon /></li>
              <li onClick={closeMobileMenu}>Blog <ArrowIcon /></li>
              <li onClick={closeMobileMenu}>Portfolio <ArrowIcon /></li>
            </ul>
            <div className="mobile-menu-actions">
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
    <div className="brands-carousel">
      <div className="brands-track">
        {/* First set of brands */}
        {["Yatra", "Rapido", "Innisfree", "Godrej | PROPERTIES"].map((brand, i) => (
          <span key={`brand-1-${i}`} className="brand-item">{brand}</span>
        ))}
        {/* Duplicate set for seamless loop */}
        {["Yatra", "Rapido", "Innisfree", "Godrej | PROPERTIES"].map((brand, i) => (
          <span key={`brand-2-${i}`} className="brand-item">{brand}</span>
        ))}
      </div>
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
  const descriptions = [
    "We build tailored software solutions that align perfectly with your business goals, ensuring scalability and performance.",
    "Our team crafts responsive, secure, and modern websites designed to deliver exceptional user experiences across all devices.",
    "From concept to deployment, we create mobile apps that are intuitive, robust, and optimized for both iOS and Android platforms.",
    "We design user-friendly interfaces and seamless experiences that keep your users engaged and coming back for more.",
    "Boost efficiency and reliability with our cloud solutions and DevOps strategies that automate and streamline your operations.",
    "We integrate intelligent automation and AI solutions to enhance productivity, reduce errors, and drive innovation in your workflows."
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
            <p>{descriptions[i]}</p>
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
      <div className="partners-carousel">
        <div className="partners-track">
          {/* First set of logos */}
          {logos.map(([alt, src], i) => (
            <img key={`partner-1-${i}`} src={src} alt={alt} className="partner-logo" />
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map(([alt, src], i) => (
            <img key={`partner-2-${i}`} src={src} alt={alt} className="partner-logo" />
          ))}
        </div>
      </div>
    </section>
  );
};

/*────────────────────  TESTIMONIALS  ─────────────────────────*/
const Testimonials = () => {
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
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i ? i - 1 : reviews.length - 1));
  const next = () => setIdx((i) => (i + 1) % reviews.length);

  return (
    <section className="testi-section">
      <h2>
        Trusted by <em>Leaders</em>
      </h2>
      <p className="testi-tagline">Here's what our founders say</p>
      <div className="testi-carousel">
        <button className="testi-nav" onClick={prev}>
          <ArrowIcon dir="left" />
        </button>
        <div className="testi-cards-container">
          {reviews.map(([text, name, title], i) => (
            <div 
              className={`testi-card ${i === idx ? 'active' : ''}`} 
              key={name}
              style={{ transform: `translateX(-${idx * 100}%)` }}
            >
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
        <button className="testi-nav" onClick={next}>
          <ArrowIcon />
        </button>
      </div>
      <div className="testi-progress">
        <span style={{ transform: `translateX(${idx * 100}%)` }} />
      </div>
    </section>
  );
};

/*────────────────────  TECH CAPABILITIES  ─────────────────────*/
const TechCapabilities = () => {
  const data = {
    "UI/UX": [
      { name: "Figma", logo: "https://cdn.worldvectorlogo.com/logos/figma-1.svg" },
      { name: "Adobe XD", logo: "https://cdn.worldvectorlogo.com/logos/adobe-xd-1.svg" },
      { name: "Sketch", logo: "https://cdn.worldvectorlogo.com/logos/sketch-2.svg" },
      { name: "InVision", logo: "https://cdn.worldvectorlogo.com/logos/invision.svg" },
      { name: "Framer", logo: "https://cdn.worldvectorlogo.com/logos/framer-logo.svg" },
      { name: "Principle", logo: "https://cdn.worldvectorlogo.com/logos/principle.svg" }
    ],
    Frontend: [
      { name: "React", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
      { name: "Angular", logo: "https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg" },
      { name: "Vue.js", logo: "https://cdn.worldvectorlogo.com/logos/vue-9.svg" },
      { name: "HTML5", logo: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
      { name: "CSS3", logo: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
      { name: "TypeScript", logo: "https://cdn.worldvectorlogo.com/logos/typescript.svg" }
    ],
    Backend: [
      { name: "Node.js", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
      { name: "Django", logo: "https://cdn.worldvectorlogo.com/logos/django-community.svg" },
      { name: "Laravel", logo: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg" },
      { name: "Express.js", logo: "https://cdn.worldvectorlogo.com/logos/express-109.svg" },
      { name: "Spring Boot", logo: "https://cdn.worldvectorlogo.com/logos/spring-3.svg" },
      { name: "FastAPI", logo: "https://cdn.worldvectorlogo.com/logos/fastapi-1.svg" }
    ],
    Mobile: [
      { name: "Flutter", logo: "https://cdn.worldvectorlogo.com/logos/flutter.svg" },
      { name: "React Native", logo: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg" },
      { name: "Swift", logo: "https://cdn.worldvectorlogo.com/logos/swift-15.svg" },
      { name: "Kotlin", logo: "https://cdn.worldvectorlogo.com/logos/kotlin-1.svg" },
      { name: "Xamarin", logo: "https://cdn.worldvectorlogo.com/logos/xamarin.svg" },
      { name: "Ionic", logo: "https://cdn.worldvectorlogo.com/logos/ionic-1.svg" }
    ],
    Database: [
      { name: "MySQL", logo: "https://cdn.worldvectorlogo.com/logos/mysql-6.svg" },
      { name: "PostgreSQL", logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg" },
      { name: "MongoDB", logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
      { name: "Redis", logo: "https://cdn.worldvectorlogo.com/logos/redis.svg" },
      { name: "Firebase", logo: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg" },
      { name: "Supabase", logo: "https://cdn.worldvectorlogo.com/logos/supabase-icon.svg" }
    ],
    Cloud: [
      { name: "AWS", logo: "https://cdn.worldvectorlogo.com/logos/amazon-web-services-1.svg" },
      { name: "Azure", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-azure-3.svg" },
      { name: "Google Cloud", logo: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg" },
      { name: "DigitalOcean", logo: "https://cdn.worldvectorlogo.com/logos/digitalocean.svg" },
      { name: "Heroku", logo: "https://cdn.worldvectorlogo.com/logos/heroku-4.svg" },
      { name: "Vercel", logo: "https://cdn.worldvectorlogo.com/logos/vercel.svg" }
    ],
    DevOps: [
      { name: "AWS", logo: "https://cdn.worldvectorlogo.com/logos/amazon-web-services-1.svg" },
      { name: "Microsoft Azure", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-azure-3.svg" },
      { name: "Azure", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-azure-3.svg" },
      { name: "Kubernetes", logo: "https://cdn.worldvectorlogo.com/logos/kubernetes.svg" },
      { name: "Docker", logo: "https://cdn.worldvectorlogo.com/logos/docker.svg" },
      { name: "Prometheus", logo: "https://cdn.worldvectorlogo.com/logos/prometheus.svg" },
      { name: "Jenkins", logo: "https://cdn.worldvectorlogo.com/logos/jenkins-1.svg" },
      { name: "CI/CD", logo: "https://cdn.worldvectorlogo.com/logos/github-actions.svg" },
      { name: "Terraform", logo: "https://cdn.worldvectorlogo.com/logos/terraform-enterprise.svg" },
      { name: "Ansible", logo: "https://cdn.worldvectorlogo.com/logos/ansible.svg" },
      { name: "Git", logo: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
      { name: "Docker Container", logo: "https://cdn.worldvectorlogo.com/logos/docker.svg" },
      { name: "Apache", logo: "https://cdn.worldvectorlogo.com/logos/apache.svg" },
      { name: "Google Cloud", logo: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg" }
    ],
    "Monitoring & Logging": [
      { name: "Grafana", logo: "https://cdn.worldvectorlogo.com/logos/grafana.svg" },
      { name: "Prometheus", logo: "https://cdn.worldvectorlogo.com/logos/prometheus.svg" },
      { name: "ELK Stack", logo: "https://cdn.worldvectorlogo.com/logos/elastic-elasticsearch.svg" },
      { name: "New Relic", logo: "https://cdn.worldvectorlogo.com/logos/new-relic.svg" },
      { name: "Datadog", logo: "https://cdn.worldvectorlogo.com/logos/datadog.svg" },
      { name: "Sentry", logo: "https://cdn.worldvectorlogo.com/logos/sentry-3.svg" }
    ],
    Security: [
      { name: "OAuth", logo: "https://cdn.worldvectorlogo.com/logos/oauth-2.svg" },
      { name: "JWT", logo: "https://cdn.worldvectorlogo.com/logos/jwt-3.svg" },
      { name: "SSL/TLS", logo: "https://cdn.worldvectorlogo.com/logos/let-s-encrypt.svg" },
      { name: "Auth0", logo: "https://cdn.worldvectorlogo.com/logos/auth0.svg" },
      { name: "Okta", logo: "https://cdn.worldvectorlogo.com/logos/okta-2.svg" },
      { name: "HashiCorp Vault", logo: "https://cdn.worldvectorlogo.com/logos/vault-enterprise.svg" }
    ],
    CMS: [
      { name: "WordPress", logo: "https://cdn.worldvectorlogo.com/logos/wordpress-blue.svg" },
      { name: "Strapi", logo: "https://cdn.worldvectorlogo.com/logos/strapi-2.svg" },
      { name: "Contentful", logo: "https://cdn.worldvectorlogo.com/logos/contentful.svg" },
      { name: "Sanity", logo: "https://cdn.worldvectorlogo.com/logos/sanity.svg" },
      { name: "Ghost", logo: "https://cdn.worldvectorlogo.com/logos/ghost.svg" },
      { name: "Drupal", logo: "https://cdn.worldvectorlogo.com/logos/drupal.svg" }
    ],
    "CRM/ERP/Platforms": [
      { name: "Salesforce", logo: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg" },
      { name: "Zoho", logo: "https://cdn.worldvectorlogo.com/logos/zoho.svg" },
      { name: "SAP", logo: "https://cdn.worldvectorlogo.com/logos/sap-3.svg" },
      { name: "HubSpot", logo: "https://cdn.worldvectorlogo.com/logos/hubspot.svg" },
      { name: "Microsoft Dynamics", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-dynamics-365.svg" },
      { name: "Odoo", logo: "https://cdn.worldvectorlogo.com/logos/odoo.svg" }
    ],
    "Collaboration Tools": [
      { name: "Slack", logo: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" },
      { name: "Microsoft Teams", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-teams-1.svg" },
      { name: "Zoom", logo: "https://cdn.worldvectorlogo.com/logos/zoom-icon.svg" },
      { name: "Jira", logo: "https://cdn.worldvectorlogo.com/logos/jira-1.svg" },
      { name: "Confluence", logo: "https://cdn.worldvectorlogo.com/logos/confluence-1.svg" },
      { name: "Notion", logo: "https://cdn.worldvectorlogo.com/logos/notion-logo-1.svg" }
    ]
  };
  
  const [selectedCategory, setSelectedCategory] = useState("DevOps");
  
  const categories = Object.keys(data);
  
  return (
    <section className="tech-section">
      <h2>
        Driving Digital <em>Transformation</em> through Advanced{" "}
        <em>Technology</em> Capabilities
      </h2>
      <p className="tech-subtitle">
        Explore our comprehensive technology stack across all domains of modern software development
      </p>
      <div className="tech-layout">
        <div className="tech-categories">
          {categories.map((category) => (
            <button
              key={category}
              className={`tech-category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="tech-tools">
          <div className="tech-tools-grid">
            {data[selectedCategory].map((tech) => (
              <div key={tech.name} className="tech-tool-card">
                <img src={tech.logo} alt={tech.name} className="tech-tool-logo" />
                <span className="tech-tool-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Existing desktop tech section */}
      <div className="desktop-tech-view">
        {/* Your existing "Driving digital transformation" section content goes here */}
        <div style={{ 
          padding: '4rem 2rem',
          background: 'linear-gradient(135deg, #0B3D20 0%, #1a5f3f 100%)',
          color: 'white',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
            Driving digital transformation through advanced technology capability
          </h2>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
            This is the existing desktop section that remains unchanged.
          </p>
        </div>
      </div>
      
      {/* New mobile accordion section */}
      <TechAccordion />
    </section>
  );
};

/*────────────────────  TECH CAPABILITIES (OLD VERSION - REMOVE)  ─────────────────────*/
const TechCapabilitiesOld = () => {
  const data = {
    "UI/UX": [
      { name: "Figma", logo: "https://cdn.worldvectorlogo.com/logos/figma-1.svg" },
      { name: "Adobe XD", logo: "https://cdn.worldvectorlogo.com/logos/adobe-xd-1.svg" },
      { name: "Sketch", logo: "https://cdn.worldvectorlogo.com/logos/sketch-2.svg" },
      { name: "InVision", logo: "https://cdn.worldvectorlogo.com/logos/invision.svg" },
      { name: "Framer", logo: "https://cdn.worldvectorlogo.com/logos/framer-logo.svg" },
      { name: "Principle", logo: "https://cdn.worldvectorlogo.com/logos/principle.svg" }
    ],
    Frontend: [
      { name: "React", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
      { name: "Angular", logo: "https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg" },
      { name: "Vue.js", logo: "https://cdn.worldvectorlogo.com/logos/vue-9.svg" },
      { name: "HTML5", logo: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
      { name: "CSS3", logo: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
      { name: "TypeScript", logo: "https://cdn.worldvectorlogo.com/logos/typescript.svg" }
    ],
    Backend: [
      { name: "Node.js", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
      { name: "Django", logo: "https://cdn.worldvectorlogo.com/logos/django-community.svg" },
      { name: "Laravel", logo: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg" },
      { name: "Express.js", logo: "https://cdn.worldvectorlogo.com/logos/express-109.svg" },
      { name: "Spring Boot", logo: "https://cdn.worldvectorlogo.com/logos/spring-3.svg" },
      { name: "FastAPI", logo: "https://cdn.worldvectorlogo.com/logos/fastapi-1.svg" }
    ],
    Mobile: [
      { name: "Flutter", logo: "https://cdn.worldvectorlogo.com/logos/flutter.svg" },
      { name: "React Native", logo: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg" },
      { name: "Swift", logo: "https://cdn.worldvectorlogo.com/logos/swift-15.svg" },
      { name: "Kotlin", logo: "https://cdn.worldvectorlogo.com/logos/kotlin-1.svg" },
      { name: "Xamarin", logo: "https://cdn.worldvectorlogo.com/logos/xamarin.svg" },
      { name: "Ionic", logo: "https://cdn.worldvectorlogo.com/logos/ionic-1.svg" }
    ],
    Database: [
      { name: "MySQL", logo: "https://cdn.worldvectorlogo.com/logos/mysql-6.svg" },
      { name: "PostgreSQL", logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg" },
      { name: "MongoDB", logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
      { name: "Redis", logo: "https://cdn.worldvectorlogo.com/logos/redis.svg" },
      { name: "Firebase", logo: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg" },
      { name: "Supabase", logo: "https://cdn.worldvectorlogo.com/logos/supabase-icon.svg" }
    ],
    Cloud: [
      { name: "AWS", logo: "https://cdn.worldvectorlogo.com/logos/amazon-web-services-1.svg" },
      { name: "Azure", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-azure-3.svg" },
      { name: "Google Cloud", logo: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg" },
      { name: "DigitalOcean", logo: "https://cdn.worldvectorlogo.com/logos/digitalocean.svg" },
      { name: "Heroku", logo: "https://cdn.worldvectorlogo.com/logos/heroku-4.svg" },
      { name: "Vercel", logo: "https://cdn.worldvectorlogo.com/logos/vercel.svg" }
    ],
    DevOps: [
      { name: "GitHub Actions", logo: "https://cdn.worldvectorlogo.com/logos/github-actions.svg" },
      { name: "GitLab CI", logo: "https://cdn.worldvectorlogo.com/logos/gitlab.svg" },
      { name: "Terraform", logo: "https://cdn.worldvectorlogo.com/logos/terraform-enterprise.svg" }
    ],
    "Monitoring & Logging": [
      { name: "Grafana", logo: "https://cdn.worldvectorlogo.com/logos/grafana.svg" },
      { name: "Prometheus", logo: "https://cdn.worldvectorlogo.com/logos/prometheus.svg" },
      { name: "ELK Stack", logo: "https://cdn.worldvectorlogo.com/logos/elastic-elasticsearch.svg" },
      { name: "New Relic", logo: "https://cdn.worldvectorlogo.com/logos/new-relic.svg" },
      { name: "Datadog", logo: "https://cdn.worldvectorlogo.com/logos/datadog.svg" },
      { name: "Sentry", logo: "https://cdn.worldvectorlogo.com/logos/sentry-3.svg" }
    ],
    Security: [
      { name: "OAuth", logo: "https://cdn.worldvectorlogo.com/logos/oauth-2.svg" },
      { name: "JWT", logo: "https://cdn.worldvectorlogo.com/logos/jwt-3.svg" },
      { name: "SSL/TLS", logo: "https://cdn.worldvectorlogo.com/logos/let-s-encrypt.svg" },
      { name: "Auth0", logo: "https://cdn.worldvectorlogo.com/logos/auth0.svg" },
      { name: "Okta", logo: "https://cdn.worldvectorlogo.com/logos/okta-2.svg" },
      { name: "HashiCorp Vault", logo: "https://cdn.worldvectorlogo.com/logos/vault-enterprise.svg" }
    ],
    CMS: [
      { name: "WordPress", logo: "https://cdn.worldvectorlogo.com/logos/wordpress-blue.svg" },
      { name: "Strapi", logo: "https://cdn.worldvectorlogo.com/logos/strapi-2.svg" },
      { name: "Contentful", logo: "https://cdn.worldvectorlogo.com/logos/contentful.svg" },
      { name: "Sanity", logo: "https://cdn.worldvectorlogo.com/logos/sanity.svg" },
      { name: "Ghost", logo: "https://cdn.worldvectorlogo.com/logos/ghost.svg" },
      { name: "Drupal", logo: "https://cdn.worldvectorlogo.com/logos/drupal.svg" }
    ],
    "CRM/ERP/Platforms": [
      { name: "Salesforce", logo: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg" },
      { name: "Zoho", logo: "https://cdn.worldvectorlogo.com/logos/zoho.svg" },
      { name: "SAP", logo: "https://cdn.worldvectorlogo.com/logos/sap-3.svg" },
      { name: "HubSpot", logo: "https://cdn.worldvectorlogo.com/logos/hubspot.svg" },
      { name: "Microsoft Dynamics", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-dynamics-365.svg" },
      { name: "Odoo", logo: "https://cdn.worldvectorlogo.com/logos/odoo.svg" }
    ]
  };
  
  const [expandedCategory, setExpandedCategory] = useState("DevOps");
  
  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };
  
  return (
    <section className="tech-section">
      <h2>
        Driving Digital <em>Transformation</em> through Advanced{" "}
        <em>Technology</em> Capabilities
      </h2>
      <p className="tech-subtitle">
        Explore our comprehensive technology stack across all domains of modern software development
      </p>
      <div className="tech-accordion">
        {Object.entries(data).map(([category, technologies]) => (
          <div key={category} className="tech-category">
            <button 
              className={`tech-category-header ${expandedCategory === category ? 'expanded' : ''}`}
              onClick={() => toggleCategory(category)}
            >
              <span className="tech-category-title">{category}</span>
              <ArrowIcon dir={expandedCategory === category ? "down" : "right"} />
            </button>
            <div className={`tech-category-content ${expandedCategory === category ? 'expanded' : ''}`}>
              <div className="tech-grid">
                {technologies.map((tech) => (
                  <div key={tech.name} className="tech-item">
                    <img src={tech.logo} alt={tech.name} className="tech-logo" />
                    <span className="tech-name">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
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
    position: relative;
  }
  
  .desktop-menu {
    display: flex;
    list-style: none;
    gap: 22px;
  }
  
  .desktop-menu li {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 4px;
    font-weight: 500;
    transition: color 0.3s ease;
  }
  
  .desktop-menu li:hover {
    color: #2f6b48;
  }
  
  .desktop-right {
    display: flex;
    gap: 15px;
    align-items: center;
  }
  
  .search {
    padding: 8px 14px;
    border: 1px solid #ccc;
    border-radius: 20px;
    width: 200px;
  }

  /* Hamburger Menu Styles */
  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 30px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1001;
  }

  .hamburger-line {
    width: 100%;
    height: 3px;
    background-color: #2f6b48;
    border-radius: 2px;
    transition: all 0.3s ease;
    transform-origin: center;
  }

  .hamburger-line.open:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
  }

  .hamburger-line.open:nth-child(2) {
    opacity: 0;
  }

  .hamburger-line.open:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
  }

  /* Mobile Menu Overlay */
  .mobile-menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
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
    padding: 80px 30px 30px;
    transform: translateX(100%);
    animation: slideIn 0.3s ease-out forwards;
    overflow-y: auto;
  }

  @keyframes slideIn {
    to {
      transform: translateX(0);
    }
  }

  .mobile-menu-items {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;
  }

  .mobile-menu-items li {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
    border-bottom: 1px solid #eee;
    font-weight: 500;
    font-size: 16px;
    transition: color 0.3s ease;
  }

  .mobile-menu-items li:hover {
    color: #2f6b48;
  }

  .mobile-menu-actions {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .mobile-search {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 16px;
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
  .brands-carousel {
    overflow: hidden;
    width: 100%;
    position: relative;
    mask: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);
    -webkit-mask: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);
  }
  .brands-track {
    display: flex;
    animation: scroll-brands 20s linear infinite;
    width: fit-content;
  }
  .brand-item {
    color: #555;
    font-size: 24px;
    font-weight: 500;
    white-space: nowrap;
    margin: 0 40px;
    flex-shrink: 0;
    transition: color 0.3s ease;
  }
  .brand-item:hover {
    color: #2f6b48;
  }
  .brands-carousel:hover .brands-track {
    animation-play-state: paused;
  }
  @keyframes scroll-brands {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
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
    background: #093322 url('/images/ai-background screen.jpg') center/cover no-repeat;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .ai-section::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(15, 57, 39, 0.4));
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
  .partners-carousel {
    overflow: hidden;
    width: 100%;
    position: relative;
    mask: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);
    -webkit-mask: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);
  }
  .partners-track {
    display: flex;
    animation: scroll-partners 25s linear infinite;
    width: fit-content;
    align-items: center;
  }
  .partner-logo {
    height: 34px;
    filter: grayscale(100%);
    transition: filter 0.3s ease, transform 0.3s ease;
    margin: 0 60px;
    flex-shrink: 0;
  }
  .partner-logo:hover {
    filter: none;
    transform: scale(1.1);
  }
  .partners-carousel:hover .partners-track {
    animation-play-state: paused;
  }
  @keyframes scroll-partners {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
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
  .testi-carousel {
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }
  .testi-nav {
    background: transparent;
    border: none;
    color: #2f6b48;
    font-size: 22px;
    cursor: pointer;
    flex-shrink: 0;
    padding: 8px;
    border-radius: 50%;
    transition: background-color 0.3s;
  }
  .testi-nav:hover {
    background-color: rgba(47, 107, 72, 0.1);
  }
  .testi-cards-container {
    display: flex;
    width: 100%;
    max-width: 800px;
    overflow: hidden;
    position: relative;
  }
  .testi-card {
    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 24px;
    width: 100%;
    flex: 0 0 100%;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 16px;
    transition: transform 0.3s ease-in-out;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  .quote {
    font-size: 34px;
    color: #2f6b48;
    line-height: 1;
  }
  .review {
    font-size: 14px;
    line-height: 1.5;
    color: #444;
    flex-grow: 1;
    min-height: 60px;
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
    flex-shrink: 0;
  }
  .testi-progress {
    width: 100px;
    height: 4px;
    background: #d0d0d0;
    margin: 24px auto 0;
    position: relative;
    border-radius: 2px;
    overflow: hidden;
  }
  .testi-progress span {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% / 4);
    height: 100%;
    background: #2f6b48;
    transition: transform .3s;
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
    margin-bottom: 20px;
  }
  .tech-section h2 em {
    color: #2f6b48;
  }
  .tech-subtitle {
    font-size: 16px;
    color: #666;
    margin-bottom: 60px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
  
  /* NEW LAYOUT STYLES */
  .tech-layout {
    display: flex;
    gap: 60px;
    align-items: flex-start;
    max-width: 1400px;
    margin: 0 auto;
  }
  
  .tech-categories {
    flex: 0 0 280px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  
  .tech-category-btn {
    background: #fff;
    border: 2px solid #e2e8f0;
    border-radius: 25px;
    padding: 14px 24px;
    font-size: 15px;
    font-weight: 500;
    color: #4a5568;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: left;
    white-space: nowrap;
  }
  
  .tech-category-btn:hover {
    border-color: #2f6b48;
    color: #2f6b48;
    transform: translateX(4px);
  }
  
  .tech-category-btn.active {
    background: #ff6b35;
    border-color: #ff6b35;
    color: #fff;
    transform: translateX(4px);
  }
  
  .tech-tools {
    flex: 1;
    min-height: 400px;
  }
  
  .tech-tools-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 20px;
  }
  
  .tech-tool-card {
    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }
  
  .tech-tool-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(47, 107, 72, 0.15);
    border-color: #2f6b48;
  }
  
  .tech-tool-logo {
    width: 48px;
    height: 48px;
    object-fit: contain;
    margin-bottom: 12px;
    filter: grayscale(20%);
    transition: filter 0.3s ease;
  }
  
  .tech-tool-card:hover .tech-tool-logo {
    filter: none;
  }
  
  .tech-tool-name {
    font-size: 13px;
    font-weight: 500;
    color: #2d3748;
    line-height: 1.3;
  }
  
  /* OLD ACCORDION STYLES (KEEP FOR FALLBACK) */
  .tech-accordion {
    max-width: 900px;
    margin: 0 auto;
    text-align: left;
    display: none; /* Hide old version */
  }
  .tech-category {
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    margin-bottom: 16px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }
  .tech-category-header {
    width: 100%;
    padding: 20px 24px;
    background: #fff;
    border: 2px solid #2f6b48;
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 16px;
    font-weight: 600;
    color: #2f6b48;
  }
  .tech-category-header:hover {
    background: #2f6b48;
    color: #fff;
  }
  .tech-category-header.expanded {
    background: #2f6b48;
    color: #fff;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .tech-category-title {
    font-size: 18px;
    font-weight: 600;
  }
  .tech-category-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease, padding 0.3s ease;
    background: #f8f9fa;
  }
  .tech-category-content.expanded {
    max-height: 500px;
    padding: 24px;
  }
  .tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 20px;
  }
  .tech-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 16px;
    background: #fff;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    transition: all 0.3s ease;
    cursor: pointer;
  }
  .tech-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(47, 107, 72, 0.15);
    border-color: #2f6b48;
  }
  .tech-logo {
    width: 40px;
    height: 40px;
    object-fit: contain;
    margin-bottom: 8px;
    filter: grayscale(20%);
    transition: filter 0.3s ease;
  }
  .tech-item:hover .tech-logo {
    filter: none;
  }
  .tech-name {
    font-size: 12px;
    font-weight: 500;
    color: #333;
    line-height: 1.2;
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
      padding: 15px 20px;
    }
    
    /* Hide desktop menu and show hamburger */
    .desktop-menu,
    .desktop-right {
      display: none;
    }
    
    .hamburger {
      display: flex;
    }
    
    /* Show mobile menu overlay */
    .mobile-menu-overlay {
      display: block;
    }
    
    .mobile-menu {
      width: 100%;
      max-width: 320px;
    }
    
    .btn.ghost {
      width: 100%;
      justify-content: center;
      padding: 12px 20px;
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
    .testi-section {
      padding: 80px 15px;
    }
    .testi-carousel {
      gap: 15px;
      padding: 0 10px;
    }
    .testi-cards-container {
      max-width: calc(100vw - 100px);
    }
    .testi-card {
      padding: 20px;
      min-height: 200px;
    }
    .testi-nav {
      font-size: 18px;
      padding: 6px;
    }
    .tech-section {
      padding: 80px 15px;
    }
    
    /* Mobile layout for new tech section */
    .tech-layout {
      flex-direction: column;
      gap: 40px;
    }
    
    .tech-categories {
      flex: none;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 8px;
    }
    
    .tech-category-btn {
      padding: 10px 16px;
      font-size: 13px;
      text-align: center;
      border-radius: 20px;
    }
    
    .tech-category-btn:hover,
    .tech-category-btn.active {
      transform: none;
    }
    
    .tech-tools-grid {
      grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
      gap: 16px;
    }
    
    .tech-tool-card {
      padding: 16px;
    }
    
    .tech-tool-logo {
      width: 40px;
      height: 40px;
      margin-bottom: 10px;
    }
    
    .tech-tool-name {
      font-size: 12px;
    }
    
    .tech-section h2 {
      font-size: 28px;
    }
    .tech-subtitle {
      font-size: 14px;
      margin-bottom: 40px;
    }
    .cta-section {
      flex-direction: column;
      align-items: center;
    }
    .brands {
      font-size: 20px; /* Adjust font size for mobile */
      gap: 20px; /* Adjust gap for mobile */
    }
    
    /* Carousel responsive adjustments */
    .brand-item {
      font-size: 20px;
      margin: 0 30px;
    }
    .partner-logo {
      height: 28px;
      margin: 0 40px;
    }
    .brands-track {
      animation-duration: 15s;
    }
    .partners-track {
      animation-duration: 18s;
    }
  }

  @media (max-width: 480px) {
    .mobile-menu {
      width: 100%;
      padding: 70px 20px 20px;
    }
    
    .mobile-menu-items li {
      font-size: 15px;
      padding: 12px 0;
    }
    
    .mobile-search {
      padding: 10px 14px;
      font-size: 15px;
    }
    
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
    .testi-section {
      padding: 60px 10px;
    }
    .testi-section h2 {
      font-size: 28px;
    }
    .testi-tagline {
      font-size: 14px;
      padding: 0 10px;
    }
    .testi-carousel {
      gap: 10px;
      padding: 0 5px;
    }
    .testi-cards-container {
      max-width: calc(100vw - 80px);
    }
    .testi-card {
      padding: 16px;
      min-height: 180px;
    }
    .quote {
      font-size: 28px;
    }
    .review {
      font-size: 13px;
      min-height: 50px;
    }
    .testi-nav {
      font-size: 16px;
      padding: 4px;
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
    
    /* Mobile carousel adjustments */
    .brand-item {
      font-size: 18px;
      margin: 0 25px;
    }
    .partner-logo {
      height: 24px;
      margin: 0 30px;
    }
    .brands-track {
      animation-duration: 12s;
    }
    .partners-track {
      animation-duration: 15s;
    }
    
    /* Small mobile adjustments for tech section */
    .tech-categories {
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }
    
    .tech-category-btn {
      padding: 8px 12px;
      font-size: 12px;
    }
    
    .tech-tools-grid {
      grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
      gap: 12px;
    }
    
    .tech-tool-card {
      padding: 12px;
    }
    
    .tech-tool-logo {
      width: 32px;
      height: 32px;
      margin-bottom: 8px;
    }
    
    .tech-tool-name {
      font-size: 11px;
    }
    
    .tech-section {
      padding: 60px 10px;
    }
    .tech-section h2 {
      font-size: 24px;
      margin-bottom: 30px;
    }
    .tech-subtitle {
      font-size: 13px;
      margin-bottom: 30px;
    }
  }
`;