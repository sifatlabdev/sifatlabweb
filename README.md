# Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

# Decap CMS

The CMS UI is available at `/admin`.

Production (Netlify) uses `git-gateway`:

- Enable Netlify **Identity** and **Git Gateway** for the site.
- Keep Identity registration invite-only and invite each editor from the Netlify dashboard.
- Editors must accept their invitation and set a password before signing in. A contact email on the website does not create an editor account.
- Use `https://sifatlab.com/admin/` consistently; logins are stored per domain.
- The Identity widget must load before Decap CMS on the admin page for invitation and password-recovery links.

## Where to edit content

- **Personal Profile → Biography, Title & Portrait (About Page)**: visible biography, professional title, name, and portrait.
- **About Me → Employment History / Education / Teaching Courses**: academic history.
- **About Me → Lab Information**: homepage tagline, mission, and Who We Are.
- **Contact → Contact Information**: public email and contact introduction.
- **Team → Team Members**: collaborator details and photos. Empty collaborator groups are allowed.

The old About Section entry pointed to unused content and has been removed from the editor to avoid edits that never appear on the site.

## Troubleshooting editing and publishing

1. If sign-in fails, check the editor's invitation/account in Netlify Identity. Send a fresh invitation or password-reset email as appropriate; never share passwords or invitation tokens.
2. If sign-in succeeds but loading or publishing fails, check that Git Gateway is enabled and authorized for `sifatlabdev/sifatlabweb`, branch `main`. Repository permission changes may require reconnecting Git Gateway.
3. Check required fields for validation errors, then publish. Publishing writes a Git commit; the public site updates only after a successful Netlify deployment.
4. If publication succeeds but the site stays unchanged, check the latest Netlify deployment log. Contact-form email notifications must be configured separately in Netlify Forms; changing the public contact email does not change notification recipients.
5. For a remaining issue, collect the admin URL, the step that fails (login, loading, saving, or publishing), and the exact error/screenshot, with tokens and personal information redacted.

The legacy GitHub OAuth function is not used by the configured Git Gateway backend.
Local CMS editing is not enabled in the checked-in configuration; `npm run dev` alone does not provide a local content-writing backend.

### “Failed to persist entry: TypeError: Failed to fetch”

This indicates a failed browser request, not necessarily invalid content or missing repository permissions.

- When saving a newly selected photo, Decap's `AssetProxy.toBase64()` fetches a local `blob:` URL before uploading it. The CSP in `public/_headers` must allow `blob:` in **both** `img-src` (preview) and `connect-src` (reading the photo for upload). Do not replace the connection allowlist with `*` or `https:`.
- Header changes take effect only after deployment. Preserve unsaved text before reloading the editor; reselect any pending photo after reloading.
- After deployment, test a text-only change and then a photo upload separately. Verify the resulting Git commit and Netlify deployment.
- If saving still fails, open browser Developer Tools → Console and Network, retry once, and collect the blocked URL/scheme, HTTP status (if any), and any CSP error. Redact authorization headers, cookies, tokens, and private content. A `blob:` CSP failure, a gateway `401`/`403`, and a network/extension block require different fixes.
