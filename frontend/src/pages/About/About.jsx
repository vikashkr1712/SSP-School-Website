import "../../styles/layout/About.css";

const principalImage = "/images/Deepak-Kumar-Bajaj-1.jpg";

const campusImage = "/images/jaipuria-campus-1.jpg";

const timeline = [
  {
    year: "1998",
    title: "School Established",
    description: "Our school began with a small team of dedicated educators and a clear learning vision.",
  },
  {
    year: "2008",
    title: "Academic Expansion",
    description: "We introduced broader academic programs and added more student support services.",
  },
  {
    year: "2018",
    title: "Modern Campus Upgrade",
    description: "Smart classrooms, digital tools, and improved facilities were added for better learning.",
  },
  {
    year: "2026",
    title: "Growing with Purpose",
    description: "Today we continue to grow while keeping values, discipline, and quality at the center.",
  },
];

const facilities = [
  "Smart classrooms with digital learning tools",
  "Well-equipped science and computer labs",
  "Library with academic and reference resources",
  "Sports ground and indoor activity spaces",
];

const achievements = [
  {
    value: "5000+",
    label: "Students guided successfully",
  },
  {
    value: "95%",
    label: "Annual exam success rate",
  },
  {
    value: "120+",
    label: "Awards and recognitions",
  },
];

function About() {
  return (
    <main className="about-page">
      <section className="about-hero section-shell">
        <div className="about-hero__content">
          <span className="about-eyebrow">About School</span>
          <h1>Building an SSP School learning environment where every student can thrive.</h1>
          <p>
            SSP School is committed to academic excellence, student wellbeing, and steady growth
            through a balanced approach to education.
          </p>
        </div>

        <div className="about-hero__visual about-image-placeholder" aria-hidden="true">
          <img className="about-image-placeholder__img" src={campusImage} alt="Jaipuria campus visual" />
        </div>
      </section>

      <section className="about-timeline section-shell">
        <div className="about-section-heading">
          <span>School History</span>
          <h2>Our journey has been shaped by consistency, care, and progress.</h2>
        </div>

        <div className="about-timeline__grid">
          {timeline.map((item) => (
            <article className="about-timeline__item" key={item.year}>
              <div className="about-timeline__year">{item.year}</div>
              <div className="about-timeline__body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-mission section-shell">
        <div className="about-section-heading">
          <span>Mission and Vision</span>
          <h2>Focused on academic excellence and lifelong character development.</h2>
        </div>

        <div className="about-card-grid">
          <article className="about-card">
            <h3>Mission</h3>
            <p>
              To provide a supportive and disciplined learning space that inspires students to
              build knowledge, confidence, and good values.
            </p>
          </article>
          <article className="about-card">
            <h3>Vision</h3>
            <p>
              To become a respected school known for quality education, character building, and
              the success of every learner.
            </p>
          </article>
        </div>
      </section>

      <section className="about-principal section-shell">
        <div className="about-section-heading">
          <span>Principal Message</span>
          <h2>A message of encouragement, responsibility, and ambition.</h2>
        </div>

        <div className="about-principal__grid">
          <div className="about-principal__photo about-image-placeholder about-image-placeholder--portrait">
            <img className="about-image-placeholder__img" src={principalImage} alt="Principal portrait illustration" />
          </div>
          <div className="about-principal__message about-card">
            <p>
              “Our goal is not only to educate but to empower. We believe every child has the
              potential to grow, succeed, and contribute meaningfully to society. With guidance,
              discipline, and compassion, we create the conditions for that growth.”
            </p>
            <strong>Principal, SSP School</strong>
          </div>
        </div>
      </section>

      <section className="about-facilities section-shell">
        <div className="about-section-heading">
          <span>Facilities</span>
          <h2>Modern spaces and support systems that enhance everyday learning.</h2>
        </div>

        <div className="about-card-grid about-card-grid--three">
          {facilities.map((item) => (
            <article className="about-card about-card--facility" key={item}>
              <span className="about-card__icon" aria-hidden="true">
                ✓
              </span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-achievements section-shell">
        <div className="about-section-heading">
          <span>Achievements</span>
          <h2>Milestones that reflect our commitment to quality and progress.</h2>
        </div>

        <div className="about-achievements__grid">
          {achievements.map((item) => (
            <article className="about-achievement-card" key={item.label}>
              <strong>{item.value}</strong>
              <p>{item.label}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;