import { useState } from "react";
import { submitAdmissionInquiry } from "../../services/api";
import "../../styles/layout/Admission.css";

const admissionVisual = "/images/jaipuria-event.jpg";

const initialFormState = {
  studentName: "",
  parentName: "",
  classInterested: "",
  phone: "",
  email: "",
  message: "",
};

function validateForm(values) {
  const errors = {};

  if (!values.studentName.trim()) errors.studentName = "Student name is required.";
  if (!values.parentName.trim()) errors.parentName = "Parent name is required.";
  if (!values.classInterested.trim()) errors.classInterested = "Class interested is required.";
  if (!values.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!/^\+?[0-9\s()-]{7,15}$/.test(values.phone.trim())) {
    errors.phone = "Enter a valid phone number.";
  }
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.message.trim()) errors.message = "Message is required.";

  return errors;
}

function Admission() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await submitAdmissionInquiry(formData);
      setSuccessMessage(response.data?.message || "Admission inquiry submitted successfully.");
      setFormData(initialFormState);
      setErrors({});
    } catch (error) {
      const apiMessage = error.response?.data?.message;
      setErrorMessage(apiMessage || "Unable to submit the admission form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="admission-page">
      <section className="admission-hero section-shell">
        <div className="admission-hero__content">
          <span className="admission-eyebrow">Admission</span>
          <h1>Start your child’s journey with an SSP School admission inquiry.</h1>
          <p>
            Fill in the form below and our team will connect with you about class availability,
            next steps, and enrollment details.
          </p>
        </div>

        <div className="admission-hero__visual admission-image-placeholder" aria-hidden="true">
          <img className="admission-image-placeholder__img" src={admissionVisual} alt="SSP School admission illustration" />
        </div>
      </section>

      <section className="admission-form-wrap section-shell">
        <div className="admission-form-card">
          <div className="admission-form-card__header">
            <span>Admission Inquiry Form</span>
            <h2>Provide the details below and we’ll respond shortly.</h2>
          </div>

          {successMessage ? <div className="admission-alert admission-alert--success">{successMessage}</div> : null}
          {errorMessage ? <div className="admission-alert admission-alert--error">{errorMessage}</div> : null}

          <form className="admission-form" onSubmit={handleSubmit} noValidate>
            <div className="admission-form__grid">
              <label className="admission-field">
                <span>Student Name</span>
                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  placeholder="Enter student name"
                />
                {errors.studentName ? <small>{errors.studentName}</small> : null}
              </label>

              <label className="admission-field">
                <span>Parent Name</span>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  placeholder="Enter parent name"
                />
                {errors.parentName ? <small>{errors.parentName}</small> : null}
              </label>

              <label className="admission-field">
                <span>Class Interested</span>
                <input
                  type="text"
                  name="classInterested"
                  value={formData.classInterested}
                  onChange={handleChange}
                  placeholder="Example: Grade 5"
                />
                {errors.classInterested ? <small>{errors.classInterested}</small> : null}
              </label>

              <label className="admission-field">
                <span>Phone</span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                />
                {errors.phone ? <small>{errors.phone}</small> : null}
              </label>

              <label className="admission-field admission-field--full">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                />
                {errors.email ? <small>{errors.email}</small> : null}
              </label>

              <label className="admission-field admission-field--full">
                <span>Message</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what you need"
                  rows="5"
                />
                {errors.message ? <small>{errors.message}</small> : null}
              </label>
            </div>

            <button type="submit" className="admission-submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Inquiry"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Admission;