import { Reveal } from '../components/Reveal';
import { Button } from '../components/Button';
import { BadgeCheck, FlaskConical, Microscope } from 'lucide-react';

const products = [
    { id: 'avi_mdr', name: 'Avi MDR', img: '/images/avi_mdr.jpg', desc: '' },
    { id: 'edcrit', name: 'Edcrit', img: '/images/edcrit.jpg', desc: '' },
    { id: 'celula', name: 'Celula', img: '/images/celula.jpeg', desc: '' },
    { id: 'cfpm-s', name: 'CFPM-S', img: '/images/cfpm-s.jpeg', desc: '' },
    { id: 'doxyhenz', name: 'Doxyhenz', img: '/images/doxyhenz.jpeg', desc: '' },
    { id: 'thiohenz-nanoshot', name: 'Thiohenz Nanoshot', img: '/images/thiohenz-nanoshot.jpeg', desc: '' },
    { id: 'mpnm-tz', name: 'MPNM-TZ', img: '/images/mpnm-tz.jpeg', desc: '' },
    { id: 'thiohenz', name: 'Thiohenz', img: '/images/thiohenz.jpeg', desc: '' },
    { id: 'albuhike', name: 'Albuhike', img: '/images/albuhike.jpeg', desc: '' },
    { id: 'osteahenz', name: 'Osteahenz', img: '/images/osteahenz.jpg', desc: 'Preserves Bone Health', patent: true, link: 'https://osteahenz.com/' },
    { id: 'ubhenz', name: 'Ubhenz', img: '/images/ubhenz.jpeg', desc: 'Supports Cellular Energy Production', patent: true },
    { id: 'algisome', name: 'Algisome', img: '/images/algisome.jpg', desc: 'Intelligent Delivery Mechanism for Bone Health', patent: true },
];

const pipeline = [
    { name: 'TETSU-Fe', stage: 'Clinical Trials', category: 'Hematology', desc: 'Next-gen iron delivery complex.' },
    { name: 'HAPPIHENZ', stage: 'Pre-clinical', category: 'Neurology', desc: 'Mood and cognitive support formulation.' },
    { name: 'NGP (Next Gen Probiotic)', stage: 'Development', category: 'Gastroenterology', desc: 'Microbiome restoration therapy.' },
];

export const Products = () => {
    return (
        <div className="bg-page min-h-screen pb-24 transition-colors duration-300">

            {/* Page Header */}
            <section className="bg-page py-20 border-b border-zinc-100 dark:border-zinc-800">
                <div className="container mx-auto px-4">
                    <Reveal>
                        <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 text-heading">Our Solutions</h1>
                        <p className="text-xl text-body max-w-2xl font-light">
                            A comprehensive portfolio of pharmaceutical and biotech innovations designed for efficacy and safety.
                        </p>
                    </Reveal>
                </div>
            </section>

            <div className="container mx-auto px-4 -mt-10 relative z-10">

                {/* Patents Section */}
                <section className="mb-24">
                    <Reveal>
                        <div className="flex items-center gap-3 mb-10 border-b border-zinc-100 dark:border-zinc-800 pb-4">
                            <BadgeCheck className="text-biotech-highlight h-8 w-8" />
                            <h2 className="text-3xl font-bold text-heading">Patent Applied Innovations</h2>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {products.filter(p => p.patent).map((product) => (
                            <Reveal key={product.id}>
                                <div className="bg-card rounded-xl shadow-lg border-t-4 border-biotech-highlight overflow-hidden hover:shadow-2xl transition-all duration-300 group flex flex-col h-full">
                                    <div className="relative overflow-hidden h-64">
                                        <div className="absolute top-4 right-4 bg-biotech-highlight text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-sm">
                                            PATENT APPLIED
                                        </div>
                                        <img
                                            src={product.img}
                                            alt={product.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-2xl font-bold text-heading mb-2">{product.name}</h3>
                                        <p className="text-body mb-4">{product.desc}</p>
                                        {product.link && (
                                            <div className="mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800">
                                                <a
                                                    href={product.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center text-sm font-semibold text-biotech-main dark:text-emerald-400 hover:underline"
                                                >
                                                    Know more about this &rarr;
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </section>

                {/* Existing Products Section */}
                <section className="mb-24">
                    <Reveal>
                        <div className="flex items-center gap-3 mb-10 border-b border-zinc-100 dark:border-zinc-800 pb-4">
                            <FlaskConical className="text-biotech-main dark:text-emerald-400 h-8 w-8" />
                            <h2 className="text-3xl font-bold text-heading">Our Products</h2>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.filter(p => !p.patent).map((product) => (
                            <Reveal key={product.id}>
                                <div className="bg-card rounded-lg shadow-sm border border-zinc-100 dark:border-zinc-800 overflow-hidden hover:shadow-md transition-shadow group">
                                    <div className="h-64 overflow-hidden bg-zinc-100 dark:bg-zinc-800 relative">
                                        <img
                                            src={product.img}
                                            alt={product.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <h3 className="text-lg font-bold text-heading mb-1">{product.name}</h3>
                                        {product.desc && <p className="text-sm text-body">{product.desc}</p>}
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </section>

                {/* Pipeline Section */}
                <section className="mb-12">
                    <Reveal>
                        <div className="flex items-center gap-3 mb-10 border-b border-zinc-100 dark:border-zinc-800 pb-4">
                            <Microscope className="text-biotech-accent h-8 w-8" />
                            <h2 className="text-3xl font-bold text-heading">R&D Pipeline</h2>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pipeline.map((item, idx) => (
                            <Reveal key={idx} delay={idx * 0.1}>
                                <div className="bg-zinc-900 text-white rounded-xl p-8 relative overflow-hidden h-full shadow-lg border border-zinc-800">
                                    <div className="absolute top-0 right-0 p-8 opacity-10">
                                        <Microscope size={100} className="text-white" />
                                    </div>
                                    <div className="relative z-10">
                                        <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-medium mb-4 text-emerald-400">
                                            {item.stage}
                                        </span>
                                        <h3 className="text-2xl font-bold mb-2 text-white">{item.name}</h3>
                                        <p className="text-gray-300">{item.desc}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};
