// ---------------------------------------------------------------------
// Central website content for AIRA Holding GmbH.
// Source: "AIRA Questions" Google Doc + Canva wireframe "Wireframe AIRA Website".
// Edit texts here; pages (Home, About, Services, Projects, Blog) read from it.
// ---------------------------------------------------------------------

export type Status = 'active' | 'beta' | 'planned' | 'paused' | 'completed'

export const statusLabel: Record<Status, string> = {
  active: 'Active',
  beta: 'Beta',
  planned: 'Planned',
  paused: 'Paused',
  completed: 'Completed'
}

export const links = {
  demo: 'https://one.aira-holding.de',
  demoUser: 'demo',
  demoPassword: 'demo',
  paper: 'https://arxiv.org/abs/2412.07881',
  paperNeurips: 'https://www.climatechange.ai/papers/neurips2024/65',
  poster: 'https://figshare.com/articles/poster/Reducing_NOx_Emissions_in_Pyrolysis_Machines_for_Biochar_Production_A_machine_learning_approach/23772729/1',
  biocharToday: 'https://biochartoday.com/blog/transitioning-the-biochar-industry-from-hardware-to-an-ai-optimized-future/',
  linkedin: 'https://www.linkedin.com/company/aira-holding-gmbh/',
  effcheck: 'https://effcheck.rlp.de/ueber-den-effcheck/effcheck-varianten/industrie-40',
  biochar26: 'https://figshare.com/articles/poster/Building_Al_Together_How_the_Biochar_Industry_Uses_Shared_Data_to_Create_New_Revenue_Streams/35093716?file=71793457'
}

// ---------------- Principles / values ----------------
export const principles = [
  {
    title: 'FAIR',
    tagline: 'No human data.',
    text: 'We work with machine, process, environmental, spatial, material and technical data only. Fair also means consent in how data are used, data sovereignty and clear value for data owners.',
    icon: 'mdi-shield-check-outline'
  },
  {
    title: 'ECOLOGICAL',
    tagline: 'Resource-efficient AI.',
    text: 'Classical machine learning that needs little data and runs on CPUs, and that stays interpretable and explainable, unlike large deep-learning models.',
    icon: 'mdi-leaf'
  },
  {
    title: 'REGENERATIVE',
    tagline: 'Regenerative impact.',
    text: 'We optimize technologies that neither exploit the planet nor just preserve the status quo, but actively rebuild the buffer zones of planetary boundaries.',
    icon: 'mdi-sprout-outline'
  }
]

// ---------------- Problem framing ("What we do") ----------------
export const problems = [
  {
    key: 'Transparency',
    title: 'Data in a usable structure',
    text: 'Technical facilities produce data alongside their physical products, but it is scattered across machines and formats. It first has to be brought into one structured form.'
  },
  {
    key: 'Inspect',
    title: 'Patterns made visible',
    text: 'Correlations between setpoints, raw materials and emissions are hidden in the data. Analytics and explainable models make them visible.'
  },
  {
    key: 'Adapt',
    title: 'Better decisions, then new data',
    text: 'Insights only matter when they lead to decisions. Each decision produces new data for the next, better decision, a circular data economy instead of trial and error.'
  }
]

