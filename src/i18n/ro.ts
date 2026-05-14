/**
 * SET — copy RO.
 *
 * Reguli (actualizate 14.05.2026):
 *   - Diacritice ACTIVATE (decizie client: site institutional, audiență universități / sector public).
 *   - Ton direct: "simplificare" nu "transformare digitală"; "aplicații la comandă" nu "custom software solutions".
 *   - Vorbim cu universități, instituții publice și companii.
 *   - Fără emoji. Simboluri ASCII OK: → ↳ · — ★
 *
 * Notă: regula veche din handoff/CLAUDE.md spunea "fără diacritice".
 * Decizia clientului de a folosi diacritice pe site reverseaza acea regulă
 * pentru acest produs. Brand handoff-ul rămâne neschimbat ca referință.
 */

export const ro = {
  meta: {
    title: 'SET — Sustainable EdTech Romania · Sisteme complicate, traduse în produse clare.',
    description:
      'Practică de simplificare și digitalizare pentru universități, instituții publice și companii. Aplicații la comandă, livrate incremental.',
  },

  nav: {
    services: 'Servicii',
    process: 'Cum lucrăm',
    cases: 'Cazuri',
    about: 'Despre',
    faq: 'Întrebări',
    contact: 'Contact',
    ctaButton: 'Scrie-ne',
  },

  hero: {
    eyebrow: 'Sustainable EdTech Romania',
    title: 'Sisteme complicate, traduse în produse digitale clare.',
    subtitle:
      'O practică de simplificare și digitalizare pentru universități, instituții publice și companii.',
    ctaPrimary: 'Discută cu noi',
    ctaSecondary: 'Vezi ce facem',
  },

  readyGo: {
    eyebrow: 'Cum se întâmplă',
    titlePrefix: 'De la intenție la utilizare:',
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
          'Știi că un proces nu mai funcționează, dar nu știi prin ce să începi. Recunoști nevoia de schimbare înainte să cauți un furnizor.',
      },
      {
        word: 'Set.',
        who: 'Faza noastră',
        body:
          'Intervenim. Cartografiem, simplificăm, digitalizăm, predăm. Tu validezi la fiecare pas — fără surprize la final.',
      },
      {
        word: 'Go!',
        who: 'Faza ta, din nou',
        body:
          'Echipa ta folosește sistemul autonom. Documentat, predat, fără dependență de noi. Tool-ul e al vostru, nu în cloud-ul nostru.',
      },
    ],
  },

  forWhom: {
    eyebrow: 'Pentru cine',
    title: 'Trei contexte. Același tipar de simplificare.',
    items: [
      {
        tag: 'Universități',
        body:
          'Decanate, departamente administrative, departamente IT, alianțe academice. Știm cum se aprobă bugete, cum lucrează un Senat, cum se rulează un proiect european cu 10 parteneri.',
      },
      {
        tag: 'Instituții publice',
        body:
          'Primării, ministere, agenții. Fluxuri administrative grele, achiziții prin SICAP, conformitate GDPR și Legea 190/2018.',
      },
      {
        tag: 'Companii',
        body:
          'Operațiuni interne, L&D, HR, achiziții cu procese repetitive. ERP-uri nepotrivite peste fluxul real.',
      },
    ],
  },

  services: {
    eyebrow: 'Servicii',
    title: 'Aplicații la comandă, pe șapte categorii.',
    body:
      'Toate construite pe același principiu: simplificarea operațiunii reale, nu adăugarea de feature-uri.',
    items: [
      'Fluxuri de aprobări interne',
      'Planificare & alocare resurse',
      'Rapoarte & tablouri de bord operaționale',
      'Document management & arhivă digitală',
      'Portaluri & spații de lucru interne',
      'Integrări cu sisteme existente',
      'Audit & reproiectare procese',
    ],
  },

  process: {
    eyebrow: 'Cum lucrăm',
    title: 'Descifrat. Simplificat. Digitalizat. Predat.',
    steps: [
      {
        num: '01 → cartografiem',
        title: 'Descifrat',
        body:
          'Interviuri cu operatorii reali. Harta fluxurilor existente. Identificarea zonelor de fricțiune.',
        accent: 'brand',
      },
      {
        num: '02 → reproiectăm',
        title: 'Simplificat',
        body:
          'Eliminăm pași redundanți, refacem componentele cheie. Co-design cu cei care folosesc.',
        accent: 'primary',
      },
      {
        num: '03 → livrăm',
        title: 'Digitalizat',
        body:
          'Sprinturi scurte, demo-uri săptămânale. Utilizatorii o folosesc din luna 2, nu din luna 12.',
        accent: 'danger',
      },
      {
        num: '04 → transferăm',
        title: 'Predat',
        body:
          'Documentație vie, training, proceduri de mentenanță. Nu rămân în dependență de noi.',
        accent: 'success',
      },
    ],
  },

  demo: {
    eyebrow: 'Demo live',
    title: 'Cum arată simplificarea, în direct.',
    body:
      'Mai jos e o schiță a unui proces administrativ tipic — 8 pași, jumătate redundanți. Apasă butonul și vezi ce rămâne după ce trecem prin el.',
    before: { label: 'proces vechi', count: '8', countLabel: 'pași' },
    after: { label: 'după SET', count: '4', countLabel: 'pași' },
    simplifyButton: '→ Simplifică',
    resetButton: '↺ Resetează',
    boxes: [
      { id: 'cerere', label: 'Cerere' },
      { id: 'email', label: 'Email' },
      { id: 'print', label: 'Print pe hârtie' },
      { id: 'excel', label: 'Tabel Excel paralel' },
      { id: 'reintro', label: 'Re-introducere date' },
      { id: 'aprobare', label: 'Aprobare' },
      { id: 'arhiva', label: 'Arhivă digitală' },
      { id: 'raport', label: 'Raport lunar' },
    ],
  },

  cases: {
    eyebrow: 'Cazuri',
    title: 'Trei sisteme livrate. Anonimizate.',
    body:
      'Detaliile clienților sunt anonimizate. Referințe verbale disponibile la cerere directă, cu acord.',
    items: [
      {
        tag: 'Furnizor medicina muncii',
        title: 'Aplicație multi-tenant pentru programări',
        body:
          'Arhitectură multi-tenant cu izolare strictă a datelor per angajator. Programări, notificări automate, rapoarte facturare lunară. Conformitate GDPR Art. 9 (date medicale).',
        kpis: [
          { label: 'Programări/zi', value: '34' },
          { label: 'Angajatori', value: '12' },
          { label: 'Conformitate', value: 'Art. 9' },
        ],
      },
      {
        tag: 'Companie B2B',
        title: 'CRM custom pentru flux vânzări-logistică',
        body:
          'Înlocuirea ERP-ului inadecvat. Generare automată PDF din 7 tipuri de ofertă, multi-currency (LEI/EUR/USD), permisiuni granulare pe 5 departamente.',
        kpis: [
          { label: 'Utilizatori activi', value: '37' },
          { label: 'Tipuri ofertă', value: '7' },
          { label: 'Valute', value: '3' },
        ],
      },
      {
        tag: 'Organizație publică',
        title: 'Monitorizare automată oportunități finanțare',
        body:
          'Scraping zilnic din surse oficiale (TED, SICAP, MIPE). Filtrare după criterii, alerte configurabile pentru sesiuni urgente.',
        kpis: [
          { label: 'Surse', value: '3+' },
          { label: 'Scanare', value: 'zilnică' },
          { label: 'Alerte', value: 'custom' },
        ],
      },
    ],
  },

  positioning: {
    eyebrow: 'Cu ce ne diferențiem',
    title: 'Spunem nu, ca să putem spune da bine.',
    no: {
      tag: 'nu facem',
      items: [
        '↳ produse SaaS de raft',
        '↳ proiecte „big bang" la 18 luni',
        '↳ scope creep deghizat în „mai e nevoie de"',
        '↳ docs pe care nimeni nu le citește',
        '↳ slide-uri pline cu jargon',
      ],
    },
    yes: {
      tag: 'facem',
      items: [
        '↳ aplicații custom, pe operațiunea ta',
        '↳ livrări incrementale, demo săptămânal',
        '↳ scope clar, deviații negociate',
        '↳ docs minim, dar vii și folosite',
        '↳ vorbe directe cu cei care decid',
      ],
    },
  },

  about: {
    eyebrow: 'Despre',
    title: 'Vlad Petcu',
    role: 'fondator · arhitect soluții',
    bio: 'Fondator Sustainable EdTech Romania. 10+ ani în transformare digitală în învățământul superior și sectorul public.',
    positionsTitle: 'Poziții relevante',
    positions: [
      'Co-Chair, Digitalization & IT Subgroup pentru European University Alliances — rol policy maker pentru 650+ universități din 36 țări, investiții europene de peste 1 mld. EUR.',
      'Coordonator Virtual Campus, Alianța UNITA (10 universități membre, 7 țări, ~250.000 studenți).',
      'Director General Administrativ Adjunct, Universitatea de Vest din Timișoara (8 ani) — portofoliu operațional peste 50 mil. EUR.',
      'Board Member: EUNIS (European University Information Systems), EduXS (European Digital Education Hub).',
    ],
    workTitle: 'Cum lucrez azi',
    work:
      'La intersecția decizie–execuție. Construiesc cu echipe mici și oversight personal, sprijinit de o rețea de experți recunoscuți pentru situații specializate. Calitatea livrabilelor este sub controlul meu direct.',
    educationTitle: 'Educație · certificări',
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
    eyebrow: 'Întrebări frecvente',
    title: 'Ce răspundem cel mai des.',
    items: [
      {
        q: 'Lucrați doar cu instituții mari?',
        a: 'Nu. Lucrăm cu entități ce pornesc de la firme mici până la Alianțe Universitare Europene.',
      },
      {
        q: 'Cât durează un proiect tipic?',
        a: '3–6 luni până la producție. Prima livrare funcțională în 4–8 săptămâni.',
      },
      {
        q: 'Cum gestionați datele sensibile?',
        a:
          'Deployment on-premise când contextul cere (sănătate, date personale extinse). GDPR + Legea 190/2018 by design.',
      },
      {
        q: 'Lucrați și în regim de achiziție publică?',
        a:
          'Da. Experiență directă cu autorități de management (POCIDIF, PNRR, Erasmus+) și cu SICAP.',
      },
      {
        q: 'Care e bugetul minim?',
        a:
          'Discutăm după o sesiune de audit. Refuzăm proiecte sub un prag minim care ar compromite calitatea.',
      },
      {
        q: 'Ce se întâmplă dacă echipa voastră vrea să preia produsul?',
        a:
          'E parte din proces. Pasul 4: predat — documentație vie, training, mentenanță clară. Nu creăm dependență.',
      },
    ],
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Să vorbim despre sistemul tău.',
    body:
      'Trimite un email scurt cu contextul (organizație, ce vrei să simplifici, deadline aproximativ). Răspundem în maxim 2 zile lucrătoare.',
    emailLabel: 'Email',
    email: 'contact@sustainabletech.ro',
    phoneLabel: 'Telefon',
    phone: '0755 240 202',
    phoneHref: 'tel:+40755240202',
    ctaButton: 'Scrie-ne',
    ctaSubject: 'Discuție SET',
    ctaBody:
      'Bună ziua, vă contactez din partea [organizație] referitor la [scurtă descriere]. Disponibil pentru discuție în săptămâna ...',
    responseNote: 'Răspundem în maxim 2 zile lucrătoare.',
  },

  footer: {
    legalShort:
      'SUSTAINABLE EDTECH ROMANIA S.R.L. · CUI: RO41226189 · J2019002422354 · contact@sustainabletech.ro',
    rights: 'Toate drepturile rezervate.',
    links: {
      terms: 'Termeni și condiții',
      privacy: 'Politica de confidențialitate',
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
