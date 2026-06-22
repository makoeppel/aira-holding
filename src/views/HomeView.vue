<script lang="ts" setup>
    import { defineAsyncComponent } from 'vue';
    import { TeamMembers, type TeamMemberType } from '@/components/home/TeamMember.vue';
    import { VLazy, VDivider } from 'vuetify/lib/components/index.mjs';
    import { CompanyPurposes, type CompanyPurposeType } from '@/components/home/CompanyPurpose.vue';
    import { Projects, type ProjectType } from '@/components/home/Projects.vue';

    const LogoSliderComponent = defineAsyncComponent({
        loader: () => import('@/components/home/LogoSlider.vue')
    });

    const HeaderLogoComponent = defineAsyncComponent({
        loader: () => import('@/components/home/HeaderLogo.vue')
    });

    const CompanyPurposeComponent = defineAsyncComponent({
        loader: () => import('@/components/home/CompanyPurpose.vue')
    });

    const companyPurposes: CompanyPurposeType[] = CompanyPurposes;

    const TeamMemberComponent = defineAsyncComponent({
        loader: () => import('@/components/home/TeamMember.vue')
    });

    // Process and override Marius's data dynamically in setup
    const teamMembers: TeamMemberType[] = TeamMembers.map(member => {
        return member;
    });

    const ProjectComponent = defineAsyncComponent({
        loader: () => import('@/components/home/Projects.vue')
    });

    const projects: ProjectType[] = Projects;
</script>

