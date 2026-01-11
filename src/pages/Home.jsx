import { Reveal, FadeIn } from '../components/Reveal';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Globe, ShieldCheck } from 'lucide-react';

export const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-page">
                {/* Subtle Grid Background - Visible on White */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05] mix-blend-multiply dark:mix-blend-overlay"></div>

                <div className="container mx-auto px-4 relative z-10 pt-20">
                    <div className="max-w-5xl mx-auto text-center">
                        <FadeIn>
                            <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-6 text-heading tracking-tight drop-shadow-sm">
                                Pioneering Precision-Driven <span className="text-transparent bg-clip-text bg-gradient-to-r from-biotech-main to-biotech-accent">Biological Innovation</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-body mb-8 font-light max-w-3xl mx-auto">
                                Engineering the next generation of biological solutions for effective treatment.
                            </p>
                        </FadeIn>

                        {/* Image Placeholder */}
                        <FadeIn delay={0.2}>
                            <div className="w-full h-64 md:h-96 bg-card rounded-2xl overflow-hidden mb-10 border border-zinc-100 dark:border-zinc-800 shadow-2xl relative group">
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/10 via-transparent to-transparent z-10"></div>

                                <img
                                    src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=2000"
                                    alt="Advanced Biotech Lab"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                                />

                                <div className="absolute bottom-6 left-6 z-20">
                                    <span className="text-white/60 text-xs font-light tracking-[0.2em] uppercase border-l-2 border-biotech-accent pl-3">Scientific Breakthrough Visual</span>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.4} className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                            <Link to="/products">
                                <Button className="w-full sm:w-auto px-10 py-4 group">
                                    Explore Our Solutions <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <Link to="/vision">
                                <Button className="btn-secondary w-full sm:w-auto px-10 py-4">
                                    Our Vision
                                </Button>
                            </Link>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Mission / Intro Section */}
            <section className="py-24 bg-page transition-colors duration-300">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <Reveal>
                            <h2 className="text-4xl md:text-5xl font-bold font-display text-heading mb-8">
                                Clarity. Precision. Vision.
                            </h2>
                            <div className="text-lg text-body space-y-6 leading-relaxed">
                                <p>
                                    At Meishu Biotech, we don't just participate in the future of life sciences—we engineer it. Our mission is to translate complex biological understanding into tangible, life-changing solutions.
                                </p>
                                <p>
                                    We are a dynamic, cutting-edge enterprise dedicated to advancing human and environmental well-being through exceptional biotechnology.
                                </p>
                                <p>
                                    Our digital presence reflects our core values. Explore our site to discover the science driving our groundbreaking work and the strategic partnerships that accelerate our impact.
                                </p>
                            </div>
                        </Reveal>

                        {/* Feature Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { icon: Activity, title: "Scientific Excellence", desc: "Data-driven research using AI & bioinformatics." },
                                { icon: Globe, title: "Global Impact", desc: "Addressing unmet patient needs worldwide." },
                                { icon: ShieldCheck, title: "Verified Quality", desc: "Rigorous standards for reliable outcomes." },
                                { icon: Activity, title: "Tangible Innovation", desc: "From lab discovery to market-ready products." },
                            ].map((item, idx) => (
                                <Reveal key={idx} delay={0.2 + idx * 0.1}>
                                    <div className="p-6 rounded-xl bg-card hover:shadow-md transition-all duration-300">
                                        <item.icon className="h-8 w-8 text-biotech-accent mb-4" />
                                        <h3 className="text-lg font-bold text-heading mb-2">{item.title}</h3>
                                        <p className="text-sm text-body">{item.desc}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-page text-center relative overflow-hidden border-t border-zinc-100 dark:border-zinc-800">
                <div className="container mx-auto px-4 relative z-10">
                    <Reveal width="100%">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-heading">Ready to partner with the future?</h2>
                        <Link to="/contact">
                            <Button className="btn-primary">
                                Contact Us Today
                            </Button>
                        </Link>
                    </Reveal>
                </div>
            </section >
        </>
    );
};
