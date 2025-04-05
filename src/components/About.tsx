import React from 'react';
import { User, Star, Heart, Users, Phone } from 'lucide-react';

export function About() {
  const qualities = [
    { icon: Star, text: "Leadership & Vision" },
    { icon: Heart, text: "Engagement" },
    { icon: Users, text: "Esprit d'équipe" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-bold mb-6 flex items-center gap-3">
              <User className="h-10 w-10 text-blue-600" />
              Qui suis-je ?
            </h2>
            <div className="space-y-4">
              <p className="text-2xl font-semibold text-blue-600">
                Serigne Saliou Fall
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Je suis votre serviteur N.E.U.T.R.E/FLSH, un étudiant passionné par le bien-être de notre communauté universitaire.
                Mon objectif est de créer un environnement d'études plus enrichissant et plus dynamique pour tous les étudiants.
              </p>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="h-5 w-5 text-blue-600" />
                <span>+221 78 161 41 35</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-8">
              {qualities.map(({ icon: Icon, text }) => (
                <div key={text} className="flex flex-col items-center text-center p-4 rounded-lg bg-blue-50">
                  <Icon className="h-8 w-8 text-blue-600 mb-2" />
                  <span className="text-sm font-medium text-gray-800">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800"
                alt="Student speaking"
                className="rounded-2xl shadow-2xl w-full transform hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}