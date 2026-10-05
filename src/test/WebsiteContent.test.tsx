import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Lab } from '../components/Lab';
import { About } from '../components/About';
import { heroData, jeffersonProjects, socialImpactProjects } from '../data/data';

describe('University-neutral website updates', () => {
  it('shows the revised homepage without university branding or recruitment', () => {
    const { container } = render(<Lab />);

    expect(screen.getByText('Behavioral Health & Cancer Prevention Research')).toBeInTheDocument();
    expect(screen.getByText(/^Led by Dr\. Munjireen Sifat/)).toBeInTheDocument();
    expect(container).not.toHaveTextContent(/Thomas Jefferson|Join Us|How to Apply|@jefferson\.edu/i);
    expect(screen.queryByText(/Joshua Godbolt/)).not.toBeInTheDocument();
    expect(screen.getByText('Shawn C. Chiang')).toBeInTheDocument();
    expect(screen.getByText('Lauren Thompson')).toBeInTheDocument();
    expect(screen.getByText('Munjireen Sifat, PhD').closest('a')).toBeNull();
    expect(container.querySelector('a[href*="jefferson"]')).toBeNull();
  });

  it('shows the approved biography and title without a faculty link', () => {
    const { container } = render(<MemoryRouter><About /></MemoryRouter>);

    expect(screen.getByText(heroData.bio)).toBeInTheDocument();
    expect(heroData.bio).toBe('I am an Assistant Professor, my research focuses on health equity, addressing modifiable health behaviors and mental health disparities in underserved populations. My work emphasizes cancer prevention, particularly tobacco-related cancers and early detection of cancer.');
    expect(heroData.title).toBe('Assistant Professor');
    expect(screen.queryByRole('link', { name: /View Faculty Page/i })).not.toBeInTheDocument();
    expect(container.querySelector('a[href*="jefferson"]')).toBeNull();
  });

  it('keeps E-Shift and HRSN completed and excludes Culinary Wellness/CRIC', () => {
    const projects = [...jeffersonProjects, ...socialImpactProjects];
    const completedProjects = projects.filter(project => /E-Shift|HRSN/.test(project.title));

    expect(completedProjects).toHaveLength(3);
    completedProjects.forEach(project => expect(project.status).toBe('Completed'));
    expect(JSON.stringify(projects)).not.toMatch(/CRIC|Chinese Wellness|Culinary Circle/i);
    expect(socialImpactProjects.some(project => /Como Sano/.test(project.title))).toBe(true);
  });
});