// ---------------- Services ----------------
export const services = [
  {
    id: 'feasibility',
    num: '01',
    title: 'Feasibility Studies',
    short: 'Find out where AI creates real value before investing in it.',
    icon: 'mdi-file-search-outline',
    text: 'Every engagement starts with analytics: how are your data generated, what do they contain, and which questions can they answer? We audit data sources, search for patterns and correlations, and quantify the potential of data-driven optimization.',
    points: [
      'Data audit and analytics: how data are generated, not only how they are analysed',
      'Pattern recognition and correlation analysis on process data',
      'Clear recommendation: where AI makes sense, and where it does not',
      'A structured dataset as a deliverable of its own'
    ],
    references: 'Feasibility studies with PYREG and ARTi on pyrolysis plants, covering emissions and biochar properties, not only NOx.'
  },
  {
    id: 'consulting',
    num: '02',
    title: 'Consultation',
    short: 'Data strategy, funded digitalisation checks and cooperative data models.',
    icon: 'mdi-account-tie-voice-outline',
    text: 'We advise operators and manufacturers on data strategy and digitalisation, from funded efficiency checks to cooperative models in which several operators pool their data to obtain better models at lower cost.',
    points: [
      'EffCheck Industrie 4.0 consulting (funded programme of Rhineland-Palatinate)',
      'AI COOP: data-trustee and cooperative data-sharing models',
      'Data strategy from R&D to operations',
      'Avoiding AI over-engineering: the right method for the problem'
    ],
    references: 'EffCheck Industrie 4.0 with BHYO; AI COOP concept work with the Platform Cooperativism Consortium.'
  },
  {
    id: 'software',
    num: '03',
    title: 'Software Development',
    short: 'Custom analytics software and our SaaS platform AIRA One.',
    icon: 'mdi-code-braces',
    text: 'We build software that keeps working after the project ends, from custom analytics tools to production platforms with dashboards, forecasts and decision support. Our own SaaS platform, AIRA One, bundles this for technical facilities.',
    points: [
      'Edge-device integration to bring facilities online',
      'Data pipelines, dashboards and forecasting models',
      'Custom analytics, e.g. site-suitability analysis',
      'AIRA One: managed or self-hosted SaaS'
    ],
    references: 'Projects include site-suitability analysis and analytics software for industry and insurance clients.'
  }
]

// Service ladder from the doc ("What are our service offerings?")
export const serviceLadder = [
  { step: 'Connect', text: 'Install edge devices to bring facilities online', color: 'blue' },
  { step: 'Analyze', text: 'Feasibility study: analytics, patterns, correlations', color: 'blue' },
  { step: 'Monitor & Forecast', text: 'Dashboard with forecasts', color: 'purple' },
  { step: 'Optimize', text: 'Optimized forecasts for one to multi target dimension(s)', color: 'purple' },
  { step: 'Control', text: 'Control based on optimized forecasts', color: 'green' }
]

// ---------------- SaaS product layers (AIRA One) ----------------
export const productLayers = [
  {
    layer: 'Base layer',
    name: 'Connect → Config',
    audience: 'AIRA, OEM service technicians, integrators',
    text: 'Onboarding: data sources, sensors, target variables, operating limits and optimization parameters per plant.',
    status: 'active' as Status,
    icon: 'mdi-connection'
  },
  {
    layer: 'Insight Cockpit',
    name: 'Monitor',
    audience: 'Plant operators, OEM service, technical decision makers',
    text: 'Live dashboards for every machine, with per-customer access control.',
    status: 'active' as Status,
    icon: 'mdi-monitor-dashboard'
  },
  {
    layer: 'Insight Cockpit',
    name: 'Forecast',
    audience: 'Plant operators, OEM service, technical decision makers',
    text: 'Multi-horizon forecasts and key sensors with uncertainty bands.',
    status: 'active' as Status,
    icon: 'mdi-chart-bell-curve-cumulative'
  },
  {
    layer: 'Insight Cockpit',
    name: 'Explain',
    audience: 'Plant operators, OEM service, technical decision makers',
    text: 'Which process parameters drive which signals: feature importances and setpoint–sensor relations.',
    status: 'active' as Status,
    icon: 'mdi-lightbulb-on-outline'
  },
  {
    layer: 'Value layer',
    name: 'Advisor',
    audience: 'Operators and reviewers',
    text: 'From analysis tool to assistance system: what-if simulation of setpoints, proposals and a review workflow with audit trail.',
    status: 'beta' as Status,
    icon: 'mdi-tune-variant'
  },
  {
    layer: 'Scale layer',
    name: 'Fleet Benchmarking',
    audience: 'OEMs and multi-site operators',
    text: 'Compare several plants and learn across a fleet of machines.',
    status: 'planned' as Status,
    icon: 'mdi-chart-box-multiple-outline'
  },
  {
    layer: 'Compliance',
    name: 'MRV / Compliance Reporting',
    audience: 'Operators, certifiers',
    text: 'Automated reports for monitoring, reporting and verification.',
    status: 'planned' as Status,
    icon: 'mdi-file-certificate-outline'
  },
  {
    layer: 'Advanced layer',
    name: 'Autopilot',
    audience: 'Operators',
    text: 'Closed-loop control based on optimized forecasts, for when the models have earned that trust.',
    status: 'planned' as Status,
    icon: 'mdi-robot-industrial-outline'
  }
]

