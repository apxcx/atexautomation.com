import { useEffect, useState } from 'react';

const products = [
  {
    name: 'Measuring instruments',
    summary: 'Thermocouple and RTD sensors, temperature, pressure, level and flow transmitters, and analytical instrumentation.',
    image: '/atex-brand/atex-measuring-instruments.png',
    alt: 'Measurement systems and utility connections shown in ATEX product imagery',
  },
  {
    name: 'Final control elements',
    summary: 'Control valves, valve actuators and positioners, motors, and pneumatic cylinders.',
    image: '/atex-brand/atex-final-control-elements.png',
    alt: 'Industrial control valves and actuator equipment shown on the official ATEX website',
  },
  {
    name: 'Receiving instruments',
    summary: 'Digital controllers, indicators, recorders, PLCs, DCS, variable-frequency drives, and HMIs.',
    image: '/atex-brand/atex-simatic-panels.png',
    alt: 'Industrial operator panels shown on the official ATEX website',
  },
];

const facts = [
  { value: '2012', label: 'Founded by instrumentation professionals' },
  { value: 'Luzon · Visayas · Mindanao', label: 'Power plants supported across the Philippines' },
  { value: 'End to end', label: 'Consultation, planning, supply, implementation and after-sales' },
  { value: 'Turnkey', label: 'Industrial instrumentation and automation solutions' },
];

const serviceAreas = [
  {
    number: '01',
    name: 'Measuring instruments',
    detail: 'Thermocouple and RTD temperature sensors; temperature, pressure, level and flow transmitters; analytical instrumentation.',
  },
  {
    number: '02',
    name: 'Receiving instruments',
    detail: 'Digital controllers, indicators and recorders; programmable logic controllers, distributed control systems, drives and HMIs.',
  },
  {
    number: '03',
    name: 'Final control elements',
    detail: 'Control valves, valve actuators and positioners, motors and pneumatic cylinders.',
  },
  {
    number: '04',
    name: 'Building automation and control',
    detail: 'CCTV, access control, HVAC, fire detection and alarm, toxic gas detection, and energy monitoring and control.',
  },
  {
    number: '05',
    name: 'Fabrication and assembly',
    detail: 'Electrical panels and control panels, including repair and service.',
  },
  {
    number: '06',
    name: 'Engineering and integration',
    detail: 'Design, installation, configuration and programming, start-up, testing and commissioning.',
  },
];

const servicePrinciples = [
  {
    name: 'ATTEND',
    copy: 'We carefully assess our customers’ requirements and deliver optimal solutions with confidence, supported by extensive product knowledge and proven industry experience.',
  },
  {
    name: 'ACCUMULATE',
    copy: 'We strive to provide leading-edge solutions that set the standard for reliability and performance, complemented by exceptional after-sales service you can depend on.',
  },
  {
    name: 'ADVANTAGE',
    copy: 'Our solutions are designed to improve efficiency, reduce costs, and enhance overall quality, delivering real value for industrial companies.',
  },
];

const serviceCases = [
  {
    title: 'Steam and Water Analysis System',
    label: 'SWAS · Preventive maintenance & calibration',
    copy: 'ATEX reports restored accurate monitoring, improved equipment protection, compliance, and enhanced plant safety and operational efficiency.',
  },
  {
    title: 'Fire Alarm Detection System',
    label: 'FDAS · Preventive maintenance',
    copy: 'Plantwide inspection, cleaning, testing, and replacement of faulty components; reported benefits included improved reliability and response and fewer false alarms.',
  },
  {
    title: 'VESDA',
    label: 'Installation & preventive maintenance',
    copy: 'Work included sampling-pipe and filter cleaning or replacement, sensitivity and alarm testing, airflow checks, and sensor calibration to improve early smoke detection reliability.',
  },
];

const recognitions = [
  {
    index: '01',
    label: 'Plaque of appreciation',
    detail: 'For being one of the Top 5 Supplier of Aboitiz Power Corporation.',
  },
  {
    index: '02',
    label: 'Kiosk sponsorship',
    detail: 'For being one of the Top 5 Suppliers of Aboitiz Power Corporation.',
  },
  {
    index: '03',
    label: 'Cocktail sponsorship',
    detail: '10th Philippine Coal Plant User Group Technical Forum.',
  },
];

