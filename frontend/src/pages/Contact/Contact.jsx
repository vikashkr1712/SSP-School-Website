import "../../styles/layout/Contact.css";

const contactCards = [
  {
    title: "Visit Us",
    value: "SSP School, Banaras Parao – Mugalsarai Road, Dandi",
    note: "Monday to Saturday | 8:00 AM - 4:00 PM",
  },
  {
    title: "Call Us",
    value: "+91 98765 43210",
    note: "Admissions Desk: +91 98765 43211",
  },
  {
    title: "Email",
    value: "info@sspschool.edu.in",
    note: "Admissions: admissions@sspschool.edu.in",
  },
  {
    title: "Office Hours",
    value: "Mon - Sat | 8:00 AM - 4:00 PM",
    note: "Closed on Sundays and public holidays",
  },
];

const contactHighlights = [
  {
    label: "Admissions Office",
    value: "+91 98765 43211",
  },
  {
    label: "Office Hours",
    value: "Mon - Sat | 8:00 AM - 4:00 PM",
  },
  {
    label: "Campus Address",
    value: "Banaras Parao – Mugalsarai Road, Dandi",
  },
];

const contactHeroImage = "/images/jaipuria-campus-1.jpg";

const quickInfo = [
  "Principal: Dr. Ananya Sharma",
  "Academic Coordinator: Mr. Ravi Kumar",
  "Transport Desk: +91 98765 43212",
  "School Bus Routes: City Center, Riverside, Lakeview, Mughalsarai",
];

function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero section-shell">
        <div className="contact-hero__content">
          <span className="contact-eyebrow">Contact SSP School</span>
          <h1>We’re here to answer questions about admissions, academics, and campus life.</h1>
          <p>
            Reach out to the school office, admissions desk, or academic team using the details
            below. We’ve included our full contact information so parents can connect quickly.
          </p>

          <div className="contact-highlight-strip" aria-label="Quick contact summary">
            {contactHighlights.map((item) => (
              <article className="contact-highlight-chip" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </article>
            ))}
          </div>
        </div>

        <div className="contact-hero__card contact-card contact-card--highlight">
          <div className="contact-hero__image-wrap">
            <img
              className="contact-hero__image"
              src={contactHeroImage}
              alt="Students enjoying campus life at SSP School"
            />
          </div>
          <div className="contact-hero__card-copy snapshot">
            <span className="contact-card__label contact-card__label--inverse">School Snapshot</span>
            <h2>Co-educational day school focused on academics, discipline, and growth.</h2>
            <p>
              We keep our communication lines open for admissions, transport, academics, and
              parent support throughout the week.
            </p>

            <div className="snapshot__stats">
              <article>
                <strong>Established</strong>
                <span>1995</span>
              </article>
              <article>
                <strong>Students</strong>
                <span>1,500+</span>
              </article>
              <article>
                <strong>Faculty</strong>
                <span>80+</span>
              </article>
            </div>

            <div className="snapshot__facilities">
              <strong>Key Facilities</strong>
              <ul>
                <li>Laboratories & Smart Classrooms</li>
                <li>Sports Ground & Indoor Courts</li>
                <li>Library & Learning Resource Centre</li>
                <li>Transport & Canteen Services</li>
              </ul>
            </div>

            <div className="snapshot__cta">
              <a className="btn btn--primary" href="/admission">Apply / Enquire</a>
              <a className="btn btn--ghost" href="#contact-details">Contact Us</a>
            </div>

            <strong>SSP School</strong>
          </div>
        </div>
      </section>

      <section className="contact-feature section-shell">
        <div className="contact-feature__text card-panel">
          <span className="contact-section-heading__eyebrow">Questions?</span>
          <h2>Reach the right person without having to search around the site.</h2>
          <p>
            Like the reference layouts, this section keeps the most helpful contact details in one
            place so parents can act quickly.
          </p>
        </div>

        <div className="contact-feature__list card-panel">
          <ul>
            <li>Admissions and fee support</li>
            <li>Transport and route coordination</li>
            <li>Principal and academic office contact</li>
            <li>Office hours and campus location</li>
          </ul>
        </div>
      </section>

      <section id="contact-details" className="contact-details section-shell">
        <div className="contact-section-heading">
          <span>Contact Details</span>
          <h2>Everything you need to reach Seth M.R. Jaipuria School in one place.</h2>
        </div>

        <div className="contact-card-grid">
          {contactCards.map((item) => (
            <article className="contact-card" key={item.title}>
              <span className="contact-card__label">{item.title}</span>
              <h3>{item.value}</h3>
              <p>{item.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-lower section-shell">
        <div className="contact-map card-panel">
          <div className="contact-section-heading">
            <span>Campus Location</span>
            <h2>Find us easily during school hours.</h2>
          </div>
          <div className="contact-map__embed">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Seth+M.R.+Jaipuria+School+Banaras"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Seth M.R. Jaipuria School location in Google Maps"
            >
              <div className="contact-map__canvas" aria-label="Stylized campus location map">
                <div className="contact-map__road contact-map__road--horizontal" />
                <div className="contact-map__road contact-map__road--vertical" />
                <div className="contact-map__road contact-map__road--diagonal" />
                <div className="contact-map__park contact-map__park--left" />
                <div className="contact-map__park contact-map__park--right" />
                <div className="contact-map__district contact-map__district--south">Banaras Parao</div>
                <div className="contact-map__pin">
                  <span className="contact-map__pin-dot" />
                  <span className="contact-map__pin-label">SSP School</span>
                </div>
              </div>
            </a>
          </div>
          <p className="contact-map__caption">SSP School Location</p>
        </div>

        <div className="contact-info card-panel">
          <div className="contact-section-heading">
            <span>Quick Info</span>
            <h2>Useful details for parents and guardians.</h2>
          </div>
          <ul className="contact-info__list">
            {quickInfo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="contact-info__note">
            <strong>School Office:</strong>
            <p>
              The office can support admissions, fee queries, transport, and academic scheduling
              questions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
