import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  CheckCircle,
  Code,
  Smartphone,
  Zap,
  Users,
  Award,
  Play,
  Star,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Nairobi Softwares
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Services
            </Link>
            <Link href="#portfolio" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Portfolio
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Pricing
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-emerald-600 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 text-lg px-4 py-2">
                  🚀 AI-Powered Websites in Just 2 Days
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Get Your{" "}
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    AI-Enhanced
                  </span>{" "}
                  Website in 48 Hours
                </h1>
                <p className="text-2xl text-gray-600 leading-relaxed font-medium">
                  We build lightning-fast websites with embedded AI that automatically tracks customers, boosts your
                  sales, and grows your business while you sleep.
                </p>
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl border-l-4 border-emerald-500">
                  <h3 className="text-xl font-bold text-emerald-800 mb-2">🎯 What You Get:</h3>
                  <ul className="space-y-2 text-emerald-700 font-medium">
                    <li>✅ Complete website delivered in 2 days</li>
                    <li>✅ AI chatbot that converts visitors to customers</li>
                    <li>✅ Smart analytics that track every lead</li>
                    <li>✅ Automated sales funnels built-in</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-lg px-8 py-4 h-auto"
                >
                  Get My Website in 2 Days
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 text-lg px-8 py-4 h-auto"
                >
                  <Play className="mr-2 w-5 h-5" />
                  See AI Demo
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">2 Days</div>
                  <div className="text-sm text-gray-600 font-medium">Average Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">300%</div>
                  <div className="text-sm text-gray-600 font-medium">Sales Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">24/7</div>
                  <div className="text-sm text-gray-600 font-medium">AI Working</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-lg p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-emerald-500 rounded-full animate-pulse"></div>
                      <div className="text-sm font-medium">AI Chatbot Active</div>
                    </div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-emerald-200 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded p-3 text-white text-sm">
                      &quot;Hi! I'&apos;m your AI assistant. How can I help you today?&quot;
                    </div>
                    <div className="text-xs text-gray-500">+47 leads captured today</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-emerald-100 text-emerald-700">Our Work</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">See Our Solutions in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch how we&apos;ve transformed businesses with cutting-edge software solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-gradient-to-br from-emerald-500 to-teal-600 rounded-t-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="lg" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                      <Play className="w-6 h-6" />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold">E-Commerce Platform</h3>
                    <p className="text-sm opacity-90">Full-stack web application</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">
                    A comprehensive e-commerce solution with real-time inventory management and payment integration.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-gradient-to-br from-purple-500 to-pink-600 rounded-t-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="lg" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                      <Play className="w-6 h-6" />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold">Mobile Banking App</h3>
                    <p className="text-sm opacity-90">iOS & Android application</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">
                    Secure mobile banking application with biometric authentication and real-time transactions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50">
              View All Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-emerald-100 text-emerald-700 text-lg px-4 py-2">AI-Powered Solutions</Badge>
            <h2 className="text-4xl lg:text-6xl font-bold">Websites That Sell While You Sleep</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
              Every website we build comes with intelligent AI features that automatically convert visitors into paying
              customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-l from-emerald-500 to-transparent w-32 h-32 opacity-10"></div>
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">AI-Enhanced Websites</CardTitle>
                <CardDescription className="text-base">
                  Smart websites that automatically capture leads, answer questions, and boost your sales 24/7
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                    AI Chatbot Integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                    Smart Lead Tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                    Automated Sales Funnels
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                    Real-time Analytics
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-emerald-50 rounded-lg">
                  <div className="text-sm font-semibold text-emerald-800">⚡ 2-Day Delivery Guaranteed</div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Mobile Development</CardTitle>
                <CardDescription>Native and cross-platform mobile applications for iOS and Android</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                    React Native
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                    Flutter Development
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                    App Store Optimization
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Cloud Solutions</CardTitle>
                <CardDescription>Scalable cloud infrastructure and deployment solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                    AWS & Azure
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                    DevOps & CI/CD
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                    Database Management
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-emerald-100 text-emerald-700 text-lg px-4 py-2">Simple Pricing</Badge>
            <h2 className="text-4xl lg:text-6xl font-bold">Get Your AI Website in 2 Days</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
              Choose your package and watch your business grow with AI-powered automation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium mb-2 inline-block">
                  ⚡ 2-Day Delivery
                </div>
                <CardTitle className="text-2xl">AI Starter</CardTitle>
                <div className="text-4xl font-bold text-emerald-600">$2,500</div>
                <CardDescription className="text-base">Perfect for small businesses ready to automate</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                    AI-Powered Landing Page
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                    Smart Lead Capture Forms
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                    Basic AI Chatbot
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                    48-Hour Delivery
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />1 Month AI Support
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
                  Start in 2 Days
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-emerald-500 relative hover:shadow-xl transition-all duration-300">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-emerald-500 text-white">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Professional</CardTitle>
                <div className="text-4xl font-bold text-emerald-600">$8,500</div>
                <CardDescription>Ideal for growing businesses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                    Full Web Application
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                    Database Integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                    User Authentication
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />6 Weeks Delivery
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />3 Months Support
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <div className="text-4xl font-bold text-emerald-600">Custom</div>
                <CardDescription>For large-scale applications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                    Custom Development
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                    Cloud Infrastructure
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                    Advanced Security
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                    Flexible Timeline
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                    Ongoing Support
                  </li>
                </ul>
                <Button variant="outline" className="w-full border-emerald-500 text-emerald-600 hover:bg-emerald-50">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-emerald-100 text-emerald-700">About Us</Badge>
                <h2 className="text-3xl lg:text-5xl font-bold">Innovating Africa&apos;s Digital Future</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Based in Nairobi, we&apos;re a team of passionate developers and designers committed to building
                  world-class software solutions that drive business growth.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <Users className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-emerald-600">15+</div>
                  <div className="text-sm text-gray-600">Team Members</div>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <Award className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-emerald-600">50+</div>
                  <div className="text-sm text-gray-600">Awards Won</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 border-2 border-white"
                    ></div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">Trusted by 100+ clients</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-32 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg"></div>
                  <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg"></div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg"></div>
                  <div className="h-32 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-emerald-100 text-emerald-700">Contact Us</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">Let&apos;s Build Something Amazing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your project? Get in touch with our team today.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-8">
              <Card className="p-6">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Type</label>
                    <Input placeholder="Web Development, Mobile App, etc." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea placeholder="Tell us about your project..." rows={4} />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Us</h3>
                    <p className="text-gray-600">hello@nairobisoftwares.com</p>
                    <p className="text-gray-600">support@nairobisoftwares.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Call Us</h3>
                    <p className="text-gray-600">+254 700 123 456</p>
                    <p className="text-gray-600">+254 711 987 654</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Visit Us</h3>
                    <p className="text-gray-600">Westlands, Nairobi</p>
                    <p className="text-gray-600">Kenya, East Africa</p>
                  </div>
                </div>
              </div>

              <Card className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50">
                <h3 className="font-semibold text-lg mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                    Expert team with 5+ years experience
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                    Agile development methodology
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                    24/7 support and maintenance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                    Competitive pricing
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Nairobi Softwares</span>
              </div>
              <p className="text-gray-400">Building the future of Africa through innovative software solutions.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Cloud Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Consulting
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Instagram
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
