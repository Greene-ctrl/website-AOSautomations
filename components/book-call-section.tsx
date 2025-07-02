import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export function BookCallSection() {
  return (
    <section className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Single Column Layout */}
          <div className="flex flex-col items-center text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Put repetitive tasks on autopilot</h2>

            <div className="relative text-gray-600 space-y-4 max-w-3xl">
              {/* Hand-drawn arrow SVG */}
              <svg
                className="absolute -left-16 -top-2 w-20 h-16 opacity-30 hidden xl:block"
                viewBox="0 0 80 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 20C15 8 25 12 35 18C45 24 55 30 65 25C70 22 72 18 70 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
                <path d="M65 12L70 15L67 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
              </svg>

              <div className="relative z-10 text-lg leading-relaxed">
                <p>
                  You're not in the business of preparing documents, filling spreadsheets, copying data, or writing the
                  same emails every day.
                </p>
                <p className="mt-3 font-medium text-gray-800">
                  You are in the business of delivering results to your clients.
                </p>
              </div>
            </div>

            <ul className="space-y-4 max-w-2xl">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-blue-500 fill-blue-500 text-white shrink-0 mt-0.5" />
                <span className="font-medium text-gray-800">More focus on strategic work vs. manual work</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-blue-500 fill-blue-500 text-white shrink-0 mt-0.5" />
                <span className="font-medium text-gray-800">No more bottlenecks or delays</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-blue-500 fill-blue-500 text-white shrink-0 mt-0.5" />
                <span className="font-medium text-gray-800">Higher output per employee</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-blue-500 fill-blue-500 text-white shrink-0 mt-0.5" />
                <span className="font-medium text-gray-800">Predictable, scalable operations</span>
              </li>
            </ul>

            <div className="pt-4">
              <Link href="https://calendly.com/leon-gruendling" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg">
                  Book your Consultation now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
