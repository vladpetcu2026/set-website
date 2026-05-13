/**
 * SET — copy RO.
 *
 * Reguli (din handoff/CLAUDE.md):
 *   - Fara diacritice.
 *   - Ton direct: "simplificare" nu "transformare digitala"; "aplicatii la comanda" nu "custom software solutions".
 *   - Vorbim cu universitati, institutii publice si companii.
 *   - Fara emoji. Simboluri ASCII OK: → ↳ · — ★
 */

export const ro = {
  meta: {
    title: 'SET — Sustainable EdTech Romania · Sisteme complicate, traduse in produse clare.',
    description:
      'Practica de simplificare si digitalizare pentru universitati, institutii publice si companii. Aplicatii la comanda, livrate incremental.',
  },

  nav: {
    services: 'Servicii',
    process: 'Cum lucram',
    cases: 'Cazuri',
    about: 'Despre',
    faq: 'Intrebari',
    contact: 'Contact',
    ctaButton: 'Scrie-ne',
  },

  hero: {
    eyebrow: 'Sustainable EdTech Romania',
    title: 'Sisteme complicate, traduse in produse digitale clare.',
    subtitle:
      'O practica de simplificare si digitalizare pentru universitati, institutii publice si companii.',
    ctaPrimary: 'Discuta cu noi',
    ctaSecondary: 'Vezi ce facem',
  },

  readyGo: {
    eyebrow: 'Cum se intampla',
    titlePrefix: 'De la intentie la utilizare:',
    phrase: {
      ready: 'Ready?',
      set: 'Set.',
      go: 'Go!',
    },
    phases: [
      {
        word: 'Ready?',
        who: 'Faza ta',
        body:
          'Stii ca un proces nu mai functioneaza, dar nu stii prin ce sa incepi. Recunosti nevoia de schimbare inainte sa cauti un furnizor.',
      },
      {
        word: 'Set.',
        who: 'Faza noastra',
        body:
          'Intervenim. Cartografiem, simplificam, digitalizam, predam. Tu validezi la fiecare pas — fara surprize la final.',
      },
      {
        word: 'Go!',
        who: 'Faza ta, din nou',
        body:
          'Echipa ta foloseste sistemul autonom. Documentat, predat, fara dependenta de noi. Tool-ul e al vostru, nu in cloudul nostru.',
      },
    ],
  },

  forWhom: {
    eyebrow: 'Pentru cine',
    title: 'Trei contexte. Acelasi tipar de simplificare.',
    items: [
      {
        tag: 'Universitati',
        body:
          'Decanate, departamente administrative, departamente IT, aliante academice. Stim cum se aproba bugete, cum lucreaza un Senat, cum se ruleaza un proiect european cu 10 parteneri.',
      },
      {
        tag: 'Institutii publice',
        body:
          'Primarii, ministere, agentii. Fluxuri administrative grele, achizitii prin SICAP, conformitate GDPR si Legea 190/2018.',
      },
      {
        tag: 'Companii',
        body:
          'Operatiuni interne, L&D, HR, achizitii cu procese repetitive. ERP-uri nepotrivite peste fluxul real.',
      },
    ],
  },

  services: {
    eyebrow: 'Servicii',
    title: 'Aplicatii la comanda, pe sapte categorii.',
    body:
      'Toate construite pe acelasi principiu: simplificarea operatiunii reale, nu adaugarea de feature-uri.',
    items: [
      'Fluxuri de aprobari interne',
      'Planificare & alocare resurse',
      'Rapoarte & tablouri de bord operationale',
      'Document management & arhiva digitala',
      'Portaluri & spatii de lucru interne',
      'Integrari cu sisteme existente',
      'Audit & reproiectare procese',
    ],
  },

  process: {
    eyebrow: 'Cum lucram',
    title: 'Descifrat. Simplificat. Digitalizat. Predat.',
    steps: [
      {
        num: '01 → cartografiem',
        title: 'Descifrat',
        body:
          'Interviuri cu operatorii reali. Harta fluxurilor existente. Identificarea zonelor de frictie.',
        accent: 'brand',
      },
      {
        num: '02 → reproiectam',
        title: 'Simplificat',
        body:
          'Eliminam pasi redundanti, refacem componentele cheie. Co-design cu cei care folosesc.',
        accent: 'primary',
      },
      {
        num: '03 → livram',
        title: 'Digitalizat',
        body:
          'Sprinturi scurte, demos saptamanale. Userii o folosesc din luna 2, nu din luna 12.',
        accent: 'danger',
      },
      {
        num: '04 → transferam',
        title: 'Predat',
        body:
          'Documentatie vie, training, proceduri de mentenanta. Nu raman in dependenta de noi.',
        accent: 'success',
      },
    ],
  },

  cases: {
    eyebrow: 'Cazuri',
    title: 'Trei sisteme livrate. Anonimizate.',
    body:
      'Detaliile clientilor sunt anonimizate. Referinte verbale disponibile la cerere directa, cu acord.',
    items: [
      {
        tag: 'Furnizor medicina muncii',
        title: 'Aplicatie multi-tenant pentru programari',
        body:
          'Arhitectura multi-tenant cu izolare stricta a datelor per angajator. Programari, notificari automate, rapoarte facturare lunara. Conformitate GDPR Art. 9 (date medicale).',
        kpis: [
          { label: 'Programari/zi', value: '34' },
          { label: 'Angajatori', value: '12' },
          { label: 'Conformitate', value: 'Art. 9' },
        ],
      },
      {
        tag: 'Companie B2B',
        title: 'CRM custom pentru flux vanzari-logistica',
        body:
          'Inlocuirea ERP-ului inadecvat. Generare automata PDF din 7 tipuri de oferta, multi-currency (LEI/EUR/USD), permisiuni granulare pe 5 departamente.',
        kpis: [
          { label: 'Utilizatori activi', value: '37' },
          { label: 'Tipuri oferta', value: '7' },
          { label: 'Valute', value: '3' },
        ],
      },
      {
        tag: 'Organizatie publica',
        title: 'Monitorizare automata oportunitati finantare',
        body:
          'Scraping zilnic din surse oficiale (TED, SICAP, MIPE). Filtrare dupa criterii, alerte configurabile pentru sesiuni urgente.',
        kpis: [
          { label: 'Surse', value: '3+' },
          { label: 'Scanare', value: 'zilnica' },
          { label: 'Alerte', value: 'configurabile' },
        ],
      },
    ],
  },

  positioning: {
    eyebrow: 'Cu ce ne diferentiem',
    title: 'Spunem nu, ca sa putem spune da bine.',
    no: {
      tag: 'nu facem',
      items: [
        '↳ produse SaaS de raft',
        '↳ proiecte „big bang" la 18 luni',
        '↳ scope creep deghizat in „mai e nevoie de"',
        '↳ docs care nimeni nu le citeste',
        '↳ slide-uri pline cu jargon',
      ],
    },
    yes: {
      tag: 'facem',
      items: [
        '↳ aplicatii custom, pe operatiunea ta',
        '↳ livrari incrementale, demo saptamanal',
        '↳ scope clar, deviatii negociate',
        '↳ docs minim, dar vii si folosite',
        '↳ vorbe directe cu cei care decid',
      ],
    },
  },

  about: {
    eyebrow: 'Despre',
    title: 'Vlad Petcu',
    role: 'fondator · arhitect solutii',
    bio: 'Fondator Sustainable EdTech Romania. 10+ ani in transformare digitala in invatamantul superior si sectorul public.',
    positionsTitle: 'Pozitii relevante',
    positions: [
      'Co-Chair, Digitalization & IT Subgroup pentru European University Alliances — rol policy maker pentru 650+ universitati din 36 tari, investitii europene de peste 1 mld. EUR.',
      'Coordonator Virtual Campus, Alianta UNITA (10 universitati membre, 7 tari, ~250.000 studenti).',
      'Director General Administrativ Adjunct, Universitatea de Vest din Timisoara (8 ani) — portofoliu operational peste 50 mil. EUR.',
      'Board Member: EUNIS (European University Information Systems), EduXS (European Digital Education Hub).',
    ],
    workTitle: 'Cum lucrez azi',
    work:
      'La intersectia decizie–executie. Construiesc cu echipe mici si oversight personal, sprijinit de o retea de experti recunoscuti pentru situatii specializate. Calitatea livrabilelor este sub controlul meu direct.',
    educationTitle: 'Educatie · certificari',
    education: [
      'Doctorat Management, UVT',
      'Executive Leadership, HUMANE (Spania)',
      'Dublu Master, UVT & Bologna',
      'PMP',
    ],
    linkedinUrl: 'https://www.linkedin.com/in/vladpetcu/',
    linkedinLabel: 'LinkedIn personal',
  },

  faq: {
    eyebrow: 'Intrebari frecvente',
    title: 'Ce raspundem cel mai des.',
    items: [
      {
        q: 'Lucrati doar cu institutii mari?',
        a: 'Nu. Lucram cu entitati ce pornesc de la firme mici pana la Aliante Universitare Europene.',
      },
      {
        q: 'Cat dureaza un proiect tipic?',
        a: '3–6 luni pana la productie. Prima livrare functionala in 4–8 saptamani.',
      },
      {
        q: 'Cum gestionati datele sensibile?',
        a:
          'Deployment on-premise cand contextul cere (sanatate, date personale extinse). GDPR + Legea 190/2018 by design.',
      },
      {
        q: 'Lucrati si in regim de achizitie publica?',
        a:
          'Da. Experienta directa cu autoritati de management (POCIDIF, PNRR, Erasmus+) si cu SICAP.',
      },
      {
        q: 'Care e bugetul minim?',
        a:
          'Discutam dupa o sesiune de audit. Refuzam proiecte sub un prag minim care ar compromite calitatea.',
      },
      {
        q: 'Ce se intampla daca echipa noastra vrea sa preia produsul?',
        a:
          'E parte din proces. Pas 4: predat — documentatie vie, training, mentenanta clara. Nu cream dependenta.',
      },
    ],
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Sa vorbim despre sistemul tau.',
    body:
      'Trimite un email scurt cu contextul (organizatie, ce vrei sa simplifici, deadline aproximativ). Raspundem in maxim 2 zile lucratoare.',
    emailLabel: 'Email',
    email: 'contact@sustainabletech.ro',
    phoneLabel: 'Telefon',
    phone: '0755 240 202',
    phoneHref: 'tel:+40755240202',
    ctaButton: 'Scrie-ne',
    ctaSubject: 'Discutie SET',
    ctaBody:
      'Buna ziua, va contactez din partea [organizatie] referitor la [scurta descriere]. Disponibil pentru discutie in saptamana ...',
    responseNote: 'Raspundem in maxim 2 zile lucratoare.',
  },

  footer: {
    legalShort:
      'SUSTAINABLE EDTECH ROMANIA S.R.L. · CUI: RO41226189 · J2019002422354 · contact@sustainabletech.ro',
    rights: 'Toate drepturile rezervate.',
    links: {
      terms: 'Termeni si conditii',
      privacy: 'Politica de confidentialitate',
      cookies: 'Politica cookies',
    },
  },

  // Switcher
  langSwitcher: {
    current: 'RO',
    other: 'EN',
    otherHref: '/en/',
  },
};

export type Messages = typeof ro;
