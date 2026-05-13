/**
 * SET — copy EN (mirror of ro.ts).
 *
 * Style notes:
 *   - Direct, plain English. Avoid corporate jargon ("digital transformation" -> "simplification").
 *   - No emoji. ASCII symbols OK.
 *   - Same brand voice as RO.
 */

import type { Messages } from './ro';

export const en: Messages = {
  meta: {
    title: 'SET — Sustainable EdTech Romania · Complicated systems, translated into clear products.',
    description:
      'A simplification and digitization practice for universities, public institutions, and companies. Custom-built applications, delivered incrementally.',
  },

  nav: {
    services: 'Services',
    process: 'How we work',
    cases: 'Cases',
    about: 'About',
    faq: 'FAQ',
    contact: 'Contact',
    ctaButton: 'Get in touch',
  },

  hero: {
    eyebrow: 'Sustainable EdTech Romania',
    title: 'Complicated systems, translated into clear digital products.',
    subtitle:
      'A simplification and digitization practice for universities, public institutions, and companies.',
    ctaPrimary: 'Talk to us',
    ctaSecondary: 'See what we do',
  },

  readyGo: {
    eyebrow: 'How it unfolds',
    titlePrefix: 'From intent to use:',
    phrase: {
      ready: 'Ready?',
      set: 'Set.',
      go: 'Go!',
    },
    phases: [
      {
        word: 'Ready?',
        who: 'Your phase',
        body:
          'You know a process is not working anymore, but not where to start. You acknowledge the need for change before looking for a vendor.',
      },
      {
        word: 'Set.',
        who: 'Our phase',
        body:
          'We step in. Map, simplify, digitize, hand over. You validate at every step — no surprises at the end.',
      },
      {
        word: 'Go!',
        who: 'Your phase again',
        body:
          'Your team uses the system autonomously. Documented, handed over, no dependency on us. The tool is yours, not in our cloud.',
      },
    ],
  },

  forWhom: {
    eyebrow: 'Who we serve',
    title: 'Three contexts. The same simplification pattern.',
    items: [
      {
        tag: 'Universities',
        body:
          'Deans offices, administrative departments, IT departments, academic alliances. We know how budgets get approved, how a Senate works, how to run a European project with 10 partners.',
      },
      {
        tag: 'Public institutions',
        body:
          'Municipalities, ministries, agencies. Heavy administrative flows, SICAP procurement, GDPR and Law 190/2018 compliance.',
      },
      {
        tag: 'Companies',
        body:
          'Internal operations, L&D, HR, procurement with repetitive processes. ERPs that do not fit the actual workflow.',
      },
    ],
  },

  services: {
    eyebrow: 'Services',
    title: 'Custom-built applications, across seven categories.',
    body:
      'All built on the same principle: simplifying the actual operation, not adding more features.',
    items: [
      'Internal approval workflows',
      'Resource scheduling & allocation',
      'Operational reports & dashboards',
      'Document management & digital archive',
      'Internal portals & team workspaces',
      'Integrations with existing systems',
      'Process audit & redesign',
    ],
  },

  process: {
    eyebrow: 'How we work',
    title: 'Mapped. Simplified. Digitized. Handed over.',
    steps: [
      {
        num: '01 → we map',
        title: 'Mapped',
        body:
          'Interviews with real operators. Diagram of existing flows. Identifying friction points.',
        accent: 'brand',
      },
      {
        num: '02 → we redesign',
        title: 'Simplified',
        body:
          'We remove redundant steps, rebuild key components. Co-design with the people who use it.',
        accent: 'primary',
      },
      {
        num: '03 → we ship',
        title: 'Digitized',
        body:
          'Short sprints, weekly demos. Users use it from month 2, not month 12.',
        accent: 'danger',
      },
      {
        num: '04 → we hand over',
        title: 'Handed over',
        body:
          'Living documentation, training, maintenance procedures. They do not stay dependent on us.',
        accent: 'success',
      },
    ],
  },

  cases: {
    eyebrow: 'Cases',
    title: 'Three systems shipped. Anonymized.',
    body:
      'Client details are anonymized. Verbal references available on direct request, with consent.',
    items: [
      {
        tag: 'Occupational health provider',
        title: 'Multi-tenant appointment scheduling app',
        body:
          'Multi-tenant architecture with strict per-employer data isolation. Scheduling, automated reminders, monthly invoicing reports. GDPR Art. 9 compliance (medical data).',
        kpis: [
          { label: 'Appointments/day', value: '34' },
          { label: 'Employers', value: '12' },
          { label: 'Compliance', value: 'Art. 9' },
        ],
      },
      {
        tag: 'B2B company',
        title: 'Custom CRM for sales-logistics flow',
        body:
          'Replaced an unfit ERP. Automated PDF generation from 7 offer templates, multi-currency (RON/EUR/USD), granular permissions across 5 departments.',
        kpis: [
          { label: 'Active users', value: '37' },
          { label: 'Offer types', value: '7' },
          { label: 'Currencies', value: '3' },
        ],
      },
      {
        tag: 'Public organization',
        title: 'Automated monitoring of funding opportunities',
        body:
          'Daily scraping from official sources (TED, SICAP, MIPE). Filtering by criteria, configurable alerts for urgent calls.',
        kpis: [
          { label: 'Sources', value: '3+' },
          { label: 'Scan', value: 'daily' },
          { label: 'Alerts', value: 'configurable' },
        ],
      },
    ],
  },

  positioning: {
    eyebrow: 'How we differentiate',
    title: 'We say no, so we can say yes well.',
    no: {
      tag: 'we do not',
      items: [
        '↳ off-the-shelf SaaS products',
        '↳ 18-month „big bang" projects',
        '↳ scope creep disguised as „we also need"',
        '↳ docs nobody reads',
        '↳ jargon-filled slides',
      ],
    },
    yes: {
      tag: 'we do',
      items: [
        '↳ custom apps, on your real operation',
        '↳ incremental delivery, weekly demos',
        '↳ clear scope, deviations negotiated',
        '↳ minimal docs, but live and used',
        '↳ direct conversations with decision makers',
      ],
    },
  },

  about: {
    eyebrow: 'About',
    title: 'Vlad Petcu',
    role: 'founder · solutions architect',
    bio: 'Founder of Sustainable EdTech Romania. 10+ years in digital transformation across higher education and the public sector.',
    positionsTitle: 'Relevant positions',
    positions: [
      'Co-Chair, Digitalization & IT Subgroup for European University Alliances — policy maker representing 650+ universities from 36 countries, influencing European investments of over EUR 1bn.',
      'Coordinator, Virtual Campus, UNITA Alliance (10 member universities, 7 countries, ~250,000 students).',
      'Deputy General Administrative Director, West University of Timisoara (8 years) — operational portfolio of over EUR 50m.',
      'Board Member: EUNIS (European University Information Systems), EduXS (European Digital Education Hub).',
    ],
    workTitle: 'How I work today',
    work:
      'At the decision–execution intersection. I build with small teams under personal oversight, supported by a network of recognized experts for specialized situations. Deliverable quality stays under my direct control.',
    educationTitle: 'Education · certifications',
    education: [
      'PhD Management, UVT',
      'Executive Leadership, HUMANE (Spain)',
      'Dual Master, UVT & Bologna',
      'PMP',
    ],
    linkedinUrl: 'https://www.linkedin.com/in/vladpetcu/',
    linkedinLabel: 'Personal LinkedIn',
  },

  faq: {
    eyebrow: 'Frequently asked',
    title: 'What we answer most often.',
    items: [
      {
        q: 'Do you work only with large institutions?',
        a: 'No. We work with entities ranging from small companies to European University Alliances.',
      },
      {
        q: 'How long does a typical project take?',
        a: '3–6 months to production. First functional release in 4–8 weeks.',
      },
      {
        q: 'How do you handle sensitive data?',
        a:
          'On-premise deployment when the context requires it (healthcare, extensive personal data). GDPR + Romanian Law 190/2018 by design.',
      },
      {
        q: 'Do you work under public procurement rules?',
        a:
          'Yes. Direct experience with managing authorities (POCIDIF, PNRR, Erasmus+) and with SICAP.',
      },
      {
        q: 'What is the minimum budget?',
        a:
          'We discuss after an initial audit. We turn down projects below a minimum threshold that would compromise quality.',
      },
      {
        q: 'What if our team wants to take over the product?',
        a:
          'It is part of the process. Step 4: handed over — living documentation, training, clear maintenance. We do not create dependency.',
      },
    ],
  },

  contact: {
    eyebrow: 'Contact',
    title: "Let's talk about your system.",
    body:
      'Send a short email with the context (organization, what you want to simplify, approximate deadline). We respond within 2 business days.',
    emailLabel: 'Email',
    email: 'contact@sustainabletech.ro',
    phoneLabel: 'Phone',
    phone: '+40 755 240 202',
    phoneHref: 'tel:+40755240202',
    ctaButton: 'Get in touch',
    ctaSubject: 'SET conversation',
    ctaBody:
      'Hello, I am contacting you from [organization] regarding [short description]. Available for a conversation in the week of ...',
    responseNote: 'We respond within 2 business days.',
  },

  footer: {
    legalShort:
      'SUSTAINABLE EDTECH ROMANIA S.R.L. · VAT: RO41226189 · Reg. no. J2019002422354 · contact@sustainabletech.ro',
    rights: 'All rights reserved.',
    links: {
      terms: 'Terms & conditions',
      privacy: 'Privacy policy',
      cookies: 'Cookie policy',
    },
  },

  langSwitcher: {
    current: 'EN',
    other: 'RO',
    otherHref: '/',
  },
};
