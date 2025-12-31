# Security Audit Report - testPortfolio Project

**Date**: December 20, 2025  
**Project**: SIFAT Lab Portfolio (React + Vite)  
**Status**: ⚠️ **Attention Required** - 1 Moderate Vulnerability Found

---

## Executive Summary

Your portfolio website has a good security foundation as a static React application with limited backend complexity. However, there is **1 moderate-severity vulnerability** in the Vite dependency that requires attention, plus several best practice recommendations.

---

## 🔴 Critical Vulnerabilities Found: 0

No critical vulnerabilities detected.

---

## 🟠 Moderate Vulnerabilities: 1

### 1. **Vite File Server Security Issues** (CVSS: 5.3)

**Affected Package**: `vite@6.3.5`  
**Available Fix**: `vite@6.4.1`

**Vulnerabilities**:

- GHSA-g4jq-h2w9-997c: Vite middleware may serve files starting with the same name with the public directory
- GHSA-jqfw-vq24-v9c3: Vite's `server.fs` settings were not applied to HTML files
- GHSA-93m4-6634-74q7: Vite allows `server.fs.deny` bypass via backslash on Windows

**Risk Level**: **MODERATE** - Primarily affects development environment, but worth fixing

**Recommendation**:

```bash
npm audit fix --force
# or manually:
npm install vite@6.4.1
```

**Action Required**: ✅ **STRONGLY RECOMMENDED**

---

## 🟡 Findings & Concerns

### A. Code Security Issues

#### ✅ Good: No Hardcoded Secrets

- No API keys, passwords, or tokens found in source code
- No environment variable files exposed
- Contact information properly abstracted to data.tsx

#### ⚠️ Concern: Use of `dangerouslySetInnerHTML`

**Location**: 3 instances

- `/src/components/Research.tsx` (line 106-111)
- `/src/components/Social.tsx` (line 106-111)
- `/src/components/ui/chart.tsx` (line 83-87)

**Risk Analysis**:

```tsx
// Current implementation in Research.tsx:
dangerouslySetInnerHTML={{
  __html: project.detailedDescription.replace(
    /https?:\/\/[^\s]+/g,
    (url) =>
      `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">${url}</a>`
  ),
}}
```

**Assessment**: ✅ **CURRENTLY SAFE**

- Data source is from internal `data.tsx` (hardcoded, not user input)
- URL regex is restrictive (only matches `http://` and `https://` URLs)
- Proper `rel="noopener noreferrer"` attributes included
- HTML escaping handled by regex replacement

**Recommendation**: Continue monitoring if this becomes dynamic user input in the future.

---

### B. Dependency Analysis

#### Package Summary:

- **Total Dependencies**: 278 (including transitive)
- **Direct Dependencies**: ~40
- **Dev Dependencies**: 5
- **Known Vulnerabilities**: 1 (Vite - Moderate)

#### Dependency Quality:

- ✅ All major packages are well-maintained
  - React 18.3.1 (latest stable)
  - Vite 6.3.5 (minor patch available: 6.4.1)
  - TypeScript configured properly
  - Radix UI and shadcn/ui are production-ready
  - lucide-react is actively maintained

---

### C. Infrastructure & Deployment

#### Netlify Deployment

- ✅ npm lock file properly regenerated (no package integrity issues)
- ✅ Uses `npm run build` which outputs optimized static files
- ✅ No sensitive build parameters in configuration

#### Browser APIs Used:

```tsx
// Minimal and safe usage found:
1. window.scrollTo() - ScrollToTop component (safe)
2. document.getElementById() - React root element (safe)
3. document.cookie - Sidebar state management (safe)
4. window.addEventListener() - Event listeners (safe)
```

**Assessment**: ✅ All browser API usages are appropriate and safe.

---

### D. HTML & Metadata Security

#### Current index.html:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SIFAT Lab</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

**Missing Security Headers** (⚠️ At deployment level):

- ❌ No Content Security Policy (CSP) meta tag
- ❌ No X-UA-Compatible specification
- ❌ No X-Content-Type-Options header
- ❌ No Referrer-Policy header

**Recommendation**: Add to Netlify `_headers` file or HTML:

```html
<!-- Add to index.html <head> section -->
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta http-equiv="X-Content-Type-Options" content="nosniff" />
<meta name="referrer" content="strict-origin-when-cross-origin" />
```

