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

    const teamMembers:TeamMemberType[] = TeamMembers

    const ProjectComponent = defineAsyncComponent({
        loader: () => import('@/components/home/Projects.vue')
    });

    const projects: ProjectType[] = Projects;
</script>

<template>
    <v-container class="py-0" fluid>
        
        <!-- SECTION 1: WHAT WE DO (COMPANY PURPOSE) -->
        <v-lazy :options="{'threshold':0.5}" min-height="100vh">
            <v-row align="center" class="height-screen">
                <v-col cols="12">
                    <v-row class="text-center">
                        <v-col cols="12">
                            <HeaderLogoComponent height="100px"></HeaderLogoComponent>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <h2>{{ $t("home.companyPurpose.title") }}</h2>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col v-for="(companyPurpose, index) in companyPurposes" :key="`purpose-${index}`" md="4" cols="12">
                            <CompanyPurposeComponent v-bind="companyPurpose"></CompanyPurposeComponent>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-lazy>

        <v-lazy>
            <v-row class="py-5"><v-divider></v-divider></v-row>
        </v-lazy>

        <!-- SECTION 2: OUR SERVICES (RE-STYLED TO MATCH "HOW WE WORK") -->
        <v-lazy :options="{'threshold':0.3}" min-height="40vh">
            <v-row class="py-10" align="center">
                <v-col cols="12" lg="4" class="mb-6 mb-lg-0">
                    <h2 class="mb-4">Our Services</h2>
                    <p class="text-body-1 opacity-70">
                        We offer specialized high-performance capabilities tailored to your infrastructure requirements. From tactical analytical strategies to robust full-stack software development, we engineer tools that scale with your operations.
                    </p>
                </v-col>

                <v-col cols="12" lg="8">
                    <v-row align="center" justify="center" class="text-center text-sm-left">

                        <v-col cols="12" sm="3" class="d-flex flex-column align-center justify-center">
                            <div class="icon-wrapper mb-3">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4f9cff" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                                    <polyline points="14 2 14 8 20 8"></polyline>
                                    <path d="M16 13H8"></path>
                                    <path d="M16 17H8"></path>
                                    <path d="M10 9H8"></path>
                                </svg>
                            </div>
                            <div class="text-center">
                                <h4 class="text-h6 font-weight-bold mb-1">A. Feasibility</h4>
                                <span class="text-caption opacity-70">Analytics & Strategy</span>
                            </div>
                        </v-col>

                        <v-col cols="12" sm="3" class="d-flex flex-column align-center justify-center">
                            <div class="icon-wrapper mb-3">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4f9cff" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                            </div>
                            <div class="text-center">
                                <h4 class="text-h6 font-weight-bold mb-1">B. Consultation</h4>
                                <span class="text-caption opacity-70">Efficiency & Tuning</span>
                            </div>
                        </v-col>

                        <v-col cols="12" sm="3" class="d-flex flex-column align-center justify-center">
                            <div class="icon-wrapper mb-3">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4f9cff" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="16 18 22 12 16 6"></polyline>
                                    <polyline points="8 6 2 12 8 18"></polyline>
                                    <line x1="14" y1="4" x2="10" y2="20"></line>
                                </svg>
                            </div>
                            <div class="text-center">
                                <h4 class="text-h6 font-weight-bold mb-1">C. Development</h4>
                                <span class="text-caption opacity-70">Full-Stack Architecture</span>
                            </div>
                        </v-col>
                        
                    </v-row>
                </v-col>
            </v-row>
        </v-lazy>

        <v-lazy>
            <v-row class="py-5"><v-divider></v-divider></v-row>
        </v-lazy>

        <!-- SECTION 3: TEAM MEMBERS -->
        <v-lazy :options="{'threshold':0.3}" min-height="50vh">
            <v-row class="height-screen">
                <v-col cols="12">
                    <h2>{{ $t("home.team.title") }}</h2>
                </v-col>
                <v-col cols="12">
                    <v-row justify="center">
                        <v-col v-for="(member, index) in teamMembers" :key="index" class="text-center" md="4" cols="12">
                            <v-lazy :options="{'threshold':0.33}" min-height="50vh">
                                <TeamMemberComponent v-bind="member"></TeamMemberComponent>
                            </v-lazy>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-lazy>

        <v-lazy>
            <v-row class="py-5"><v-divider></v-divider></v-row>
        </v-lazy>

        <!-- SECTION 4: PROJECTS -->
        <v-lazy :options="{'threshold':0.3}" min-height="50vh">
            <v-row align="center" class="height-screen">
                <v-col cols="12">
                    <h2>{{ $t("home.projects.title") }}</h2>
                </v-col>
                <v-col cols="12">
                    <v-row justify="center">
                        <v-col v-for="(project, index) in projects" :key="`project-${index}`" md="4" cols="12">
                            <v-lazy :options="{'threshold':0.33}" min-height="50vh">
                                <ProjectComponent v-bind="project"></ProjectComponent>
                            </v-lazy>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-lazy>

        <v-lazy>
            <v-row class="py-5"><v-divider></v-divider></v-row>
        </v-lazy>

        <!-- SECTION 5: HOW WE WORK (SCHEMATIC) -->
        <v-lazy :options="{'threshold':0.3}" min-height="40vh">
            <v-row class="py-10" align="center">
                <v-col cols="12" lg="4" class="mb-6 mb-lg-0">
                    <h2 class="mb-4">How We Work</h2>
                    <p class="text-body-1 opacity-70">
                        Our workflow is structural, agile, and iterative. We start with comprehensive data collections, proceed to precise structural modeling, and continuously validate results inside production-ready visual dashboards to keep development transparent.
                    </p>
                </v-col>

                <v-col cols="12" lg="8">
                    <v-row align="center" justify="center" class="text-center text-sm-left">
                        
                        <v-col cols="12" sm="3" class="d-flex flex-column align-center justify-center">
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

                        <v-col cols="12" sm="1" class="d-none d-sm-flex justify-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="opacity-30">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </v-col>

                        <v-col cols="12" sm="3" class="d-flex flex-column align-center justify-center">
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

                        <v-col cols="12" sm="1" class="d-none d-sm-flex justify-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="opacity-30">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </v-col>

                        <v-col cols="12" sm="3" class="d-flex flex-column align-center justify-center">
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
            <v-row class="py-5"><v-divider></v-divider></v-row>
        </v-lazy>

        <!-- SECTION 6: LOGO SLIDER (PARTNERS / NETWORKS) -->
        <v-lazy :options="{ threshold: 0.3 }" min-height="30vh">
            <v-row class="py-10" justify="center" align="center">
                <v-col cols="12">
                    <h2 class="text-center mb-6">
                        {{ $t("home.partners.title") }}
                    </h2>
                    <LogoSliderComponent />
                </v-col>
            </v-row>
        </v-lazy>

        <v-lazy>
            <v-row class="py-5"><v-divider></v-divider></v-row>
        </v-lazy>

        <!-- NEW SECTION 7: CONTACT / NEWSLETTER -->
        <v-lazy :options="{ threshold: 0.3 }" min-height="50vh">
            <v-row justify="center" class="py-10">
                <v-col cols="12" md="6" class="text-center">
                    <div class="form-card">
                        <h2 class="title">Let's work together</h2>
                        <p class="subtitle">Send us a message or subscribe to our newsletter to learn more about our projects.</p>

                        <form action="https://formspree.io/f/mwvjozjw" method="POST">
                            <label class="label">Email</label>
                            <input
                                class="input"
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                required
                            />

                            <label class="label">Message</label>
                            <textarea
                                class="textarea"
                                name="message"
                                placeholder="Your message..."
                                rows="5"
                            ></textarea>

                            <label class="checkbox">
                                <input type="checkbox" name="consent" required />
                                <span>I agree that my mail address is only used to send our newsletter.</span>
                            </label>

                            <p class="privacy-text">
                                I have read the <a href="#/imprint">privacy policy</a>. The mail address is collected via <a href="https://formspree.io" target="_blank" rel="noopener">Formspree</a>.
                                You can revoke your consent at any time.
                            </p>

                            <button class="button" type="submit">
                                Send message
                            </button>
                        </form>
                    </div>
                </v-col>
            </v-row>
        </v-lazy>

        <v-lazy>
            <v-row class="py-5"><v-divider></v-divider></v-row>
        </v-lazy>

    </v-container>
</template>

<style scoped>
/* Forms Card layout styling */
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

/* Checkbox alignment correction */
.checkbox {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-top: 14px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
}

.checkbox input {
  margin-top: 3px;
}

.privacy-text {
  font-size: 12px;
  opacity: 0.6;
  margin-top: 12px;
  line-height: 1.4;
}

.privacy-text a {
  color: #4f9cff;
  text-decoration: none;
}
.privacy-text a:hover {
  text-decoration: underline;
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

/* Icon Elements Styling */
.icon-wrapper {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.icon-wrapper:hover {
  transform: translateY(-4px);
  border-color: #4f9cff;
}

.opacity-30 {
  opacity: 0.3;
}

/* Utility layout extensions */
.opacity-70 {
  opacity: 0.7;
}
</style>