// ---------------- Projects & concepts ----------------
export type Project = {
  id: string
  title: string
  kind: 'Project' | 'Concept'
  status: Status
  partners?: string
  short: string
  text: string
  tags: string[]
  link?: { label: string, href?: string, to?: string }
}

export const projects: Project[] = [
  {
    id: 'emissiontech',
    title: 'EmissionTech',
    kind: 'Project',
    status: 'active',
    partners: 'with PYREG GmbH',
    short: 'Reducing NOx emissions in biochar plants and optimizing biochar properties with machine learning.',
    text: 'Research and development project with PYREG GmbH. Plant data are cleaned and modelled in reproducible Kedro pipelines whose behaviour is fully configured in YAML, so a new plant is added by configuration instead of new code. The results were presented at NeurIPS 2024 and are now productised as AIRA One.',
    tags: ['Pyrolysis', 'NOx', 'Kedro', 'Forecasting'],
    link: { label: 'Explore AIRA One', to: 'airaOne' }
  },
  {
    id: 'effcheck',
    title: 'EffCheck Industrie 4.0',
    kind: 'Project',
    status: 'completed',
    partners: 'with BHYO',
    short: 'AI-based optimization of BHYO\'s technology within the EffCheck programme of Rhineland-Palatinate.',
    text: 'As consultants in the EffCheck Industrie 4.0 programme we analysed BHYO\'s process and data and identified where data-driven optimization raises efficiency.',
    tags: ['Consulting', 'Industrie 4.0', 'Efficiency'],
    link: { label: 'About EffCheck', href: links.effcheck }
  },
  {
    id: 'charsage',
    title: 'CharSage',
    kind: 'Project',
    status: 'active',
    short: 'Predicting biochar properties for their intended application.',
    text: 'CharSage combines curated biochar datasets (CharBase) with machine learning to predict biochar properties from feedstock and process conditions, so that biochar can be designed for its application, from soil to materials.',
    tags: ['Biochar', 'Datasets', 'Property prediction']
  },
  {
    id: 'site-suitability',
    title: 'Site Suitability',
    kind: 'Project',
    status: 'active',
    short: 'Finding the optimal location for a plant from infrastructure and available biomass.',
    text: 'Spatial analysis that combines infrastructure and the biomass available within a region to rank candidate sites for new facilities.',
    tags: ['Spatial data', 'Software']
  },
  {
    id: 'biocharge',
    title: 'BioCharGe',
    kind: 'Project',
    status: 'paused',
    partners: 'with SINTEF and University of Camerino',
    short: 'A sodium battery using biochar, optimized with AI.',
    text: 'Development of a sodium battery using biochar together with SINTEF and the Chemistry Division of the School of Science and Technology, University of Camerino. The project generates a dataset and optimizes biochar with AI to improve battery performance.',
    tags: ['Energy storage', 'Biochar', 'Materials']
  },
  {
    id: 'ai-coop',
    title: 'AI COOP',
    kind: 'Concept',
    status: 'active',
    short: 'Cooperative data trustees: pooling data fairly to make AI affordable for everyone.',
    text: 'Operators pool their data in a data trustee that they own and govern democratically. AIRA develops and provides the AI; every member receives optimized results. With every new member the dataset grows while costs per member fall.',
    tags: ['Data trustee', 'Cooperative', 'Governance']
  }
]