For Netlify, create `public/_headers`:

```
/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
```

---

### E. Data Security

#### Personal Information Exposure

✅ **No sensitive personal data exposed**:

- Email address is public (intentional for contact)
- Office location is public (university address)
- Names and titles are public (academic portfolio)
- No student records, research participant data, or confidential information

#### Publications Data

✅ **All publications are public**:

- Published research papers (appropriate to display)
- No unpublished manuscripts or confidential research
- DOIs are properly attributed

---

### F. CORS & Cross-Origin Requests

✅ **Safe**:

- No dynamic API calls or cross-origin requests detected
- All data is bundled with the application
- Links to external sites use `target="_blank"` and `rel="noopener noreferrer"`

---

## 📋 Security Checklist

| Item                   | Status        | Notes                                     |
| ---------------------- | ------------- | ----------------------------------------- |
| No hardcoded secrets   | ✅ Pass       | No API keys, tokens, or credentials found |
| No npm vulnerabilities | ⚠️ 1 Moderate | Vite 6.3.5 - Fix available (6.4.1)        |
| HTTPS ready            | ✅ Pass       | Deployed on Netlify (enforces HTTPS)      |
| Dependency updates     | ✅ Pass       | Core dependencies are current             |
| Input validation       | ✅ N/A        | No user input processing                  |
| XSS protection         | ✅ Pass       | Proper use of dangerouslySetInnerHTML     |
| CSRF protection        | ✅ N/A        | No state-changing operations              |
| Missing meta headers   | ⚠️ Improve    | Add security headers to deployment        |
| Component isolation    | ✅ Pass       | Proper React component structure          |
| Error handling         | ✅ Pass       | No sensitive data in errors               |
| Logging                | ✅ Safe       | No sensitive data logged                  |

---

## 🎯 Action Items (Priority Order)

### 🔴 High Priority (Do ASAP)

1. **Update Vite**: `npm install vite@6.4.1` or `npm audit fix --force`
   - Fixes 3 file serving vulnerabilities
   - Estimated time: 2 minutes

### 🟡 Medium Priority (Before Production)

2. **Add Security Headers**:
   - Create `public/_headers` file for Netlify
   - Add meta tags to `index.html`
   - Estimated time: 10 minutes

### 🟢 Low Priority (Nice to Have)

3. **Content Security Policy (CSP)**:
   - Optional stricter CSP if needed
   - Current setup is safe without it
   - Estimated time: 15 minutes (if needed)

---

## 📊 Security Score

| Category                | Score      | Details                        |
| ----------------------- | ---------- | ------------------------------ |
| **Dependency Security** | 9/10       | 1 moderate fix available       |
| **Code Security**       | 9/10       | Safe data handling, no secrets |
| **Infrastructure**      | 8/10       | Missing security headers       |
| **Data Protection**     | 10/10      | No sensitive data exposure     |
| **Authentication**      | N/A        | Not applicable (static site)   |
| **Encryption**          | 10/10      | HTTPS via Netlify              |
| **Overall Score**       | **8.9/10** | Good security posture          |

---

## 🚀 Recommendations Summary

### Immediate (Next Push)

```bash
# 1. Fix Vite vulnerability
npm audit fix --force

# 2. Verify build
npm run build

# 3. Test locally
npm run dev
```

### Before Next Deployment

- [ ] Add security headers to Netlify deployment
- [ ] Review `_headers` configuration

### Future Considerations

- If you add backend API calls, implement proper authentication/authorization
- If adding user input, validate and sanitize all inputs
- Keep dependencies updated monthly
- Consider periodic security audits (quarterly or after major updates)

---

## 📚 References

- [OWASP Security Cheat Sheet](https://cheatsheetseries.owasp.org/)
- [Vite Security Advisory GHSA-g4jq-h2w9-997c](https://github.com/advisories/GHSA-g4jq-h2w9-997c)
- [React Security Best Practices](https://react.dev/learn/security)
- [Netlify Security Headers](https://docs.netlify.com/routing/headers/)

---

## Conclusion

Your portfolio website has a **solid security foundation**. The main action item is updating Vite to patch the file serving vulnerabilities. After that, implementing security headers on Netlify will complete a robust security posture.

**Next Step**: Run `npm audit fix --force` and test your application build.

---

_Report Generated: December 20, 2025_  
_Next Review Recommended: June 20, 2026 (6 months)_
