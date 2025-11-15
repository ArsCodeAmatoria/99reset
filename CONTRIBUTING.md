# Contributing to The 99% Reset

Thank you for your interest in contributing to the movement! This project welcomes code contributions, design improvements, content updates, and bug reports.

## Ways to Contribute

### 1. Take Action (Non-Code)
The most important contributions are **offline**:
- **Move your money** to a credit union
- **Organize your workplace** into a union
- **Start or join a co-op** or Community Land Trust
- **Launch a chapter** in your city

### 2. Code Contributions
We welcome:
- Bug fixes
- Performance improvements
- Accessibility enhancements
- New features (discuss first in an issue)
- Documentation improvements
- Test coverage

### 3. Design & Content
- UI/UX improvements
- Illustrations and graphics
- Toolkit content (MDX)
- Translations (FR, ES, etc.)

## Getting Started

### Prerequisites
- Node.js 18+
- Git
- PostgreSQL (local or hosted)
- Code editor (VS Code recommended)

### Local Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/your-username/99reset.git
   cd 99reset
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your database URL
   ```

4. **Initialize Database**
   ```bash
   npm run db:push
   ```

5. **Start Dev Server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000)

## Development Workflow

### Branch Naming
- `feature/your-feature-name`
- `fix/bug-description`
- `docs/what-you-updated`

### Making Changes

1. **Create Branch**
   ```bash
   git checkout -b feature/your-feature
   ```

2. **Make Changes**
   - Write clean, readable code
   - Follow existing patterns
   - Add comments for complex logic

3. **Test Locally**
   ```bash
   npm run build
   npm run lint
   ```

4. **Commit**
   ```bash
   git add .
   git commit -m "feat: add your feature"
   ```

   Commit message format:
   - `feat:` new feature
   - `fix:` bug fix
   - `docs:` documentation
   - `style:` formatting, no code change
   - `refactor:` code restructure
   - `test:` adding tests
   - `chore:` maintenance

5. **Push and PR**
   ```bash
   git push origin feature/your-feature
   ```
   Open a Pull Request on GitHub

## Code Standards

### TypeScript
- **Strict mode** enabled
- No `any` types (use proper types or `unknown`)
- Export types from components
- Use Zod for validation

### React/Next.js
- Use **Server Components** by default
- Client components: add `"use client"` directive
- Prefer **Server Actions** over API routes
- Use semantic HTML

### Styling
- Use **Tailwind classes**
- Follow design tokens in `tailwind.config.ts`
- Use utility classes from `styles/theme.css`
- Mobile-first responsive design

### Accessibility
- **WCAG AA** minimum
- Keyboard navigation support
- Focus states visible
- ARIA labels where needed
- Semantic HTML tags

### File Structure
```
/app/(site)/         # Pages in site layout
/components/         # Reusable components
/lib/                # Utilities and helpers
/content/            # MDX content
/styles/             # Global styles
/prisma/             # Database schema
```

## Testing

Currently no automated tests (PRs welcome!), but manually test:

1. **Forms**
   - Submit all forms on `/join`
   - Verify database entries
   - Check email delivery

2. **Navigation**
   - Test all links
   - Mobile menu
   - Keyboard navigation

3. **Accessibility**
   - Run Lighthouse
   - Test with screen reader
   - Check color contrast

4. **Build**
   ```bash
   npm run build
   ```
   Must succeed with zero errors

## Pull Request Process

1. **Describe Changes**
   - What does this PR do?
   - Why is it needed?
   - How to test?

2. **Screenshots**
   - For UI changes, add before/after screenshots

3. **Checklist**
   - [ ] Code builds without errors
   - [ ] Follows code standards
   - [ ] Accessible (keyboard + screen reader)
   - [ ] Mobile responsive
   - [ ] No console errors
   - [ ] TypeScript strict mode passes

4. **Review**
   - Address reviewer feedback
   - Update branch if main changes
   - Squash commits before merge

## Content Guidelines

### Tone
- **Direct, institutional, credible**
- No platitudes or vague promises
- Data-driven, specific metrics
- Non-partisan but radical

### Copy
- Short sentences
- Active voice
- No jargon (or explain it)
- Respect reader intelligence

### MDX Content
- Place in `/content/`
- Use semantic headings (h2, h3)
- Include metadata (title, description)
- Link to other resources

## Design System

### Colors
- **Background:** `#0A0A0A` (black)
- **Accent:** `#E11D48` (red)
- **Text:** `#F8FAFC` (white)
- **Borders:** `#27272A` (gray)

### Typography
- **Display (headings):** Newsreader
- **UI (body):** Inter
- **Hierarchy:** Clear, serif for impact

### Components
- **Cards:** Rounded, subtle shadow, thin border
- **Buttons:** Accent red primary, outlined secondary
- **Inputs:** Dark with focus rings

## Community Guidelines

- **Respectful:** Disagree without hostility
- **Constructive:** Offer solutions, not just criticism
- **Inclusive:** Welcome all skill levels
- **Focused:** Stay on topic, avoid tangents
- **Non-violent:** Institutional change, not rhetoric

## Questions?

- **Code:** Open an issue
- **Movement:** contact@99reset.org
- **Press:** press@99reset.org

## License

By contributing, you agree your contributions will be licensed under the project license.

---

**Not welfare. Ownership.**

Thank you for helping build the infrastructure for institutional change.

