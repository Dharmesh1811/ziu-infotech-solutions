import { motion } from 'framer-motion';

export function TrustedBy() {
  const companies = [
    { name: 'TechCorp', color: 'from-blue-600 to-blue-700' },
    { name: 'Innovate', color: 'from-purple-600 to-purple-700' },
    { name: 'GrowthHub', color: 'from-green-600 to-green-700' },
    { name: 'SalesPro', color: 'from-orange-600 to-orange-700' },
    { name: 'BizNext', color: 'from-pink-600 to-pink-700' },
    { name: 'CloudWorks', color: 'from-indigo-600 to-indigo-700' },
  ];

  return (
    <section className="py-12 bg-white border-b">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 mb-8"
        >
          Trusted by leading companies worldwide
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="text-center">
                <div className={`w-12 h-12 mx-auto mb-2 bg-gradient-to-br ${company.color} rounded-lg flex items-center justify-center`}>
                  <span className="text-white font-bold text-xl">
                    {company.name.charAt(0)}
                  </span>
                </div>
                <span className="text-sm text-gray-600">{company.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
