import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Contact } from '../components/Contact';

describe('Contact Component', () => {
  it('renders contact section with title and description', () => {
    render(<Contact />);
    
    expect(screen.getByText('Contact & Collaboration')).toBeInTheDocument();
    expect(screen.getByText(/We welcome collaboration opportunities/)).toBeInTheDocument();
  });

  it('does not display a public university email or office address', () => {
    render(<Contact />);
    
    expect(screen.queryByText(/jefferson|sidney kimmel/i)).not.toBeInTheDocument();
    expect(screen.queryByText('Office Location')).not.toBeInTheDocument();
  });

  it('does not display an empty office hours section', () => {
    render(<Contact />);
    
    expect(screen.queryByText('Office Hours')).not.toBeInTheDocument();
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
