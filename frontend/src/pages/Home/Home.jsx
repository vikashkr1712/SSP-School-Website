import { Link } from "react-router-dom";
import "../../styles/layout/Home.css";

const heroImage = "/images/jaipuria-hero.jpg";

const campusLifeImage = "/images/jaipuria-campus-1.jpg";

const studentLifeImage = "/images/jaipuria-feature.jpg";

const admissionVisual = "/images/jaipuria-event.jpg";

const principalImage = "/images/jaipuria-campus-1.jpg";

const academicHighlights = [
  {
    title: "Strong Curriculum",
    description: "Balanced academics designed to build confidence, curiosity, and long-term success.",
    stat: "98%",
    label: "Student satisfaction",
  },
  {
    title: "Experienced Teachers",
    description: "Dedicated mentors who support every learner with care, structure, and attention.",
    stat: "40+",
    label: "Expert faculty",
  },
  {
    title: "Holistic Growth",
    description: "Sports, arts, and leadership opportunities that encourage all-round development.",
    stat: "25+",
    label: "Clubs & activities",
  },
];

const chooseItems = [
  "Safe and supportive campus environment",
  "Smart classrooms and modern learning tools",
  "Regular parent-teacher communication",
  "Extra-curricular activities and events",
];

const featureCards = [
  {
    title: "Life Skills for Kids",
    description: "Learning is designed to build responsibility, confidence, and practical habits.",
    image: campusLifeImage,
  },
  {
    title: "Imagination is Power",
    description: "Creative projects and guided activities help students think independently.",
    image: studentLifeImage,
  },
  {
    title: "Grow Your Own Wings",
    description: "We support every learner with mentoring, encouragement, and structure.",
    image: admissionVisual,
  },
];

const learningBlocks = [
  {
    title: "Letter Identification",
    grade: "Class - Pre School",
  },
  {
    title: "General Knowledge",
    grade: "Fourth Grade",
  },
  {
    title: "Geography Quiz",
    grade: "First Grade",
  },
  {
    title: "Visual Arts Training",
    grade: "Sketching class",
  },
];

