import React from 'react';
import GlassCard from './GlassCard';

function Projects() {
    const projects = [
        {
            title: "City Center Towers",
            entryFee: "€1,000",
            duration: "3 years",
            returnRate: "12% per annum",
            repayments: "Quarterly",
            image: require('../assets/images/urban_high_rise.jpeg'),
            description: "Premium high-rise development in the heart of the city with luxury amenities and sustainable design.",
            features: ["Prime Location", "Luxury Amenities", "Eco-Friendly", "High ROI"]
        },
        {
            title: "Suburban Villas",
            entryFee: "€10,000",
            duration: "2 years",
            returnRate: "10% per annum",
            repayments: "Balloon",
            image: require('../assets/images/suburban_villa.jpeg'),
            description: "Beautiful suburban villas with modern architecture and family-friendly communities.",
            features: ["Family Friendly", "Modern Design", "Safe Community", "Growing Area"]
        },
        {
            title: "Commercial Plaza",
            entryFee: "€50,000",
            duration: "5 years",
            returnRate: "15% per annum",
            repayments: "Monthly",
            image: require('../assets/images/modern_offices.jpeg'),
            description: "State-of-the-art commercial plaza with office spaces and retail opportunities.",
            features: ["Commercial Hub", "High Traffic", "Multiple Tenants", "Premium Returns"]
        }
    ];

    return (
        <div className="py-20 min-h-screen">
            <div className="glass-overlay"></div>
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-4">
                        Investment Opportunities
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Discover our carefully curated real estate investment projects designed to maximize your returns while building sustainable urban communities.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {projects.map((project, index) => (
                        <GlassCard key={project.title} variant="premium" className="group">
                            {/* Project Image */}
                            <div className="relative mb-6 overflow-hidden rounded-xl">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute top-4 right-4">
                                    <span className="glass-input px-3 py-1 text-sm font-semibold text-emerald-600">
                                        {project.returnRate}
                                    </span>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-emerald-600 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Features */}
                                <div className="grid grid-cols-2 gap-2 my-4">
                                    {project.features.map((feature, idx) => (
                                        <span 
                                            key={idx}
                                            className="glass-input text-xs font-medium text-center py-2 text-emerald-700 dark:text-emerald-300"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                {/* Investment Details */}
                                <div className="space-y-3 py-4 border-t border-white/20 dark:border-gray-700/50">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600 dark:text-gray-400 font-medium">Entry Fee:</span>
                                        <span className="text-emerald-600 dark:text-emerald-400 font-bold text-lg">
                                            {project.entryFee}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600 dark:text-gray-400 font-medium">Duration:</span>
                                        <span className="text-gray-800 dark:text-white font-semibold">
                                            {project.duration}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600 dark:text-gray-400 font-medium">Returns:</span>
                                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                                            {project.returnRate}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-600 dark:text-gray-400 font-medium">Payments:</span>
                                        <span className="text-gray-800 dark:text-white font-semibold">
                                            {project.repayments}
                                        </span>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <button className="glass-cta-button w-full text-center py-3 mt-6 group-hover:scale-105 transition-transform duration-300">
                                    Invest Now
                                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">
                                        →
                                    </span>
                                </button>
                            </div>
                        </GlassCard>
                    ))}
                </div>

                {/* Call to Action Section */}
                <div className="text-center">
                    <GlassCard className="max-w-4xl mx-auto">
                        <div className="text-center space-y-6">
                            <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
                                Ready to Start Your Investment Journey?
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                                Join thousands of smart investors who are building their wealth through our sustainable real estate projects.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="glass-cta-button px-8 py-3">
                                    Get Started Today
                                </button>
                                <button className="glass-input px-8 py-3 hover:bg-white/10 transition-colors duration-300">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </div>
    );
}

export default Projects;