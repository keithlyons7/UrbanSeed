import React, { useState } from 'react';
import GlassCard from './GlassCard';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            setSubmitMessage('Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.');
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
            setIsSubmitting(false);
        }, 1500);
    };

    const contactInfo = [
        {
            icon: '📧',
            title: 'Email Us',
            content: 'info@urbanseed.com',
            subtitle: 'We reply within 24 hours'
        },
        {
            icon: '📞',
            title: 'Call Us',
            content: '+1 (555) 123-4567',
            subtitle: 'Mon-Fri 9AM-6PM EST'
        },
        {
            icon: '📍',
            title: 'Visit Us',
            content: '123 Urban St, City Center',
            subtitle: 'Schedule an appointment'
        },
        {
            icon: '💬',
            title: 'Live Chat',
            content: 'Available 24/7',
            subtitle: 'Instant support online'
        }
    ];

    return (
        <div className="py-20 min-h-screen">
            <div className="glass-overlay"></div>
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Have questions about our investment opportunities? Our expert team is here to help you make informed decisions.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <GlassCard variant="premium">
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                                Contact Information
                            </h3>
                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="glass-input w-12 h-12 flex items-center justify-center text-xl">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800 dark:text-white">
                                                {info.title}
                                            </h4>
                                            <p className="text-emerald-600 dark:text-emerald-400 font-medium">
                                                {info.content}
                                            </p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                {info.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>

                        {/* Office Hours */}
                        <GlassCard>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                                Office Hours
                            </h3>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Monday - Friday</span>
                                    <span className="font-semibold text-gray-800 dark:text-white">9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Saturday</span>
                                    <span className="font-semibold text-gray-800 dark:text-white">10:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 dark:text-gray-400">Sunday</span>
                                    <span className="font-semibold text-gray-800 dark:text-white">Closed</span>
                                </div>
                            </div>
                        </GlassCard>
                    </div>

                    {/* Contact Form */}
                    <GlassCard variant="premium">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                            Send Us a Message
                        </h3>

                        {submitMessage ? (
                            <div className="glass-input p-6 text-center">
                                <div className="text-4xl mb-4">✅</div>
                                <p className="text-emerald-600 dark:text-emerald-400 font-semibold">
                                    {submitMessage}
                                </p>
                                <button
                                    onClick={() => setSubmitMessage('')}
                                    className="glass-cta-button mt-4 px-6 py-2"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                            👤 Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="glass-input w-full"
                                            placeholder="Your full name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                            📧 Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="glass-input w-full"
                                            placeholder="your.email@example.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                            📞 Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="glass-input w-full"
                                            placeholder="+1 (555) 123-4567"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                            📋 Subject *
                                        </label>
                                        <select
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            className="glass-input w-full"
                                            required
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="investment">Investment Inquiry</option>
                                            <option value="support">Customer Support</option>
                                            <option value="partnership">Partnership</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                        💬 Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows="5"
                                        className="glass-input w-full resize-none"
                                        placeholder="Tell us about your investment goals, questions, or how we can help you..."
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="glass-cta-button w-full py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center">
                                            <span className="animate-spin mr-2">⏳</span>
                                            Sending Message...
                                        </span>
                                    ) : (
                                        <>
                                            Send Message
                                            <span className="ml-2">📤</span>
                                        </>
                                    )}
                                </button>

                                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                                    * Required fields. We respect your privacy and will never share your information.
                                </p>
                            </form>
                        )}
                    </GlassCard>
                </div>

                {/* FAQ Section */}
                <div className="mt-16">
                    <GlassCard className="text-center">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                            Frequently Asked Questions
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Before reaching out, you might find your answer in our comprehensive FAQ section.
                        </p>
                        <button className="glass-cta-button px-8 py-3">
                            View FAQ
                        </button>
                    </GlassCard>
                </div>
            </div>
        </div>
    );
}

export default Contact;