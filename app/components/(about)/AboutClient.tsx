"use client";

import {
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaBriefcase,
  FaProjectDiagram,
  FaUserCheck,
  FaGraduationCap,
  FaInstagram,
} from "react-icons/fa";

import {
  HeroDiv,
  InstaButton,
  StaggerGrid,
  StaggerCard,
  SectionFadeInUp,
  SectionFadeIn,
  HeadingFadeInUp,
  HoverCard,
  HoverCardSmall,
  RotateIconDiv,
} from "@/app/components/(about)/AboutAnimations";

export default function AboutClient() {
  return (
    <div className="container max-w-7xl mx-auto py-16 px-4 overflow-hidden">
      {/* 1. HERO SECTION */}
      <HeroDiv className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
          Shivansh Singh | Full Stack Web Developer 
        </h1>
        <p className="text-xl text-gray-500 font-medium max-w-3xl mx-auto">
          Engineering High-Performance Digital Solutions and Advanced Local SEO Strategies for Businesses in Saharanpur, Haridwar, & Dehradun.
        </p>

        {/* INSTAGRAM BUTTON */}
        <InstaButton
          href="https://www.instagram.com/shivanshdeveloper"
          className="mt-8 inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-3.5 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white text-sm md:text-base font-bold rounded-full shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300"
        >
          <FaInstagram className="text-2xl md:text-3xl" />
          <span>Follow My Development Journey</span>
        </InstaButton>
      </HeroDiv>

      {/* 2. STATS BAR */}
      <StaggerGrid className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-16">
        <StaggerCard className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl text-center border border-blue-100 dark:border-blue-800">
          <FaBriefcase className="text-3xl text-blue-600 mx-auto mb-2" />
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">2+ Years</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Industry Experience</p>
        </StaggerCard>
        
        <StaggerCard className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-2xl text-center border border-purple-100 dark:border-purple-800">
          <FaProjectDiagram className="text-3xl text-purple-600 mx-auto mb-2" />
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">80+ Portals</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</p>
        </StaggerCard>
        
        <StaggerCard className="hidden md:block bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl text-center border border-green-100 dark:border-green-800">
          <FaUserCheck className="text-3xl text-green-600 mx-auto mb-2" />
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">100%</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Client Retention</p>
        </StaggerCard>
      </StaggerGrid>

      {/* 3. BIO SECTION */}
      <SectionFadeInUp className="mb-20">
        <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 max-w-5xl mx-auto text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed font-light">
            I build responsive, high-converting web applications engineered specifically to{" "}
            <strong className="font-bold text-blue-600">generate organic leads, </strong> elevate digital storefronts, and achieve{" "}
            <strong className="font-bold text-green-600">measurable business expansion.</strong>
            <br />
            <br />
            From designing advanced online admission tracking portals for premier coaching centers like Saharanpur&apos;s trusted{" "}
            <strong className="text-gray-900 dark:text-white font-bold bg-yellow-100 dark:bg-yellow-900/30 px-2 rounded-md mx-1">
              ABC Institute & Rapti Institute
            </strong>
            , to implementing local SEO structures for businesses across Haridwar and Dehradun, I prioritize ultra-fast page speeds, enterprise security, and intuitive designs.
          </p>
        </div>
      </SectionFadeInUp>

      {/* 4. EXPERTISE CARDS */}
      <SectionFadeIn className="mb-20" delay={0.2}>
        <HeadingFadeInUp className="text-3xl font-bold text-center mb-10">
          Full Stack Web Solutions & Technical Expertise
        </HeadingFadeInUp>
        
        <StaggerGrid className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <HoverCard className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-t-4 border-blue-500">
            <div className="bg-blue-100 dark:bg-blue-900/30 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <FaCode className="h-7 w-7 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Frontend Architecture</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm">
              Creating lightweight UI/UX layouts utilizing semantic patterns to guarantee accessibility, cross-browser compatibility, and seamless mobile indexing.
            </p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2 font-medium text-sm">
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> Next.js 14 / React Framework</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> Tailwind CSS Responsive Design</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> Fluid Motion UI Custom Animations</li>
            </ul>
          </HoverCard>

          {/* Card 2 */}
          <HoverCard className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-t-4 border-green-500">
            <div className="bg-green-100 dark:bg-green-900/30 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <FaLaptopCode className="h-7 w-7 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Backend & Database</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm">
              Developing secure custom servers capable of managing student enrollment databases, data handling pipelines, and real-time operations.
            </p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2 font-medium text-sm">
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full"></span> Node.js / Express Server Systems</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full"></span> MongoDB Encrypted Databases</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full"></span> JWT Access and Secure Authorization</li>
            </ul>
          </HoverCard>

          {/* Card 3 */}
          <HoverCard className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border-t-4 border-purple-500">
            <div className="bg-purple-100 dark:bg-purple-900/30 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <FaRocket className="h-7 w-7 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Local SEO Optimization</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm">
              Integrating advanced schema tags, Core Web Vitals optimizations, and localized keyword architectures to rank businesses at the top of Google.
            </p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2 font-medium text-sm">
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-purple-500 rounded-full"></span> Programmatic Local SEO Architectures</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-purple-500 rounded-full"></span> Server-Side Rendering (SSR) Speed</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-purple-500 rounded-full"></span> Razorpay & Stripe Gateway Links</li>
            </ul>
          </HoverCard>
        </StaggerGrid>
      </SectionFadeIn>

      {/* 5. EXPERIENCE */}
      <SectionFadeIn className="mb-20" delay={0.4}>
        <HeadingFadeInUp className="text-3xl font-bold text-center mb-10">
          Professional Portfolio & Milestones
        </HeadingFadeInUp>
        
        <StaggerGrid className="max-w-4xl mx-auto space-y-8">
          {/* Exp 1 */}
          <HoverCardSmall className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg overflow-hidden group">
            <div className="absolute left-0 top-0 h-full w-2 bg-blue-600 group-hover:w-3 transition-all"></div>
            <div className="flex flex-col md:flex-row justify-between mb-4 items-start md:items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Lead Website Developer & Infrastructure Consultant</h3>
                <p className="text-blue-600 font-bold text-lg">ABC & Rapti Institute (Saharanpur Regional Hub)</p>
              </div>
              <span className="bg-blue-50 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mt-2 md:mt-0">2025 - Present</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
              &quot;Supervised the complete custom software overhaul for Saharanpur&apos;s leading educational institutions, improving student discovery across search engines.&quot;
            </p>
            <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-2">✅ Captured 1000+ Verified Inquiries</li>
              <li className="flex items-start gap-2">✅ Automated Secure Student Database Logs</li>
              <li className="flex items-start gap-2">✅ Optimized Mobile UX Frameworks</li>
              <li className="flex items-start gap-2">✅ Enhanced Performance Scores to 95+</li>
            </ul>
          </HoverCardSmall>

          {/* Exp 2 */}
          <HoverCardSmall className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg overflow-hidden group">
            <div className="absolute left-0 top-0 h-full w-2 bg-green-500 group-hover:w-3 transition-all"></div>
            <div className="flex flex-col md:flex-row justify-between mb-4 items-start md:items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Freelance Full Stack Developer & SEO Consultant</h3>
                <p className="text-green-600 font-bold text-lg">Remote Contracting Services (Saharanpur / Haridwar / Dehradun)</p>
              </div>
              <span className="bg-green-50 text-green-700 px-4 py-1 rounded-full text-sm font-semibold mt-2 md:mt-0">2020 - 2023</span>
            </div>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
              <li>• Designed and deployed <strong>15+ custom e-commerce platforms</strong> and business portfolios maximizing lead conversion properties.</li>
              <li>• Programmed seamless transactions by integrating secure payment gateways including Razorpay and Stripe API layers.</li>
              <li>• Boosted map display conversions for local enterprises across Uttar Pradesh and Uttarakhand through precise geographic markup structures.</li>
            </ul>
          </HoverCardSmall>
        </StaggerGrid>
      </SectionFadeIn>

      {/* 6. EDUCATION */}
      <SectionFadeIn delay={0.6}>
        <div className="max-w-2xl mx-auto text-center">
          <RotateIconDiv className="inline-block p-4 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
            <FaGraduationCap className="text-4xl text-gray-700 dark:text-gray-300" />
          </RotateIconDiv>
          <h2 className="text-2xl font-bold mb-2">Self-Taught Full Stack Software Developer</h2>
          <p className="text-blue-600 font-medium text-lg">J.V Jain College, Saharanpur • Class of 2024</p>
          <p className="text-gray-500 text-sm mt-2">Specialized in Web Application Frameworks & Information Technology</p>
        </div>
      </SectionFadeIn>
    </div>
  );
}