const offices = [
  {
    city: 'Luzon office · Main',
    place: 'Cainta, Rizal',
    address: '354 A St. Louis corner St. Paul, Brookside, Barangay San Isidro, 1900 Cainta, Rizal, Philippines.',
  },
  {
    city: 'Davao office',
    place: 'Davao City',
    address: 'Block 63 Lot 8 Phase 2 Deca Indangan, Malagamot Road, Buhangin, Davao City, Davao Del Sur, Philippines.',
  },
  {
    city: 'Cagayan office',
    place: 'Cagayan de Oro',
    address: 'Pile Street, RVS Bugo, Cagayan de Oro City, Philippines.',
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        document.querySelector('.menu-toggle')?.focus();
      }
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <a className="brand-lockup" href="#top" aria-label="ATEX Automation home" onClick={closeMenu}>
        <img src="/atex-brand/atex-logo.png" alt="ATEX Automation and Technologies Corp." />
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
      <nav id="primary-navigation" className={`primary-nav${menuOpen ? ' is-open' : ''}`} aria-label="Primary navigation">
        <a href="#products" onClick={closeMenu}>Products</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#about" onClick={closeMenu}>About us</a>
        <a href="#contact" onClick={closeMenu}>Our offices</a>
        <a className="nav-cta" href="https://sites.google.com/view/atexautomation/inquiry-form" target="_blank" rel="noreferrer" onClick={closeMenu}>
          <span>Make an inquiry</span><Arrow />
        </a>
      </nav>
    </header>
  );
}

