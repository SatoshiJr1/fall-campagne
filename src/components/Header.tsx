import React from 'react';
import { GraduationCap } from 'lucide-react';

export function Header() {
  return (
    <header className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-center mb-4">
          <GraduationCap className="h-16 w-16 text-blue-300" />
        </div>
        <h1 className="text-5xl font-bold text-center mb-4 text-shadow">Étudiants de la FLSH</h1>
        <div className="text-center space-y-4">
          <p className="text-3xl font-semibold text-blue-200">
            Serigne Saliou Fall
          </p>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Ensemble avec la grande famille NEUTRE pour un avenir meilleur, au service des étudiants
          </p>
        </div>
      </div>
    </header>
  );
}