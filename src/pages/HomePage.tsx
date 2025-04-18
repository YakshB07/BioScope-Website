import { Link } from 'react-router-dom';
import { Activity, Heart, PieChart, ArrowRight, Shield, Server, BarChart4, Brain } from 'lucide-react';
import AnimatedElement from '../components/AnimatedElement';
import BiomarkerAnimation from '../components/BiomarkerAnimation';
import FeatureCard from '../components/FeatureCard';
import WaitlistForm from '../components/WaitlistForm';


const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <BiomarkerAnimation />
        </div>
        <div className="container mx-auto px-4 z-10 py-36 md:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedElement className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Empowering Prevention with AI-Driven Biomarker Monitoring
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Using blood data and intelligent sensors to detect cardiovascular disease before it's too late.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/product" className="btn btn-primary">
                  Learn More
                </Link>
                <a href="#waitlist" className="btn btn-secondary">
                  Join the Waitlist
                </a>
              </div>
              <div className="mt-12 flex items-center space-x-2">
                <span className="inline-block w-3 h-3 bg-green-400 rounded-full pulse"></span>
                <span className="text-blue-100">Pending FDA Approval</span>
              </div>
            </AnimatedElement>
            
            <AnimatedElement delay={300} className="hidden lg:block">
              <div className="relative">
                <div className="w-full h-80 rounded-2xl bg-gradient-accent flex items-center justify-center p-8">
                  <div className="data-wave absolute top-0 left-0 right-0 h-2"></div>
                  <div className="relative w-48 h-48 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center">
                    <div className="absolute inset-0 border-4 border-blue-300/30 rounded-full animate-pulse"></div>
                    <Activity size={80} className="text-white" />
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Heart size={20} className="text-green-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Heart Health</div>
                      <div className="text-sm font-semibold text-green-600">Optimal</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <PieChart size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Biomarkers</div>
                      <div className="text-sm font-semibold text-blue-600">65+ Tracked</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <AnimatedElement className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Revolutionary Health Monitoring
            </h2>
            <p className="text-gray-600 text-lg">
              Biosense uses advanced technology to continuously monitor your cardiovascular health and detect 
              potential issues before they become serious problems.
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Heart size={28} />}
              title="Early Detection"
              description="Identify cardiovascular issues months before conventional methods by tracking changes in key biomarkers."
              delay={150}
            />
            <FeatureCard
              icon={<Brain size={28} />}
              title="AI-Powered Analysis"
              description="Our proprietary algorithms analyze biomarker patterns to provide personalized health insights."
              delay={300}
            />
            <FeatureCard
              icon={<BarChart4 size={28} />}
              title="Real-time Monitoring"
              description="Continuous blood analysis with 8 advanced biomarker sensors that track over 65 key health indicators."
              delay={450}
            />
            <FeatureCard
              icon={<Shield size={28} />}
              title="Privacy Focused"
              description="Bank-level encryption and strict data policies ensure your health information remains secure and private."
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedElement>
              <div className="relative">
                <div className="bg-blue-50 rounded-2xl p-8 w-full h-96 flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    <div className="absolute -inset-4 rounded-full border-2 border-dashed border-primary-light animate-spin-slow"></div>
                    <div className="bg-white rounded-full shadow-xl p-8 h-full w-full flex items-center justify-center">
                      <Server size={80} className="text-primary" />
                    </div>
                    {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                      <div 
                        key={i}
                        className="absolute w-6 h-6 bg-primary rounded-full"
                        style={{
                          top: `${50 + 45 * Math.sin(i * Math.PI / 4)}%`,
                          left: `${50 + 45 * Math.cos(i * Math.PI / 4)}%`,
                          transform: 'translate(-50%, -50%)'
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3">
                  <div className="text-sm font-medium">8 Advanced Sensors</div>
                </div>
                <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-3">
                  <div className="text-sm font-medium">$250 per unit</div>
                </div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement delay={300}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Meet Biosense: The Future of Health Monitoring
              </h2>
              <p className="text-gray-600 mb-6">
                Biosense is a revolutionary implantable device that uses AI and blood-based analysis to detect 
                cardiovascular diseases early, when intervention is most effective.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    <strong>Blood-based analysis</strong> with 8 specialized biomarker sensors
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    <strong>AI-powered</strong> pattern recognition and predictive analytics
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    <strong>Real-time monitoring</strong> of 65+ cardiovascular biomarkers
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    <strong>Compact and discreet</strong> for comfortable continuous wear
                  </span>
                </li>
              </ul>
              <Link to="/product" className="inline-flex items-center group">
                <span className="text-primary font-medium">Learn more about Biosense</span>
                <ArrowRight size={18} className="ml-2 text-primary transition-transform group-hover:translate-x-1" />
              </Link>
            </AnimatedElement>
          </div>
        </div>
      </section>

    

      {/* Waitlist Section */}
      <section id="waitlist" className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <AnimatedElement className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Be the First to Experience Biosense
              </h2>
              <p className="text-gray-600 text-lg">
                Join our waitlist to get early access to this revolutionary technology
                and help shape the future of preventative healthcare.
              </p>
            </AnimatedElement>
            
            <AnimatedElement delay={200}>
              <WaitlistForm />
            </AnimatedElement>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;