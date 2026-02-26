'use client';

import { useResume } from '@/context/resume-context';
import { Lightbulb, Plus } from 'lucide-react';

export default function ImprovementSuggestions() {
  const { suggestions } = useResume();
  
  if (suggestions.length === 0) {
    return (
      <div className="bg-green-50 rounded-xl border border-green-200 p-4">
        <div className="flex items-center gap-2 text-green-700">
          <Plus className="w-5 h-5" />
          <span className="font-medium text-sm">No improvements needed!</span>
        </div>
        <p className="text-xs text-green-600 mt-1">
          Your resume is already well-structured and complete.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <Lightbulb className="w-4 h-4 text-amber-500" />
        <h3 className="text-sm font-medium text-slate-900">Improve Your Score</h3>
      </div>
      
      <ul className="space-y-2">
        {suggestions.map((suggestion) => (
          <li 
            key={suggestion.id} 
            className="flex items-start gap-2 text-sm text-slate-700"
          >
            <span className="flex-shrink-0 mt-1">
              <Plus className="w-4 h-4 text-slate-400" />
            </span>
            <span>{suggestion.message}</span>
          </li>
        ))}
      </ul>
      
      <div className="text-xs text-slate-500 mt-3">
        These additions will help improve your ATS score
      </div>
    </div>
  );
}
