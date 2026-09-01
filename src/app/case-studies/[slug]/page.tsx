import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { caseStudies } from '@/content/site';

type CaseStudyPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  return { title: study ? study.title : 'Case Study' };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) notFound();

  return (
    <>
      <Header />
      <main>
        <section className="page-hero compact">
          <div className="container">
            <Link className="text-link back-link" href="/case-studies">
              <span aria-hidden="true">←</span> All case studies
            </Link>
            <p className="eyebrow">{study.industry}</p>
            <h1>{study.title}</h1>
          </div>
        </section>
        <section className="section case-study-detail">
          <div className="container">
            <article>
              <div><h2>The challenge</h2><p>{study.challenge}</p></div>
              <div><h2>The objective</h2><p>{study.objective}</p></div>
              <div><h2>The action</h2><p>{study.action}</p></div>
              <div><h2>The outcome</h2><p>{study.outcome}</p></div>
            </article>
            <div className="center-cta">
              <h2>Working on a similar challenge?</h2>
              <Link className="button" href="/contact">
                Talk to Cloudvation <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
