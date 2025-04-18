import { ReactNode } from 'react';
import AnimatedElement from './AnimatedElement';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <AnimatedElement delay={delay} className="flex flex-col bg-white rounded-xl shadow-lg p-6 h-full">
      <div className="rounded-full bg-primary-light w-14 h-14 flex items-center justify-center mb-5">
        <div className="text-primary">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </AnimatedElement>
  );
};

export default FeatureCard;