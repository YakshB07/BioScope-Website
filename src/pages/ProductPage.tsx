import { Link } from 'react-router-dom';
import { Heart, Activity, Shield, Zap, Smartphone, BarChart4, Brain, CheckCircle2 } from 'lucide-react';
import AnimatedElement from '../components/AnimatedElement';
import WaitlistForm from '../components/WaitlistForm';

const ProductPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white pt-40 pb-20">
        <div className="container mx-auto px-4">
          <AnimatedElement className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Biosense
            </h1>
            <p className="text-xl text-blue-100">
              An implantable device that uses AI and blood-based analysis to detect cardiovascular diseases early.
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Product Overview */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedElement>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Future of Cardiovascular Care
              </h2>
              <p className="text-gray-700 mb-6">
                Biosense is an innovative implantable device designed to monitor critical biomarkers 
                in your bloodstream continuously. By detecting subtle changes in key cardiovascular 
                biomarkers before symptoms appear, Biosense empowers both patients and healthcare 
                providers with actionable insights for early intervention.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Activity size={24} className="text-primary" />
                  <span className="text-gray-800 font-medium">Real-time monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap size={24} className="text-primary" />
                  <span className="text-gray-800 font-medium">AI-powered insights</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield size={24} className="text-primary" />
                  <span className="text-gray-800 font-medium">HIPAA compliant</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart size={24} className="text-primary" />
                  <span className="text-gray-800 font-medium">Early detection</span>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 flex items-center">
                <div className="mr-6">
                  <span className="block text-lg font-bold text-gray-800">$250</span>
                  <span className="text-sm text-gray-600">per unit</span>
                </div>
                <p className="text-gray-700 text-sm">
                  Pending FDA approval. Join our waitlist to be notified when Biosense becomes available.
                </p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement delay={300}>
              <div className="relative">
                <div className="bg-gray-100 rounded-2xl p-8 w-full h-96 flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    <div className="absolute -inset-4 rounded-full border-2 border-dashed border-primary-light animate-spin-slow"></div>
                    <div className="bg-white rounded-full shadow-xl p-8 h-full w-full flex items-center justify-center">
                      <Activity size={80} className="text-primary" />
                    </div>
                    
                    {/* Animated dots representing the 8 sensors */}
                    {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                      <div 
                        key={i}
                        className="absolute w-6 h-6 bg-primary rounded-full pulse"
                        style={{
                          top: `${50 + 45 * Math.sin(i * Math.PI / 4)}%`,
                          left: `${50 + 45 * Math.cos(i * Math.PI / 4)}%`,
                          transform: 'translate(-50%, -50%)',
                          animationDelay: `${i * 0.2}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Info cards */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3">
                  <div className="flex items-center space-x-2">
                    <BarChart4 size={20} className="text-primary" />
                    <span className="text-sm font-medium">65+ biomarkers</span>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3">
                  <div className="flex items-center space-x-2">
                    <Brain size={20} className="text-primary" />
                    <span className="text-sm font-medium">AI-powered</span>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Biomarker Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <AnimatedElement className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Biomarker Monitoring
            </h2>
            <p className="text-gray-600 text-lg">
              Biosense tracks over 65 key biomarkers related to cardiovascular health.
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedElement className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Heart size={24} className="text-primary mr-2" />
                Cardiac Biomarkers
              </h3>
              <ul className="space-y-3">
                {[
                  "Troponin T & I",
                  "CK-MB",
                  "Myoglobin",
                  "NT-proBNP",
                  "BNP",
                  "H-FABP"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle2 size={16} className="text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedElement>
            
            <AnimatedElement delay={150} className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Activity size={24} className="text-primary mr-2" />
                Inflammatory Markers
              </h3>
              <ul className="space-y-3">
                {[
                  "C-reactive protein",
                  "Interleukin-6",
                  "TNF-alpha",
                  "Myeloperoxidase",
                  "Fibrinogen",
                  "Homocysteine"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle2 size={16} className="text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedElement>
            
            <AnimatedElement delay={300} className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Zap size={24} className="text-primary mr-2" />
                Lipid & Metabolic Markers
              </h3>
              <ul className="space-y-3">
                {[
                  "LDL & HDL Cholesterol",
                  "Triglycerides",
                  "Apolipoprotein A & B",
                  "Lipoprotein(a)",
                  "Glucose",
                  "HbA1c"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle2 size={16} className="text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedElement>
          </div>
          
          <AnimatedElement delay={450} className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Plus 47 more specialized biomarkers for comprehensive cardiovascular monitoring
            </p>
            <Link to="/technology" className="text-primary font-medium hover:underline">
              Learn more about our biomarker technology →
            </Link>
          </AnimatedElement>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="container">
          <AnimatedElement className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Biosense Works
            </h2>
            <p className="text-gray-600 text-lg">
              A seamless experience from implant to insights
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Activity size={40} />,
                title: "Implantation",
                description: "Biosense is worn on the back of your arm. With a quick press of a button, it painlessly draws a small blood sample—like a finger prick. The needle auto-retracts and should be replaced every two weeks."
              },
              {
                icon: <BarChart4 size={40} />,
                title: "Continuous Monitoring",
                description: "Once activated, Biosense continuously monitors your blood for key biomarkers with its 8 advanced sensors, sending data securely to our AI analysis engine."
              },
              {
                icon: <Smartphone size={40} />,
                title: "Personalized Insights",
                description: "View your health data and receive AI-powered insights through our secure mobile app. Anomalies are flagged for both you and your healthcare provider."
              }
            ].map((step, index) => (
              <AnimatedElement key={index} delay={index * 150} className="relative">
                <div className="bg-gradient-primary text-white rounded-xl p-8 h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="rounded-full bg-white/20 p-3">
                      {step.icon}
                    </div>
                    <span className="text-5xl font-bold text-white/20">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-blue-100">{step.description}</p>
                </div>
                
                {/* Connector line between steps */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary"></div>
                )}
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="section bg-gray-50">
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
                  Device Specifications
                </h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="w-40 text-gray-600">Size</span>
                    <span className="font-medium text-gray-800">12mm x 5mm x 3mm</span>
                  </li>
                  <li className="flex">
                    <span className="w-40 text-gray-600">Weight</span>
                    <span className="font-medium text-gray-800">0.8 grams</span>
                  </li>
                  <li className="flex">
                    <span className="w-40 text-gray-600">Battery Life</span>
                    <span className="font-medium text-gray-800">5 years</span>
                  </li>
                  <li className="flex">
                    <span className="w-40 text-gray-600">Waterproof</span>
                    <span className="font-medium text-gray-800">Yes (IP68)</span>
                  </li>
                  <li className="flex">
                    <span className="w-40 text-gray-600">Biocompatibility</span>
                    <span className="font-medium text-gray-800">ISO 10993 compliant</span>
                  </li>
                  <li className="flex">
                    <span className="w-40 text-gray-600">Communication</span>
                    <span className="font-medium text-gray-800">Bluetooth Low Energy 5.2</span>
                  </li>
                  <li className="flex">
                    <span className="w-40 text-gray-600">Power</span>
                    <span className="font-medium text-gray-800">Lithium-ion microbattery</span>
                  </li>
                  <li className="flex">
                    <span className="w-40 text-gray-600">Sensors</span>
                    <span className="font-medium text-gray-800">8 electrochemical biosensors</span>
                  </li>
                </ul>
              </div>
            </AnimatedElement>
            
            <AnimatedElement delay={300}>
              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-xl font-semibold mb-6 pb-4 border-b border-gray-200">
                  System Requirements
                </h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="w-40 text-gray-600">App Compatibility</span>
                    <span className="font-medium text-gray-800">iOS 14+ / Android 10+</span>
                  </li>
                  <li className="flex">
                    <span className="w-40 text-gray-600">Connectivity</span>
                    <span className="font-medium text-gray-800">Internet connection required</span>
                  </li>
                  <li className="flex">
                    <span className="w-40 text-gray-600">Data Storage</span>
                    <span className="font-medium text-gray-800">HIPAA-compliant cloud</span>
                  </li>
                  <li className="flex">
                    <span className="w-40 text-gray-600">API Integration</span>
                    <span className="font-medium text-gray-800">Available for EHR systems</span>
                  </li>
                  <li className="flex">
                    <span className="w-40 text-gray-600">Healthcare Portal</span>
                    <span className="font-medium text-gray-800">Web-based dashboard</span>
                  </li>
                  <li className="flex">
                    <span className="w-40 text-gray-600">Data Export</span>
                    <span className="font-medium text-gray-800">CSV, PDF, HL7 FHIR</span>
                  </li>
                  <li className="flex">
                    <span className="w-40 text-gray-600">Security</span>
                    <span className="font-medium text-gray-800">AES-256 encryption</span>
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

      {/* Pricing & Availability */}
      <section className="section bg-gradient-primary text-white">
        <div className="container">
          <AnimatedElement className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pricing & Availability
            </h2>
            <p className="text-blue-100 text-lg">
              Be among the first to experience the future of cardiovascular care
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedElement>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 h-full">
                <div className="flex justify-between items-start mb-8">
                  <h3 className="text-2xl font-semibold">Biosense Device</h3>
                  <div className="text-right">
                    <span className="block text-3xl font-bold">$250</span>
                    <span className="text-blue-100">one-time purchase</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {[
                    "Biosense implantable device",
                    "Mobile app access (iOS & Android)",
                    "Web dashboard for data visualization",
                    "Real-time biomarker monitoring",
                    "AI-powered health insights",
                    "5-year battery life",
                    "Implantation kit for medical professionals"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 size={20} className="text-primary-light mr-3 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-white/10 rounded-lg p-4 mb-6">
                  <p className="text-sm">
                    <strong>Note:</strong> Implantation procedure not included. Must be performed by a licensed healthcare professional.
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="block font-medium">Status:</span>
                    <span className="text-primary-light">Pending FDA Approval</span>
                  </div>
                  <div>
                    <span className="block font-medium">Estimated Release:</span>
                    <span className="text-blue-100">Q4 2025</span>
                  </div>
                </div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement delay={300}>
              <WaitlistForm />
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <AnimatedElement className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">
              Everything you need to know about Biosense
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto">
            {[
              {
                question: "Is Biosense FDA approved?",
                answer: "Biosense is currently pending FDA approval. We are in the clinical trials phase and anticipate approval by late 2025. Join our waitlist to stay updated on our progress."
              },
              {
                question: "How is the device implanted?",
                answer: "The Biosense device is worn on the back of your arm, and with the press of a button, it quickly ejects a small needle to draw a quick blood sample, similar to a finger prick. The process is fast and minimally invasive, allowing for easy, on-the-go testing. The needle is disposable and should be replaced every two weeks to maintain accurate readings."
              },
              {
                question: "Is the device safe?",
                answer: "Safety is our top priority. Biosense is designed with biocompatible materials that have undergone rigorous testing. The device meets all relevant safety standards and is currently in clinical trials to further validate its safety profile."
              },
              
              {
                question: "How accurate is Biosense?",
                answer: "In our clinical studies, Biosense has demonstrated over 95% accuracy in detecting key cardiovascular biomarkers when compared to standard laboratory blood tests."
              },
              {
                question: "What happens if an abnormality is detected?",
                answer: "If Biosense detects an abnormality in your biomarkers, you'll receive a notification through the mobile app. Your healthcare provider will also be alerted through their dashboard, allowing for prompt follow-up and intervention if necessary."
              }
            ].map((faq, index) => (
              <AnimatedElement key={index} delay={index * 100} className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;