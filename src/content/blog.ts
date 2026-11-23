// Blog posts. `blocks` are rendered in order by BlogPostView.vue.
// Supported block types: p (paragraph), h2 (heading), ol / ul (lists),
// figure (named illustration component), note (small print).

export type Block =
  | { type: 'p', text: string }
  | { type: 'h2', text: string }
  | { type: 'ol' | 'ul', items: string[] }
  | { type: 'figure', name: 'ai-hub', caption: string }
  | { type: 'note', items: string[] }

export type Post = {
  slug: string
  title: string
  author: string
  date: string
  tags: string[]
  excerpt: string
  originalUrl?: string
  status: 'published' | 'in-preparation'
  blocks: Block[]
}

export const posts: Post[] = [
  {
    slug: 'ai-optimized-biochar-industry',
    title: 'Transitioning the biochar industry from hardware to an AI-optimized future',
    author: 'Tobias Schweitzer',
    date: '2025',
    tags: ['Biochar', 'AI COOP', 'Data trustee'],
    excerpt: 'Six insights on how fair data access, ecological AI and new revenue streams can accelerate an industry that still plays mostly a hardware game.',
    originalUrl: 'https://biochartoday.com/blog/transitioning-the-biochar-industry-from-hardware-to-an-ai-optimized-future/',
    status: 'published',
    blocks: [
      { type: 'h2', text: 'Six insights about the biochar industry¹ and AI²' },
      {
        type: 'ol',
        items: [
          'Data from the biochar industry is available but limited by access.',
          'Data trustees would unlock access to biochar industry data by building trust through a fair, collaborative process, and minimize costs as long as cooperative principles apply.',
          'By tailoring AI to the needs of the biochar industry, it can be used ecologically.',
          'The use of AI in the biochar industry should focus on raising productivity first and designing biochar as a fossil-carbon substitute second.',
          'New revenue streams are derived from Software-as-a-Service (SaaS) licensing of AI services and selling biochar as a substitute for the carbon economy.',
          'An AI-optimized biochar industry would accelerate the regeneration of our planet.'
        ]
      },
      {
        type: 'p',
        text: 'In 2025, biochar is still largely a hardware game. Among the most frequent keywords of the newest 1,000 biochar papers in Web of Science, machine learning plays only a minor role. The reasons for this are multifaceted: limited resources, knowledge and accessible data are hindering its widespread adoption. A better understanding of how to best leverage AI would accelerate its adoption by the global biochar industry. As a result, costs would be minimized, productivity maximized and new revenue streams created. This article outlines our vision of how the biochar industry would benefit from AI based on fair, ecological and regenerative values.'
      },
      { type: 'h2', text: 'Fair access to data' },
      {
        type: 'p',
        text: 'Data changes the rules of the game: it can be used infinitely without sacrificing quality, quantity or value. Processing data is cost-effective³ and is not restricted to any time or location. And data can grow over time: if biochar production uses optimized data from AI models, the production process continually generates new data. Although the biochar industry currently generates significant amounts of data, access to it is limited. To gain access, trust must first be established.'
      },
      {
        type: 'p',
        text: 'One way to build trust is a set of rules for data governance. Think of these rules as statutes defined by the biochar industry and held by a neutral third party, owned and governed democratically by the industry for its sole benefit. This third party, a data trustee, forms the bedrock of that trust. Its principal role is to collect data from the industry, make it available for AI, and return the AI-optimized data to its owners. Decisions about how value is created and distributed, and which standards to follow, can be made autonomously. If a data trustee is established as a cooperative, the amount of shared data increases with each new member while costs decrease, as they are shared among all members. This approach, based on consensual governance, increases the amount of fair, accessible data.'
      },
      {
        type: 'figure',
        name: 'ai-hub',
        caption: 'AI Hub by AIRA: users share data with a data trustee and receive optimized data. The data trustee governs how data are processed; AIRA develops and provides the AI. (CC BY 4.0)'
      },
      { type: 'h2', text: 'Ecological use of AI' },
      {
        type: 'p',
        text: 'The lightness of classical machine learning (ML) enables it to work with smaller amounts of data processed by CPUs rather than GPUs, on the edge (offline) and in the cloud (online), and its interpretability and explainability support knowledge building with every iteration. Knowledge of how to solve a single challenge of the biochar industry can establish a best practice, which we call an AI service. In the short term, AI services focus on productivity improvements, reducing operating costs, improving the return on investment and increasing demand for biochar. A growing biochar industry in turn unlocks access to more data.'
      },
      {
        type: 'p',
        text: 'AI should be tailored to the needs of the biochar industry with an ML architecture that includes forecasting, constrained optimization, human-in-the-loop, federated and reinforcement learning. Used this way, AI can raise industry productivity ecologically.'
      },
      { type: 'h2', text: 'Accelerating regeneration' },
      {
        type: 'p',
        text: 'The biochar industry leads on compensation, delivering over 90% of carbon dioxide removal (CDR) credits. But the mitigation hierarchy⁴ prioritizes avoidance and reduction over compensation. The principal challenge hindering the industry\'s growth in line with that hierarchy is high research and development cost. With wider adoption of AI, data become more available, lowering the cost of scientific insights into biochar and its properties.'
      },
      {
        type: 'p',
        text: 'By harnessing AI in the production of biochar, a carbon-rich raw material, the industry reaches a new frontier: biochar as an attractive substitute for fossil carbon. In the long run, R&D costs will fall, allowing the industry to supply non-fossil carbon as a resource for the carbon economy, avoiding fossil carbon in production and reducing total product emissions. Selling non-fossil carbon creates a new revenue stream; another comes from SaaS licensing of AI services. Following these approaches, the regeneration of the earth\'s climate accelerates.'
      },
      {
        type: 'note',
        items: [
          '¹ Biochar industry refers mostly to biochar production.',
          '² AI is an umbrella term. Most public discussion refers to large language models, the most complex and resource-hungry forms of AI. In this article, AI refers to classical machine learning, which is simpler and better suited to the challenges of the biochar industry.',
          '³ Moore\'s law observes that transistor counts per chip double roughly every two years, so processing the same amount of data keeps getting cheaper.',
          '⁴ International Emissions Trading Association (IETA) on the mitigation hierarchy.'
        ]
      }
    ]
  },
  {
    slug: 'ai-coop-principles',
    title: 'AI COOP: principles for cooperative AI',
    author: 'Tobias Schweitzer',
    date: 'Coming soon',
    tags: ['AI COOP', 'Cooperatives'],
    excerpt: 'How cooperative principles can change for-profit business models by creating and optimizing large datasets that belong to their members.',
    status: 'in-preparation',
    blocks: []
  },
  {
    slug: 'charsage',
    title: 'CharSage: designing biochar with data',
    author: 'AIRA Team',
    date: 'Coming soon',
    tags: ['CharSage', 'Biochar'],
    excerpt: 'Why predicting biochar properties is the key to using biochar as a fossil-carbon substitute.',
    status: 'in-preparation',
    blocks: []
  },
  {
    slug: 'learning-across-machines',
    title: 'Why data from different machines can optimize for the same goals',
    author: 'AIRA Team',
    date: 'Coming soon',
    tags: ['Research', 'Transfer learning'],
    excerpt: 'Different plants follow the same laws of physics. What that means for learning across a fleet of machines.',
    status: 'in-preparation',
    blocks: []
  }
]
