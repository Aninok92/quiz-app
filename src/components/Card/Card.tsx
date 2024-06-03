import React from 'react';

interface CardProps {
  title: string;
  description?: string;
  questionCount?: number;
  answeredCount?: number;
  className?: string;
  imageUrl?: string;
}

const Card: React.FC<CardProps> = ({ title, description, questionCount, answeredCount, imageUrl ,className }) => {
  return (
    <div className={`border rounded-lg p-4 flex ${className}`}>
      <img src={imageUrl} alt={title} className="w-1/4 rounded-lg mr-4" />
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        {description && <p className="text-gray-600 mb-2">{description}</p>}
        {questionCount !== undefined && <p className="text-gray-800 font-medium">Questions: {questionCount}</p>}
        {answeredCount !== undefined && (
          <p className="text-gray-800 font-medium">Right Answered: {answeredCount}</p>
        )}
      </div>
    </div>
  );
};

export default Card;