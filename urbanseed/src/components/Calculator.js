import React, { useState } from 'react';
import GlassCard from './GlassCard';

function Calculator() {
    const [initialInvestment, setInitialInvestment] = useState('');
    const [annualReturn, setAnnualReturn] = useState('');
    const [duration, setDuration] = useState('');
    const [result, setResult] = useState('');
    const [isCalculating, setIsCalculating] = useState(false);

    const calculateReturn = () => {
        setIsCalculating(true);
        setTimeout(() => {
            const principal = parseFloat(initialInvestment);
            const rate = parseFloat(annualReturn) / 100;
            const time = parseFloat(duration);
            
            if (principal && rate && time) {
                const amount = principal * Math.pow(1 + rate, time);
                const profit = amount - principal;
                setResult({
                    totalAmount: amount.toFixed(2),
                    profit: profit.toFixed(2),
                    principal: principal.toFixed(2),
                    monthlyReturn: ((amount - principal) / (time * 12)).toFixed(2)
                });
            } else {
                setResult('Please fill in all fields with valid numbers.');
            }
            setIsCalculating(false);
        }, 1000);
    };

    const resetCalculator = () => {
        setInitialInvestment('');
        setAnnualReturn('');
        setDuration('');
        setResult('');
    };

    const quickPresets = [
        { investment: '1000', return: '12', duration: '3', label: 'Starter Plan' },
        { investment: '10000', return: '10', duration: '2', label: 'Growth Plan' },
        { investment: '50000', return: '15', duration: '5', label: 'Premium Plan' }
    ];

    const applyPreset = (preset) => {
        setInitialInvestment(preset.investment);
        setAnnualReturn(preset.return);
        setDuration(preset.duration);
    };

    return (
        <div className="py-20 min-h-screen">
            <div className="glass-overlay"></div>
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-4">
                        Investment Calculator
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Calculate your potential returns and plan your investment strategy with our advanced calculator.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Calculator Form */}
                    <GlassCard variant="premium">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                                Calculate Your Returns
                            </h3>

                            {/* Quick Presets */}
                            <div className="space-y-3">
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                                    Quick Presets
                                </label>
                                <div className="grid grid-cols-3 gap-2">
                                    {quickPresets.map((preset, index) => (
                                        <button
                                            key={index}
                                            onClick={() => applyPreset(preset)}
                                            className="glass-input text-xs py-2 px-3 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors duration-300"
                                        >
                                            {preset.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Input Fields */}
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                        💰 Initial Investment (€)
                                    </label>
                                    <input
                                        type="number"
                                        value={initialInvestment}
                                        onChange={(e) => setInitialInvestment(e.target.value)}
                                        className="glass-input w-full text-lg"
                                        placeholder="Enter your investment amount"
                                        min="0"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                        📈 Annual Return Rate (%)
                                    </label>
                                    <input
                                        type="number"
                                        value={annualReturn}
                                        onChange={(e) => setAnnualReturn(e.target.value)}
                                        className="glass-input w-full text-lg"
                                        placeholder="Expected annual return"
                                        min="0"
                                        max="100"
                                        step="0.1"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                        ⏱️ Investment Duration (Years)
                                    </label>
                                    <input
                                        type="number"
                                        value={duration}
                                        onChange={(e) => setDuration(e.target.value)}
                                        className="glass-input w-full text-lg"
                                        placeholder="How many years?"
                                        min="1"
                                        max="50"
                                    />
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-4">
                                <button
                                    onClick={calculateReturn}
                                    disabled={isCalculating}
                                    className="glass-cta-button flex-1 py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isCalculating ? (
                                        <span className="flex items-center justify-center">
                                            <span className="animate-spin mr-2">⏳</span>
                                            Calculating...
                                        </span>
                                    ) : (
                                        'Calculate Returns'
                                    )}
                                </button>
                                <button
                                    onClick={resetCalculator}
                                    className="glass-input px-6 py-3 hover:bg-white/10 transition-colors duration-300"
                                >
                                    Reset
                                </button>
                            </div>
                        </div>
                    </GlassCard>

                    {/* Results Display */}
                    <GlassCard variant="premium">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                                Investment Projection
                            </h3>

                            {typeof result === 'object' && result ? (
                                <div className="space-y-6">
                                    {/* Summary Cards */}
                                    <div className="grid grid-cols-1 gap-4">
                                        <div className="glass-input p-4 text-center">
                                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Return</p>
                                            <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                                                €{result.totalAmount}
                                            </p>
                                        </div>
                                        <div className="glass-input p-4 text-center">
                                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Profit</p>
                                            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                                €{result.profit}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Detailed Breakdown */}
                                    <div className="space-y-4">
                                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                                            Breakdown
                                        </h4>
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-600 dark:text-gray-400">Initial Investment:</span>
                                                <span className="font-semibold text-gray-800 dark:text-white">€{result.principal}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-600 dark:text-gray-400">Total Profit:</span>
                                                <span className="font-semibold text-emerald-600 dark:text-emerald-400">€{result.profit}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-600 dark:text-gray-400">Avg. Monthly Return:</span>
                                                <span className="font-semibold text-blue-600 dark:text-blue-400">€{result.monthlyReturn}</span>
                                            </div>
                                            <div className="flex justify-between items-center border-t border-gray-200 dark:border-gray-700 pt-3">
                                                <span className="font-semibold text-gray-800 dark:text-white">Final Amount:</span>
                                                <span className="font-bold text-xl text-emerald-600 dark:text-emerald-400">€{result.totalAmount}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Investment Tips */}
                                    <div className="glass-input p-4">
                                        <h5 className="font-semibold text-gray-800 dark:text-white mb-2">💡 Investment Tip</h5>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            Consider diversifying your portfolio across multiple projects to minimize risk while maximizing returns.
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <div className="text-6xl mb-4">📊</div>
                                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                                        Enter your investment details to see your potential returns
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-500">
                                        Use the calculator on the left to get started
                                    </p>
                                    {typeof result === 'string' && result && (
                                        <div className="mt-4 glass-input p-3 text-red-600 dark:text-red-400">
                                            {result}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </GlassCard>
                </div>

                {/* Additional Information */}
                <div className="mt-16">
                    <GlassCard className="text-center">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                                Ready to Start Investing?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                                Our calculator provides estimates based on compound interest. Actual returns may vary based on market conditions and project performance.
                            </p>
                            <button className="glass-cta-button px-8 py-3">
                                Explore Investment Plans
                            </button>
                        </div>
                    </GlassCard>
                </div>
            </div>
        </div>
    );
}

export default Calculator;