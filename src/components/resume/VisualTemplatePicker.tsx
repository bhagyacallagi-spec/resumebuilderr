'use client';

import { useResume, TemplateType } from '@/context/resume-context';
import { Check } from 'lucide-react';

interface TemplateOption {
  id: TemplateType;
  label: string;
  description: string;
}

const templates: TemplateOption[] = [
  { id: 'classic', label: 'Classic', description: 'Traditional single-column, serif headings, horizontal rules' },
  { id: 'modern', label: 'Modern', description: 'Two-column with colored sidebar' },
  { id: 'minimal', label: 'Minimal', description: 'Clean single-column, generous whitespace' },
];

function TemplateThumbnail({ type, isActive }: { type: TemplateType; isActive: boolean }) {
  const baseClasses = "w-[120px] h-[160px] rounded border-2 transition-all overflow-hidden bg-white";
  const activeClasses = isActive ? "border-blue-500 shadow-md" : "border-slate-200 hover:border-slate-300";
  
  if (type === 'classic') {
    return (
      <div className={`${baseClasses} ${activeClasses} p-2 flex flex-col gap-1.5`}>
        {/* Header */}
        <div className="border-b-2 border-slate-800 pb-1">
          <div className="h-2 w-12 bg-slate-800 rounded-sm" />
          <div className="h-1 w-8 bg-slate-400 rounded-sm mt-0.5" />
        </div>
        {/* Sections */}
        <div className="space-y-1.5">
          <div className="border-b border-slate-300 pb-0.5">
            <div className="h-1 w-10 bg-slate-600 rounded-sm" />
            <div className="h-0.5 w-full bg-slate-200 rounded-sm mt-1" />
          </div>
          <div className="border-b border-slate-300 pb-0.5">
            <div className="h-1 w-10 bg-slate-600 rounded-sm" />
            <div className="h-0.5 w-full bg-slate-200 rounded-sm mt-1" />
          </div>
          <div className="border-b border-slate-300 pb-0.5">
            <div className="h-1 w-10 bg-slate-600 rounded-sm" />
            <div className="h-0.5 w-full bg-slate-200 rounded-sm mt-1" />
          </div>
        </div>
      </div>
    );
  }
  
  if (type === 'modern') {
    return (
      <div className={`${baseClasses} ${activeClasses} flex`}>
        {/* Sidebar */}
        <div className="w-1/3 bg-slate-100 p-1.5 flex flex-col gap-1">
          <div className="h-2 w-6 bg-slate-700 rounded-sm" />
          <div className="h-0.5 w-full bg-slate-300 rounded-sm" />
          <div className="h-0.5 w-full bg-slate-300 rounded-sm" />
          <div className="h-0.5 w-4 bg-slate-300 rounded-sm" />
        </div>
        {/* Main Content */}
        <div className="w-2/3 p-1.5 flex flex-col gap-1">
          <div className="h-1 w-10 bg-slate-600 rounded-sm" />
          <div className="h-0.5 w-full bg-slate-200 rounded-sm" />
          <div className="h-0.5 w-full bg-slate-200 rounded-sm" />
          <div className="h-1 w-10 bg-slate-600 rounded-sm mt-1" />
          <div className="h-0.5 w-full bg-slate-200 rounded-sm" />
        </div>
      </div>
    );
  }
  
  // Minimal
  return (
    <div className={`${baseClasses} ${activeClasses} p-2.5 flex flex-col gap-2`}>
      {/* Header */}
      <div className="mb-1">
        <div className="h-2 w-10 bg-slate-700 rounded-sm" />
        <div className="h-0.5 w-6 bg-slate-400 rounded-sm mt-1" />
      </div>
      {/* Sections - no borders */}
      <div className="space-y-2">
        <div>
          <div className="h-1 w-8 bg-slate-500 rounded-sm" />
          <div className="h-0.5 w-full bg-slate-100 rounded-sm mt-1" />
          <div className="h-0.5 w-3/4 bg-slate-100 rounded-sm mt-0.5" />
        </div>
        <div>
          <div className="h-1 w-8 bg-slate-500 rounded-sm" />
          <div className="h-0.5 w-full bg-slate-100 rounded-sm mt-1" />
        </div>
      </div>
    </div>
  );
}

export default function VisualTemplatePicker() {
  const { template, setTemplate } = useResume();

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
      <h3 className="text-sm font-medium text-slate-900 mb-3">Choose Template</h3>
      <div className="flex gap-4 justify-center">
        {templates.map((t) => (
          <button
            key={t.id}
            onClick={() => setTemplate(t.id)}
            className="group flex flex-col items-center gap-2"
            title={t.description}
          >
            <div className="relative">
              <TemplateThumbnail type={t.id} isActive={template === t.id} />
              {template === t.id && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-sm">
                  <Check className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
            <span className={`text-sm font-medium ${template === t.id ? 'text-blue-600' : 'text-slate-600'}`}>
              {t.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
