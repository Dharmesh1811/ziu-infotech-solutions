import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, MessageCircle, Shield, Zap, Star } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-12 sm:py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Animated Background Orbs */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-400/30 blur-[100px]"
            />
            <motion.div
              animate={{
                x: [0, -100, 0],
                y: [0, 100, 0],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-purple-400/30 blur-[120px]"
            />
            {/* Grid Pattern overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSIvPjwvc3ZnPg==')] opacity-30"></div>
          </div>

          <div className="relative px-6 py-10 sm:py-14 sm:px-12 lg:px-20 flex flex-col items-center text-center">

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8 shadow-inner"
            >
              <Sparkles className="text-yellow-300" size={18} />
              <span className="text-sm font-semibold text-white tracking-wide uppercase">Limited Time Offer</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight max-w-4xl"
            >
              Start Managing Your Business <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">
                Smarter Today
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-indigo-100 mb-10 max-w-2xl font-medium leading-relaxed"
            >
              Join growing businesses using ZIU CRM. Start your journey with a 7-day free trial on our Trial Pro plan — no credit card required.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-5 justify-center mb-12 w-full sm:w-auto"
            >
              <a
                href="http://ziucrm.ziuinfotech.in/register"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Free Trial
                  <ArrowRight className="group-hover:translate-x-1.5 transition-transform" size={20} />
                </span>
                <div className="absolute inset-0 h-full w-full scale-0 rounded-xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/90 z-0"></div>
              </a>
              <a
                href="https://wa.me/918128166631?text=Hello!%20I%20am%20interested%20in%20a%20demo%20of%20ZIU%20CRM.%20Please%20provide%20more%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-xl hover:bg-white/20 transition-all flex items-center justify-center gap-3 font-semibold hover:border-white/50"
              >
                <div className="bg-green-500/20 p-1.5 rounded-full">
                  <MessageCircle size={18} className="text-green-300" />
                </div>
                Book a Demo
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-indigo-100 pt-8 border-t border-white/10 w-full"
            >
              <div className="flex items-center justify-center gap-2">
                <Zap className="text-yellow-400" size={18} />
                <span className="font-medium">07-day free trial</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Shield className="text-green-400" size={18} />
                <span className="font-medium">No credit card required</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Star className="text-purple-300" size={18} />
                <span className="font-medium">Cancel anytime</span>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
