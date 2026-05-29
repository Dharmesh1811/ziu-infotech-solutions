import { motion } from 'framer-motion';
import { Users, UserCheck, Bell, TrendingUp, Eye, MessageCircle, CheckSquare, BarChart3, ShieldCheck } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Users,
      title: 'Lead Management',
      description: 'Capture, organize, and track all your leads in one central platform.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: UserCheck,
      title: 'Customer Management',
      description: 'Store and manage complete customer information and interaction history.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Bell,
      title: 'Follow-up Reminders',
      description: 'Never miss a follow-up with automated reminders and notifications.',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: CheckSquare,
      title: 'Task Management',
      description: 'Create, assign, and track tasks to keep your team organized.',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: Eye,
      title: 'Team Activity Monitoring',
      description: 'Track team performance and monitor activities in real-time.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: MessageCircle,
      title: 'Call & WhatsApp Tracking',
      description: 'Log calls and WhatsApp conversations automatically with customers.',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: BarChart3,
      title: 'Reports & Analytics',
      description: 'Get actionable insights with powerful analytics and custom reports.',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: ShieldCheck,
      title: 'Role-based User Access',
      description: 'Control data access with customizable user roles and permissions.',
      color: 'from-teal-500 to-teal-600',
    },
    // {
    //   icon: TrendingUp,
    //   title: 'Security & Access Control',
    //   description: 'Control data access with customizable user roles and permissions.',
    //   color: 'from-green-500 to-green-600',
    // },
  ];

  return (
    <section id="features" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Grow Your Business
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features to manage your entire customer relationship lifecycle
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-xl transition-all hover:border-transparent"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
