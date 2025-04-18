import { useState } from 'react';
import { Send } from 'lucide-react';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email) {
      setError('Email is required');
      return;
    }
    
    // Here you would typically send the data to your backend
    console.log({ email, name, role });
    
    // For demo purposes, just show success
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
      {!submitted ? (
        <>
          <h3 className="text-2xl font-bold mb-4">Join the Waitlist</h3>
          <p className="text-gray-600 mb-6">
            Be among the first to experience Biosense and help shape the future of preventative healthcare.
          </p>
          
          {error && <p className="text-red-500 mb-4">{error}</p>}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                placeholder="your@email.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                placeholder="Your Name"
              />
            </div>
            
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                I am a...
              </label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              >
                <option value="">Select your role</option>
                <option value="patient">Patient / Individual</option>
                <option value="healthcare">Healthcare Professional</option>
                <option value="investor">Investor</option>
                <option value="researcher">Researcher</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <button
              type="submit"
              className="w-full btn btn-primary flex items-center justify-center space-x-2"
            >
              <span>Join Waitlist</span>
              <Send size={16} />
            </button>
          </form>
          
          <p className="text-xs text-gray-500 mt-4">
            By submitting, you agree to our Privacy Policy and Terms of Service.
            We'll keep you updated about Biosense's development and launch.
          </p>
        </>
      ) : (
        <div className="text-center py-8">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
          <p className="text-gray-600">
            You've been added to our waitlist. We'll keep you updated on Biosense's progress and launch.
          </p>
        </div>
      )}
    </div>
  );
};

export default WaitlistForm;