import { Reveal, FadeIn } from '../components/Reveal';

export const About = () => {
    return (
        <div className="bg-page min-h-screen pb-20">

            {/* Hero */}
            <section className="bg-page py-20 border-b border-zinc-100 dark:border-zinc-800">
                <div className="container mx-auto px-4 text-center">
                    <Reveal width="100%">
                        <h1 className="text-4xl md:text-5xl font-bold font-display mb-6 text-heading">About Meishu Biotech</h1>
                        <p className="text-xl max-w-2xl mx-auto text-body">
                            We are a dynamic, cutting-edge enterprise dedicated to advancing human and environmental well-being through exceptional biotechnology.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <Reveal>
                            <h2 className="text-3xl font-bold text-heading mb-6">Who We Are</h2>
                            <div className="space-y-4 text-body leading-relaxed">
                                <p>
                                    At Meishu Biotech, we don't just participate in the future of life sciences — we engineer it. Our mission is to translate complex biological understanding into tangible, life-changing solutions. We are pioneering innovation in <strong>Oncology, Orthopedics, Infertility, Neurology, & Gastroenterology</strong>.
                                </p>
                                <p>
                                    Founded on the principles of <strong>Clarity, Precision, and Vision</strong>, we operate at the intersection of rigorous science and compassionate healthcare. Our team of multidisciplinary scientists and engineers works tirelessly to bring platform-based innovations from the lab to the global stages.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video bg-zinc-100 dark:bg-zinc-800">
                                {/* Placeholder for About Image - Using a gradient/pattern if image not available */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-biotech-main to-biotech-accent opacity-80 mix-blend-multiply"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1000"
                                    alt="Biotech Lab Research"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>
        </div>
    );
};
