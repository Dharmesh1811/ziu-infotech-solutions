import { motion } from 'framer-motion';
import { MousePointer, Users, TrendingUp, Rocket } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: MousePointer,
      number: '01',
      title: 'Capture Leads',
      description: 'Import leads from multiple sources or capture them directly in the CRM.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Users,
      number: '02',
      title: 'Assign to Team',
      description: 'Distribute leads to your sales team based on territory, product, or custom rules.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: TrendingUp,
      number: '03',
      title: 'Track Follow-ups',
      description: 'Set reminders, log activities, and track every interaction with prospects.',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Rocket,
      number: '04',
      title: 'Convert to Customers',
      description: 'Close deals faster with pipeline tracking and analytics insights.',
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            How{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              It Works
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Get started in minutes with our simple 4-step process
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line */}
              {/* {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 -z-10"></div>
              )} */}

              <div className="text-center">
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center relative`}>
                  <step.icon className="text-white" size={32} />
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {step.number}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="http://ziucrm.ziuinfotech.in/register"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-xl transition-all inline-block"
          >
            Start Your Free Trial
          </a>
        </motion.div>
      </div>
    </section>
  );
}
