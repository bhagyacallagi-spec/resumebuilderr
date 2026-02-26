'use client';

import { useResume, ColorTheme, COLOR_VALUES } from '@/context/resume-context';
import { Check } from 'lucide-react';

interface ColorOption {
  id: ColorTheme;
  label: string;
}

const colors: ColorOption[] = [
  { id: 'teal', label: 'Teal' },
  { id: 'navy', label: 'Navy' },
  { id: 'burgundy', label: 'Burgundy' },
  { id: 'forest', label: 'Forest' },
  { id: 'charcoal', label: 'Charcoal' },
];

export default function ColorThemePicker() {
  const { colorTheme, setColorTheme } = useResume();

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
      <h3 className="text-sm font-medium text-slate-900 mb-3">Accent Color</h3>
      <div className="flex gap-3 justify-center">
        {colors.map((color) => (
          <button
            key={color.id}
            onClick={() => setColorTheme(color.id)}
            className="group flex flex-col items-center gap-1.5"
            title={color.label}
          >
            <div
              className={`w-10 h-10 rounded-full border-2 transition-all ${
                colorTheme === color.id
                  ? 'border-slate-900 scale-110 shadow-md'
                  : 'border-slate-200 hover:border-slate-400'
              }`}
              style={{ backgroundColor: COLOR_VALUES[color.id] }}
            >
              {colorTheme === color.id && (
                <div className="w-full h-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white drop-shadow-sm" />
                </div>
              )}
            </div>
            <span className={`text-xs ${colorTheme === color.id ? 'text-slate-900 font-medium' : 'text-slate-500'}`}>
              {color.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
