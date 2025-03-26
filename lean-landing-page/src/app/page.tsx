'use client';

import CTASection from '@/components/sections/cta-section';
import DemoSection from '@/components/sections/demo-section';
import DocumentsSection from '@/components/sections/documents-section';
import HeroSection from '@/components/sections/hero-section';
import StatsSection from '@/components/sections/stats-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import UseCasesSection from '@/components/sections/use-cases-section';
import WorkflowSection from '@/components/sections/workflow-section';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/layout/navbar'), { ssr: true });
const Footer = dynamic(() => import('@/components/layout/footer'), { ssr: true });

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <DemoSection />
        <UseCasesSection />
        <DocumentsSection />
        <WorkflowSection />
        <StatsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}