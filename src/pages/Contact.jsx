import { useState } from 'react';
import { Reveal, FadeIn } from '../components/Reveal';
import { Mail, MapPin, Send } from 'lucide-react';
import { Button } from '../components/Button';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Construct mailto link
        const mailtoLink = `mailto:meishubiotech@gmail.com?subject=${encodeURIComponent(formData.subject || 'Inquiry from Website')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className="min-h-screen pt-20 pb-10 flex flex-col justify-center relative overflow-hidden bg-page transition-colors duration-300">
            {/* Background Elements - Subtle Pattern instead of dark gradients */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05] mix-blend-multiply dark:mix-blend-overlay"></div>

            <div className="container mx-auto px-4 relative z-10">
                <Reveal width="100%">
                    <div className="text-center mb-16">
                        <span className="text-biotech-accent font-bold tracking-widest uppercase text-sm mb-4 block">Get in Touch</span>
                        <h1 className="text-4xl md:text-5xl font-bold font-display text-heading mb-6">Let's Innovate Together</h1>
                        <p className="text-xl text-body max-w-2xl mx-auto font-light">
                            Partner with us to shape the future of healthcare. Reach out for collaborations, inquiries, or just to say hello.
                        </p>
                    </div>
                </Reveal>

                <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                    {/* Contact Info Card */}
                    <FadeIn delay={0.2} className="h-full">
                        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-2xl border border-white/20 dark:border-slate-800 h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold text-biotech-dark dark:text-white mb-8">Contact Information</h3>
                                <div className="space-y-8">
                                    <div className="flex items-start space-x-4">
                                        <div className="p-3 bg-blue-50 dark:bg-slate-800 rounded-xl text-biotech-main">
                                            <MapPin size={24} />
                                        </div>
                                        <div className="space-y-4">
                                            <div>
                                                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">India Office</p>
                                                <p className="text-lg text-gray-800 dark:text-gray-200 font-medium">#G Block, Alipur Road</p>
                                                <p className="text-gray-800 dark:text-gray-200 font-medium">New Delhi</p>
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Singapore Office</p>
                                                <p className="text-lg text-gray-800 dark:text-gray-200 font-medium">Meishu Sg</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="p-3 bg-teal-50 dark:bg-slate-800 rounded-xl text-biotech-accent">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Email Us</p>
                                            <a href="mailto:meishubiotech@gmail.com" className="text-lg text-gray-800 dark:text-gray-200 font-medium hover:text-biotech-main transition-colors">
                                                meishubiotech@gmail.com
                                            </a>
                                            <p className="text-gray-500 dark:text-gray-500">For all general inquiries</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Empty space for balance or copyright later */}
                            <div className="mt-12"></div>
                        </div>
                    </FadeIn>

                    {/* Contact Form */}
                    <FadeIn delay={0.4}>
                        <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 dark:border-slate-800">
                            <h3 className="text-2xl font-bold text-biotech-dark dark:text-white mb-6">Send us a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:border-biotech-main focus:ring-2 focus:ring-biotech-main/20 outline-none transition-all dark:text-white"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:border-biotech-main focus:ring-2 focus:ring-biotech-main/20 outline-none transition-all dark:text-white"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:border-biotech-main focus:ring-2 focus:ring-biotech-main/20 outline-none transition-all dark:text-white"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 focus:border-biotech-main focus:ring-2 focus:ring-biotech-main/20 outline-none transition-all resize-none dark:text-white"
                                        placeholder="How can we help you?"
                                        required
                                    ></textarea>
                                </div>

                                <Button type="submit" className="w-full py-4 text-lg group">
                                    Send Message <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <p className="text-xs text-gray-400 text-center mt-4">
                                    By sending this message, you agree to our privacy policy.
                                </p>
                            </form>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
};
