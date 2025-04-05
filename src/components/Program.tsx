import React from 'react';
import { FileText, BookOpen, Coffee, MessageSquare, Users, Shield } from 'lucide-react';

interface ProgramItemProps {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

function ProgramItem({ title, description, icon: Icon, color }: ProgramItemProps) {
  return (
    <div className={`bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 border-b-4 ${color}`}>
      <div className="flex items-center gap-4 mb-4">
        <div className={`p-3 rounded-lg ${color.replace('border', 'bg').replace('-600', '-100')}`}>
          <Icon className={`h-6 w-6 ${color.replace('border', 'text')}`} />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export function Program() {
  const programs = [
    {
      icon: BookOpen,
      title: "Excellence Académique",
      description: "Promotion de l'excellence et soutien aux étudiants à travers des programmes de tutorat et des ressources pédagogiques innovantes",
      color: "border-blue-600"
    },
    {
      icon: Users,
      title: "Solidarité Étudiante",
      description: "Renforcement des liens entre étudiants et création d'un réseau d'entraide pour une meilleure réussite collective",
      color: "border-green-600"
    },
    {
      icon: Shield,
      title: "Défense des Droits",
      description: "Protection active des intérêts des étudiants et amélioration continue des conditions d'études à la FLSH",
      color: "border-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <FileText className="h-10 w-10 text-blue-600" />
            Notre Vision pour la FLSH
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Un programme ambitieux pour une faculté plus forte et plus unie
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <ProgramItem
              key={index}
              {...program}
            />
          ))}
        </div>
      </div>
    </section>
  );
}