function Home() {
  return (
    <main className="home-page">
      <section className="home-hero section-shell">
        <div className="home-hero__content">
          <span className="home-eyebrow">Welcome to SSP School</span>
          <h1>Putting your child’s future in great motion.</h1>
          <p>
            SSP School combines modern teaching, a caring environment, and strong academic
            foundations to help every student succeed with confidence.
          </p>

          <div className="home-hero__actions">
            <Link className="home-button home-button--primary" to="/admission">
              Start Learning
            </Link>
            <Link className="home-button home-button--secondary" to="/about">
              Learn More
            </Link>
          </div>
        </div>

        <div className="home-hero__visual" aria-hidden="true">
          <div className="home-hero__side-card home-hero__side-card--left">
            <img src={campusLifeImage} alt="Student life at SSP School" />
          </div>

          <div className="home-image-placeholder home-image-placeholder--hero">
            <img className="home-image-placeholder__img" src={heroImage} alt="SSP School campus illustration" />
          </div>

          <div className="home-hero__side-card home-hero__side-card--right">
            <img src={studentLifeImage} alt="Creative student life at SSP School" />
          </div>

          <div className="home-floating-card">
            <strong>Admissions Open</strong>
            <span>Join our learning community today</span>
          </div>

          <div className="home-stat-strip">
            <article className="home-stat-strip__item">
              <strong>50+</strong>
              <span>Schools are supported across 29 states</span>
            </article>
            <article className="home-stat-strip__item">
              <strong>12K+</strong>
              <span>Helping the students of all ages thrive</span>
            </article>
            <article className="home-stat-strip__item">
              <strong>70+</strong>
              <span>Available field workspaces and activities</span>
            </article>
          </div>
        </div>
      </section>

      <section className="home-intro section-shell">
        <div className="home-section-heading">
          <span>School Introduction</span>
          <h2>Smart and clever kids ready to fly high.</h2>
        </div>

        <div className="home-intro__grid">
          <div className="home-intro__copy">
            <p>
              We create an environment where students feel valued and motivated. From early years
              learning to guided development, our programs are built to support growth at every
              stage.
            </p>
            <p>
              Modern classrooms, skilled teachers, and thoughtful student support help us deliver
              an experience that goes beyond textbooks.
            </p>
            <Link className="home-button home-button--secondary" to="/contact">
              Enrol Now
            </Link>
          </div>

          <div className="home-intro__feature-grid">
            {featureCards.map((item) => (
              <article className="home-feature-card" key={item.title}>
                <div className="home-feature-card__image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="home-feature-card__text">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-highlights section-shell">
        <div className="home-section-heading">
          <span>Learning Focus</span>
          <h2>Shaping the future of kids with joyful, structured learning.</h2>
        </div>

        <div className="home-learning-grid">
          {learningBlocks.map((item) => (
            <article className="home-learning-card" key={item.title}>
              <div className="home-learning-card__art">
                  <img src={item.title === "Visual Arts Training" ? studentLifeImage : campusLifeImage} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.grade}</p>
            </article>
          ))}
        </div>

        <div className="home-card-grid home-card-grid--stats">
          {academicHighlights.map((item) => (
            <article className="home-card" key={item.title}>
              <div className="home-card__stat">
                <strong>{item.stat}</strong>
                <span>{item.label}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-choose section-shell">
        <div className="home-section-heading">
          <span>Why Choose Our School</span>
          <h2>We combine care, quality, and opportunity in one place.</h2>
        </div>

        <div className="home-choose__grid">
          <div className="home-choose__image-grid">
            <article className="home-choose__image-card home-choose__image-card--gold">
              <img src={campusLifeImage} alt="Learning activities at SSP School" />
              <div>
                <h3>Life Skills for Kids</h3>
                <p>Everyday habits, confidence, and values.</p>
              </div>
            </article>
            <article className="home-choose__image-card home-choose__image-card--green">
              <img src={studentLifeImage} alt="Students exploring ideas at SSP School" />
              <div>
                <h3>Imagination is Power</h3>
                <p>Creative thinking and expression.</p>
              </div>
            </article>
            <article className="home-choose__image-card home-choose__image-card--blue">
              <img src={heroImage} alt="SSP School student growth illustration" />
              <div>
                <h3>Grow Your Own Wings</h3>
                <p>Support for academic and personal growth.</p>
              </div>
            </article>
          </div>

          <div className="home-choose__content">
            <p className="home-choose__intro">
              We focus on an impactful lesson at a time, making sure children feel encouraged and
              supported.
            </p>
            {chooseItems.map((item) => (
              <div className="home-choose__item" key={item}>
                <span className="home-choose__bullet" aria-hidden="true" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-promo section-shell">
        <article className="home-promo__panel home-promo__panel--gold">
          <div>
            <span className="home-eyebrow">Confidence Building</span>
            <h2>Confidence that builds a brighter future.</h2>
            <p>
              Empowering kids with confidence to create a successful future through guided
              learning and strong support.
            </p>
            <Link className="home-button home-button--secondary" to="/admission">
              Book Now
            </Link>
          </div>
          <img src={principalImage} alt="Principal leading SSP School" />
        </article>

        <article className="home-promo__panel home-promo__panel--warm">
          <div>
            <span className="home-eyebrow">Helping Kids</span>
            <h2>Helping kids to shoot their dreams.</h2>
            <p>Inspiring kids to aim higher with care, structure, and modern learning support.</p>
            <Link className="home-button home-button--primary" to="/about">
              Learn More
            </Link>
          </div>
          <img src={admissionVisual} alt="Admission support at SSP School" />
        </article>
      </section>

      <section className="home-admission-band section-shell">
        <div className="home-admission-band__copy">
          <span className="home-eyebrow">Admission is ongoing</span>
          <h2>Empower your kids to think smarter and sharper.</h2>
          <p>
            Encourage kids to think critically, be creative, and solve problems for a better
            future.
          </p>
          <Link className="home-button home-button--primary" to="/admission">
            Get Educated
          </Link>
        </div>

        <div className="home-admission-band__visual">
          <img src={admissionVisual} alt="Student admission support" />
          <div className="home-admission-band__chip-grid">
            <article>
              <strong>45M+</strong>
              <span>Kids watched around the globe</span>
            </article>
            <article>
              <strong>164+</strong>
              <span>National participating in the Olympiad</span>
            </article>
          </div>
        </div>
      </section>

      <section className="home-event section-shell">
        <div className="home-event__visual">
          <img src={campusLifeImage} alt="Classroom event at SSP School" />
        </div>
        <div className="home-event__content">
          <span className="home-eyebrow">Upcoming Event</span>
          <h2>Building children one at a time.</h2>
          <p>
            Classes and activities rooted in knowledge, values, and meaningful support for every
            learner.
          </p>
          <div className="home-event__meta">07 March 2026</div>
        </div>
      </section>

      <section className="home-cta section-shell">
        <div className="home-cta__content">
          <span className="home-eyebrow">Call to Action</span>
          <h2>Ready to begin your child’s journey with us?</h2>
          <p>
            Explore our admission process and connect with our team to learn how we can help your
            child thrive.
          </p>
          <Link className="home-button home-button--primary" to="/contact">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;