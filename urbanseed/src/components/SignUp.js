import React, { useState } from 'react';
import GlassCard from './GlassCard';

function SignUp() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        investmentGoal: '',
        investmentAmount: '',
        riskTolerance: '',
        agreeToTerms: false,
        agreeToNewsletter: false
    });
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const nextStep = () => {
        if (currentStep < 3) setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 2000);
    };

    const benefits = [
        {
            icon: '🎯',
            title: 'Personalized Investment Plans',
            description: 'Tailored strategies based on your goals and risk tolerance'
        },
        {
            icon: '📊',
            title: 'Real-time Portfolio Tracking',
            description: 'Monitor your investments with our advanced dashboard'
        },
        {
            icon: '🔒',
            title: 'Secure & Transparent',
            description: 'Bank-level security with full transparency on all transactions'
        },
        {
            icon: '🏆',
            title: 'Expert Support',
            description: 'Access to our team of real estate investment professionals'
        }
    ];

    if (isSuccess) {
        return (
            <div className="py-20 min-h-screen">
                <div className="glass-overlay"></div>
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <GlassCard variant="premium" className="text-center">
                        <div className="py-12">
                            <div className="text-6xl mb-6">🎉</div>
                            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                                Welcome to UrbanSeed!
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                                Thank you for joining us, {formData.firstName}! Your account has been created successfully. 
                                Check your email for next steps to start your investment journey.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="glass-cta-button px-8 py-3">
                                    Access Your Dashboard
                                </button>
                                <button className="glass-input px-8 py-3 hover:bg-white/10 transition-colors duration-300">
                                    Explore Investment Plans
                                </button>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>
        );
    }

    return (
        <div className="py-20 min-h-screen">
            <div className="glass-overlay"></div>
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-4">
                        Join UrbanSeed
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Start your real estate investment journey with just a few simple steps
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Benefits Section */}
                    <div className="lg:col-span-1 space-y-6">
                        <GlassCard>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
                                Why Join UrbanSeed?
                            </h3>
                            <div className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="glass-input w-10 h-10 flex items-center justify-center text-lg flex-shrink-0">
                                            {benefit.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800 dark:text-white text-sm">
                                                {benefit.title}
                                            </h4>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>

                        {/* Progress Indicator */}
                        <GlassCard>
                            <h4 className="font-semibold text-gray-800 dark:text-white mb-4">
                                Registration Progress
                            </h4>
                            <div className="space-y-3">
                                {[
                                    { step: 1, label: 'Personal Info' },
                                    { step: 2, label: 'Investment Goals' },
                                    { step: 3, label: 'Final Details' }
                                ].map((item) => (
                                    <div key={item.step} className="flex items-center space-x-3">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                                            currentStep >= item.step 
                                                ? 'bg-emerald-500 text-white' 
                                                : 'glass-input text-gray-500'
                                        }`}>
                                            {currentStep > item.step ? '✓' : item.step}
                                        </div>
                                        <span className={`text-sm ${
                                            currentStep >= item.step 
                                                ? 'text-emerald-600 dark:text-emerald-400 font-semibold' 
                                                : 'text-gray-500'
                                        }`}>
                                            {item.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    </div>

                    {/* Form Section */}
                    <div className="lg:col-span-2">
                        <GlassCard variant="premium">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Step 1: Personal Information */}
                                {currentStep === 1 && (
                                    <div className="space-y-6">
                                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                                            Personal Information
                                        </h3>
                                        
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                                    👤 First Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleInputChange}
                                                    className="glass-input w-full"
                                                    placeholder="Enter your first name"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                                    👤 Last Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleInputChange}
                                                    className="glass-input w-full"
                                                    placeholder="Enter your last name"
                                                    required
                                                />
                                            </div>
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
                                    </div>
                                )}

                                {/* Step 2: Investment Goals */}
                                {currentStep === 2 && (
                                    <div className="space-y-6">
                                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                                            Investment Preferences
                                        </h3>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                                🎯 Investment Goal *
                                            </label>
                                            <select
                                                name="investmentGoal"
                                                value={formData.investmentGoal}
                                                onChange={handleInputChange}
                                                className="glass-input w-full"
                                                required
                                            >
                                                <option value="">Select your primary goal</option>
                                                <option value="wealth-building">Long-term Wealth Building</option>
                                                <option value="passive-income">Generate Passive Income</option>
                                                <option value="retirement">Retirement Planning</option>
                                                <option value="diversification">Portfolio Diversification</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                                💰 Initial Investment Amount *
                                            </label>
                                            <select
                                                name="investmentAmount"
                                                value={formData.investmentAmount}
                                                onChange={handleInputChange}
                                                className="glass-input w-full"
                                                required
                                            >
                                                <option value="">Select investment range</option>
                                                <option value="1000-5000">€1,000 - €5,000</option>
                                                <option value="5000-10000">€5,000 - €10,000</option>
                                                <option value="10000-50000">€10,000 - €50,000</option>
                                                <option value="50000-100000">€50,000 - €100,000</option>
                                                <option value="100000+">€100,000+</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                                📈 Risk Tolerance *
                                            </label>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                                {[
                                                    { value: 'conservative', label: 'Conservative', desc: 'Lower risk, stable returns' },
                                                    { value: 'moderate', label: 'Moderate', desc: 'Balanced risk and return' },
                                                    { value: 'aggressive', label: 'Aggressive', desc: 'Higher risk, higher potential' }
                                                ].map((risk) => (
                                                    <label key={risk.value} className="cursor-pointer">
                                                        <input
                                                            type="radio"
                                                            name="riskTolerance"
                                                            value={risk.value}
                                                            onChange={handleInputChange}
                                                            className="sr-only"
                                                            required
                                                        />
                                                        <div className={`glass-input p-4 text-center transition-all duration-300 ${
                                                            formData.riskTolerance === risk.value 
                                                                ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20' 
                                                                : 'hover:bg-white/10'
                                                        }`}>
                                                            <div className="font-semibold text-gray-800 dark:text-white">
                                                                {risk.label}
                                                            </div>
                                                            <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                                                {risk.desc}
                                                            </div>
                                                        </div>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Step 3: Final Details */}
                                {currentStep === 3 && (
                                    <div className="space-y-6">
                                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                                            Final Details
                                        </h3>

                                        <div className="space-y-4">
                                            <label className="flex items-start space-x-3 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    name="agreeToTerms"
                                                    checked={formData.agreeToTerms}
                                                    onChange={handleInputChange}
                                                    className="mt-1"
                                                    required
                                                />
                                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                                    I agree to the <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Terms of Service</span> and <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Privacy Policy</span> *
                                                </span>
                                            </label>

                                            <label className="flex items-start space-x-3 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    name="agreeToNewsletter"
                                                    checked={formData.agreeToNewsletter}
                                                    onChange={handleInputChange}
                                                    className="mt-1"
                                                />
                                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                                    I would like to receive investment insights and market updates via email
                                                </span>
                                            </label>
                                        </div>

                                        <div className="glass-input p-4">
                                            <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                                                📋 Registration Summary
                                            </h4>
                                            <div className="text-sm space-y-1">
                                                <p><span className="text-gray-600 dark:text-gray-400">Name:</span> {formData.firstName} {formData.lastName}</p>
                                                <p><span className="text-gray-600 dark:text-gray-400">Email:</span> {formData.email}</p>
                                                <p><span className="text-gray-600 dark:text-gray-400">Investment Goal:</span> {formData.investmentGoal}</p>
                                                <p><span className="text-gray-600 dark:text-gray-400">Investment Amount:</span> {formData.investmentAmount}</p>
                                                <p><span className="text-gray-600 dark:text-gray-400">Risk Tolerance:</span> {formData.riskTolerance}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Navigation Buttons */}
                                <div className="flex justify-between pt-6">
                                    <button
                                        type="button"
                                        onClick={prevStep}
                                        className={`glass-input px-6 py-3 ${
                                            currentStep === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/10'
                                        } transition-colors duration-300`}
                                        disabled={currentStep === 1}
                                    >
                                        ← Previous
                                    </button>

                                    {currentStep < 3 ? (
                                        <button
                                            type="button"
                                            onClick={nextStep}
                                            className="glass-cta-button px-8 py-3"
                                        >
                                            Next Step →
                                        </button>
                                    ) : (
                                        <button
                                            type="submit"
                                            disabled={isSubmitting || !formData.agreeToTerms}
                                            className="glass-cta-button px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center">
                                                    <span className="animate-spin mr-2">⏳</span>
                                                    Creating Account...
                                                </span>
                                            ) : (
                                                'Complete Registration 🚀'
                                            )}
                                        </button>
                                    )}
                                </div>
                            </form>
                        </GlassCard>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;