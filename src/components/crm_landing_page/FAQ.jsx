import { motion } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What is ZIU CRM and how does it work?',
      answer: 'ZIU CRM is a comprehensive Customer Relationship Management platform designed to help businesses manage leads, customers, sales pipelines, and team activities. It works by centralizing all your customer data and interactions in one place, accessible from web and mobile devices.',
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card is required to start your trial. You can explore all the capabilities of ZIU CRM risk-free.',
    },
    {
      question: 'Can I import my existing data?',
      answer: 'Absolutely! ZIU CRM supports easy data import from CSV files, Excel spreadsheets, and other popular CRM systems. Our support team can assist you with the migration process to ensure a smooth transition.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Security is our top priority. We use bank-level encryption, secure cloud infrastructure, regular backups, and comply with international data protection standards including GDPR. Your data is safe and accessible only to authorized users.',
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer multiple support channels including email support for all plans, priority support for Professional plans, and 24/7 phone support for Enterprise customers. We also provide comprehensive documentation, video tutorials, and onboarding assistance.',
    },
    {
      question: 'Can I customize ZIU CRM for my business?',
      answer: 'Yes! ZIU CRM is highly customizable. You can create custom fields, set up automated workflows, configure user roles and permissions, and integrate with other tools you use. Enterprise plans include even more customization options.',
    },
    {
      question: 'How does billing work?',
      answer: 'We offer monthly and annual billing options. Annual plans come with a discount. You can upgrade, downgrade, or cancel your plan at any time. We provide prorated credits for plan changes.',
    },
    {
      question: 'Is training provided?',
      answer: 'Yes! We provide comprehensive onboarding for all new customers, including video tutorials, documentation, and webinars. Professional and Enterprise plans include personalized training sessions with our team.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about ZIU CRM
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="text-white" size={20} />
                  ) : (
                    <Plus className="text-white" size={20} />
                  )}
                </div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all">
            Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  );
}
