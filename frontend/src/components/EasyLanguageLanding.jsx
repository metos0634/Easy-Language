import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Separator } from './ui/separator';
import { 
  Code, 
  Zap, 
  Shield, 
  Globe, 
  Download, 
  Star, 
  Users, 
  Activity,
  ArrowRight,
  Menu,
  X,
  Github,
  BookOpen,
  Play
} from 'lucide-react';

import { 
  heroData, 
  featuresData, 
  codeExamples, 
  statsData, 
  gettingStartedSteps, 
  navigationItems 
} from '../mock';

const EasyLanguageLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('hello');

  const iconMap = {
    Code,
    Zap, 
    Shield,
    Globe
  };

  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="dark-container">
      {/* Navigation Header */}
      <header className="dark-header">
        <div className="dark-logo-container">
          <Code className="h-8 w-8 text-brand-primary" />
          <span className="text-xl font-semibold text-white ml-2">Easy Language</span>
          <Badge variant="secondary" className="ml-2 bg-brand-primary text-black">
            {heroData.version}
          </Badge>
        </div>

        {/* Desktop Navigation */}
        <nav className="dark-nav hidden md:flex">
          {navigationItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="dark-nav-link hover:text-brand-primary transition-colors"
            >
              {item.name}
            </button>
          ))}
          <Button className="btn-primary ml-4">
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </header>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed top-20 left-0 right-0 bg-black bg-opacity-95 backdrop-blur-md z-40 md:hidden">
          <nav className="flex flex-col p-6 space-y-4">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-left text-white hover:text-brand-primary transition-colors py-2"
              >
                {item.name}
              </button>
            ))}
            <Button className="btn-primary mt-4">
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-between px-4 md:px-8 pt-20">
        <div className="flex-1 max-w-2xl">
          <div className="space-y-6">
            <Badge variant="secondary" className="bg-brand-primary text-black text-sm px-3 py-1">
              {heroData.shortcut} Programming Language
            </Badge>
            
            <h1 className="display-huge text-white leading-tight">
              {heroData.title}
            </h1>
            
            <p className="display-medium text-brand-primary">
              {heroData.subtitle}
            </p>
            
            <p className="body-large text-gray-300 leading-relaxed max-w-xl">
              {heroData.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="btn-primary">
                <Download className="h-5 w-5 mr-2" />
                Download Easy Language
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              
              <Button className="btn-secondary">
                <Play className="h-5 w-5 mr-2" />
                Try Online
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-primary">{heroData.downloadCount}</div>
                <div className="text-sm text-gray-400">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-primary">{heroData.githubStars}</div>
                <div className="text-sm text-gray-400">GitHub Stars</div>
              </div>
            </div>
          </div>
        </div>

        {/* 3D Spline Animation */}
        <div className="hidden lg:block flex-1 max-w-2xl">
          <div className="w-full h-[700px] overflow-visible relative">
            <Spline scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="display-large text-white mb-4">
              Why Choose Easy Language?
            </h2>
            <p className="body-large text-gray-300 max-w-3xl mx-auto">
              Designed with simplicity in mind, Easy Language removes the complexity 
              from programming while maintaining the power you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuresData.map((feature) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <Card key={feature.id} className="bg-gray-900 border-gray-800 hover:border-brand-primary transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-brand-primary rounded-lg">
                        <IconComponent className="h-6 w-6 text-black" />
                      </div>
                      <CardTitle className="text-white">{feature.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-300">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-black p-4 rounded-lg border border-gray-800">
                      <pre className="text-brand-primary text-sm font-mono overflow-x-auto">
                        {feature.example}
                      </pre>
                    </div>
                    <Badge variant="outline" className="mt-3 border-brand-primary text-brand-primary">
                      {feature.highlight}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Code Examples Section */}
      <section id="examples" className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="display-large text-white mb-4">
              See Easy Language in Action
            </h2>
            <p className="body-large text-gray-300 max-w-3xl mx-auto">
              Explore real code examples and see how Easy Language makes programming intuitive and fun.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-900 mb-8">
              <TabsTrigger value="hello" className="data-[state=active]:bg-brand-primary data-[state=active]:text-black">
                Hello World
              </TabsTrigger>
              <TabsTrigger value="variables" className="data-[state=active]:bg-brand-primary data-[state=active]:text-black">
                Variables & Functions
              </TabsTrigger>
              <TabsTrigger value="control" className="data-[state=active]:bg-brand-primary data-[state=active]:text-black">
                Loops & Conditions
              </TabsTrigger>
            </TabsList>

            {codeExamples.map((example, index) => (
              <TabsContent 
                key={example.id} 
                value={['hello', 'variables', 'control'][index]}
                className="space-y-4"
              >
                <Card className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-white">{example.title}</CardTitle>
                    <CardDescription className="text-gray-300">
                      {example.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-black p-6 rounded-lg border border-gray-800">
                      <pre className="text-brand-primary font-mono text-sm overflow-x-auto leading-relaxed">
                        {example.code}
                      </pre>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <Badge variant="outline" className="border-brand-primary text-brand-primary">
                        .{example.language} file
                      </Badge>
                      <Button className="btn-secondary" size="sm">
                        <Play className="h-4 w-4 mr-2" />
                        Run Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-brand-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section id="getting-started" className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="display-large text-white mb-4">
              Get Started in Minutes
            </h2>
            <p className="body-large text-gray-300 max-w-2xl mx-auto">
              Follow these simple steps to start coding with Easy Language today.
            </p>
          </div>

          <div className="space-y-8">
            {gettingStartedSteps.map((step, index) => (
              <div key={step.step} className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-primary text-black rounded-full flex items-center justify-center font-bold text-lg">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 mb-3">
                    {step.description}
                  </p>
                  <div className="bg-black p-3 rounded-lg border border-gray-800 font-mono text-sm text-brand-primary">
                    {step.action}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="btn-primary text-lg px-8 py-3">
              <Download className="h-5 w-5 mr-2" />
              Download Easy Language Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-4 md:px-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Code className="h-6 w-6 text-brand-primary mr-2" />
              <span className="text-lg font-semibold text-white">Easy Language</span>
            </div>
            
            <div className="flex gap-6">
              <button className="text-gray-400 hover:text-brand-primary transition-colors">
                <Github className="h-5 w-5" />
              </button>
              <button className="text-gray-400 hover:text-brand-primary transition-colors">
                <BookOpen className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <Separator className="my-6 bg-gray-800" />
          
          <div className="text-center text-gray-400 text-sm">
            © 2024 Easy Language. Making programming accessible to everyone.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EasyLanguageLanding;