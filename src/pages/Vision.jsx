import { Reveal } from '../components/Reveal';
import { Target, Shield, Heart } from 'lucide-react';

export const Vision = () => {
    return (
        <div className="bg-page min-h-screen">
            {/* Vision Header */}
            <section className="bg-page py-24 mb-1 border-b border-zinc-100 dark:border-zinc-800">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <Reveal width="100%">
                        <span className="text-biotech-accent font-bold tracking-widest uppercase text-sm mb-4 block">Our Corporate Vision</span>
                        <h1 className="text-3xl md:text-4xl font-bold font-display text-heading mb-10 leading-tight">
                            To become a global leader in research-based healthcare innovation by translating high levels of clinical and scientific expertise into breakthrough therapies that address significant unmet patient needs worldwide.
                        </h1>
                    </Reveal>
                </div>
            </section>

            {/* Strategic Pillars */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-12">

                        {/* Pillar 1 */}
                        <Reveal delay={0}>
                            <div className="text-center group p-6 rounded-2xl hover:bg-white transition-all duration-300 border border-transparent hover:border-gray-100 hover:shadow-lg">
                                <div className="mx-auto w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-biotech-main group-hover:bg-biotech-main group-hover:text-white transition-colors duration-300">
                                    <Target size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-biotech-dark mb-4">Pioneering Breakthrough Therapies</h3>
                                <p className="text-gray-600 mb-4 px-2 text-sm leading-relaxed text-justify">
                                    The primary focus of Meishu Biotech's vision is to push the boundaries of medical science. We are committed to pioneering novel solutions that tackle previously neglected or poorly managed ailments across Orthopedics, Oncology, Infertility, Gastroenterology, and Neurology.
                                </p>
                                <ul className="text-left text-xs text-gray-500 space-y-2 mt-4 border-t pt-4">
                                    <li><strong>Goal:</strong> Deliver products that offer major clinical advantages.</li>
                                    <li><strong>Key Differentiator:</strong> Dedication to rigorous research methods and genuine scientific leaps.</li>
                                </ul>
                            </div>
                        </Reveal>

                        {/* Pillar 2 */}
                        <Reveal delay={0.2}>
                            <div className="text-center group p-6 rounded-2xl hover:bg-white transition-all duration-300 border border-transparent hover:border-gray-100 hover:shadow-lg">
                                <div className="mx-auto w-20 h-20 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 text-biotech-accent group-hover:bg-biotech-accent group-hover:text-white transition-colors duration-300">
                                    <Shield size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-biotech-dark mb-4">Scientific Excellence & IP Protection</h3>
                                <p className="text-gray-600 mb-4 px-2 text-sm leading-relaxed text-justify">
                                    Meishu Biotech's vision is to establish itself as an organization where scientific authority is paramount. We see our intellectual property (IP) as the foundation of our future.
                                </p>
                                <ul className="text-left text-xs text-gray-500 space-y-2 mt-4 border-t pt-4">
                                    <li><strong>Goal:</strong> Ensure groundbreaking discoveries are fully protected through robust patents.</li>
                                    <li><strong>Strategic Outcome:</strong> Sustained competitive advantage to bring novel therapies to market.</li>
                                </ul>
                            </div>
                        </Reveal>

                        {/* Pillar 3 */}
                        <Reveal delay={0.4}>
                            <div className="text-center group p-6 rounded-2xl hover:bg-white transition-all duration-300 border border-transparent hover:border-gray-100 hover:shadow-lg">
                                <div className="mx-auto w-20 h-20 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 text-biotech-highlight group-hover:bg-biotech-highlight group-hover:text-white transition-colors duration-300">
                                    <Heart size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-biotech-dark mb-4">Advancing Human Health</h3>
                                <p className="text-gray-600 mb-4 px-2 text-sm leading-relaxed text-justify">
                                    Ultimately, our vision is anchored in a profound humanitarian goal. Meishu Biotech aims for its technological and scientific success to directly contribute to the betterment of global health.
                                </p>
                                <ul className="text-left text-xs text-gray-500 space-y-2 mt-4 border-t pt-4">
                                    <li><strong>Goal:</strong> Make significant contributions to the advancement of human well-being.</li>
                                    <li><strong>Mechanism:</strong> Dynamic pipeline, quality assurance, and global collaboration.</li>
                                </ul>
                            </div>
                        </Reveal>

                    </div>
                </div>
            </section>
        </div>
    );
};
