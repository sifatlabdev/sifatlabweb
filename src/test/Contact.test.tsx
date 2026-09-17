import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Contact } from '../components/Contact';

// Mock the data module
vi.mock('../data/data', () => ({
  contactSectionData: {
    title: 'Get In Touch',
    description: 'We would love to hear from you',
    cardDescription: 'Reach out to us through any of these channels',
  },
  contactInfo: {
    email: 'contact@example.com',
    officeLocation: {
      campus: 'Main Campus',
      address: '123 University Ave',
      city: 'City, State 12345',
    },
    officeHours: 'Monday - Friday\n9:00 AM - 5:00 PM',
  },
}));

describe('Contact Component', () => {
  it('renders contact section with title and description', () => {
    render(<Contact />);
    
    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
    expect(screen.getByText('We would love to hear from you')).toBeInTheDocument();
  });

  it('displays contact information', () => {
    render(<Contact />);
    
    expect(screen.getByText('contact@example.com')).toBeInTheDocument();
    expect(screen.getByText(/Main Campus/)).toBeInTheDocument();
    expect(screen.getByText(/123 University Ave/)).toBeInTheDocument();
  });

  it('displays office hours correctly', () => {
    render(<Contact />);
    
    expect(screen.getByText(/Monday - Friday/)).toBeInTheDocument();
    expect(screen.getByText(/9:00 AM - 5:00 PM/)).toBeInTheDocument();
  });

  it('renders contact form with all required fields', () => {
    render(<Contact />);
    
    expect(screen.getByLabelText('First Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Subject')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
  });

  it('renders optional institution field', () => {
    render(<Contact />);
    
    expect(screen.getByLabelText('Institution/Organization')).toBeInTheDocument();
  });

  it('renders submit button', () => {
    render(<Contact />);
    
    const submitButton = screen.getByRole('button', { name: /Send Message/i });
    expect(submitButton).toBeInTheDocument();
  });

  it('has proper form attributes for Netlify', () => {
    const { container } = render(<Contact />);
    
    const form = container.querySelector('form');
    expect(form?.getAttribute('name')).toBe('contact');
    expect(form?.getAttribute('data-netlify')).toBe('true');
  });

  it('form inputs have correct placeholders', () => {
    render(<Contact />);
    
    expect(screen.getByPlaceholderText('Your first name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your last name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('your.email@example.com')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Brief subject line')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your message here...')).toBeInTheDocument();
  });

  it('renders honeypot field for spam protection', () => {
    const { container } = render(<Contact />);
    
    const honeypotInput = container.querySelector('input[name="bot-field"]');
    expect(honeypotInput).toBeInTheDocument();
  });
});