<template>
    <v-container class="py-0 px-4 px-md-8" fluid>
        
        <!-- SECTION 1: WHAT WE DO (COMPACT ONE-SCREEN GRID) -->
        <v-lazy :options="{'threshold':0.2}" min-height="100vh">
            <v-row align="center" justify="center" class="height-screen min-vh-100 py-6">
                <v-col cols="12" class="max-screen-container">
                    <v-row class="text-center mb-6" justify="center">
                        <v-col cols="12" md="10">
                            <HeaderLogoComponent height="64px" class="mb-2 justify-center"></HeaderLogoComponent>
                            <h1 class="hero-title font-weight-black text-h4 text-sm-h3 leading-tight">
                                {{ $t("home.companyPurpose.title") }}
                            </h1>
                        </v-col>
                    </v-row>
                    
                    <!-- Forced Side-by-Side row placement on medium/large desktop screens -->
                    <v-row justify="center" class="g-4 flex-nowrap-md">
                        <v-col v-for="(companyPurpose, index) in companyPurposes" :key="`purpose-${index}`" cols="12" md="4" class="d-flex">
                            <div class="modern-purpose-card w-100">
                                <div class="card-ambient-glow"></div>
                                <div class="icon-container-box mb-4">
                                    <svg v-if="index === 0" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4f9cff" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <circle cx="12" cy="12" r="4"></circle>
                                        <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
                                        <line x1="19.07" y1="4.93" x2="14.83" y2="9.17"></line>
                                    </svg>
                                    <svg v-else-if="index === 1" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4f9cff" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"></path>
                                    </svg>
                                    <svg v-else width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4f9cff" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                                        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                                        <polyline points="2 17 12 22 22 17"></polyline>
                                    </svg>
                                </div>
                                <div class="card-content">
                                    <div class="card-index">0{{ index + 1 }} // MISSION</div>
                                    <CompanyPurposeComponent v-bind="companyPurpose"></CompanyPurposeComponent>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-lazy>

        <v-lazy>
            <v-row class="py-2"><v-divider class="border-opacity-10"></v-divider></v-row>
        </v-lazy>

        <!-- SECTION 2: SERVICES MATRIX -->
        <v-lazy :options="{'threshold':0.3}" min-height="100vh">
            <v-row id="services" align="center" class="height-screen min-vh-100 py-12">
                <v-col cols="12">
                    <v-row class="mb-12">
                        <v-col cols="12" md="8" lg="6">
                            <div class="section-tag mb-2">Capabilities Matrix</div>
                            <h2 class="text-h4 font-weight-bold mb-3">Our Core Ecosystem Services</h2>
                            <p class="text-body-1 opacity-70">
                                Specialized performance modules tailored directly to infrastructure environments.
                            </p>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="g-6">
                        <v-col cols="12" md="4" lg="3">
                            <div class="modern-service-card">
                                <div class="card-ambient-glow"></div>
                                <div class="icon-container-box mb-6">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4f9cff" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                                        <polyline points="14 2 14 8 20 8"></polyline>
                                    </svg>
                                </div>
                                <div class="card-content">
                                    <div class="card-index">01 // PHASING</div>
                                    <h4 class="text-h5 font-weight-bold mb-2 text-white">Feasibility Analysis</h4>
                                    <p class="text-body-2 opacity-70 mb-0">High-fidelity analysis, asset assessment pipelines, tactical discovery strategies, and data auditing steps.</p>
                                </div>
                            </div>
                        </v-col>

                        <v-col cols="12" md="4" lg="3">
                            <div class="modern-service-card">
                                <div class="card-ambient-glow"></div>
                                <div class="icon-container-box mb-6">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4f9cff" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <div class="card-content">
                                    <div class="card-index">02 // STRATEGY</div>
                                    <h4 class="text-h5 font-weight-bold mb-2 text-white">Consultation</h4>
                                    <p class="text-body-2 opacity-70 mb-0">Structural health modeling blueprints, computational tuning profiles, and deep architectural oversight assessments.</p>
                                </div>
                            </div>
                        </v-col>

                        <v-col cols="12" md="4" lg="3">
                            <div class="modern-service-card">
                                <div class="card-ambient-glow"></div>
                                <div class="icon-container-box mb-6">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4f9cff" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="16 18 22 12 16 6"></polyline>
                                        <polyline points="8 6 2 12 8 18"></polyline>
                                    </svg>
                                </div>
                                <div class="card-content">
                                    <div class="card-index">03 // DEPLOYMENT</div>
                                    <h4 class="text-h5 font-weight-bold mb-2 text-white">Software Dev</h4>
                                    <p class="text-body-2 opacity-70 mb-0">Full-stack engine builds, hardware system interface layer bridges, and interactive dashboard systems.</p>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-lazy>

        <v-lazy>
            <v-row class="py-2"><v-divider class="border-opacity-10"></v-divider></v-row>
        </v-lazy>

        <!-- SECTION 3: TEAM MEMBERS (ONE-SCREEN DYNAMIC HEIGHT LAYOUT) -->
        <v-lazy :options="{'threshold':0.3}" min-height="100vh">
            <v-row align="center" justify="center" class="height-screen min-vh-100 py-6">
                <v-col cols="12" class="max-screen-container">
                    <div class="section-tag mb-1">Our Brains</div>
                    <h2 class="text-h4 font-weight-bold mb-6">{{ $t("home.team.title") }}</h2>
                    
                    <!-- Forced Side-by-Side row placement on medium/large desktop screens -->
                    <v-row justify="center" class="g-4 flex-nowrap-md">
                        <v-col v-for="(member, index) in teamMembers" :key="index" md="4" cols="12" class="d-flex">
                            <div class="modern-team-card w-100">
                                <div class="card-ambient-glow"></div>
                                <div class="team-card-content text-center w-100">
                                    <TeamMemberComponent v-bind="member"></TeamMemberComponent>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-lazy>


        <v-lazy>
            <v-row class="py-2"><v-divider class="border-opacity-10"></v-divider></v-row>
        </v-lazy>

        <!-- SECTION 5: HOW WE WORK -->
        <v-lazy :options="{'threshold':0.3}" min-height="40vh">
            <v-row class="py-12" align="center">
                <v-col cols="12" lg="4" class="mb-6 mb-lg-0">
                    <div class="section-tag mb-2">Workflow Strategy</div>
                    <h2 class="text-h4 font-weight-bold mb-4">How We Work</h2>
                    <p class="text-body-1 opacity-70">
                        Our workflow is structural, agile, and iterative. We start with comprehensive data collections, proceed to precise structural modeling, and continuously validate results inside production-ready visual dashboards to keep development transparent.
                    </p>
                </v-col>

                <v-col cols="12" lg="8">
                    <v-row align="stretch" justify="center" class="text-center text-sm-left g-4">
                        <v-col cols="12" sm="3" class="d-flex flex-column align-center justify-start">
                            <div class="icon-wrapper mb-3">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4f9cff" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                                    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
                                </svg>
                            </div>
                            <div class="text-center">
                                <h4 class="text-h6 font-weight-bold mb-1">1. Collect</h4>
                                <span class="text-caption opacity-70">Data Pipelines</span>
                            </div>
                        </v-col>

                        <!-- Corrected Arrow Alignment Container with vertical control offset -->
                        <v-col cols="12" sm="1" class="d-none d-sm-flex align-self-center justify-center pb-8">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="opacity-30">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </v-col>

                        <v-col cols="12" sm="3" class="d-flex flex-column align-center justify-start">
                            <div class="icon-wrapper mb-3">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4f9cff" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M4.5 16.5c-1.5 1.26-2.5 3.19-2.5 5.5h20c0-2.31-1-4.24-2.5-5.5"></path>
                                    <path d="M12 2v10"></path>
                                    <path d="M12 12l-5 4"></path>
                                    <path d="M12 12l5 4"></path>
                                    <circle cx="12" cy="12" r="2" fill="#4f9cff"></circle>
                                    <circle cx="12" cy="2" r="1"></circle>
                                    <circle cx="7" cy="16" r="1"></circle>
                                    <circle cx="17" cy="16" r="1"></circle>
                                </svg>
                            </div>
                            <div class="text-center">
                                <h4 class="text-h6 font-weight-bold mb-1">2. Model</h4>
                                <span class="text-caption opacity-70">Structural Architecture</span>
                            </div>
                        </v-col>

                        <!-- Corrected Arrow Alignment Container with vertical control offset -->
                        <v-col cols="12" sm="1" class="d-none d-sm-flex align-self-center justify-center pb-8">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="opacity-30">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </v-col>

                        <v-col cols="12" sm="3" class="d-flex flex-column align-center justify-start">
                            <div class="icon-wrapper mb-3">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4f9cff" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="9" y1="3" x2="9" y2="21"></line>
                                    <line x1="9" y1="9" x2="21" y2="9"></line>
                                    <polyline points="13 14 15 16 19 12"></polyline>
                                </svg>
                            </div>
                            <div class="text-center">
                                <h4 class="text-h6 font-weight-bold mb-1">3. Validate</h4>
                                <span class="text-caption opacity-70">Production Dashboards</span>
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-lazy>

        <v-lazy>
            <v-row class="py-2"><v-divider class="border-opacity-10"></v-divider></v-row>
        </v-lazy>

        <!-- SECTION 6: LOGO SLIDER -->
        <v-lazy :options="{ threshold: 0.3 }" min-height="30vh">
            <v-row class="py-12" justify="center" align="center">
                <v-col cols="12">
                    <h2 class="text-center text-h4 font-weight-bold mb-8">
                        {{ $t("home.partners.title") }}
                    </h2>
                    <LogoSliderComponent />
                </v-col>
            </v-row>
        </v-lazy>

        <v-lazy>
            <v-row class="py-2"><v-divider class="border-opacity-10"></v-divider></v-row>
        </v-lazy>

        <!-- SECTION 7: CONTACT -->
        <v-lazy :options="{ threshold: 0.3 }" min-height="50vh">
            <v-row id="contact" justify="center" class="py-12">
                <v-col cols="12" md="8" lg="6" class="text-center">
                    <div class="form-card">
                        <h2 class="title font-weight-bold text-h5 text-white">Let's work together</h2>
                        <p class="subtitle">Send us a message or subscribe to our newsletter to learn more about our projects.</p>

                        <form action="https://formspree.io/f/mwvjozjw" method="POST">
                            <label class="label">Email</label>
                            <input class="input" type="email" name="email" placeholder="you@example.com" required />

                            <label class="label">Message</label>
                            <textarea class="textarea" name="message" placeholder="Your message..." rows="4"></textarea>

                            <label class="checkbox">
                                <input type="checkbox" name="consent" required />
                                <span>I agree that my mail address is only used to send our newsletter.</span>
                            </label>

                            <p class="privacy-text">
                                I have read the <a href="#/imprint">privacy policy</a>. The mail address is collected via <a href="https://formspree.io" target="_blank" rel="noopener">Formspree</a>.
                                You can revoke your consent at any time.
                            </p>

                            <button class="button" type="submit">Send message</button>
                        </form>
                    </div>
                </v-col>
            </v-row>
        </v-lazy>

        <v-lazy>
            <v-row class="py-2"><v-divider class="border-opacity-10"></v-divider></v-row>
        </v-lazy>

    </v-container>
