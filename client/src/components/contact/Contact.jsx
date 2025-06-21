import React, { useRef, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  useTheme
} from '../../mui/muiComponents';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SendIcon from '@mui/icons-material/Send';

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const theme = useTheme();
  const headingRef = useRef();
  const formRef = useRef();

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic Validation
    if (!form.fullName || !form.email || !form.subject || !form.message) {
      toast.error('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    fetch('https://behan-portfolio-server.onrender.com/api/users/contact', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    }).catch(err => console.error('Click log error:', err.message));

    setTimeout(() => {
      toast.success('Great! I’ve received your message and will respond as soon as possible.');
      setForm({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  useGSAP(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
        },
      }
    );
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.2,
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 90%',
        },
      }
    );
  }, []);

  return (
    <Box id="contact">
      <Container maxWidth="sm">
        <Typography
          ref={headingRef}
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
        >
          Get in Touch
        </Typography>
        <Typography
          textAlign="center"
          color="text.secondary"
          mb={4}
        >
          Fill out the form and I'll get back to you as soon as possible.
        </Typography>

        <Box ref={formRef} component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
          <Stack spacing={3}>
            <TextField
              label="Full Name"
              name="fullName"
              variant="outlined"
              fullWidth
              required
              value={form.fullName}
              onChange={handleChange}
              placeholder='Behan kumar'
            />
            <TextField
              label="Email Address"
              name="email"
              type="email"
              variant="outlined"
              fullWidth
              required
              value={form.email}
              onChange={handleChange}
              placeholder='behan@example.com'
            />
            <TextField
              label="Phone Number"
              name="phone"
              type="tel"
              variant="outlined"
              fullWidth
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 9869XXXXXX"
            />
            <TextField
              label="Subject"
              name="subject"
              variant="outlined"
              fullWidth
              required
              value={form.subject}
              onChange={handleChange}
              placeholder="e.g., Freelance Project or Job Offer"
            />
            <TextField
              label="Your Message"
              name="message"
              variant="outlined"
              fullWidth
              multiline
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              placeholder="I'd like to discuss a potential full-time opportunity at our company..."
            />
            <Button
              type="submit"
              variant="outlined"
              size="large"
              endIcon={<SendIcon />}
              sx={{
                fontWeight: 'bold',
                color: 'text.primary',
                bgcolor: 'transparent'
              }}
            >
              Send Proposal
            </Button>
          </Stack>
        </Box>
        <ToastContainer position="top-right" autoClose={3000} pauseOnHover />
      </Container>
    </Box>
  );
}

export default Contact;
