'use client';

import { useResume } from '@/context/resume-context';

interface ScoreStatus {
  color: string;
  label: string;
  message: string;
}

const getScoreStatus = (score: number): ScoreStatus => {
  if (score <= 40) {
    return {
      color: 'text-red-500',
      label: 'Needs Work',
      message: 'Add key information to improve your score'
    };
  } else if (score <= 70) {
    return {
      color: 'text-amber-500',
      label: 'Getting There',
      message: 'You\'re making progress - a few more additions needed'
    };
  } else {
    return {
      color: 'text-green-500',
      label: 'Strong Resume',
      message: 'Excellent! Your resume is well-structured'
    };
  }
};

export default function ATSScoreDisplay() {
  const { atsScore } = useResume();
  const status = getScoreStatus(atsScore.score);
  
  // Calculate percentage for circle progress
  const percentage = Math.min((atsScore.score / atsScore.maxScore) * 100, 100);
  
  // Calculate strokeDashoffset for circle progress
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
      <div className="text-center">
        <h3 className="text-sm font-medium text-slate-900 mb-3">ATS Score</h3>
        
        {/* Circular Progress */}
        <div className="relative w-24 h-24 mx-auto mb-3">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="8"
            />
            {/* Progress circle */}
            <circle
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className={status.color}
              transform="rotate(-90 50 50)"
            />
          </svg>
          
          {/* Score text in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-slate-900">{atsScore.score}</span>
          </div>
        </div>
        
        {/* Status Label */}
        <div className={`font-semibold ${status.color}`}>
          {status.label}
        </div>
        <p className="text-xs text-slate-500 mt-1 max-w-[200px] mx-auto">
          {status.message}
        </p>
        
        {/* Progress bar for visual reinforcement */}
        <div className="mt-4 w-full">
          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
            <div
              className={`h-full ${status.color.replace('text-', 'bg-').replace('-500', '-500')}`}
              style={{ width: `${percentage}%` }}
            />
          </div>
          <div className="text-xs text-slate-400 mt-1">
            {atsScore.score} / {atsScore.maxScore} points
          </div>
        </div>
      </div>
    </div>
  );
}
