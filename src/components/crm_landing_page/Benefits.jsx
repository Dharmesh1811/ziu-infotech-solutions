import { motion } from 'framer-motion';
import { Zap, TrendingUp, Heart, Briefcase } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: Zap,
      title: 'Save Time with Automation',
      description: 'Automate repetitive tasks, follow-ups, and notifications to focus on what matters most.',
      // stats: '80% faster',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: TrendingUp,
      title: 'Increase Sales Productivity',
      description: 'Empower your sales team with tools and insights to close more deals efficiently.',
      // stats: '3x more deals',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Heart,
      title: 'Better Customer Relationships',
      description: 'Build stronger relationships with personalized communication and timely follow-ups.',
      // stats: '95% satisfaction',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Briefcase,
      title: 'Organized Business Workflow',
      description: 'Keep your entire team aligned with centralized data and streamlined processes.',
      // stats: '100% organized',
      color: 'from-blue-500 to-indigo-500',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Why Businesses{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Love ZIU CRM
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Measurable results that drive real business growth
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                  <benefit.icon className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold">{benefit.title}</h3>
                    {/* <span className={`px-3 py-1 bg-gradient-to-r ${benefit.color} text-white text-sm font-bold rounded-full`}>
                      {benefit.stats}
                    </span> */}
                  </div>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
