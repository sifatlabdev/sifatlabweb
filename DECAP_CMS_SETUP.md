# Decap CMS Setup Guide

## Overview

This project uses **Decap CMS** (formerly Netlify CMS) to enable non-technical content management. The CMS allows you to edit all structured data (publications, team members, projects, etc.) through a user-friendly web interface without touching code.

## Architecture

### Content Management Flow

```
GitHub Repository
    ↓
Decap CMS Admin Interface (/admin)
    ↓
JSON Files in src/content/
    ↓
data.tsx (imports & re-exports)
    ↓
React Components (display)
```

### File Structure

```
project/
├── public/
│   ├── admin/
│   │   ├── config.yml          # Decap CMS configuration
│   │   └── index.html          # CMS UI entry point
│   ├── _headers                # Netlify security headers
│   └── _redirects              # Routing configuration
├── src/
│   ├── content/                # JSON data files (managed via CMS)
│   │   ├── publications.json
│   │   ├── educations.json
│   │   ├── experiences.json
│   │   ├── team.json
│   │   ├── projects.json
│   │   ├── social-projects.json
│   │   ├── contributions.json
│   │   ├── public-engagement.json
│   │   ├── hero.json
│   │   └── contact.json
│   └── data/
│       └── data.tsx            # Imports JSON, applies type safety
```

## Setup Instructions

### Prerequisites

- GitHub account with repository access
- Netlify account connected to GitHub
- Node.js and npm installed locally

### 1. Enable Decap CMS on GitHub (OAuth)

Decap CMS uses GitHub as the backend for authentication and file storage.

#### Option A: Netlify Configuration (Recommended)

If hosting on Netlify, OAuth is automatically configured:

1. Deploy your site to Netlify
2. Go to **Site settings** → **Identity** → **Services**
3. Enable **GitHub** as an authentication provider
4. No additional configuration needed!

#### Option B: Manual GitHub OAuth Setup

1. Go to GitHub → **Settings** → **Developer settings** → **OAuth Apps**
2. Click **New OAuth App**
3. Fill in:
   - **Application name**: Your Site Name CMS
   - **Homepage URL**: `https://yourdomain.com`
   - **Authorization callback URL**: `https://yourdomain.com/api/auth`
4. Copy the **Client ID** and **Client Secret**
5. Add to Netlify Site settings or environment variables

### 2. Local Development

To test Decap CMS locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Visit http://localhost:5173/admin
```

**Note**: OAuth authentication won't work locally without additional setup. For local editing, you can:

- Use the GitHub backend with direct authentication
- Set `backend.name: "local"` temporarily in config.yml (for testing only)

### 3. Deploy to Netlify

```bash
# Build the project
npm run build

# Deploy (Netlify automatically detects and deploys)
git push origin main
```

Once deployed:

- Access CMS at: `https://yourdomain.com/admin`
- Sign in with your GitHub account
- Start editing content!

## Collections Overview

### Hero Profile (`hero.json`)

- Name, badge, title, bio
- Expertise tags
- Faculty profile URL

### Education (`educations.json`)

- Degree, field, institution, year
- Additional details

### Work Experience (`experiences.json`)

- Job title, institution
- Start/end years
- Description, location

### Team Members (`team.json`)

Organized in 4 categories:

- **Lab Director**: Lead researcher profile
- **University Collaborators**: Internal team members
- **External Collaborators**: External partners
- **Graduate Researchers**: Student researchers

Each member has: name, title, image reference, specialties, URL

### Research Projects (`projects.json`)

Jefferson University research projects with:

- Title, descriptions (short & detailed)
- Status (Ongoing/Completed)
- Tags for categorization
- Associated publications

### Social Impact Projects (`social-projects.json`)

Similar structure to research projects but for social initiatives:

- Community-focused work
- Pilot programs
- Outreach initiatives

### Publications (`publications.json`)

- Title, authors, journal, year
- DOI, PMID
- Categories and subcategories for organization

### Contributions (`contributions.json`)

Research contribution areas with:

- ID, title, description
- Key achievements
- Related publications
- Multiple contribution themes

### Public Engagement (`public-engagement.json`)

Events organized by year:

- Talks, workshops, panels
- Venue, date, location
- Presenter information

### Contact (`contact.json`)

- Email address
- Office location (campus, address, city)
- Office hours
- Section metadata for UI

## Editing Data in Decap CMS

### Basic Workflow

1. **Access CMS**: Go to `https://yourdomain.com/admin`
2. **Select Collection**: Choose what you want to edit (e.g., "Publications")
3. **Create/Edit Entry**: Add new items or modify existing ones
4. **Save & Publish**: Changes are committed to GitHub
5. **View Changes**: Site automatically updates after deployment

### Tips for Content Editors

#### For Publications

- Fill in all required fields: title, authors, journal, year
- DOI should be the full URL (e.g., `https://doi.org/10.1016/...`)
- Categories help organize research areas
- Multiple subcategories can be added for detailed tagging

#### For Team Members

- Use consistent image references ("heroImage", "img1", "img2", "img3")
- These map to actual image files imported in data.tsx
- Multiple specialties can be listed
- Include LinkedIn/personal URLs when available

#### For Projects

- Detailed description supports longer explanations
- Status should be "Ongoing" or "Completed"
- Add relevant tags (e.g., "Cancer Prevention", "Digital Health")
- Attach publications from the same project

#### For Engagement Events

- Organize by year automatically
- Specify event type (Talk, Workshop, etc.)
- Include venue and location details
- Presenter/author names for attribution

## Technical Details

### Config File Structure

The `config.yml` file defines:

- **Backend**: GitHub authentication and file storage
- **Media folder**: Where uploaded images are stored (`/public/images`)
- **Collections**: Each data type with fields and validation

### Field Types Used

- `string`: Simple text input
- `text`: Multi-line text (for descriptions)
- `number`: Numeric values
- `select`: Dropdown with predefined options
- `list`: Array of items (tags, achievements, etc.)
- `object`: Grouped related fields (address with street, city, etc.)

### Image Handling

Images are currently referenced by name (not URLs) because:

- Images are imported as modules in TypeScript
- This maintains type safety
- Prevents broken image links

To add new images:

1. Place image file in `src/assets/images/`
2. Import in `src/data/data.tsx`
3. Reference by import name in CMS (e.g., "newImage")

## Troubleshooting

### CMS Not Loading

- Check browser console for errors (F12)
- Verify `/admin/index.html` is being served
- Check `public/_redirects` file exists

### Authentication Issues

- Ensure GitHub OAuth is configured on Netlify
- Try clearing browser cache and cookies
- Verify repository is public or you have access

### Changes Not Appearing

- Wait for GitHub Actions to finish building
- Verify changes were committed to GitHub
- Check Netlify deployment status
- Clear browser cache after deployment

### Image Upload Issues

- Ensure `public/images` directory exists
- Check file size (limit typically 25MB on Netlify)
- Try PNG or JPG format
- Verify folder permissions

## Security Notes

⚠️ **Important**:

- Only users with GitHub repository access can edit via CMS
- All changes are tracked in git history
- Changes require pull request review (optional workflow)
- Never commit sensitive credentials to git

## Further Documentation

- [Decap CMS Docs](https://decapcms.org/)
- [Netlify Hosting Guide](https://docs.netlify.com/)
- [GitHub OAuth Documentation](https://docs.github.com/en/developers/apps/building-oauth-apps)

## Next Steps

1. Deploy to Netlify
2. Configure GitHub OAuth
3. Test CMS at `/admin`
4. Invite team members
5. Start managing content!
