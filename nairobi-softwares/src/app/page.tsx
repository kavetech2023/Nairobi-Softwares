"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  CheckCircle,
  Power,
  Smartphone,
  Zap,
  Users,
  Play,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Building2,
  ShoppingCart,
  Stethoscope,
  GraduationCap,
  Car,
  Utensils,
  Quote,
  X,
  Hexagon,
} from "lucide-react"
import Link from "next/link"
import { useState, useTransition } from "react"
import { sendContactEmail } from "@/lib/send-email"

function ContactForm() {
  const [isPending, startTransition] = useTransition()
  const [formState, setFormState] = useState<{
    success?: boolean
    message?: string
    error?: string
  } | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    startTransition(async () => {
      try {
        const result = await sendContactEmail(formData)
        setFormState(result)

        // Reset form if successful
        if (result.success) {
          const form = event.currentTarget
          form.reset()
        }
      } catch (error) {
        console.error("Form submission error:", error)
        setFormState({
          success: false,
          error: "An unexpected error occurred. Please try again.",
        })
      }
    })
  }

  return (
    <div className="space-y-8">
      <Card className="bg-white border-gray-200 p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Input
                name="firstName"
                placeholder="First Name *"
                required
                className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500"
              />
            </div>
            <div>
              <Input
                name="lastName"
                placeholder="Last Name *"
                required
                className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500"
              />
            </div>
          </div>
          <Input
            name="email"
            type="email"
            placeholder="Email Address *"
            required
            className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500"
          />
          <Input
            name="projectType"
            placeholder="Project Type (e.g., Website, Mobile App, E-commerce)"
            className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500"
          />
          <Textarea
            name="message"
            placeholder="Tell us about your project... *"
            rows={4}
            required
            className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500"
          />

          {/* Success/Error Messages */}
          {formState?.success && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 font-medium">✅ {formState.message}</p>
            </div>
          )}

          {formState?.error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 font-medium">❌ {formState.error}</p>
            </div>
          )}

          <Button
            type="submit"
            disabled={isPending}
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold disabled:opacity-50"
          >
            {isPending ? "Sending Message..." : "Send Message"}
          </Button>
        </form>
      </Card>
    </div>
  )
}

