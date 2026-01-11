import { Link } from 'react-router-dom';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-biotech-dark text-white py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-display font-bold mb-4 text-white">Meishu Biotech</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Pioneering the next generation of biological innovation. Dedicated to advancing human and environmental well-being through clarity, precision, and vision.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-biotech-accent">Quick Links</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link to="/products" className="hover:text-white transition-colors">Our Products</Link></li>
                            <li><Link to="/rnd" className="hover:text-white transition-colors">Research & Development</Link></li>
                            <li><Link to="/vision" className="hover:text-white transition-colors">Corporate Vision</Link></li>
                            <li><Link to="/news" className="hover:text-white transition-colors">Latest News</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-biotech-accent">Contact Us</h4>
                        <div className="text-sm text-gray-400 space-y-4">
                            <div>
                                <p className="font-bold text-white mb-1">India Office</p>
                                <p>#G Block, Alipur Road</p>
                                <p>New Delhi</p>
                            </div>
                            <div>
                                <p className="font-bold text-white mb-1">Singapore Office</p>
                                <p>Meishu Sg</p>
                            </div>
                            <p className="pt-2">Email: <a href="mailto:meishubiotech@gmail.com" className="hover:text-white transition-colors">meishubiotech@gmail.com</a></p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; {currentYear} Meishu Biotech. All rights reserved.</p>
                    <p>Global Standard Compliance</p>
                </div>
            </div>
        </footer>
    );
};
