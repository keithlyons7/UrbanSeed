import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import LeafAnimation from './LeafAnimation';
import HeroSection from './HeroSection';
import GlassCard from './GlassCard';
import ceoImage from '../assets/images/ceo.png';
import ctoImage from '../assets/images/cto.png';
import cmoImage from '../assets/images/cmo.png';
import cfoImage from '../assets/images/cfo.png';
import partnerLogo1 from '../assets/images/partner-logo1.png';
import partnerLogo2 from '../assets/images/partner-logo2.png';
import partnerLogo3 from '../assets/images/partner-logo3.png';
import partnerLogo4 from '../assets/images/partner-logo4.png';
import signUpImage from '../assets/images/signUp.jpeg';
import selectPropertyImage from '../assets/images/selectAProperty.jpeg';
import startEarningImage from '../assets/images/startEarning.png';

function WhyInvest() {
    const benefits = [
        {
            id: 'prime-locations',
            title: 'Prime Locations',
            description: 'Invest in properties located in high-demand, high-growth areas with exceptional potential for appreciation.',
            icon: '🏙️',
            stats: '95% Appreciation Rate'
        },
        {
            id: 'high-returns',
            title: 'High Returns',
            description: 'Real estate investments with annual returns up to 15%. Our expert team ensures optimal performance for your portfolio.',
            icon: '📈',
            stats: 'Up to 15% Annual Returns'
        },
        {
            id: 'risk-management',
            title: 'Risk Management',
            description: 'Our experts manage risks through comprehensive market analysis and strategic portfolio diversification.',
            icon: '🛡️',
            stats: '98% Success Rate'
        }
    ];

    // Animation variants for scroll-triggered effects
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { 
            opacity: 0, 
            y: 60,
            scale: 0.9
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const titleVariants = {
        hidden: { 
            opacity: 0, 
            y: 40
        },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.section 
            className="py-20 relative overflow-hidden mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <div className="glass-overlay"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div 
                    className="text-center mb-16"
                    variants={titleVariants}
                >
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-6">
                        Why Invest with UrbanSeed?
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Experience the future of real estate investment with our innovative platform designed for maximum returns and minimal risk.
                    </p>
                </motion.div>
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                >
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.id}
                            variants={itemVariants}
                            whileHover={{ 
                                scale: 1.05, 
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <GlassCard
                                variant="premium"
                                className="h-80 relative group transition-all duration-500"
                            >
                                <div className="relative z-10 p-8 h-full flex flex-col items-center text-center">
                                    <div className="glass-input w-20 h-20 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 flex-1">
                                        {benefit.description}
                                    </p>
                                    <div className="glass-input px-4 py-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                                        {benefit.stats}
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}

function HowItWorks() {
    const steps = [
        {
            step: "1. Sign Up",
            description: "Create your account and get access to our curated real estate investment opportunities with personalized recommendations.",
            image: signUpImage,
            duration: "2 minutes"
        },
        {
            step: "2. Select a Property",
            description: "Choose from a variety of high-return commercial and residential properties vetted by our expert team.",
            image: selectPropertyImage,
            duration: "15 minutes"
        },
        {
            step: "3. Start Earning",
            description: "Invest and start earning returns from your chosen properties while we manage them for you with full transparency.",
            image: startEarningImage,
            duration: "Ongoing"
        }
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
                delayChildren: 0.2
            }
        }
    };

    const stepVariants = {
        hidden: { 
            opacity: 0, 
            y: 80,
            scale: 0.8
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        }
    };

    const titleVariants = {
        hidden: { 
            opacity: 0, 
            y: 50,
            scale: 0.9
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const ctaVariants = {
        hidden: { 
            opacity: 0, 
            y: 30
        },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: 0.8
            }
        }
    };

    return (
        <motion.section 
            className="py-20 relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
        >
            <div className="glass-overlay"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div 
                    className="text-center mb-16"
                    variants={titleVariants}
                >
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                        How It Works
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Start your investment journey in just three simple steps and begin building wealth through real estate
                    </p>
                </motion.div>
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.step}
                            variants={stepVariants}
                            whileHover={{ 
                                scale: 1.05, 
                                y: -15,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <GlassCard
                                variant="premium"
                                className="h-96 relative group transition-all duration-500"
                            >
                                <div className="relative z-10 p-8 h-full flex flex-col items-center text-center">
                                    <div className="relative mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <img 
                                            src={step.image} 
                                            alt={step.step}
                                            className="w-24 h-24 mx-auto rounded-xl object-cover shadow-lg border-2 border-white/20"
                                        />
                                        <div className="absolute -bottom-2 -right-2 glass-input w-8 h-8 flex items-center justify-center text-lg font-bold text-emerald-600">
                                            {index + 1}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
                                        {step.step}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 flex-1">
                                        {step.description}
                                    </p>
                                    <div className="glass-input px-4 py-2 text-blue-600 dark:text-blue-400 font-semibold text-sm">
                                        ⏱️ {step.duration}
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div 
                    className="mt-16 text-center"
                    variants={ctaVariants}
                >
                    <GlassCard className="inline-block">
                        <div className="flex items-center space-x-4 px-8 py-4">
                            <span className="text-2xl">🚀</span>
                            <div>
                                <p className="text-lg font-semibold text-gray-800 dark:text-white">
                                    Ready to get started?
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Join over 10,000+ successful investors
                                </p>
                            </div>
                            <motion.button 
                                className="glass-cta-button px-6 py-3"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Start Now
                            </motion.button>
                        </div>
                    </GlassCard>
                </motion.div>
            </div>
        </motion.section>
    );
}

function Team() {
    const teamMembers = [
        { 
            name: "Aiden Corrigan", 
            role: "Chief Executive Officer", 
            image: ceoImage
        },
        { 
            name: "Keith Lyons", 
            role: "Chief Technical Officer", 
            image: ctoImage
        },
        { 
            name: "Alexandra O'Rourke", 
            role: "Global Marketing Officer", 
            image: cmoImage
        },
        { 
            name: "Tony", 
            role: "Chief Financial Officer", 
            image: cfoImage
        }
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const memberVariants = {
        hidden: { 
            opacity: 0, 
            y: 60,
            rotateY: -15
        },
        visible: { 
            opacity: 1, 
            y: 0,
            rotateY: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const titleVariants = {
        hidden: { 
            opacity: 0, 
            y: 40,
            scale: 0.9
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const ctaVariants = {
        hidden: { 
            opacity: 0, 
            scale: 0.9
        },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: 0.6
            }
        }
    };

    return (
        <motion.section 
            className="py-20 relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
        >
            <div className="glass-overlay"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div 
                    className="text-center mb-16"
                    variants={titleVariants}
                >
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">
                        Meet Our Expert Team
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Our experienced leadership team combines decades of expertise in real estate, technology, and finance to deliver exceptional investment results.
                    </p>
                </motion.div>
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                >
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            variants={memberVariants}
                            whileHover={{ 
                                scale: 1.05, 
                                y: -10,
                                rotateY: 5,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <GlassCard
                                variant="premium"
                                className="h-80 relative text-center group transition-all duration-500"
                            >
                                <div className="relative z-10 p-6 h-full flex flex-col items-center">
                                    <div className="relative mb-6">
                                        <img 
                                            src={member.image} 
                                            alt={`${member.name} - ${member.role}`}
                                            className="w-20 h-20 mx-auto rounded-full object-cover shadow-lg border-4 border-white/20 group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-center items-center text-center">
                                        <div className={`mb-4 ${member.name === 'Alexandra O\'Rourke' ? 'mb-0' : ''}`}>
                                            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 group-hover:text-purple-600 transition-colors duration-300">
                                                {member.name}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 font-medium">
                                                {member.role}
                                            </p>
                                        </div>
                                        <div className={`w-full flex justify-center ${member.name === 'Alexandra O\'Rourke' ? '-mt-2' : ''}`}>
                                            <motion.div 
                                                className="glass-input px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 text-center"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                Connect
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div 
                    className="mt-16 text-center"
                    variants={ctaVariants}
                >
                    <GlassCard className="max-w-2xl mx-auto">
                        <div className="text-center space-y-4 py-8">
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                                Join Our Growing Team
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                We're always looking for talented individuals passionate about real estate innovation.
                            </p>
                            <motion.button 
                                className="glass-cta-button px-6 py-3"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Careers
                            </motion.button>
                        </div>
                    </GlassCard>
                </motion.div>
            </div>
        </motion.section>
    );
}

function Plans() {
    const plans = [
        {
            name: "Starter",
            price: "€50/month",
            originalPrice: "€75/month",
            features: [
                "Access to Standard Projects",
                "Email Support Response in 24h",
                "Basic Reporting & Analytics",
                "Mobile App Access",
                "Investment Calculator"
            ],
            link: "#",
            popular: false,
            color: "emerald"
        },
        {
            name: "Professional",
            price: "€150/month",
            originalPrice: "€200/month",
            features: [
                "Access to Premium Properties",
                "Priority Support Response in 4h",
                "Advanced Analytics & Reporting",
                "Portfolio Management Tools",
                "Quarterly Strategy Sessions",
                "Risk Assessment Tools"
            ],
            link: "#",
            popular: true,
            badge: "Most Popular",
            color: "blue"
        },
        {
            name: "Elite",
            price: "€500/month",
            originalPrice: "€750/month",
            features: [
                "All Property Access + Exclusives",
                "Dedicated Account Manager",
                "Real-time Analytics & AI Insights",
                "Custom Investment Strategies",
                "Weekly 1-on-1 Consultations",
                "Early Access to New Projects",
                "Tax Optimization Guidance"
            ],
            link: "#",
            popular: false,
            color: "purple"
        }
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const planVariants = {
        hidden: { 
            opacity: 0, 
            y: 80,
            scale: 0.8
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        }
    };

    const titleVariants = {
        hidden: { 
            opacity: 0, 
            y: 50
        },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const featuresVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.5
            }
        }
    };

    const featureVariants = {
        hidden: { 
            opacity: 0, 
            x: -20
        },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.section 
            className="py-20 relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            <div className="glass-overlay"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div 
                    className="text-center mb-16"
                    variants={titleVariants}
                >
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent mb-6">
                        Investment Plans for Every Goal
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Choose the perfect plan to match your investment goals and experience level. All plans include our core platform features.
                    </p>
                </motion.div>
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                >
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            variants={planVariants}
                            whileHover={{ 
                                scale: plan.popular ? 1.08 : 1.05, 
                                y: -15,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <GlassCard
                                variant={plan.popular ? "premium" : "default"}
                                className={`h-auto relative group transition-all duration-500 ${
                                    plan.popular ? 'ring-2 ring-blue-500/50 shadow-2xl' : ''
                                }`}
                            >
                                <div className="relative z-10 p-8 h-full flex flex-col">
                                    <div className="text-center mb-8">
                                        {plan.popular && (
                                            <motion.div 
                                                className="mb-2"
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.8, duration: 0.5 }}
                                            >
                                                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg text-center whitespace-nowrap">
                                                    {plan.badge}
                                                </span>
                                            </motion.div>
                                        )}
                                        <h3 className={`text-2xl font-bold mb-4 group-hover:text-${plan.color}-600 transition-colors duration-300 text-gray-800 dark:text-white`}>
                                            {plan.name}
                                        </h3>
                                        <div className="mb-4">
                                            <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                                                {plan.originalPrice}
                                            </span>
                                            <div className={`text-4xl font-bold text-${plan.color}-600 dark:text-${plan.color}-400`}>
                                                {plan.price}
                                            </div>
                                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                                Limited time offer
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <motion.ul 
                                        className="space-y-4 mb-8 flex-1"
                                        variants={featuresVariants}
                                    >
                                        {plan.features.map((feature, featureIndex) => (
                                            <motion.li 
                                                key={featureIndex} 
                                                className="flex items-start text-gray-600 dark:text-gray-300"
                                                variants={featureVariants}
                                            >
                                                <div className={`w-5 h-5 text-${plan.color}-500 mr-3 mt-0.5 flex-shrink-0`}>
                                                    <svg fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <span className="text-sm leading-relaxed">{feature}</span>
                                            </motion.li>
                                        ))}
                                    </motion.ul>
                                    
                                    <motion.button 
                                        className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                                            plan.popular 
                                                ? 'glass-cta-button transform group-hover:scale-105' 
                                                : 'glass-input hover:bg-white/20 dark:hover:bg-black/20'
                                        }`}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {plan.popular ? 'Start Free Trial' : `Choose ${plan.name}`}
                                        <span className="ml-2">→</span>
                                    </motion.button>
                                    
                                    {plan.popular && (
                                        <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-3">
                                            14-day free trial • No credit card required
                                        </p>
                                    )}
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </motion.div>
                
                <motion.div 
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
                >
                    <GlassCard className="max-w-4xl mx-auto">
                        <motion.div 
                            className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {[
                                { icon: "🛡️", title: "Secure & Insured", desc: "All investments protected up to €250,000" },
                                { icon: "📱", title: "Mobile First", desc: "Manage investments anywhere, anytime" },
                                { icon: "🤝", title: "Expert Support", desc: "Professional guidance every step" }
                            ].map((item, index) => (
                                <motion.div 
                                    key={index}
                                    className="text-center"
                                    variants={planVariants}
                                >
                                    <div className="glass-input w-16 h-16 mx-auto flex items-center justify-center text-2xl mb-4">
                                        {item.icon}
                                    </div>
                                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">{item.title}</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </GlassCard>
                </motion.div>
            </div>
        </motion.section>
    );
}

function Partners() {
    const partnerLogos = [
        { id: 1, logo: partnerLogo1, name: "TechCorp Real Estate", category: "Technology Partner" },
        { id: 2, logo: partnerLogo2, name: "GlobalInvest Bank", category: "Financial Partner" },
        { id: 3, logo: partnerLogo3, name: "PropertyTech Solutions", category: "Innovation Partner" },
        { id: 4, logo: partnerLogo4, name: "UrbanDev Group", category: "Development Partner" }
    ];

    const stats = [
        { number: "€2.5B+", label: "Assets Under Management", icon: "💼" },
        { number: "15,000+", label: "Active Investors", icon: "👥" },
        { number: "250+", label: "Successful Projects", icon: "🏗️" },
        { number: "98%", label: "Client Satisfaction", icon: "⭐" }
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const titleVariants = {
        hidden: { 
            opacity: 0, 
            y: 50 
        },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const partnerVariants = {
        hidden: { 
            opacity: 0, 
            scale: 0.8,
            y: 30
        },
        visible: { 
            opacity: 1, 
            scale: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const statVariants = {
        hidden: { 
            opacity: 0, 
            y: 60,
            scale: 0.9
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        }
    };

    const ctaVariants = {
        hidden: { 
            opacity: 0, 
            y: 40 
        },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.section 
            className="py-20 relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            <div className="glass-overlay"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div 
                    className="text-center mb-16"
                    variants={titleVariants}
                >
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-6">
                        Trusted by Industry Leaders
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        We collaborate with world-class partners to provide you with the best investment opportunities and cutting-edge technology.
                    </p>
                </motion.div>

                {/* Partner Logos */}
                <motion.div 
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
                    variants={containerVariants}
                >
                    {partnerLogos.map((partner, index) => (
                        <motion.div
                            key={partner.id}
                            variants={partnerVariants}
                            whileHover={{ 
                                scale: 1.05, 
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <GlassCard className="h-40 relative group">
                                <div className="h-full flex flex-col items-center justify-center p-6">
                                    <motion.img 
                                        src={partner.logo} 
                                        alt={`${partner.name} Logo`}
                                        className="max-w-full max-h-16 object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Statistics */}
                <motion.div 
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                    variants={containerVariants}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={statVariants}
                            whileHover={{ 
                                scale: 1.05, 
                                y: -5,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <GlassCard className="text-center group">
                                <div className="py-8">
                                    <motion.div 
                                        className="glass-input w-16 h-16 mx-auto flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300"
                                        whileHover={{ rotate: [0, -10, 10, 0] }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {stat.icon}
                                    </motion.div>
                                    <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Partnership CTA */}
                <motion.div 
                    className="text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={ctaVariants}
                >
                    <GlassCard variant="premium" className="max-w-4xl mx-auto">
                        <div className="py-12 px-8">
                            <motion.h3 
                                className="text-3xl font-bold text-gray-800 dark:text-white mb-6"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                            >
                                Become a Strategic Partner
                            </motion.h3>
                            <motion.p 
                                className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                                Join our network of leading institutions and help shape the future of real estate investment. 
                                We're always looking for innovative partnerships that create value for our investors.
                            </motion.p>
                            <motion.div 
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.7, duration: 0.5 }}
                            >
                                <motion.button 
                                    className="glass-cta-button px-8 py-4 text-lg"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Partnership Opportunities
                                </motion.button>
                                <motion.button 
                                    className="glass-input px-8 py-4 hover:bg-white/10 transition-colors duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Download Partnership Guide
                                </motion.button>
                            </motion.div>
                        </div>
                    </GlassCard>
                </motion.div>
            </div>
        </motion.section>
    );
}

function Home() {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/signup');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-emerald-900 transition-colors duration-300">
            {/* Falling Leaves Background Animation */}
            <LeafAnimation />
            
            {/* New Modern Hero Section */}
            <HeroSection />
            
            {/* All other sections with scroll animations */}
            <WhyInvest />
            <HowItWorks />
            <Team />
            <Plans />
            <Partners />
        </div>
    );
}

export default Home;