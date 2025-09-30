"use client";
import React, { useState, useEffect } from "react";
import {
  Shield,
  TrendingUp,
  Scale,
  ArrowRight,
  Lock,
  FileText,
  CheckCircle,
  BarChart3,
  Building2,
  Briefcase,
  Terminal,
  Cpu,
  Gavel,
  UserPlus,
  X,
} from "lucide-react";

export default function RivintelLanding() {
  const [scrollY, setScrollY] = useState(0);
  const [activeMetric, setActiveMetric] = useState(0);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [isDiscussModalOpen, setIsDiscussModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const capabilities = [
    {
      icon: Scale,
      title: "Strategic Patent Counsel",
      description:
        "Sophisticated portfolio strategy backed by decades of litigation experience and market intelligence.",
      features: [
        "Portfolio Architecture",
        "Competitive Positioning",
        "Risk Mitigation",
      ],
    },
    {
      icon: BarChart3,
      title: "IP Valuation & Analytics",
      description:
        "Quantitative analysis and financial modeling to maximize the commercial value of your intellectual assets.",
      features: ["Market Analysis", "ROI Forecasting", "Monetization Strategy"],
    },
    {
      icon: Building2,
      title: "Cross-Border Protection",
      description:
        "Navigate complex international IP frameworks with precision and regulatory expertise.",
      features: [
        "Multi-Jurisdictional Filing",
        "Treaty Optimization",
        "Global Enforcement",
      ],
    },
  ];

  const metrics = [
    {
      value: "$3.2B",
      label: "Client Portfolio Value",
      sublabel: "Under management",
    },
    { value: "96%", label: "Client Retention", sublabel: "Year over year" },
    { value: "150+", label: "Patents Secured", sublabel: "This quarter" },
    { value: "40+", label: "Years Experience", sublabel: "Combined expertise" },
  ];

  const careers = [
    {
      icon: Gavel,
      title: "Senior Patent Attorney",
      department: "Legal",
    },
    {
      icon: UserPlus,
      title: "HR Business Partner",
      department: "Human Resources",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Subtle geometric background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(56, 189, 248, 0.1) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-semibold text-slate-100">
                  Rivintel Research
                </div>
                <div className="text-xs text-cyan-400 font-mono">
                  Intellectual Property Advisors
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsConsultationModalOpen(true)}
              className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 font-medium"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </nav>

      {/* Consultation Modal */}
      {isConsultationModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-slate-900/90 border border-cyan-500/30 rounded-xl p-8 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-slate-100">
                Schedule Consultation
              </h3>
              <button
                onClick={() => setIsConsultationModalOpen(false)}
                className="text-slate-400 hover:text-cyan-400"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-slate-100"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-slate-100"
                  placeholder="Enter your email"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Discuss Modal */}
      {isDiscussModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-slate-900/90 border border-cyan-500/30 rounded-xl p-8 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-slate-100">
                Discuss Your Needs
              </h3>
              <button
                onClick={() => setIsDiscussModalOpen(false)}
                className="text-slate-400 hover:text-cyan-400"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-slate-100"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">
                  Message
                </label>
                <textarea
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-slate-100"
                  placeholder="Describe your needs"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg backdrop-blur-sm">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-300">
                Trusted by Global Innovators
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-slate-100">
              Intellectual Property
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mt-2">
                Excellence by Design
              </span>
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed">
              Strategic IP counsel that combines legal precision with business
              acumen. We protect innovation while driving measurable commercial
              value for market leaders.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsDiscussModalOpen(true)}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Discuss Your Needs
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-6 border-t border-slate-800">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border-2 border-slate-900"
                  />
                ))}
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-100">
                  Serving 200+ Organizations
                </div>
                <div className="text-xs text-slate-400">
                  From startups to Fortune 500
                </div>
              </div>
            </div>
          </div>

          {/* Metrics Cards */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className={`bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border transition-all duration-500 ${
                    activeMetric === idx
                      ? "border-cyan-500 shadow-xl shadow-cyan-500/20"
                      : "border-slate-800 shadow-sm"
                  }`}
                >
                  <div
                    className={`text-4xl font-bold mb-2 transition-colors duration-500 ${
                      activeMetric === idx
                        ? "bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                        : "text-slate-100"
                    }`}
                  >
                    {metric.value}
                  </div>
                  <div className="text-sm font-semibold text-slate-200 mb-1">
                    {metric.label}
                  </div>
                  <div className="text-xs text-slate-400">
                    {metric.sublabel}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="relative z-10 bg-slate-900/50 backdrop-blur-sm py-24 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-100 mb-4">
              Comprehensive IP Services
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Full-spectrum intellectual property counsel tailored to your
              business objectives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((capability, idx) => {
              const Icon = capability.icon;
              return (
                <div
                  key={idx}
                  className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-105 transition-transform shadow-lg shadow-cyan-500/20">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-100 mb-4">
                    {capability.title}
                  </h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {capability.description}
                  </p>
                  <ul className="space-y-2">
                    {capability.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-slate-300"
                      >
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                        <span className="text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise Timeline */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-100 mb-4">
            End-to-End IP Lifecycle Management
          </h2>
          <p className="text-xl text-slate-400">
            Strategic guidance at every stage of your intellectual property
            journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: FileText,
              title: "Creation & Filing",
              items: [
                "Patent Drafting",
                "Trademark Registration",
                "Copyright Protection",
              ],
            },
            {
              icon: Lock,
              title: "Protection & Defense",
              items: [
                "IP Audits",
                "Trade Secret Programs",
                "Security Protocols",
              ],
            },
            {
              icon: TrendingUp,
              title: "Commercialization",
              items: [
                "Licensing Strategy",
                "Technology Transfer",
                "Joint Ventures",
              ],
            },
            {
              icon: Briefcase,
              title: "Enforcement & Litigation",
              items: [
                "Infringement Analysis",
                "Cease & Desist",
                "Trial Support",
              ],
            },
          ].map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-slate-100 mb-3">
                  {stage.title}
                </h3>
                <ul className="space-y-2">
                  {stage.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Industry Focus */}
      <section className="relative z-10 bg-slate-900/50 backdrop-blur-sm border-y border-slate-800 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-100 mb-6">
                Industry-Specific Expertise
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                We deliver sector-focused IP strategies informed by deep
                technical knowledge and market dynamics across high-stakes
                industries.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Biotechnology & Life Sciences",
                  "Software & AI/ML",
                  "Medical Devices",
                  "Clean Energy",
                  "Semiconductors",
                  "Telecommunications",
                  "Consumer Electronics",
                  "Advanced Manufacturing",
                ].map((industry, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-slate-300"
                  >
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    <span className="text-sm font-medium">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8 hover:border-cyan-500/30 transition-all duration-300">
              <Cpu className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="text-2xl font-bold text-slate-100 mb-4">
                Partner with Senior Counsel
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Work directly with experienced partners who understand the
                intersection of innovation, regulation, and competitive
                strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-100 mb-4">
            Join Our Team
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Be part of a dynamic team shaping the future of intellectual
            property advisory services.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-8">
          <ul className="space-y-3">
            {careers.map((career, idx) => {
              const Icon = career.icon;
              return (
                <li
                  key={idx}
                  className="flex items-center gap-4 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/20">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-100">
                      {career.title}
                    </h3>
                    <p className="text-sm text-cyan-400">{career.department}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="text-center">
          <a
            href="https://www.linkedin.com/company/rivintel-research/jobs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
          >
            View Open Positions
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-24">
        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-slate-100 mb-4">
            Let's Discuss Your IP Strategy
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Schedule a confidential consultation to explore how Rivintel
            Research can strengthen your competitive position.
          </p>
          <button
            onClick={() => setIsConsultationModalOpen(true)}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
          >
            Schedule Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-slate-900/50 backdrop-blur-sm border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold text-slate-100">
              Rivintel Research
            </span>
          </div>
          <div className="text-sm text-slate-400 mt-4">
            © 2025 Rivintel Research. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
