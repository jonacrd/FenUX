import React from 'react';
import FeatureGrid from './FeatureGrid.tsx';
import ProcessSteps from './ProcessSteps.tsx';
import Pricing from './Pricing.tsx';
import Extras from './Extras.tsx';
import Testimonials from './Testimonials.tsx';
import Gallery from './Gallery.tsx';
import Process from './Process.tsx';
import Stats from './Stats.tsx';
import FAQ from './FAQ.tsx';
import LeadForm from './LeadForm.tsx';

interface LandingContentProps {
  lang?: string;
  features: {
    title: string;
    items: Array<{
      title: string;
      desc: string;
    }>;
  };
  steps: {
    title: string;
    steps: Array<{
      k: string;
      v: string;
    }>;
  };
  pricing: {
    title: string;
    baseUSD: number;
    packs: Array<{
      name: string;
      usd: number;
      items: string[];
      cta: {
        label: string;
        href: string;
        attrs: Record<string, any>;
      };
    }>;
  };
  extras?: {
    title: string;
    items: Array<{
      name: string;
      desc: string;
      usd: number;
    }>;
  };
  gallery?: {
    title: string;
    items: Array<{
      src: string;
      alt: string;
      title: string;
      desc: string;
    }>;
  };
  testimonials?: {
    title: string;
    items: Array<{
      name: string;
      role: string;
      text: string;
      rating: number;
      image: string;
    }>;
  };
  process?: {
    title: string;
    image: string;
    steps: Array<{
      step: string;
      title: string;
      desc: string;
      detail: string;
    }>;
  };
  stats?: {
    title: string;
    image: string;
    items: Array<{
      value: string;
      label: string;
      change: string;
    }>;
  };
  faq: {
    items: Array<{
      q: string;
      a: string;
    }>;
  };
  CONTACT_EMAIL?: string;
  WHATSAPP?: string;
}

const LandingContent: React.FC<LandingContentProps> = ({
  lang = "es",
  features,
  steps,
  pricing,
  extras,
  gallery,
  testimonials,
  process,
  stats,
  faq,
  CONTACT_EMAIL = "contacto@jonadevel.com",
  WHATSAPP = "+580000000000"
}) => {
  return (
    <>
      <FeatureGrid {...features} />
      <ProcessSteps {...steps} />
      <Pricing {...pricing} lang={lang} />
      {extras && <Extras {...extras} />}
      {gallery && <Gallery {...gallery} />}
      {testimonials && <Testimonials {...testimonials} />}
      {process && <Process {...process} />}
      {stats && <Stats {...stats} />}
      <FAQ {...faq} />
      <LeadForm language={lang} email={CONTACT_EMAIL} whatsapp={WHATSAPP} />
    </>
  );
};

export default LandingContent;