function ProductShowcase() {
  const [selected, setSelected] = useState(0);
  const product = products[selected];

  return (
    <section className="product-section" id="products" aria-labelledby="products-title">
      <div className="product-section-inner">
        <div className="product-copy">
          <p className="eyebrow eyebrow-light">Industrial instrumentation</p>
          <p className="eyebrow eyebrow-light product-overline">OUR PRODUCTS</p>
          <h2 id="products-title">Precision at every point in the process.</h2>
          <p className="product-intro">
            Technically advanced and efficient products, selected for your actual needs.
          </p>
          <div className="product-tabs" role="tablist" aria-label="ATEX product categories">
            {products.map((item, index) => (
              <button
                key={item.name}
                id={`product-tab-${index}`}
                className={`product-tab${selected === index ? ' is-selected' : ''}`}
                type="button"
                role="tab"
                aria-selected={selected === index}
                aria-controls="product-panel"
                tabIndex={selected === index ? 0 : -1}
                onClick={() => setSelected(index)}
                onKeyDown={(event) => {
                  let next = index;
                  if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % products.length;
                  else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + products.length) % products.length;
                  else if (event.key === 'Home') next = 0;
                  else if (event.key === 'End') next = products.length - 1;
                  else return;
                  event.preventDefault();
                  setSelected(next);
                  document.getElementById(`product-tab-${next}`)?.focus();
                }}
              >
                <span>{item.name}</span>
                <Arrow />
              </button>
            ))}
          </div>
          <a className="text-link text-link-light" href="https://sites.google.com/view/atexautomation/request-for-data-sheet" target="_blank" rel="noreferrer">
            Request product details <Arrow />
          </a>
        </div>
        <div className="product-visual" id="product-panel" role="tabpanel" aria-labelledby={`product-tab-${selected}`}>
          <div className="product-image-wrap">
            <img key={product.image} src={product.image} alt={product.alt} />
          </div>
          <div className="product-caption">
            <div>
              <span className="product-index">0{selected + 1} / 0{products.length}</span>
              <h3>{product.name}</h3>
              <p>{product.summary}</p>
            </div>
            <span className="caption-mark" aria-hidden="true">ATEX</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="services-section section-wrap" id="services" aria-labelledby="services-title">
      <div className="section-heading-row">
        <div className="section-marker"><span>02</span><span>CAPABILITIES</span></div>
        <div className="section-heading-content">
          <p className="eyebrow">Quality, fast and reliable services</p>
          <h2 id="services-title">OUR SERVICES</h2>
          <p className="section-intro">Cost-effective solutions for instrumentation and control needs, supported from installation through service.</p>
        </div>
      </div>
      <div className="service-verb-row" aria-label="Core services">
        {['Maintenance', 'Repair', 'Installation', 'Commissioning'].map((name, index) => (
          <div className="service-verb" key={name}><span>0{index + 1}</span><strong>{name}</strong></div>
        ))}
      </div>
      <div className="service-grid">
        {serviceAreas.map((service) => (
          <article className="service-card" key={service.number}>
            <span className="service-card-index">{service.number}</span>
            <h3>{service.name}</h3>
            <p>{service.detail}</p>
          </article>
        ))}
      </div>
      <div className="casework-heading">
        <div>
          <p className="eyebrow">Selected service scope</p>
          <h3>Maintenance built around plant requirements.</h3>
        </div>
        <p>Maintenance, calibration, and life-safety system work.</p>
      </div>
      <div className="casework-grid">
        {serviceCases.map((item, index) => (
          <article className="casework-card" key={item.title}>
            <span className="casework-index">0{index + 1} / SERVICE</span>
            <p className="casework-label">{item.label}</p>
            <h4>{item.title}</h4>
            <p className="casework-copy">{item.copy}</p>
          </article>
        ))}
      </div>
      <div className="service-cta-line">
        <span>Discuss a maintenance or integration requirement.</span>
        <a className="text-link" href="mailto:atexautomationservices@gmail.com">Talk to the services team <Arrow /></a>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="about-inner section-wrap">
        <div className="about-image-column">
          <div className="about-image-frame">
            <img src="/atex-brand/atex-control-cabinets.jpg" alt="Industrial electrical and control cabinet equipment from ATEX's official service imagery" />
          </div>
          <p className="image-source-note">Instrumentation · Automation · Integration</p>
        </div>
        <div className="about-copy">
          <div className="section-marker"><span>03</span><span>COMPANY</span></div>
          <h2 id="about-title">ABOUT US</h2>
          <h3>Founded by instrumentation professionals.</h3>
          <p className="about-lead">
            ATEX Automation and Technologies Corp. is a provider of turnkey industrial instrumentation, automation, and fire detection and alarm systems.
          </p>
          <p>
            Founded in 2012 by instrumentation professionals adept in industrial instrumentation and automation, ATEX brings expertise in metrology, process and analytical instrumentation, and flow metering. The company provides turnkey solutions and partners with world-class brands to support process efficiency and cost savings.
          </p>
          <div className="about-links">
            <a className="text-link" href="https://sites.google.com/view/atexautomation/home" target="_blank" rel="noreferrer">More about ATEX <Arrow /></a>
            <a className="text-link" href="https://sites.google.com/view/atexautomation/gallery" target="_blank" rel="noreferrer">Explore gallery <Arrow /></a>
          </div>
        </div>
      </div>
      <div className="mission-vision section-wrap">
        <article className="mission-card">
          <p className="eyebrow">Our mission</p>
          <h3>Precision engineered solutions for operational efficiency and safety.</h3>
          <ul>
            <li>Build long-term partnerships through service, innovation, and integrity.</li>
            <li>Cultivate a dynamic, rewarding environment for employees to grow and thrive.</li>
            <li>Uphold global standards in quality, safety, and compliance.</li>
          </ul>
        </article>
        <article className="vision-card">
          <p className="eyebrow eyebrow-light">Our vision</p>
          <h3>To be the most trusted and innovative partner in industrial automation, instrumentation, and fire safety.</h3>
          <p>Empowering businesses to operate with excellence, safety, and sustainability.</p>
        </article>
      </div>
    </section>
  );
}