</template>

<style scoped>
/* Core Global Layout Overrides */
.min-vh-100 {
  min-height: 100vh !important;
}
.g-4 { --v-gc-start: 16px; row-gap: 16px; column-gap: 16px; }
.g-6 { --v-gc-start: 24px; row-gap: 24px; column-gap: 24px; }

/* Desktop view constraint helper to fit comfortably in 14'' displays */
@media (min-width: 960px) {
  .flex-nowrap-md {
    flex-wrap: nowrap !important;
  }
  .max-screen-container {
    max-height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

.section-tag {
  color: #4f9cff;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 700;
}

/* Typography Enhancements */
.hero-title {
  letter-spacing: -1px !important;
  line-height: 1.2 !important;
  background: linear-gradient(180deg, #ffffff 40%, rgba(255, 255, 255, 0.7) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Modernized Shared Card Systems */
.modern-purpose-card,
.modern-service-card,
.modern-team-card {
  background: linear-gradient(145deg, rgba(20, 20, 20, 0.6) 0%, rgba(10, 10, 10, 0.8) 100%);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 14px;
  padding: 24px 20px;
  height: 100%;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
}

/* Specifically Center Content inside Team Box wrapper while leaving others clean-aligned */
.modern-team-card {
  align-items: center;
  justify-content: center;
  padding: 24px 16px;
}

/* Scaling deep component components images inside compact team cards directly */
.modern-team-card :deep(img), 
.modern-team-card :deep(.v-avatar) {
  max-width: 110px !important;
  max-height: 110px !important;
  margin-bottom: 12px !important;
}

.modern-purpose-card:hover,
.modern-service-card:hover,
.modern-team-card:hover {
  transform: translateY(-4px);
  border-color: rgba(79, 156, 255, 0.3);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
}

.card-ambient-glow {
  position: absolute;
  top: -20%;
  left: -20%;
  width: 60%;
  height: 60%;
  background: radial-gradient(circle, rgba(79, 156, 255, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.icon-container-box {
  background: rgba(79, 156, 255, 0.03);
  border: 1px solid rgba(79, 156, 255, 0.15);
  border-radius: 10px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.modern-purpose-card:hover .icon-container-box,
.modern-service-card:hover .icon-container-box {
  background: rgba(79, 156, 255, 0.1);
  border-color: #4f9cff;
  box-shadow: 0 0 12px rgba(79, 156, 255, 0.2);
}

.card-index {
  font-family: monospace;
  font-size: 10px;
  letter-spacing: 1px;
  color: rgba(79, 156, 255, 0.6);
  margin-bottom: 4px;
}

.opacity-70 { opacity: 0.7; }
/* Card */
.form-card {
  background: #121212;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 28px;
  color: #fff;
  text-align: left;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}

/* Typography */
.title {
  font-size: 22px;
  margin-bottom: 6px;
}

.subtitle {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 20px;
}

/* Labels */
.label {
  display: block;
  font-size: 13px;
  margin: 14px 0 6px;
  color: rgba(255, 255, 255, 0.8);
}

/* Inputs */
.input,
.textarea {
  width: 100%;
  background: #1e1e1e;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 12px 14px;
  color: #fff;
  outline: none;
  transition: 0.2s ease;
  font-size: 14px;
}

.input:focus,
.textarea:focus {
  border-color: #4f9cff;
  box-shadow: 0 0 0 2px rgba(79, 156, 255, 0.2);
}

/* Checkbox */
.checkbox {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 14px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
}

.privacy-text {
  font-size: 12px;
  opacity: 0.6;
  margin-top: 8px;
  line-height: 1.4;
}

/* Button */
.button {
  margin-top: 18px;
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 10px;
  background: #4f9cff;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease;
}

.button:hover {
  background: #3b82f6;
  transform: translateY(-1px);
}

.button:active {
  transform: translateY(0);
}
</style>