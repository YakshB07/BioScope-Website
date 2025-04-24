import { Zap, Shield, Database, Activity, Layers, Code, Lock, Brush, Cpu, Network, Gauge, RefreshCw } from 'lucide-react';
import AnimatedElement from '../components/AnimatedElement';

const TechnologyPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white pt-40 pb-20">
        <div className="container mx-auto px-4">
          <AnimatedElement className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Technology
            </h1>
            <p className="text-xl text-blue-100">
              Advanced biomarker sensors and AI working together to revolutionize cardiovascular care.
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Sensor Technology */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedElement>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Advanced Sensor Technology
              </h2>
              <p className="text-gray-700 mb-6">
                At the heart of Biosense are our proprietary electrochemical biosensors that can detect 
                and measure over 65 biomarkers in your bloodstream. These miniaturized sensors are 
                designed for accuracy, reliability, and longevity.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <Cpu className="text-primary" size={24} />,
                    title: "8 Integrated Sensors",
                    description: "Advanced biomarker sensors calibrated to detect over 65 unique biomarkers with high precision."
                  },
                  {
                    icon: <RefreshCw className="text-primary" size={24} />,
                    title: "Self-Calibrating System",
                    description: "Intelligent self-calibration maintains consistent accuracy throughout the device's lifetime."
                  },
                  {
                    icon: <Network className="text-primary" size={24} />,
                    title: "Wireless Connectivity",
                    description: "Seamless integration with mobile devices and secure cloud storage for real-time monitoring."
                  },
                  {
                    icon: <Gauge className="text-primary" size={24} />,
                    title: "Real-Time Analysis",
                    description: "Continuous monitoring and instant analysis of blood biomarkers for immediate insights."
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 bg-gray-50 p-4 rounded-lg">
                    <div className="mt-1">{feature.icon}</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedElement>
            
            <AnimatedElement delay={300}>
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 relative">
                <div className="aspect-square relative">
                  {/* Central sensor icon */}
                  {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-36 h-36 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <Activity size={64} className="text-primary" />
                    </div>
                  </div> */}
                  
                  {/* Sensor details */}
                  {[
                    { icon: <Zap size={24} />, label: "Biomarker Detection", pos: "top-0 left-0" },
                    { icon: <Shield size={24} />, label: "Self-Calibration", pos: "top-0 right-0" },
                    { icon: <Database size={24} />, label: "Data Processing", pos: "bottom-0 left-0" },
                    { icon: <Layers size={24} />, label: "Multi-Layer Analysis", pos: "bottom-0 right-0" }
                  ].map((item, index) => (
                    <div key={index} className={`absolute ${item.pos} bg-white p-4 rounded-lg shadow-md flex items-center space-x-3`}>
                      <div className="text-primary">{item.icon}</div>
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                  ))}
                  
                  {/* Connection lines */}
                  <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                    <line x1="25%" y1="25%" x2="50%" y2="50%" stroke="#07B6E0" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="75%" y1="25%" x2="50%" y2="50%" stroke="#07B6E0" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="25%" y1="75%" x2="50%" y2="50%" stroke="#07B6E0" strokeWidth="2" strokeDasharray="5,5" />
                    <line x1="75%" y1="75%" x2="50%" y2="50%" stroke="#07B6E0" strokeWidth="2" strokeDasharray="5,5" />
                  </svg>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* AI & Machine Learning */}
      <section className="section bg-gray-50">
        <div className="container">
          <AnimatedElement className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hybrid AI Technology
            </h2>
            <p className="text-gray-600 text-lg">
              Our advanced AI system combines CNNs and RNNs for comprehensive biomarker analysis.
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brush size={32} />,
                title: "Pattern Recognition",
                description: "Convolutional Neural Networks (CNNs) identify complex patterns in biomarker data, detecting subtle changes that might indicate early disease markers."
              },
              {
                icon: <Code size={32} />,
                title: "Temporal Analysis",
                description: "Recurrent Neural Networks (RNNs) analyze time-series data to understand how biomarker patterns evolve over time, enabling predictive insights."
              },
              {
                icon: <Database size={32} />,
                title: "Continuous Learning",
                description: "Our hybrid AI system continuously improves through federated learning, incorporating new clinical findings while maintaining patient privacy."
              }
            ].map((feature, index) => (
              <AnimatedElement key={index} delay={index * 150} className="bg-white rounded-xl shadow-md p-8">
                <div className="rounded-full bg-primary-light w-16 h-16 flex items-center justify-center mb-6">
                  <div className="text-primary">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="section">
        <div className="container">
          <AnimatedElement className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical Specifications
            </h2>
            <p className="text-gray-600 text-lg">
              Advanced technology in a compact, user-friendly design
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedElement>
              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-xl font-semibold mb-6 pb-4 border-b border-gray-200">
                  Sensor Specifications
                </h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="w-40 text-gray-600">Sensor Count</span>
                    <span className="font-medium text-gray-800">8 biomarker sensors</span>
                  </li>
                  <li className="flex">
                    <span className="w-40 text-gray-600">Detection Range</span>
                    <span className="font-medium text-gray-800">65+ unique biomarkers</span>
                  </li>
                  <li className="flex">
                    <span className="w-40 text-gray-600">Calibration</span>
                    <span className="font-medium text-gray-800">Self-calibrating system</span>
                  </li>
                  <li className="flex">
                    <span className="w-40 text-gray-600">Accuracy</span>
                    <span className="font-medium text-gray-800">±2% variance</span>
                  </li>
                  <li className="flex">
                    <span className="w-40 text-gray-600">Response Time</span>
                    <span className="font-medium text-gray-800"> 5 seconds</span>
                  </li>
                  <li className="flex">
                    <span className="w-40 text-gray-600">Sampling Rate</span>
                    <span className="font-medium text-gray-800">Continuous monitoring</span>
                  </li>
                </ul>
              </div>
            </AnimatedElement>
            
            <AnimatedElement delay={300}>
              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-xl font-semibold mb-6 pb-4 border-b border-gray-200">
                  System Integration
                </h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="w-40 text-gray-600">Connectivity</span>
                    <span className="font-medium text-gray-800">Wireless (Bluetooth LE)</span>
                  </li>
                  <li className="flex">
                    <span className="w-40 text-gray-600">Data Storage</span>
                    <span className="font-medium text-gray-800">Secure cloud backup</span>
                  </li>
                  <li className="flex">
                    <span className="w-40 text-gray-600">AI Processing</span>
                    <span className="font-medium text-gray-800">Hybrid CNN/RNN model</span>
                  </li>
                  <li className="flex">
                    <span className="w-40 text-gray-600">Mobile App</span>
                    <span className="font-medium text-gray-800">iOS and Android</span>
                  </li>
                  <li className="flex">
                    <span className="w-40 text-gray-600">API Access</span>
                    <span className="font-medium text-gray-800">REST API available</span>
                  </li>
                  <li className="flex">
                    <span className="w-40 text-gray-600">Updates</span>
                    <span className="font-medium text-gray-800">OTA firmware updates</span>
                  </li>
                </ul>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Data Security */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedElement>
              <div className="bg-gradient-primary text-white rounded-2xl p-8 relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold mb-6">Security Features</h3>
                  <ul className="space-y-4">
                    {[
                      "End-to-end encryption for all data transmission",
                      "HIPAA and GDPR compliant data handling",
                      "Secure multi-factor authentication",
                      "Regular security audits and testing",
                      "Transparent privacy controls",
                      "Zero-knowledge architecture"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Lock size={20} className="text-primary-light mr-3 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-4">
                    {Array(72).fill(0).map((_, i) => (
                      <div key={i} className="border border-white/30 rounded"></div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement delay={300}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Data Security & Privacy
              </h2>
              <p className="text-gray-700 mb-6">
                We prioritize the security and privacy of your health data with industry-leading 
                protection measures and transparent data handling practices.
              </p>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">Data Ownership</h3>
                  <p className="text-gray-600">
                    You maintain full ownership and control of your health data, with the ability to 
                    manage sharing permissions and access controls.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">Secure Transmission</h3>
                  <p className="text-gray-600">
                    All data transmission between the device, mobile app, and cloud storage uses 
                    advanced encryption protocols.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">Compliance</h3>
                  <p className="text-gray-600">
                    Our systems are built to meet and exceed healthcare data protection standards, 
                    including HIPAA and GDPR requirements.
                  </p>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnologyPage;