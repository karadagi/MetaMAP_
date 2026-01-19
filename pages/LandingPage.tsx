
import React from 'react';
import { InteractiveDemo } from '../components/InteractiveDemo';
import { Workflow } from '../components/Workflow';
import { Rocket, ShieldCheck, Globe, Zap, ArrowRight, Github, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 px-4 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-emerald-50/40 rounded-full blur-[120px] -z-10" />

        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold mb-10 tracking-wide uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span>Version 2.1 Now Live on Rhino Yak</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight text-neutral-900 mb-8 leading-[1.05]">
            Instant City Context <br />
            <span className="text-emerald-600">for Professionals.</span>
          </h1>

          <p className="text-xl text-neutral-500 max-w-2xl mx-auto mb-14 leading-relaxed font-medium">
            The free, open-source tool for bringing 3D buildings and terrain data directly into Grasshopper. No more manual tracing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="https://www.food4rhino.com/en/app/metamap" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 py-5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold text-lg transition-all shadow-xl shadow-emerald-200 flex items-center justify-center space-x-3 group">
              <Rocket size={22} />
              <span>Download for Free</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <Link to="/docs" className="w-full sm:w-auto px-10 py-5 bg-white hover:bg-neutral-50 text-neutral-900 rounded-full font-bold text-lg transition-all flex items-center justify-center space-x-2 border border-neutral-200 shadow-sm">
              <span>Documentation</span>
            </Link>
          </div>

          <div className="mt-28">
            <InteractiveDemo />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-16 border-y border-neutral-100 bg-neutral-50/30">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-16">
          <span className="font-bold text-neutral-300 text-sm tracking-widest uppercase">OpenStreetMap API</span>
          <span className="font-bold text-neutral-300 text-sm tracking-widest uppercase">Global Building Atlas</span>
          <span className="font-bold text-neutral-300 text-sm tracking-widest uppercase">B-Rep Generation</span>
          <span className="font-bold text-neutral-300 text-sm tracking-widest uppercase">Open Source</span>
        </div>
      </section>

      {/* Feature Focus */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-neutral-50 rounded-[40px] p-12 border border-neutral-100 shadow-inner relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Zap size={120} />
                </div>
                <div className="relative z-10 space-y-6">
                  <div className="flex justify-between items-center text-xs font-bold text-neutral-400 uppercase tracking-widest">
                    <span>Legacy Workflow</span>
                    <span className="text-emerald-600">MetaMAP</span>
                  </div>
                  <div className="h-12 bg-neutral-200 rounded-2xl flex items-center overflow-hidden border border-white shadow-sm">
                    <div className="h-full bg-red-400 w-[15%] flex items-center justify-center text-[10px] font-bold text-white uppercase">Manual</div>
                    <div className="h-full bg-emerald-500 w-[85%] flex items-center px-4 text-xs font-bold text-white italic">Instant Geometry Generation</div>
                  </div>
                  <div className="space-y-4 pt-6">
                    <div className="bg-white p-5 rounded-2xl shadow-sm border border-neutral-100 flex items-center space-x-4">
                      <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 font-bold italic">M</div>
                      <div>
                        <p className="text-xs font-bold text-neutral-900 uppercase tracking-tighter">GeoJSON to Rhino Brep</p>
                        <p className="text-[10px] text-neutral-500">Converted 840 geometries in 1.2s</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-black text-neutral-900 mb-8 leading-tight">Focus on Analysis,<br />Not Asset Fetching.</h2>
              <p className="text-lg text-neutral-500 mb-10 leading-relaxed">
                Manually drawing site context is a relic of the past. MetaMAP provides a high-fidelity spatial foundation for your environmental and urban simulations.
              </p>

              <div className="grid gap-6">
                {[
                  { title: "Clean Geometry", desc: "Watertight Breps and Meshes ready for CFD analysis." },
                  { title: "Metadata Intact", desc: "Building names, types, and levels preserved in keys." },
                  { title: "Global Reach", desc: "Unprecedented coverage with Building Atlas integration." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="mt-1 p-1 bg-emerald-100 rounded-full text-emerald-600">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900">{item.title}</h4>
                      <p className="text-sm text-neutral-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Workflow />

      {/* Use Cases */}
      <section className="py-32 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-neutral-900 mb-4 tracking-tight">Computational Architecture</h2>
            <p className="text-neutral-500 text-lg">One plugin, multiple analytical horizons.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: "eddy3d.png", title: "Microclimate", desc: "Seamless geometry for Eddy3D.", color: "emerald" },
              { img: "ladybug.jpg", title: "Environmental", desc: "Solar potential with Ladybug.", color: "blue" },
              { img: "honeybee.jpg", title: "Performance", desc: "Energy modeling with Honeybee.", color: "indigo" },
              { img: "climatestudio.png", title: "Simulation", desc: "Lighting analysis with ClimateStudio.", color: "orange" }
            ].map((card, i) => (
              <div key={i} className="p-10 rounded-[32px] bg-white border border-neutral-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform overflow-hidden`}>
                  <img src={import.meta.env.BASE_URL + card.img} alt={card.title} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">{card.title}</h3>
                <p className="text-neutral-500 leading-relaxed text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Install Section */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-neutral-900 mb-16 tracking-tight">Installed in Seconds.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "PackageManager", desc: "Open Rhino and search for MetaMAP." },
              { step: "2", title: "One-Click Install", desc: "Stable builds are distributed via Rhino Yak." },
              { step: "3", title: "Canvas Drop", desc: "Drag and drop components to start fetching." },
            ].map((s, i) => (
              <div key={i} className="p-10 bg-neutral-50 rounded-[32px] border border-neutral-100 relative group overflow-hidden">
                <span className="absolute -top-4 -left-4 text-neutral-200/50 font-black text-8xl group-hover:text-emerald-100/50 transition-colors">{s.step}</span>
                <div className="relative pt-12">
                  <h4 className="font-black text-xl text-neutral-900 mb-3">{s.title}</h4>
                  <p className="text-sm text-neutral-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <a href="https://github.com/karadagi/MetaMAP" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-3 px-8 py-4 bg-neutral-900 hover:bg-black text-white rounded-full font-bold shadow-lg transition-all">
              <Github size={20} />
              <span>Contribute on GitHub</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
