import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, Menu, ChevronDown } from "lucide-react"
import Link from "next/link"
import { FlowField } from "@/components/flow-field"
import { BookCallSection } from "@/components/book-call-section"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white relative overflow-hidden">
      {/* Animated Flow Field Background */}
      <div className="fixed inset-0 z-0">
        <FlowField />
      </div>

      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b">
        <div className="container flex h-16 items-center justify-between relative z-10">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold">AI AUTOMATION</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#services"
              className="text-sm font-medium uppercase tracking-wide hover:text-blue-500 transition-colors"
            >
              SERVICES
            </Link>
            <Link
              href="#results"
              className="text-sm font-medium uppercase tracking-wide hover:text-blue-500 transition-colors"
            >
              RESULTS
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium uppercase tracking-wide hover:text-blue-500 transition-colors"
            >
              ABOUT US
            </Link>
            <Link
              href="#resources"
              className="text-sm font-medium uppercase tracking-wide hover:text-blue-500 transition-colors"
            >
              RESOURCES
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="https://calendly.com/leon-gruendling" target="_blank" rel="noopener noreferrer">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6">GET STARTED</Button>
            </Link>
            <Button variant="ghost" size="sm" className="md:hidden p-0">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 relative">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                Build the Future of Work with AI-Driven Automation
              </h1>
              <div className="text-2xl md:text-3xl font-semibold text-gray-700">
                Hosting. Integrations. Agents. All-in-One.
              </div>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Imagine a workspace where AI doesn't just assist your tools—it uses them. Welcome to the next generation
                of AI infrastructure, where open-source freedom meets intelligent automation.
              </p>
              <div className="pt-4">
                <Button variant="link" className="text-lg p-0 h-auto text-blue-500 hover:text-blue-600">
                  Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="w-full py-16 md:py-24 bg-gray-50/80 backdrop-blur-sm relative">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">What We Do</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're an AI Hosting & Automation Agency built for creators, founders, and teams who believe in owning
                their technology. We don't just host your open-source tools—we transform them into intelligent systems
                that AI agents can actively use to complete real work.
              </p>
              <p className="text-lg text-gray-600">
                From Notion to Nextcloud, Supabase to your custom-built app—we deploy, connect, and automate your stack
                end to end.
              </p>
            </div>
          </div>
        </section>

        {/* Automated Processes Marquee Section */}
        <section className="w-full py-12 bg-white/90 backdrop-blur-sm overflow-hidden relative">
          <div className="container px-4 md:px-6 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center">What We Host (and Supercharge)</h2>
          </div>
          <div className="relative">
            <div className="flex animate-marquee whitespace-nowrap">
              <span className="mx-8 text-lg font-medium">Nextcloud for secure file management</span>
              <span className="mx-8 text-lg font-medium">AppFlowy and Outline for team knowledge</span>
              <span className="mx-8 text-lg font-medium">Metabase and Superset for business intelligence</span>
              <span className="mx-8 text-lg font-medium">Supabase and PostgreSQL for data storage</span>
              <span className="mx-8 text-lg font-medium">LibreOffice and Etherpad for collaboration</span>
              <span className="mx-8 text-lg font-medium">Custom containerized applications</span>
              <span className="mx-8 text-lg font-medium">AI agent integrations</span>
              <span className="mx-8 text-lg font-medium">Full-stack automation</span>
            </div>
          </div>
        </section>

        {/* Book Call Section */}
        <BookCallSection />

        {/* How We Work Section - Custom Accordion */}
        <section id="services" className="w-full py-20 md:py-32 bg-gray-50/80 backdrop-blur-sm relative">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How It Works</h2>

              <Accordion type="single" collapsible className="w-full space-y-6">
                <AccordionItem value="item-1" className="border-0 bg-white/90 backdrop-blur-sm rounded-lg p-6">
                  <AccordionTrigger className="hover:no-underline p-0">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center space-x-4">
                        <div className="text-4xl font-bold text-blue-500">01</div>
                        <h3 className="text-2xl font-bold text-left">Host Anything</h3>
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-300 transition-transform duration-200 group-data-[state=open]:rotate-180">
                        <ChevronDown className="h-5 w-5" />
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pl-16">
                    <p className="text-gray-600 leading-relaxed">
                      We set up, secure, and scale your open-source applications on local or cloud
                      infrastructure—without technical overhead or DevOps stress.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-0 bg-white/90 backdrop-blur-sm rounded-lg p-6">
                  <AccordionTrigger className="hover:no-underline p-0">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center space-x-4">
                        <div className="text-4xl font-bold text-blue-500">02</div>
                        <h3 className="text-2xl font-bold text-left">Connect to AI Agents</h3>
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-300 transition-transform duration-200 group-data-[state=open]:rotate-180">
                        <ChevronDown className="h-5 w-5" />
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pl-16">
                    <p className="text-gray-600 leading-relaxed">
                      Our agents aren't just conversational—they're operational. We wire them into your hosted apps so
                      they can read data, write documents, trigger actions, and manage workflows.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-0 bg-white/90 backdrop-blur-sm rounded-lg p-6">
                  <AccordionTrigger className="hover:no-underline p-0">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center space-x-4">
                        <div className="text-4xl font-bold text-blue-500">03</div>
                        <h3 className="text-2xl font-bold text-left">Automate Everything</h3>
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-300 transition-transform duration-200 group-data-[state=open]:rotate-180">
                        <ChevronDown className="h-5 w-5" />
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pl-16">
                    <p className="text-gray-600 leading-relaxed">
                      From generating reports to running multi-step processes, your AI system becomes a 24/7 digital
                      operations team.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="resources" className="w-full py-20 md:py-32 relative">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Latest Insights</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="border-0 shadow-none bg-white/90 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      Why Local Hosting + AI is the Smartest Move You'll Make in 2025
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Most AI services run on cloud APIs controlled by big players. Discover why local hosting + AI
                      automation gives you total data control, zero usage limits, and true ownership.
                    </p>
                    <Button variant="link" className="p-0 h-auto text-blue-500 hover:text-blue-600">
                      Read Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-none bg-white/90 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      What If Your AI Could Actually Use Your Apps? (Now It Can)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Most AI agents are glorified assistants. We build agents that don't just talk—they act. They log
                      in, interact with tools, and perform tasks across your entire stack.
                    </p>
                    <Button variant="link" className="p-0 h-auto text-blue-500 hover:text-blue-600">
                      Read Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-none bg-white/90 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      Unlimited AI Usage: What That Really Means (and Why You Need It)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      AI should feel like magic—not like a meter ticking up. Our platform runs on open-source,
                      self-hosted AI models with no API limits, no usage tiers, no creative throttling.
                    </p>
                    <Button variant="link" className="p-0 h-auto text-blue-500 hover:text-blue-600">
                      Read Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="w-full py-20 md:py-32 relative">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">Built for Founders, Teams, and Independent Builders</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Whether you're scaling a SaaS product, managing client work, or tired of patching together disconnected
                tools—we help you build a truly cohesive system.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="text-left space-y-4">
                  <h3 className="text-xl font-semibold">End-to-end deployment and integration</h3>
                  <h3 className="text-xl font-semibold">Full-stack AI agent setup and orchestration</h3>
                </div>
                <div className="text-left space-y-4">
                  <h3 className="text-xl font-semibold">Private, secure, self-hosted infrastructure</h3>
                  <h3 className="text-xl font-semibold">Human support, whenever you need it</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* High-Contrast CTA Block */}
        <section className="w-full py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-500">
            {/* Enhanced background lines for blue section */}
            <svg width="100%" height="100%" viewBox="0 0 1200 800" className="absolute inset-0 opacity-20">
              <defs>
                <pattern id="blue-lines" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
                  <path d="M0,75 Q37.5,37.5 75,75 T150,75" stroke="white" strokeWidth="1.5" fill="none" opacity="0.6" />
                  <path
                    d="M0,112.5 Q37.5,75 75,112.5 T150,112.5"
                    stroke="white"
                    strokeWidth="1"
                    fill="none"
                    opacity="0.4"
                  />
                  <path
                    d="M0,37.5 Q37.5,0 75,37.5 T150,37.5"
                    stroke="white"
                    strokeWidth="1"
                    fill="none"
                    opacity="0.3"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#blue-lines)" />
            </svg>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-white">Let's scale together</h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                We've helped many businesses save 50,000+ hours and $100K+ with automation. Your AI system isn't a
                dream—it's deployable, scalable, and fully yours.
              </p>
              <Link href="https://calendly.com/leon-gruendling" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="secondary"
                  className="bg-white text-blue-500 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-full"
                >
                  Book your Consultation now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-20 md:py-32 bg-gray-50/80 backdrop-blur-sm relative">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="bg-white/90 backdrop-blur-sm px-6 rounded-lg border-0">
                  <AccordionTrigger className="text-left font-semibold">
                    What's the difference between this and other AI tools?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Most AI tools are cloud-based services with usage limits and data privacy concerns. We host
                    everything on your infrastructure, giving you unlimited usage, complete data control, and AI agents
                    that actually interact with your applications.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-white/90 backdrop-blur-sm px-6 rounded-lg border-0">
                  <AccordionTrigger className="text-left font-semibold">
                    Do I need technical expertise to use this?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Not at all. We handle all the technical setup, deployment, and integration. You get a fully
                    functional AI automation system without needing DevOps knowledge or technical overhead.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-white/90 backdrop-blur-sm px-6 rounded-lg border-0">
                  <AccordionTrigger className="text-left font-semibold">
                    What applications can you integrate with?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    We specialize in open-source tools like Nextcloud, Supabase, Metabase, and more. We can also
                    containerize and integrate your custom applications. If it has an API or interface, we can connect
                    AI agents to it.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-white/90 backdrop-blur-sm px-6 rounded-lg border-0">
                  <AccordionTrigger className="text-left font-semibold">How secure is self-hosted AI?</AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    Self-hosting is inherently more secure because your data never leaves your infrastructure. We
                    implement enterprise-grade security practices, encryption, and access controls to ensure your AI
                    system is both powerful and protected.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full py-20 md:py-32 relative">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Transform your workflow today</h2>
              <p className="text-xl text-gray-600">
                Join forward-thinking teams who've built their own AI automation ecosystems.
              </p>
              <Link href="https://calendly.com/leon-gruendling" target="_blank" rel="noopener noreferrer">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg">
                  Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="about" className="w-full py-12 bg-white/90 backdrop-blur-sm border-t relative z-10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <Link href="#about" className="text-sm hover:text-blue-500 transition-colors">
                About Us
              </Link>
              <Link href="#testimonials" className="text-sm hover:text-blue-500 transition-colors">
                Case Studies
              </Link>
              <Link
                href="https://calendly.com/leon-gruendling"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-blue-500 transition-colors"
              >
                Get Started
              </Link>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-600">© 2024 AI Automation. All rights reserved.</p>
              <div className="flex space-x-4 text-sm text-gray-600 mt-2 justify-center md:justify-end">
                <Link href="#" className="hover:text-blue-500 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-blue-500 transition-colors">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
