import React from 'react';

function Footer() {
    return (
        <footer className="glass-section bg-opacity-10 text-center backdrop-blur-xl">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                            UrbanSeed
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                            Growing sustainable urban real estate investments for a better tomorrow.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {['Home', 'Projects', 'Calculator', 'Contact'].map(link => (
                                <li key={link}>
                                    <a 
                                        href={`#${link.toLowerCase()}`}
                                        className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300 text-sm"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                            Services
                        </h4>
                        <ul className="space-y-2">
                            {['Investment Plans', 'Property Management', 'Financial Planning', 'Market Analysis'].map(service => (
                                <li key={service}>
                                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                                        {service}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                            Contact
                        </h4>
                        <div className="space-y-2">
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                📧 info@urbanseed.com
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                📞 +1 (555) 123-4567
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                📍 123 Urban St, City Center
                            </p>
                        </div>
                    </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-6 mb-8">
                    {[
                        { name: 'LinkedIn', icon: '💼' },
                        { name: 'Twitter', icon: '🐦' },
                        { name: 'Facebook', icon: '📘' },
                        { name: 'Instagram', icon: '📷' }
                    ].map(social => (
                        <a
                            key={social.name}
                            href="#"
                            className="glass-input w-12 h-12 flex items-center justify-center text-xl hover:scale-110 transition-transform duration-300"
                            aria-label={social.name}
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-200 dark:border-gray-700 border-opacity-30 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            © 2024 UrbanSeed. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(link => (
                                <a
                                    key={link}
                                    href="#"
                                    className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300 text-sm"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;