import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { Form, Button, Alert, Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill out all fields.");
      return;
    }
    setError("");
    // EmailJS integration
    emailjs.send(
      'service_xtnaqkn', // Service ID
      'template_d8a7i4m', // Template ID
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message
      },
      'A7MAYDiofVwUI6wkM' // Public key
    ).then(
      (result) => {
        setSubmitted(true);
      },
      (error) => {
        setError("Failed to send message. Please try again later.");
      }
    );
  };

  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <Row className="justify-content-center" style={{ paddingTop: "30px", paddingBottom: "50px" }}>
          <Col md={8} lg={6}>
            <h1 className="project-heading" style={{ marginBottom: "10px" }}>
              Get in <strong className="purple">Touch</strong>
            </h1>
            <p className="section-subtitle" style={{ color: "#b8b8b8", marginBottom: 30, fontSize: "1.1em" }}>
              Have a question, want to work together, or just say hi? Fill out the form below!
            </p>
            <Card className="contact-card">
              {submitted ? (
                <Alert variant="success" className="d-flex flex-column align-items-center">
                  Thank you for reaching out! I'll get back to you soon.
                  <Button className="btn-neon mt-3" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }); }}>
                    Send Another Message
                  </Button>
                </Alert>
              ) : (
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="contactName" className="mb-4">
                    <Form.Label className="purple">Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={handleChange}
                      className="neon-input"
                    />
                  </Form.Group>
                  <Form.Group controlId="contactEmail" className="mb-4">
                    <Form.Label className="purple">Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={form.email}
                      onChange={handleChange}
                      className="neon-input"
                    />
                  </Form.Group>
                  <Form.Group controlId="contactMessage" className="mb-4">
                    <Form.Label className="purple">Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="message"
                      placeholder="Enter your message"
                      value={form.message}
                      onChange={handleChange}
                      className="neon-input"
                    />
                  </Form.Group>
                  {error && <Alert variant="danger">{error}</Alert>}
                  <Button type="submit" className="btn-neon contact-btn w-100">Send Message</Button>
                </Form>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Contact;