export const upcoming = [
  { title: 'PyroNet R&D with HS Nordhausen (ThIWert)', text: 'Identifying and validating new use cases for pyrolysis products.' },
  { title: 'PyroNet R&D with the Institut für Nanophotonik', text: 'Bioplastics made from residues.' },
  { title: 'Scaling EmissionTech with PYREG', text: 'Rolling out the platform to further plants.' },
  { title: 'Biogas market prediction', text: 'Operating biogas plants when feed-in tariffs are highest.' }
]

// ---------------- About: chronology ----------------
export const timeline = [
  {
    year: '2019',
    title: 'Curiosity about AI',
    text: 'Our founder began asking around for people working on artificial intelligence and brought together doctoral researchers from computer science, physics, economics and communication science.'
  },
  {
    year: '2019–2022',
    title: 'A first joint project',
    text: 'Data-driven optimization of pyrolysis for biochar production showed how much value lies in machine data, and that this work deserved a company of its own.'
  },
  {
    year: '2023',
    title: 'AIRA Holding GmbH is founded',
    text: 'First talks at the 7th Biochar School in Turin, a NOx poster at the Biochar Summit in Helsingborg, and a workshop on digitalisation and AI at German Biochar in Berlin.'
  },
  {
    year: '2024',
    title: 'Research goes international',
    text: 'Talk at the North American Biochar Conference in Sacramento and a paper on NOx prediction at NeurIPS 2024 in Vancouver. Webinars with the Minnesota Biochar Initiative and the Nordic Biochar Network.'
  },
  {
    year: '2025',
    title: 'Networks and the AI-COOP idea',
    text: 'Founding member of the PyroNet network, member of Ecoliance RLP, and our Biochar Today article on an AI-optimized biochar industry. "KI-Ära" becomes the German word of the year wich translates to "AI-era" -> AIRA.'
  },
  {
    year: '2026',
    title: 'From research to product',
    text: 'AIRA One goes live as a demo, the platform that turns EmissionTech into a product for technical facilities.'
  }
]

export const nameStory = [
  { letter: 'FAIR', text: 'Fairness kept coming back as our central value. From FAIR it was a short step to AIRA.' },
  { letter: 'AI ERA', text: 'Phonetically, AIRA alludes to the AI era ("KI-Ära"), the German word of the year 2025.' },
  { letter: 'AIR', text: 'Our focus on removing and avoiding CO₂ in the air is part of the name.' },
  { letter: 'HOLDING', text: 'Successful research projects are developed further in organizations founded specifically for them.' }
]

export const differentiators = [
  { title: 'Owner-managed', text: 'Independent and run by its founders.' },
  { title: 'Feasibility first', text: 'We start by checking where AI creates genuine value.' },
  { title: 'Machines, not humans', text: 'We optimize machines and processes, never people.' },
  { title: 'Classical ML', text: 'Lightweight, explainable models instead of deep learning by default.' },
  { title: 'Horizontal scaling', text: 'An AI Hub that lets several operators benefit from pooled data.' }
]

// ---------------- Network ----------------
export const partners = [
  { name: 'Fraunhofer UMSICHT', url: 'https://www.umsicht.fraunhofer.de/' },
  { name: 'PYREG', url: 'https://pyreg.com/' },
  { name: 'Fusinite', url: 'https://fusinite.com/' },
  { name: 'ARTi', url: 'https://www.arti.com/' },
  { name: 'BHYO', url: 'https://bhyo.de/' },
  { name: 'SINTEF', url: 'https://www.sintef.no/' },
  { name: 'University of Camerino', url: 'https://www.unicam.it/' },
  { name: 'Paul Scherrer Institute', url: 'https://www.psi.ch/' },
  { name: 'INL – International Iberian Nanotechnology Laboratory', url: 'https://inl.int/' },
  { name: 'Ministry for Climate Protection, Environment, Energy and Mobility RLP', url: 'https://mkuem.rlp.de/' }
]

