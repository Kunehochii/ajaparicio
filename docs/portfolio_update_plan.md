# Portfolio April 2026 Update — Implementation Plan

> Handoff plan for implementation. Source of content: `docs/updated_portfolio_april_2026.md`.

## Context

The portfolio at `ajaparicio.com` is running data that is a few months stale. The new source of truth is `docs/updated_portfolio_april_2026.md` (resume-style content current as of April 2026). Goals:

1. **Content refresh** — sync `lib/data.ts` with the latest experience (MySchoolSuite added, dates updated), broaden the skills taxonomy, and polish every blurb into a formal, "English-professor" register.
2. **Hero rewrite** — replace the awkward "Hi, I'm AJ / Backend Engineer" stack with a full sentence: *"I specialize in Backend Engineering."*
3. **About cards** — make the 6 skill cards uniformly sized (no `col-span-2` special case) and rename "Frontend Mobile" → "Frontend/Mobile".
4. **Privacy** — remove the phone number everywhere it is rendered.
5. **New section** — add a Certifications & Awards section (TOPCIT L3, L'Oréal Brandstorm National Champion 2025, etc.).
6. **Experience timeline** — surface role dates inline.

### Decisions captured from the user

- **Hero second line:** "I specialize in Backend Engineering" (gradient accent on "Backend Engineering").
- **Projects:** keep the existing list unchanged (no additions, removals, or reordering — light copy polish only).
- **Experience dates:** render inline on the timeline.
- **New sections:** add Certifications & Awards; skip Education.

---

## Files to Modify

| # | File | Change |
|---|------|--------|
| 1 | `lib/data.ts` | Drop `phone`. Rewrite `about` (professorial tone). Expand `skills` to 6 keys (add `apis`). Replace `experience` with the April 2026 four-entry list including a `period` field. Lightly polish each existing project description. Add a new `certifications` array. |
| 2 | `components/Hero.tsx` | Restructure headline lines 49–60 so the role reads as a sentence with a gradient accent. |
| 3 | `components/About.tsx` | Remove `lg:col-span-2` on the first card (line 58). Replace the auto-derived category label with an explicit `skillLabels` map. Add icon + color entries for the new `apis` key. |
| 4 | `components/Experience.tsx` | Render `exp.period` next to the company name. |
| 5 | `components/Footer.tsx` | Delete the Phone contact card (lines 59–75). Change contact grid from `md:grid-cols-3` to `md:grid-cols-2 max-w-2xl mx-auto`. Remove the `Phone` import on line 6. |
| 6 | **NEW** `components/Certifications.tsx` | New section component rendering the `certifications` array. |
| 7 | `app/page.tsx` | Mount `<Certifications />` between `<Projects />` and `<Footer />`. |
| 8 | `components/Navbar.tsx` | Add `{ name: "Awards", href: "#awards" }` to `navLinks` (lines 9–15). |

No changes needed in `components/Projects.tsx` — it picks up the polished descriptions automatically.

---

## Detailed Changes

### 1. `lib/data.ts`

**1a. `profile`** — delete the `phone` key entirely (not blanked, deleted):

```ts
profile: {
  name: "AJ Aparicio",
  role: "Backend Engineer",
  location: "Iloilo City, Philippines",
  email: "aparicio.anthonyjohn@gmail.com",
  image: "/aj_formal.png",
  socials: { linkedin: "...", github: "..." },
},
```

**1b. `about`** — two-paragraph rewrite in a measured, formal register (current renderer splits on `\n\n`):

> I am a software engineer whose practice is anchored in backend architecture and full-stack delivery. My work centers on translating ambiguous business requirements into systems that are correct, maintainable, and built to scale — from gRPC-based microservices to AI-assisted mobile applications.
>
> Across engagements with more than fifteen clients, I have led development cycles end-to-end: designing services, shepherding production deployments, and integrating emerging technologies such as computer vision and IoT into workflows that measurably reduce operational cost.

**1c. `skills`** — expand to **6 categories** to form a clean 3×2 grid and match the doc's taxonomy. *Integrations* folds into *APIs & Services*; *Languages* is dropped (belongs on a résumé, not the site):

```ts
skills: {
  backend: ["NestJS", "Node.js", "Express.js", "Python", "PHP/Laravel", "Golang/Gin", "Rust/Axum"],
  frontendMobile: ["Flutter (Dart)", "Next.js", "React", "Tailwind CSS"],
  database: ["PostgreSQL", "Prisma ORM", "TypeORM", "Query Optimization"],
  apis: ["REST", "GraphQL", "gRPC", "Microservices"],
  devOps: ["Docker", "CI/CD", "Linux", "AWS", "Azure", "Vercel", "Railway"],
  aiIot: ["OpenAI API", "Computer Vision (YOLO)", "Raspberry Pi", "Arduino", "Sensors"],
},
```

**1d. `experience`** — replace outright with the April 2026 four-entry list; add a `period` field:

```ts
experience: [
  {
    role: "Backend Engineer II",
    company: "MySchoolSuite",
    period: "January 2026 – Present",
    description: "Refactored a NestJS monolith into gRPC-based microservices, reducing inter-service latency from 30 ms over HTTP to 2 ms. Led the design of a unified authentication service that now serves more than eighteen internal applications.",
  },
  {
    role: "Full-Stack Engineer",
    company: "Allutional",
    period: "October 2025 – April 2026",
    description: "Engineered low-latency Express.js and Node.js services paired with responsive Next.js interfaces, bridging backend systems to polished client experiences for a telehealth platform serving more than one hundred clients.",
  },
  {
    role: "Junior Software Developer",
    company: "Inertia Ltd.",
    period: "June 2025 – October 2025",
    description: "Owned full-stack feature delivery and contributed to product planning, aligning engineering effort with client goals. Executed rigorous QA protocols to surface edge cases prior to release for a userbase exceeding two hundred.",
  },
  {
    role: "Software Developer",
    company: "Freelance",
    period: "2021 – Present",
    description: "Delivered more than fifteen bespoke engagements across industries, owning each project from discovery through deployment. Consistently prioritized operational efficiency and measurable performance outcomes.",
  },
],
```

**1e. `projects`** — *list unchanged*. Lightly polish the prose in each `description` for tone consistency (e.g., "I architected the full-stack" → "Architected the full-stack", trim first-person tics, tighten sentences). All `title`, `role`, `stack`, `image`, `github`, and `url` values stay as they are today. Order preserved.

**1f. New `certifications` array** — appended to the `portfolioData` object:

```ts
certifications: [
  {
    title: "L'Oréal Brandstorm Nationals 2025",
    issuer: "L'Oréal",
    year: "2025",
    detail: "Team Software Developer — National Champion",
  },
  {
    title: "L'Oréal Brandstorm Nationals 2026",
    issuer: "L'Oréal",
    year: "2026",
    detail: "Team Software Developer — 1st Runner-Up",
  },
  {
    title: "Iloilo Province Hackathon 2025",
    issuer: "Province of Iloilo",
    year: "2025",
    detail: "3rd Place Winner",
  },
  {
    title: "TOPCIT Korea Certification",
    issuer: "Korean Ministry of Science and ICT",
    year: "2025",
    detail: "Level 3",
  },
  {
    title: "CPUGAD Startup Incubatee",
    issuer: "Central Philippine University",
    year: "2025",
    detail: "BayloCentral and NexLock — Accepted into the startup incubation program",
  },
  {
    title: "GameON! Game Development Hackathon",
    issuer: "GameON!",
    year: "2024",
    detail: "Participant",
  },
],
```

---

### 2. `components/Hero.tsx` (lines 49–60)

Restructure the `<h1>` so the second line reads as a complete sentence. Final markup:

```tsx
<h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-6 text-center">
  <span className="text-white">Hi, I'm </span>
  <span className="text-gradient">
    {portfolioData.profile.name.split(" ")[0]}
  </span>
  <br />
  <span className="block text-3xl md:text-5xl lg:text-6xl text-white/90 mt-4">
    I specialize in{" "}
    <span className="text-gradient">Backend Engineering</span>
  </span>
</h1>
```

Rationale for the smaller scale on line 2: "I specialize in Backend Engineering" is ~33 chars vs "Backend Engineer" at 16. At `text-8xl` it would wrap awkwardly on mid-size screens. Dropping one scale tier preserves hierarchy (name still dominates) while fitting cleanly across breakpoints.

---

### 3. `components/About.tsx`

**3a. Remove the uneven-size special case** (lines 55–59):

```tsx
// before
className={`bento-item gradient-border p-6 h-full ${
  index === 0 ? "lg:col-span-2" : ""
}`}

// after
className="bento-item gradient-border p-6 h-full"
```

With 6 categories the grid `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` fills as a clean 3×2 on desktop, 2×3 on tablet, 1×6 on mobile. `h-full` already equalizes heights per row.

**3b. Explicit display names** — replace the fragile regex on line 69 with a mapping:

```tsx
const skillLabels: Record<string, string> = {
  backend: "Backend",
  frontendMobile: "Frontend/Mobile",
  database: "Databases",
  apis: "APIs & Services",
  devOps: "DevOps & Cloud",
  aiIot: "AI & IoT",
};
```

Drop the `capitalize` class on the `<h3>` (labels already have correct casing) and change the body to `{skillLabels[category]}`.

**3c. Extend `skillIcons` and `skillColors`** to cover the new `apis` key. Import `Network` (or `Share2`) from `lucide-react`:

```tsx
const skillIcons = {
  backend: <Code2 className="w-5 h-5" />,
  frontendMobile: <Layers className="w-5 h-5" />,
  database: <Database className="w-5 h-5" />,
  apis: <Network className="w-5 h-5" />,
  devOps: <Cloud className="w-5 h-5" />,
  aiIot: <Cpu className="w-5 h-5" />,
};

const skillColors = {
  backend: "from-violet-500 to-purple-600",
  frontendMobile: "from-cyan-500 to-blue-600",
  database: "from-emerald-500 to-teal-600",
  apis: "from-amber-500 to-orange-600",
  devOps: "from-orange-500 to-red-600",
  aiIot: "from-pink-500 to-rose-600",
};
```

---

### 4. `components/Experience.tsx` (around lines 48–55)

Insert a period label next to the company name. Replace the company row:

```tsx
// before
<div className="flex items-center gap-2 mb-2">
  <Briefcase className="w-4 h-4 text-violet-400" />
  <span className="text-sm font-medium text-violet-400">
    {exp.company}
  </span>
</div>

// after
<div className="flex items-center flex-wrap gap-x-3 gap-y-1 mb-2">
  <div className="flex items-center gap-2">
    <Briefcase className="w-4 h-4 text-violet-400" />
    <span className="text-sm font-medium text-violet-400">
      {exp.company}
    </span>
  </div>
  {exp.period && (
    <span className="text-xs text-white/40 font-medium">
      {exp.period}
    </span>
  )}
</div>
```

Type `period` as optional so older partial data wouldn't break rendering.

---

### 5. `components/Footer.tsx`

Remove the Phone card (lines 59–75). Update the grid on line 40 to hold two centered cards:

```tsx
// before
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

// after
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
```

Remove `Phone` from the lucide-react import on line 6.

---

### 6. NEW `components/Certifications.tsx`

New section mirroring the visual language of About/Experience. Responsive card grid (`md:grid-cols-2 lg:grid-cols-3`) using `gradient-border` + `Reveal`. Uses `Award` icon per card. Section id `awards` to match the nav link.

Skeleton:

```tsx
"use client";
import { portfolioData } from "@/lib/data";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

export const Certifications = () => (
  <section id="awards" className="py-24 relative">
    <div className="container mx-auto px-6">
      {/* Header block — mirror the eyebrow + title pattern used in Experience.tsx */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <Reveal>
          <span className="text-sm font-medium text-gradient tracking-wider uppercase">
            Recognition
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">
            Certifications &amp;
            <span className="text-gradient"> Awards</span>
          </h2>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {portfolioData.certifications.map((c, i) => (
          <Reveal key={c.title} delay={0.1 * i}>
            <motion.div whileHover={{ y: -4 }} className="gradient-border p-6 h-full">
              <Award className="w-5 h-5 text-amber-400 mb-4" />
              <h3 className="text-lg font-semibold text-white">{c.title}</h3>
              <p className="text-sm text-violet-400 mt-1">{c.issuer} · {c.year}</p>
              <p className="text-sm text-white/60 mt-3 leading-relaxed">{c.detail}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
```

---

### 7. `app/page.tsx`

Mount the new section between Projects and Footer:

```tsx
<Projects />
<Certifications />
<Footer />
```

Remember to import `Certifications` at the top of the file.

---

### 8. `components/Navbar.tsx` (lines 9–15)

Insert `{ name: "Awards", href: "#awards" }` after Projects so the new section is discoverable from the nav.

---

## Critical Files Quick-Reference

- `lib/data.ts` — primary content source
- `components/Hero.tsx:49-60` — headline markup
- `components/About.tsx:8-91` — skill cards
- `components/Experience.tsx:48-62` — company/role row
- `components/Footer.tsx:6,40,59-75` — Phone removal
- `app/page.tsx:5-18` — section composition
- `components/Navbar.tsx:9-15` — nav links
- `docs/updated_portfolio_april_2026.md` — source of truth

## Existing Utilities to Reuse

- `Reveal` from `./Reveal` (scroll-in animation) — used in every section; reuse in `Certifications.tsx`.
- `gradient-border`, `bento-item`, `glass`, `text-gradient` classes from `app/globals.css` — already carry the site's visual identity.
- `framer-motion` `motion` + `whileHover={{ y: -4 }}` pattern used across About/Footer/Experience — mirror it in the new section.

---

## Verification

1. **Typecheck:** `npx tsc --noEmit` — confirms the removed `phone` field and new `apis` / `certifications` keys don't leave dangling references.
2. **Dev server:** `npm run dev`, open `http://localhost:3000`.
3. **Visual checks at ~1280 px, ~768 px, and ~375 px widths:**
   - Hero headline reads "Hi, I'm AJ" / "I specialize in Backend Engineering" — two lines at all breakpoints, no awkward wrapping, "Backend Engineering" gets gradient accent.
   - About grid renders 6 cards; desktop shows clean 3×2 with every card the same size (no wider "Backend" tile); tablet 2×3; mobile 1×6.
   - Second card label reads exactly **"Frontend/Mobile"** (with slash, proper casing).
   - Experience timeline shows four roles in order — MySchoolSuite, Allutional, Inertia, Freelance — each with its period date (e.g., "January 2026 – Present") beside the company.
   - Projects section unchanged in layout and list.
   - New **Awards** section renders between Projects and Footer with six cards.
   - Footer contact area shows Email + Location only, in a centered 2-column grid; no Phone card, no empty column.
   - Navbar includes an "Awards" link that scrolls to the new section.
4. **Privacy sweep:** `rg "969 100 0317|portfolioData\.profile\.phone" -n` — expect **zero matches** after the edit.
5. **Lint:** `npm run lint` — confirms no unused imports (e.g., the removed `Phone` from Footer).
