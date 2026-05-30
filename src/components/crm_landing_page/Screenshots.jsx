import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Users, Clock, BarChart3, LayoutDashboard, Eye } from 'lucide-react';
import dashboard1 from './assets/dashboard1.png';
import dashboard2 from './assets/dashboard2.png';
import leadManagement from './assets/lead_management.png';
import analytics1 from './assets/Analytics_img1.png';
import analytics2 from './assets/Analytics_img2.png'; 

export function Screenshots() {
  const screenshots = [
    {
      title: 'Dashboard',
      description: 'Get a complete overview of your CRM activity in one place',
      images: [dashboard1, dashboard2],
      points: [
        {
          icon: LayoutDashboard,
          title: 'Business Overview',
          text: 'The dashboard provides a quick summary of your CRM activities including total leads, active users, pending follow-ups, and converted leads.'
        },
        {
          icon: BarChart3,
          title: 'Real-Time Analytics',
          text: 'Monitor important metrics such as daily leads, monthly growth, conversion rates, and team performance through clear charts.'
        },
        {
          icon: Eye,
          title: 'Task & Team Monitoring',
          text: 'Easily track team activities, follow-ups, and assigned tasks so managers can ensure every lead is handled efficiently.'
        }
      ]
    },
    {
      title: 'Lead Management Dashboard',
      description: 'Track and manage all your leads in one place. Centralized tracking, smart assignments, and real-time analytics.',
      images: [leadManagement],
      points: [
        {
          icon: Users,
          title: 'Centralized Lead Tracking',
          text: 'Capture and manage all leads from different sources in a single dashboard. View customer details, status, and interaction history.'
        },
        {
          icon: Clock,
          title: 'Smart Assignment & Follow-ups',
          text: 'Assign leads to telecallers instantly and schedule   follow-ups with reminders so no opportunity is missed.'
        },
        {
          icon: BarChart3,
          title: 'Real-time Analytics',
          text: 'Monitor lead status, conversion rates, and team performance with real-time dashboards and reports.'
        }
      ]
    },
    {
      title: 'Analytics',
      description: 'Gain insights into your sales performance and lead activity',
      images: [analytics2, analytics1],
      points: [
        {
          icon: BarChart3,
          title: 'Lead Performance Insights',
          text: 'Analyze lead data with clear reports showing total leads, converted leads, pending leads, and lost opportunities.'
        },
        {
          icon: Users,
          title: 'Team Productivity Tracking',
          text: 'Monitor telecaller and sales team performance with detailed analytics. See handles, follow-ups, and conversion results.'
        },
        {
          icon: Eye,
          title: 'Data-Driven Decision Making',
          text: 'Visual charts and reports help identify trends and lead sources so you can make smarter business decisions.'
        }
      ]
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            See ZIU CRM in{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful dashboard interfaces designed for productivity
          </p>
        </motion.div>

        <div className="space-y-32">
          {screenshots.map((screenshot, index) => (
            <ScreenshotItem key={screenshot.title} screenshot={screenshot} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ScreenshotItem({ screenshot, index }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (screenshot.images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % screenshot.images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer);
  }, [screenshot.images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className={`grid lg:grid-cols-12 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
        }`}
    >
      <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2' : ''} pt-4`}>
        <h3 className="text-3xl font-bold mb-4">{screenshot.title}</h3>
        <p className="text-lg text-gray-600 mb-8">{screenshot.description}</p>

        {screenshot.points.length > 0 && (
          <div className="space-y-6">
            {screenshot.points.map((point, pIndex) => (
              <div key={pIndex} className="flex gap-4 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                  <point.icon size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{point.title}</h4>
                  <p className="text-sm text-gray-600">{point.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10">
          <a
            href="http://ziucrm.ziuinfotech.in/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-semibold"
          >
            Try This Feature
          </a>
        </div>
      </div>

      <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>

          {/* Fading Image Container */}
          <div className="relative bg-white rounded-3xl shadow-2xl p-1 overflow-hidden border border-gray-100 aspect-[16/10] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(10px)' }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="w-full h-full"
              >
                <ImageWithFallback
                  src={screenshot.images[currentImageIndex]}
                  alt={`${screenshot.title} ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain rounded-2xl"
                />
              </motion.div>
            </AnimatePresence>

            {/* Pagination Dots */}
            {screenshot.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {screenshot.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImageIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${currentImageIndex === i ? 'bg-blue-600 w-6' : 'bg-gray-300'
                      }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
