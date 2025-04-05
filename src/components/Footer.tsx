import React from 'react';
import { Mail, Phone, MapPin, GraduationCap } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <p className="flex items-center gap-2 text-gray-300">
                <Phone className="h-5 w-5" />
                +221 78 161 41 35
              </p>
              <p className="flex items-center gap-2 text-gray-300">
                <MapPin className="h-5 w-5" />
                Faculté des Lettres et Sciences Humaines (FLSH)
              </p>
              <div className="flex items-center gap-2 mt-4">
                <GraduationCap className="h-8 w-8 text-blue-400" />
                <span className="text-blue-400 font-semibold">N.E.U.T.R.E/FLSH</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Notre Programme</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Vision et Objectifs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Projets pour la FLSH</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Engagement étudiant</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Rejoignez le mouvement</h3>
            <p className="text-gray-300 mb-4">Ensemble avec la grande famille NEUTRE pour un avenir meilleur, au service des étudiants</p>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Soutenez-nous
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Serigne Saliou Fall - Campagne FLSH - Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
}