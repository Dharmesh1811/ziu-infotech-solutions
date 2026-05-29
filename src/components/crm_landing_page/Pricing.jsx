import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: 'Trial Pro',
      price: '0',
      priceSubtitle: null,
      totalPrice: null,
      period: '7 Days',
      telecallersBadge: '1 Telecaller',
      description: 'Perfect to try out our features',
      features: [
        { text: '7 Days Validity', included: true },
        { text: 'Basic lead management', included: true },
        { text: 'Email Support', included: true },
        { text: 'WhatsApp Integration', included: false },
        { text: 'Advanced reports & analytics', included: false },
        { text: 'Priority support', included: false },
      ],
      popular: false,
      cta: 'Choose Plan',
    },
    {
      name: 'Business Lite',
      price: '149',
      priceSubtitle: 'Per Telecaller per month',
      totalPrice: '299',
      period: '30 Days',
      telecallersBadge: '2 Telecallers',
      description: 'Ideal for small teams getting started',
      features: [
        { text: '30 Days Validity', included: true },
        { text: 'Standard lead management', included: true },
        { text: 'WhatsApp Integration', included: true },
        { text: 'Email Support', included: true },
        { text: 'Advanced reports & analytics', included: false },
        { text: 'Priority support', included: false },
      ],
      popular: false,
      cta: 'Choose Plan',
    },
    {
      name: 'Business Pro',
      price: '111',
      priceSubtitle: 'Per Telecaller per month',
      totalPrice: '1999',
      period: '180 Days',
      telecallersBadge: '3 Telecallers',
      description: 'For growing teams that need more power',
      features: [
        { text: '180 Days Validity', included: true },
        { text: 'Advanced lead management', included: true },
        { text: 'WhatsApp Integration', included: true },
        { text: 'Advanced reports & analytics', included: true },
        { text: 'Priority support', included: true },
        { text: 'Dedicated support', included: false },
      ],
      popular: true,
      cta: 'Choose Plan',
    },
    {
      name: 'Enterprise',
      price: '99',
      priceSubtitle: 'Per Telecaller per month',
      totalPrice: '5999',
      period: '365 Days',
      telecallersBadge: 'Custom Telecallers',
      description: 'For large organizations with custom needs',
      features: [
        { text: '365 Days Validity', included: true },
        { text: 'Full CRM suite', included: true },
        { text: 'WhatsApp Integration', included: true },
        { text: 'Advanced reports & analytics', included: true },
        { text: 'Priority support', included: true },
        { text: 'Dedicated support', included: true },
      ],
      popular: false,
      cta: 'Choose Plan',
    },
  ];

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Simple,{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your business size and needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 flex flex-col h-full ${plan.popular
                  ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl scale-105'
                  : 'bg-white border-2 border-gray-200'
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-400 text-gray-900 text-sm font-bold rounded-full">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-xl font-bold mb-6 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>

                <div className="mb-4">
                  <div className="flex items-center justify-center">
                    <span className={`text-3xl font-bold ${plan.popular ? 'text-white' : 'text-gray-800'}`}>
                      {plan.price === '0' ? 'Free' : '₹' + plan.price}
                    </span>
                  </div>
                  {plan.priceSubtitle && (
                    <div className={`text-sm mt-3 ${plan.popular ? 'text-blue-100' : 'text-gray-500'}`}>
                      {plan.priceSubtitle}
                    </div>
                  )}
                </div>

                <div className="flex items-baseline justify-center gap-1.5 mb-6">
                  {plan.totalPrice !== null && (
                    <div className={`text-lg font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                       ₹{plan.totalPrice}
                    </div>
                  )}
                  <div className={`text-sm font-bold ${plan.popular ? 'text-blue-200' : 'text-gray-600'}`}>
                    / {plan.period}
                  </div>
                </div>

                <div className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold ${plan.popular
                    ? 'bg-white text-blue-600'
                    : 'bg-indigo-50 text-indigo-600'
                  }`}>
                  {plan.telecallersBadge}
                </div>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className={`flex items-start gap-3 ${feature.included ? '' : 'opacity-60'}`}>
                    {feature.included ? (
                      <Check
                        className={`flex-shrink-0 ${plan.popular ? 'text-blue-200' : 'text-green-500'}`}
                        size={20}
                      />
                    ) : (
                      <X
                        className={`flex-shrink-0 ${plan.popular ? 'text-blue-200/60' : 'text-red-400'}`}
                        size={20}
                      />
                    )}
                    <span className={`${plan.popular ? (feature.included ? 'text-blue-50' : 'text-blue-100/60') : (feature.included ? 'text-gray-700' : 'text-gray-500')}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="http://ziucrm.ziuinfotech.in/register"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-lg font-semibold transition-all text-center block ${plan.popular
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                  }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 mt-12"
        >
          Enjoy a 7-day free trial with the Trial Pro plan • No credit card required • Cancel anytime
        </motion.p>
      </div>
    </section>
  );
}
