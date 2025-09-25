import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { 
  Code, 
  Zap, 
  Users, 
  Heart, 
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
  statsData, 
  navigationItems 
} from '../mock';

const EasyLanguageLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const iconMap = {
    Code,
    Zap, 
    Users,
    Heart
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
          {navigationItems.slice(0, 2).map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="dark-nav-link hover:text-brand-primary transition-colors"
            >
              {item.name}
            </button>
          ))}
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
            {navigationItems.slice(0, 2).map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-left text-white hover:text-brand-primary transition-colors py-2"
              >
                {item.name}
              </button>
            ))}
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
              {/* No buttons - clean hero section */}
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
              Why Easy Language Is Perfect For You
            </h2>
            <p className="body-large text-white max-w-3xl mx-auto">
              Experience the power of a language built for speed, simplicity, and success. 
              Here are the facts that make Easy Language revolutionary.
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
                    <CardDescription className="text-white">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-black p-4 rounded-lg border border-gray-800">
                      <pre className="text-white text-sm font-mono overflow-x-auto">
                        {feature.example}
                      </pre>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                      <Badge variant="outline" className="border-brand-primary text-brand-primary">
                        {feature.highlight}
                      </Badge>
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">Fact:</div>
                        <div className="text-sm text-white">{feature.fact}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
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
                <div className="text-sm text-white">
                  {stat.description}
                </div>
              </div>
            ))}
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
              <button className="text-white hover:text-brand-primary transition-colors">
                <Github className="h-5 w-5" />
              </button>
              <button className="text-white hover:text-brand-primary transition-colors">
                <BookOpen className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <Separator className="my-6 bg-gray-800" />
          
          <div className="text-center text-white text-sm">
            © 2024 Easy Language. Making programming accessible to everyone.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EasyLanguageLanding;