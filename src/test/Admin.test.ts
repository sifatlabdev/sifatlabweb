import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, it, expect } from 'vitest';

const readPublic = (file: string) => readFileSync(resolve(process.cwd(), 'public', file), 'utf8');

describe('Content editor configuration', () => {
  it('loads the Identity widget before the CMS for invitation and recovery flows', () => {
    const html = readPublic('admin/index.html');
    const identity = html.indexOf('https://identity.netlify.com/v1/netlify-identity-widget.js');
    const cms = html.indexOf('https://unpkg.com/decap-cms@3.9.0/dist/decap-cms.js');

    expect(identity).toBeGreaterThan(-1);
    expect(cms).toBeGreaterThan(identity);
  });

  it('exposes academic history and the visible profile rather than unused About content', () => {
    const config = readPublic('admin/config.yml');

    expect(config).toContain('file: src/content/experiences.json');
    expect(config).toContain('file: src/content/educations.json');
    expect(config).toContain('file: src/content/hero.json');
    expect(config).not.toContain('file: src/content/about.json');
    expect(config).toContain('label: Public Contact Email');
  });

  it('allows empty collaborator lists and optional employment descriptions', () => {
    const config = readPublic('admin/config.yml');

    for (const name of ['universityCollaborators', 'externalCollaborators', 'graduateResearchers']) {
      expect(config).toMatch(new RegExp(`name: ${name}\\s+widget: list\\s+required: false`));
    }
    const employment = config.split('file: src/content/experiences.json')[1].split('- name: educations')[0];
    expect(employment).toMatch(/name: description\s+widget: text\s+required: false/);
  });

  it('allows blob image previews while keeping anti-framing protections', () => {
    const headers = readPublic('_headers');

    expect(headers).toMatch(/img-src[^;]*blob:/);
    expect(headers).toContain("frame-ancestors 'none'");
  });

  it('allows Decap to fetch local image blobs when saving without allowing arbitrary remote connections', () => {
    const headers = readPublic('_headers');
    const policy = headers.split('Content-Security-Policy: ')[1].split('\n')[0];
    const sources = policy.split(';').map(directive => directive.trim().split(/\s+/));
    const connections = sources.find(([directive]) => directive === 'connect-src')!.slice(1);

    // AssetProxy.toBase64() fetches an object URL before uploading selected photos.
    // Allowing blob: in img-src alone only fixes the preview, not persistence.
    expect(connections).toContain('blob:');
    expect(connections).toContain("'self'");
    expect(connections).toContain('https://api.netlify.com');
    expect(connections).toContain('https://identity.netlify.com');
    expect(connections).not.toContain('*');
    expect(connections).not.toContain('https:');
  });
});