export const networks = [
  { name: 'Ecoliance RLP', role: 'Member', url: 'https://ecoliance-rlp.de/' },
  { name: 'PyroNet (ZIM network)', role: 'Founding member', url: 'https://agt-akademie.de/netzwerke/pyronet-netzwerk/' },
  { name: 'EffCheck RLP', role: 'Consultant', url: 'https://effcheck.rlp.de/' },
  { name: 'Platform Cooperativism Consortium', role: 'Platform Cooperativism Consortium · Solidarity AI', url: 'https://platform.coop/' }
]

// ---------------- Team extras ----------------
export const teamRoles: Record<string, string> = {
  'Tobias Schweitzer': 'Founder, Managing Director & CEO',
  'Dr. Marius Snella Köppel': 'Founder, Managing Director & CTO',
  'Marvin Schneider': 'Co-Founder & CFO'
}

export const advisors = [
  { name: 'Felipe Valdez', role: 'Strategic Advisor',
    socials: [ {plattformName: "LinkedIn", icon: "mdi-linkedin", href: "https://www.linkedin.com/in/felipeavaldez/"} ]
  }
]

// ---------------- Research & publications ----------------
export const publications = [
  {
    type: 'Paper',
    venue: 'NeurIPS 2024 · Tackling Climate Change with ML',
    title: 'Predicting NOx emissions in Biochar Production Plants using Machine Learning',
    href: links.paper
  },
  {
    type: 'Poster',
    venue: 'Biochar Summit 2023 · Helsingborg',
    title: 'Reducing NOx Emissions in Pyrolysis Machines for Biochar Production: A machine learning approach',
    href: links.poster
  },
  {
    type: 'Article',
    venue: 'Biochar Today · 2025',
    title: 'Transitioning the biochar industry from hardware to an AI-optimized future',
    href: links.biocharToday
  },
  {
    type: 'Poster',
    venue: 'Biochar Summit 2026 · Wien',
    title: 'Building Al Together: How the Biochar Industry Uses Shared Data to Create New Revenue Streams',
    href: links.biochar26
  },
]

export const talks = [
  { venue: '7th Biochar School 2023 · Turin, Italy', title: 'AI applied to biochar production', href: 'https://www.ibe.cnr.it/wp-content/uploads/2023/09/biocharschool2023.pdf' },
  { venue: 'German Biochar 2023 · Berlin', title: 'Workshop: Digitalisierung und KI trifft Pflanzenkohle', href: 'https://german-biochar-forum.com/events/klimaschutz-kreislaufwirtschaft-energiewende-mit-pflanzenkohle/programm#' },
  { venue: 'US Biochar / NABC 2024 · Sacramento, USA', title: 'Revolutionizing Biochar Production: AI-Driven Innovation', href: 'https://biochar-us.org/usbinabc24-schweitzer-revolutionizing-biochar-production-ai-driven-innovation' },
  { venue: 'Minnesota Biochar Initiative · Webinar', title: 'AI in biochar production' },
  { venue: 'Nordic Biochar Network · Webinar', title: 'How do you prepare for AI in biochar production?' },
  { venue: 'Platform Cooperativism Consortium 2025', title: 'Open Agriculture AI and Data', href: 'https://platform.coop/people/tobias-schweitzer/' },
  { venue: 'Platform Cooperativism Consortium 2026', title: 'Who Runs the Machines? Cooperatives, Data, and Automation', href: 'https://platform.coop/events/solidarity-ai/concurrent-session-5-who-runs-the-machines/' }
]
