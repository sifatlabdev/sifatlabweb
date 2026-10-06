import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Lab } from '../components/Lab';
import { About } from '../components/About';
import { Team } from '../components/Team';
import { experience, heroData, jeffersonProjects, socialImpactProjects } from '../data/data';

describe('University-neutral website updates', () => {
  it('shows the Oklahoma role first and ends Jefferson employment in October 2026', () => {
    render(<MemoryRouter><About /></MemoryRouter>);

    expect(experience[0].position).toBe('Assistant Professor of Research');
    expect(screen.getByText('Assistant Professor of Research')).toBeInTheDocument();
    expect(screen.getByText('University of Oklahoma, Department of Family and Preventative Medicine')).toBeInTheDocument();
    expect(screen.getByText('October 2026 - Present')).toBeInTheDocument();
    expect(screen.getByText('August 2023 - October 2026')).toBeInTheDocument();
    expect(screen.queryByText('August 2023 - Present')).not.toBeInTheDocument();
    expect(experience.find(item => item.institution.includes('Thomas Jefferson'))?.description)
      .not.toMatch(/Current projects|Also serving/);
  });

  it('centers two equal collaborator columns and stacks them on mobile', () => {
    render(<Team />);

    const heading = screen.getByRole('heading', { name: 'Collaborators' });
    const row = heading.nextElementSibling;
    expect(row).toHaveClass('grid', 'grid-cols-1', 'sm:grid-cols-2', 'gap-6', 'w-full', 'max-w-4xl', 'mx-auto');
    expect(row).not.toHaveClass('md:grid-cols-3');
    expect(row?.children).toHaveLength(2);
    Array.from(row?.children ?? []).forEach(card => {
      expect(card).toHaveClass('w-full', 'min-w-0');
      expect(card).not.toHaveClass('max-w-xs');
    });
  });

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