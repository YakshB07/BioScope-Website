import { Lightbulb, Award, Heart, Target } from 'lucide-react';
import AnimatedElement from '../components/AnimatedElement';

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white pt-40 pb-20">
        <div className="container mx-auto px-4">
          <AnimatedElement className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Story
            </h1>
            <p className="text-xl text-blue-100">
              Founded by passionate innovators with a vision to transform healthcare through technology.
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <AnimatedElement className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 text-lg">
              A dedicated team of experts committed to revolutionizing healthcare
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedElement delay={150}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/5082976/pexels-photo-5082976.jpeg"
                    alt="Yaksh Butani" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">Yaksh Butani</h3>
                  <p className="text-primary mb-4">Mechatronics Engineer</p>
                  <p className="text-gray-600">
                    Yaksh leads the hardware and AI integration of Biosense, blending robotics and smart sensors into a powerful health-monitoring device.
                  </p>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={300}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
                    alt="Dev" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">Dev</h3>
                  <p className="text-primary mb-4">Master's in Business</p>
                  <p className="text-gray-600">
                    Dev provides business strategy and leadership to drive the growth and commercialization of Bioscope, ensuring the product reaches a global audience.
                  </p>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={450}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg"
                    alt="Kyle" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">Kyle</h3>
                  <p className="text-primary mb-4">Biomedical Engineer</p>
                  <p className="text-gray-600">
                    Kyle uses his expertise in biomedical engineering to guide the development of Biosense's sensors and ensure its medical accuracy.
                  </p>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section bg-gray-50">
        <div className="container">
          <AnimatedElement className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Vision & Mission
            </h2>
            <p className="text-gray-600 text-lg">
              We're on a mission to redefine disease detection through real-time data and smart sensors.
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedElement className="bg-white rounded-xl shadow-lg p-8">
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-6">
                <Lightbulb size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                A world where cardiovascular diseases are detected and treated in their earliest stages, 
                preventing unnecessary suffering and saving millions of lives. We envision a future where 
                proactive health monitoring is accessible to everyone.
              </p>
            </AnimatedElement>
            
            <AnimatedElement delay={200} className="bg-white rounded-xl shadow-lg p-8">
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-6">
                <Target size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To develop and deploy advanced biomarker monitoring technology that provides early detection 
                of cardiovascular diseases. We combine cutting-edge AI with sophisticated sensor technology to 
                detect signs of disease before symptoms appear.
              </p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <AnimatedElement className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-lg">
              The principles that guide our work and our company culture.
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart size={32} />,
                title: "Patient First",
                description: "Every decision we make prioritizes the well-being, safety, and experience of the people who use our technology."
              },
              {
                icon: <Award size={32} />,
                title: "Scientific Excellence",
                description: "We adhere to the highest standards of scientific rigor and evidence-based practice in everything we do."
              },
              {
                icon: <Lightbulb size={32} />,
                title: "Innovative Thinking",
                description: "We constantly challenge the status quo and seek creative solutions to complex healthcare problems."
              },
              {
                icon: <Target size={32} />,
                title: "Ethical Leadership",
                description: "We operate with integrity, transparency, and a commitment to ethical practices in healthcare technology."
              }
            ].map((value, index) => (
              <AnimatedElement key={index} delay={index * 150} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="text-primary mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-gradient-primary text-white">
        <div className="container">
          <AnimatedElement className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Mission
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Whether you're a potential patient, healthcare provider, investor, or team member,
              we invite you to be part of our journey to transform cardiovascular care.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#" className="btn bg-white text-primary hover:bg-blue-50">
                Join Our Team
              </a>
              <a href="#" className="btn btn-secondary">
                Invest in Bioscope
              </a>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </>
  );
};

export default AboutPage;