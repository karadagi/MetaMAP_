
import React, { useState } from 'react';
import { MapPin, DownloadCloud, Cuboid, BarChart3, ChevronRight } from 'lucide-react';

const steps = [
  {
    title: 'Pinpoint Location',
    description: 'Use the interactive map component to pick any coordinate or define an area of interest.',
    icon: MapPin,
    color: 'emerald'
  },
  {
    title: 'Fetch Data',
    description: 'Connect instantly to OpenStreetMap or Global Building Atlas. No API keys or complex setups.',
    icon: DownloadCloud,
    color: 'blue'
  },
  {
    title: 'Generate B-Reps',
    description: 'MetaMAP converts raw JSON/GeoJSON into clean, closed Breps and meshes optimized for Rhino.',
    icon: Cuboid,
    color: 'indigo'
  },

];

export const Workflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-neutral-900 mb-4 tracking-tight">Seamless Integration</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto text-lg">Automate the boring stuff. Focus on your design exploration.</p>
        </div>

        <div className="flex justify-center mb-16">
          <img src={import.meta.env.BASE_URL + "workflowfull.jpeg"} alt="Workflow Diagram" className="rounded-[32px] shadow-sm border border-neutral-100 max-w-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveStep(idx)}
                className={`p-6 rounded-3xl border transition-all cursor-pointer group ${activeStep === idx ? 'bg-neutral-50 border-neutral-200 shadow-sm scale-[1.02]' : 'bg-transparent border-transparent opacity-50 hover:opacity-80'}`}
              >
                <div className="flex items-start space-x-5">
                  <div className={`p-4 rounded-2xl bg-white shadow-sm text-emerald-600 transition-colors`}>
                    <step.icon size={24} />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-xl text-neutral-900 mb-1 flex items-center">
                      {step.title}
                      {activeStep === idx && <ChevronRight className="ml-2 text-emerald-600" size={18} />}
                    </h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative aspect-square flex items-center justify-center p-12">


            <div className="relative w-full h-full flex flex-col items-center justify-center space-y-8">
              {activeStep === 0 && (
                <div className="text-center animate-in fade-in zoom-in duration-500 relative w-full h-full flex flex-col items-center justify-center">
                  <div className="absolute inset-0 z-0 opacity-80">
                    <img src={import.meta.env.BASE_URL + "fetch.png"} alt="Background" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-40 h-40 rounded-full border-4 border-dashed border-emerald-200 flex items-center justify-center mb-8 bg-white shadow-xl relative z-10">
                    <MapPin className="text-emerald-600 w-16 h-16" />
                  </div>
                  <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-neutral-100 font-mono text-sm text-neutral-600 relative z-10">
                    33.7756° N, 84.3963° W
                  </div>
                </div>
              )}
              {activeStep === 1 && (
                <div className="w-full h-full flex items-center justify-center animate-in slide-in-from-bottom-8 duration-500 p-8">
                  <img src={import.meta.env.BASE_URL + "fetch_data.jpeg"} alt="Fetch Data" className="w-full h-full object-contain rounded-2xl shadow-md border border-neutral-100" />
                </div>
              )}
              {activeStep === 2 && (
                <div className="w-full h-full flex items-center justify-center animate-in zoom-in duration-500 p-8">
                  <img src={import.meta.env.BASE_URL + "generate_buildings.jpeg"} alt="Generate B-Reps" className="w-full h-full object-contain rounded-2xl shadow-md border border-neutral-100" />
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
