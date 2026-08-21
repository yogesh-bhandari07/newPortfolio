import React, { useState } from 'react';
import { Users, CheckCircle2, CreditCard, TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import { IMPACT_METRICS } from '../data/portfolioData';

export const ImpactMetrics: React.FC = () => {
  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-8 h-8 text-[#944a00]" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-8 h-8 text-[#944a00]" />;
      case 'CreditCard':
        return <CreditCard className="w-8 h-8 text-[#944a00]" />;
      default:
        return <TrendingUp className="w-8 h-8 text-[#944a00]" />;
    }
  };

  return (
    <section id="impact" className="py-16 md:py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#944a00] tracking-tight">
          Impact & Scale
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {IMPACT_METRICS.map((metric) => (
          <div
            key={metric.id}
            id={`metric-card-${metric.id}`}
            onMouseEnter={() => setHoveredMetric(metric.id)}
            onMouseLeave={() => setHoveredMetric(null)}
            className="neu-surface rounded-3xl p-8 md:p-10 flex flex-col items-center justify-center text-center glint-card cursor-default group transition-all duration-300"
          >
            {/* Sunk Icon Circle */}
            <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full neu-pressed flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              {getIcon(metric.icon)}
            </div>

            {/* Large Metric Value */}
            <h3 className="text-4xl sm:text-5xl font-extrabold text-[#191c1e] tracking-tight mb-2 group-hover:text-[#944a00] transition-colors">
              {metric.value}
            </h3>

            {/* Metric Label */}
            <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#554337]">
              {metric.label}
            </p>

            {/* Context snippet */}
            {metric.description && (
              <p className="text-xs text-[#745943] mt-3 max-w-[240px] opacity-80 group-hover:opacity-100 transition-opacity">
                {metric.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