export default function HomePage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const videos = [
    {
      id: "e-commerce",
      title: "E-Commerce Platform",
      description: "AI-powered e-commerce solution with real-time inventory and smart recommendations",
      youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      gradient: "from-teal-500/20 to-emerald-500/20",
    },
    {
      id: "banking",
      title: "Banking Application",
      description: "Secure mobile banking app with biometric authentication and real-time transactions",
      youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      gradient: "from-purple-500/20 to-pink-500/20",
    },
  ]

  const openVideo = (videoId: string) => {
    setSelectedVideo(videoId)
  }

  const closeVideo = () => {
    setSelectedVideo(null)
  }

  const selectedVideoData = videos.find((video) => video.youtubeId === selectedVideo)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={closeVideo} />

          {/* Modal Content */}
          <div className="relative z-10 w-full max-w-6xl mx-4">
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-700">
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedVideoData?.title}</h3>
                  <p className="text-gray-400 mt-1">{selectedVideoData?.description}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeVideo}
                  className="text-gray-400 hover:text-white hover:bg-gray-800 rounded-full w-10 h-10 p-0"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Video Container */}
              <div className="relative aspect-video bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0&modestbranding=1`}
                  title={selectedVideoData?.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-gray-800/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Badge className="bg-teal-500/20 text-teal-300 border border-teal-500/30">Case Study</Badge>
                    <span className="text-sm text-gray-400">Watch how we delivered this project in 48 hours</span>
                  </div>
                  <Button className="bg-teal-500 hover:bg-teal-600 text-black font-semibold">Start Your Project</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/90 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Nairobi Softwares Company</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors cursor-pointer">
              <span>Services</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <Link href="#portfolio" className="text-gray-300 hover:text-white transition-colors">
              Our Works
            </Link>
            <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact Us
            </Link>
            <div className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors cursor-pointer">
              <span>Resources</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </nav>
          <Button className="bg-teal-500 hover:bg-teal-600 text-black font-semibold px-6">Work With Us</Button>
        </div>
      </header>

      {/* Hero Section - Starry */}
      <section className="py-20 lg:py-32 relative overflow-hidden pt-32">
        {/* Animated Stars Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
          {/* Scientific Grid Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.05)_0%,transparent_60%)]" />

          {/* Hexagon Pattern using Lucide Icons */}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-20 text-cyan-400"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                fontSize: `${20 + Math.random() * 40}px`,
                animation: `hexagonRotate ${10 + Math.random() * 20}s linear infinite`,
              }}
            >
              <Hexagon />
            </div>
          ))}

          {/* Circuit Board Lines */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-cyan-500/5 w-full h-px"
              style={{
                top: `${Math.random() * 100}%`,
                animation: `circuitSlide ${5 + Math.random() * 10}s linear infinite`,
              }}
            />
          ))}

          {/* Data Visualization Dots */}
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-cyan-400/50"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `dataPulse ${2 + Math.random() * 3}s ease-in-out infinite`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-xl rounded-full"></div>
                  <Badge className="relative bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 backdrop-blur-sm px-4 py-2">
                    ✨ AI-Powered Websites in 48 Hours
                  </Badge>
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  We Don&apos;t Just Build Software, We{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    Build Success
                  </span>
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                  At Nairobi Softwares, we craft AI-powered websites that convert visitors into customers, delivered in
                  just 48 hours with precision and excellence.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-lg group-hover:blur-xl transition-all duration-300 opacity-70"></div>
                  <Button
                    size="lg"
                    className="relative bg-white hover:bg-gray-100 text-black font-semibold px-8 py-4 h-auto rounded-full shadow-2xl"
                  >
                    Work with us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyan-400/50 text-cyan-300 hover:bg-cyan-500/10 hover:text-cyan-200 px-8 py-4 h-auto rounded-full bg-transparent backdrop-blur-sm"
                >
                  About Us
                </Button>
              </div>

              <div className="flex items-center justify-center sm:justify-start space-x-12 pt-8">
                <div className="text-center group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    48h
                  </div>
                  <div className="text-sm text-gray-400 font-medium">Delivery Time</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    300%
                  </div>
                  <div className="text-sm text-gray-400 font-medium">Sales Boost</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    24/7
                  </div>
                  <div className="text-sm text-gray-400 font-medium">AI Working</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 blur-3xl rounded-full animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 rounded-3xl p-10 shadow-2xl backdrop-blur-sm border border-cyan-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-400/5 rounded-3xl"></div>

                {/* Floating Code Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 opacity-30">
                  <div className="w-full h-full border border-cyan-400 rounded-lg animate-pulse">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full absolute top-1 left-1 animate-ping"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full absolute bottom-1 right-1 animate-ping"></div>
                  </div>
                </div>

                <div className="relative bg-gray-900/90 rounded-2xl p-8 space-y-6 shadow-inner border border-cyan-500/10">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-red-400 rounded-full shadow-lg animate-pulse"></div>
                    <div className="w-4 h-4 bg-yellow-400 rounded-full shadow-lg animate-pulse"></div>
                    <div className="w-4 h-4 bg-green-400 rounded-full shadow-lg animate-pulse"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse shadow-lg"></div>
                      <div className="text-lg font-semibold text-cyan-200">AI Assistant Active</div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full w-3/4 animate-pulse"></div>
                      <div className="h-4 bg-gradient-to-r from-cyan-600/50 to-blue-600/50 rounded-full w-1/2 animate-pulse"></div>
                      <div className="h-4 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full w-5/6 animate-pulse"></div>
                    </div>
                    <div className="bg-gradient-to-r from-cyan-600 via-cyan-500 to-blue-500 rounded-xl p-4 text-white shadow-lg border border-cyan-400/30">
                      <p className="text-base font-medium">
                        &ldquo;Hi! I&rsquo;m your AI assistant. Ready to boost your sales by 300%?&rdquo;
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-cyan-300 font-medium flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                        +127 leads captured today
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes hexagonRotate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes circuitSlide {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }

          @keyframes dataPulse {
            0%,
            100% {
              opacity: 0.5;
              transform: scale(1);
            }
            50% {
              opacity: 1;
              transform: scale(1.2);
            }
          }
        `}</style>
      </section>

      {/* Industries Section - Light Grey */}
      <section className="py-20 bg-gray-100 text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering cutting-edge solutions across diverse sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: ShoppingCart, title: "E-Commerce", desc: "Online stores with AI-powered recommendations" },
              { icon: Stethoscope, title: "Healthcare", desc: "Patient management and telemedicine platforms" },
              { icon: GraduationCap, title: "Education", desc: "Learning management systems and e-learning" },
              { icon: Building2, title: "Real Estate", desc: "Property management and virtual tours" },
              { icon: Car, title: "Automotive", desc: "Dealership websites and inventory management" },
              { icon: Utensils, title: "Restaurants", desc: "Online ordering and reservation systems" },
            ].map((industry, index) => (
              <Card
                key={index}
                className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 group hover:border-teal-500/50"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{industry.title}</CardTitle>
                  <CardDescription className="text-gray-600">{industry.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Dark */}
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Subtle stars for testimonials */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: 0.3,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-white">What Our Clients Say</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real stories from businesses we&rsquo;ve transformed
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechStart Kenya",
                quote:
                  "Nairobi Softwares delivered our AI-powered e-commerce platform in just 2 days. Our sales increased by 250% in the first month!",
                rating: 5,
              },
              {
                name: "Michael Ochieng",
                role: "Founder, EduLearn Africa",
                quote:
                  "The learning management system they built has revolutionized how we deliver education. The AI features are incredible!",
                rating: 5,
              },
              {
                name: "Amina Hassan",
                role: "Director, HealthCare Plus",
                quote:
                  "Our patient management system is now seamless. The 48-hour delivery promise was kept, and the quality exceeded expectations.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-gray-800 hover:border-teal-500/50 transition-all duration-500 group hover:scale-105"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`,
                }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full blur-sm opacity-50 group-hover:opacity-75 transition-opacity"></div>
                      <div className="relative w-16 h-16 rounded-full border-2 border-teal-500/50 bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="relative mb-6">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-teal-500/30" />
                    <p className="text-gray-300 leading-relaxed pl-6">{testimonial.quote}</p>
                  </div>

                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div
                        key={i}
                        className="w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
                        style={{
                          animation: `starGlow 2s ease-in-out ${i * 0.1}s infinite alternate`,
                        }}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes starGlow {
            from {
              box-shadow: 0 0 5px rgba(251, 191, 36, 0.5);
            }
            to {
              box-shadow: 0 0 20px rgba(251, 191, 36, 0.8);
            }
          }
        `}</style>
      </section>

      {/* Services Section - Light Grey */}
      <section id="services" className="py-20 bg-gray-100 text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to accelerate your digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-teal-500/50">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">AI-Enhanced Websites</CardTitle>
                <CardDescription className="text-gray-600">
                  Smart websites with embedded AI that automatically capture leads and boost conversions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-500 mr-3" />
                    48-hour delivery
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-500 mr-3" />
                    AI chatbot integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-500 mr-3" />
                    Smart analytics
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-teal-500/50">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Mobile Development</CardTitle>
                <CardDescription className="text-gray-600">
                  Native and cross-platform mobile applications for iOS and Android
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-500 mr-3" />
                    React Native
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-500 mr-3" />
                    Flutter development
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-500 mr-3" />
                    App store optimization
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-teal-500/50">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <Power className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">Cloud Solutions</CardTitle>
                <CardDescription className="text-gray-600">
                  Scalable cloud infrastructure and deployment solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-500 mr-3" />
                    AWS & Azure
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-500 mr-3" />
                    DevOps & CI/CD
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-teal-500 mr-3" />
                    Database management
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Dark */}
      <section id="portfolio" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-white">Our Works</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Showcasing our latest projects and success stories
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {videos.map((video) => (
              <Card
                key={video.id}
                className="bg-gray-900 border-gray-800 overflow-hidden group hover:border-teal-500/50 transition-all duration-300 cursor-pointer"
                onClick={() => openVideo(video.youtubeId)}
              >
                <div
                  className={`aspect-video bg-gradient-to-br ${video.gradient} flex items-center justify-center relative overflow-hidden`}
                >
                  {/* Video Thumbnail Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />

                  {/* Play Button */}
                  <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm">
                      <Play className="w-8 h-8 text-gray-900 ml-1" />
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Video Duration Badge */}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-2 py-1 rounded backdrop-blur-sm">
                    2:34
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-teal-400 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-400">{video.description}</p>
                  <div className="flex items-center justify-between mt-4">
                    <Badge className="bg-teal-500/20 text-teal-300 border border-teal-500/30">Case Study</Badge>
                    <span className="text-sm text-gray-500">Click to watch</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Light Grey */}
      <section className="py-20 bg-gray-100 text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold">Simple Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Transparent pricing for projects of all sizes</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-teal-500/50">
              <CardHeader className="text-center">
                <Badge className="bg-teal-500/20 text-teal-600 mb-4">48-Hour Delivery</Badge>
                <CardTitle className="text-2xl text-gray-900">Starter</CardTitle>
                <div className="text-4xl font-bold text-gray-900">$2,500</div>
                <CardDescription className="text-gray-600">Perfect for small businesses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                    AI-powered landing page
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                    Smart lead capture
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                    Basic AI chatbot
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />1 month support
                  </li>
                </ul>
                <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-teal-500 relative hover:shadow-xl transition-all duration-300 scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-teal-500 text-white">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-900">Professional</CardTitle>
                <div className="text-4xl font-bold text-gray-900">$8,500</div>
                <CardDescription className="text-gray-600">Ideal for growing businesses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                    Full web application
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                    Database integration
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                    Advanced AI features
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />3 months support
                  </li>
                </ul>
                <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-teal-500/50">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-900">Enterprise</CardTitle>
                <div className="text-4xl font-bold text-gray-900">Custom</div>
                <CardDescription className="text-gray-600">For large-scale applications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                    Custom development
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                    Cloud infrastructure
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                    Dedicated support
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-teal-500 mr-3" />
                    Ongoing maintenance
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-teal-500 text-teal-600 hover:bg-teal-50 bg-transparent"
                >
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section - Dark */}
      <section id="about" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-6xl font-bold text-white">About Us</h2>
                <p className="text-xl text-gray-400 leading-relaxed">
                  Based in Nairobi, we&rsquo;re a team of passionate developers and designers committed to building
                  world-class software solutions that drive business growth across Africa and beyond.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-400">150+</div>
                  <div className="text-gray-400">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-400">98%</div>
                  <div className="text-gray-400">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-400">5+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-teal-500/10 to-emerald-500/10 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Users className="w-16 h-16 text-teal-400 mx-auto" />
                    <div className="text-2xl font-bold text-white">Expert Team</div>
                    <div className="text-gray-400">15+ Professionals</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Light Grey */}
      <section id="contact" className="py-20 bg-gray-100 text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold">Let&rsquo;s Work Together</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your business? Get in touch with our team today.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <ContactForm />

            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">Email Us</h3>
                    <p className="text-gray-600">kavetech@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">Call Us</h3>
                    <p className="text-gray-600">+254 101 718 404</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">Visit Us</h3>
                    <p className="text-gray-600">Westlands, Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Dark */}
      <footer className="border-t border-gray-800 py-12 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <Power className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Nairobi Softwares</span>
              </div>
              <p className="text-gray-400">Building the future of Africa through innovative software solutions.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-teal-400 transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-teal-400 transition-colors">
                    Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-teal-400 transition-colors">
                    Cloud Solutions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-teal-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-teal-400 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-teal-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-teal-400 transition-colors">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-teal-400 transition-colors">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-teal-400 transition-colors">
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Nairobi Softwares. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
