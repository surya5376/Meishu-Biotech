import { Reveal } from '../components/Reveal';
import { Dna, Atom, Network } from 'lucide-react';

export const RandD = () => {
    return (
        <div className="bg-gray-50 dark:bg-slate-950 min-h-screen pb-24 transition-colors duration-300">

            <section className="bg-page py-24 relative overflow-hidden border-b border-zinc-100 dark:border-zinc-800">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-multiply dark:mix-blend-overlay"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <Reveal>
                        <h1 className="text-4xl md:text-6xl font-bold font-display mb-4 text-heading">The Engine of Discovery: Research & Development</h1>
                        <p className="text-xl text-body font-medium max-w-3xl">
                            The heart of Meishu Biotech lies in our relentless commitment to Research and Development (R&D). Our state-of-the-art facility is a crucible for innovation, powered by a multidisciplinary team of world-class scientists, engineers, and clinical experts.
                        </p>
                    </Reveal>
                </div>
            </section>

            <div className="container mx-auto px-4 -mt-10 relative z-20">
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Targeted Platform Technologies", icon: Network, desc: "Utilizing nanotechnology to deliver drugs directly to diseased cells, minimizing systemic side effects and improving patient outcomes. Smart Delivery - Development of stimuli-responsive polymers that release medication only in response to specific physiological triggers like pH or temperature." },
                        { title: "Pipeline of Innovation", icon: Atom, desc: "Our current efforts are concentrated on tackling pressing challenges in personalized medicine, or chronic disease management. We maintain a robust and meticulously managed pipeline, transitioning promising basic research into viable, market-ready products." },
                        { title: "Data-Driven Excellence", icon: Dna, desc: "Leveraging the latest in bioinformatics and AI, our R&D processes are optimized for speed and accuracy. We integrate vast datasets to inform hypothesis generation, accelerate preclinical testing, and ensure the highest standards of scientific validation." }
                    ].map((item, idx) => (
                        <Reveal key={idx} delay={idx * 0.1}>
                            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg border-b-4 border-biotech-main dark:border-biotech-accent h-full transition-colors duration-300">
                                <item.icon className="h-10 w-10 text-biotech-main dark:text-biotech-accent mb-4" />
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed text-sm">{item.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

            {/* Inferred Insights Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <Reveal>
                        <h2 className="text-3xl font-bold text-biotech-dark dark:text-white mb-6 text-center">Where Meticulous Science Meets Commercial Viability</h2>
                        <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
                            We invite you to delve deeper into our scientific breakthroughs and join us on our journey to innovate a healthier world.
                        </p>
                    </Reveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { theme: "Nanotechnology", detail: "Advanced nano-delivery systems (Nanoshot) enhancing bioavailability." },
                            { theme: "Liposomal Delivery", detail: "Encapsulation technologies (Algisome) for targeted therapy." },
                            { theme: "Antibiotic Resistance", detail: "Next-gen formulations (Avi MDR) tackling multi-drug resistant pathogens." },
                            { theme: "Microbiome Science", detail: "Probiotic innovations (NGP) restoring gut health balance." }
                        ].map((insight, idx) => (
                            <Reveal key={idx} delay={0.2 + idx * 0.1}>
                                <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 p-6 rounded-lg hover:border-biotech-accent transition-colors group">
                                    <h3 className="text-lg font-bold text-biotech-main dark:text-biotech-accent group-hover:text-biotech-accent mb-2">{insight.theme}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{insight.detail}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};
