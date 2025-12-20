# Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

# Decap CMS

The CMS UI is available at `/admin`.

Local editing (no OAuth) uses Decap's local backend:

- In one terminal: `npx decap-server`
- In another terminal: `npm run dev`
- Open: `http://localhost:3000/admin` (or the port Vite prints)

Production (Netlify) uses `git-gateway`:

- Enable Netlify **Identity** and **Git Gateway** for the site.