function AtexWay() {
  return (
    <section className="way-section section-wrap" aria-labelledby="way-title">
      <div className="section-heading-row">
        <div className="section-marker"><span>04</span><span>OUR APPROACH</span></div>
        <div className="section-heading-content">
          <p className="eyebrow">Partnership in practice</p>
          <h2 id="way-title">THE ATEX AUTOMATION WAY</h2>
        </div>
      </div>
      <div className="way-grid">
        {servicePrinciples.map((item, index) => (
          <article className="way-card" key={item.name}>
            <span className="way-index">0{index + 1}</span>
            <h3>{item.name}</h3>
            <p>{item.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function RecognitionSection() {
  return (
    <section className="recognition-section" aria-labelledby="recognition-title">
      <div className="section-wrap">
        <div className="section-heading-row">
          <div className="section-marker"><span>05</span><span>RECOGNITION</span></div>
          <div className="section-heading-content">
            <p className="eyebrow">OUR RECOGNITION</p>
            <h2 id="recognition-title">Recognized through industry participation.</h2>
          </div>
        </div>
        <div className="recognition-grid">
          {recognitions.map((item) => (
            <article className="recognition-card" key={item.index}>
              <span>{item.index}</span>
              <h3>{item.label}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-cta section-wrap">
        <div>
          <p className="eyebrow eyebrow-light">Let's discuss your requirements</p>
          <h2 id="contact-title">A practical next step starts with a conversation.</h2>
          <p>Share your instrumentation, automation, or fire detection requirements with ATEX.</p>
        </div>
        <div className="contact-cta-actions">
          <a className="button button-inverse" href="https://sites.google.com/view/atexautomation/inquiry-form" target="_blank" rel="noreferrer">View inquiry instructions <Arrow /></a>
          <a className="contact-email" href="mailto:sales.atexautomation@gmail.com">sales.atexautomation@gmail.com</a>
          <a className="contact-phone" href="tel:+639178468388">+63 917 846 8388</a>
        </div>
      </div>
      <div className="offices-wrap section-wrap" aria-labelledby="offices-title">
        <div className="offices-heading">
          <div className="section-marker"><span>06</span><span>PHILIPPINES</span></div>
          <h2 id="offices-title">OUR OFFICES</h2>
        </div>
        <div className="office-grid">
          {offices.map((office, index) => (
            <article className="office-card" key={office.city}>
              <span className="office-index">0{index + 1} / {office.city.toUpperCase()}</span>
              <h3>{office.place}</h3>
              <p>{office.address}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main section-wrap">
        <a className="footer-brand" href="#top" aria-label="ATEX Automation home">
          <img src="/atex-brand/atex-logo.png" alt="ATEX Automation and Technologies Corp." />
        </a>
        <p className="footer-position">Industrial instrumentation, automation, and fire detection and alarm systems.</p>
        <div className="footer-links">
          <a href="mailto:sales.atexautomation@gmail.com">Sales <Arrow /></a>
          <a href="mailto:atexautomationservices@gmail.com">Services <Arrow /></a>
          <a href="https://sites.google.com/view/atexautomation/home" target="_blank" rel="noreferrer">Official website <Arrow /></a>
        </div>
      </div>
      <div className="footer-bottom section-wrap">
        <span>ATEX AUTOMATION AND TECHNOLOGIES CORP.</span>
        <span>Philippines</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="site-shell" id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Industrial instrumentation · Automation · Fire detection</p>
            <h1 id="hero-title">ATEX is proud to help power plants achieve their goals.</h1>
            <p className="hero-description">
              ATEX is proud to help power plants from Luzon, Visayas and Mindanao achieve their goals and objectives through quality products and services.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="https://sites.google.com/view/atexautomation/inquiry-form" target="_blank" rel="noreferrer">
                Start an inquiry <Arrow />
              </a>
              <a className="button button-secondary" href="#products">Explore products</a>
            </div>
            <p className="hero-footnote">ATEX AUTOMATION AND TECHNOLOGIES CORP. <span>PHILIPPINES</span></p>
          </div>
          <figure className="hero-image">
            <img src="/atex-brand/atex-site-photo.jpg" alt="Power plant featured on the official ATEX Automation website" />
            <figcaption><span>Industrial instrumentation & process automation</span><span>ATEX · PH</span></figcaption>
          </figure>
          <div className="hero-side-note" aria-hidden="true">ENGINEERED FOR OPERATIONS</div>
        </section>

        <section className="intro-section section-wrap" id="introduction" aria-labelledby="intro-title">
          <div className="section-marker"><span>01</span><span>ATEX AUTOMATION</span></div>
          <div className="intro-content">
            <h2 className="section-kicker" id="intro-title">INTRODUCTION</h2>
            <h3 className="intro-headline">At ATEX, we view our Clients as Partners.</h3>
            <p className="intro-lead">
              One of our primary motivations for forming ATEX was the desire to provide total customer satisfaction—from project consultation and planning to supply, implementation and after-sales service.
            </p>
            <p className="intro-detail">
              Founded by instrumentation professionals, ATEX brings expertise in metrology, process and analytical instrumentation, and flow metering. We offer complete, turnkey solutions for industrial instrumentation and automation demands.
            </p>
          </div>
        </section>

        <section className="facts-section section-wrap" aria-label="ATEX at a glance">
          {facts.map((fact, index) => (
            <article className="fact-item" key={fact.value}>
              <span className="fact-number">0{index + 1}</span>
              <h3>{fact.value}</h3>
              <p>{fact.label}</p>
            </article>
          ))}
        </section>

        <ProductShowcase />
        <ServicesSection />
        <AboutSection />
        <AtexWay />
        <RecognitionSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
