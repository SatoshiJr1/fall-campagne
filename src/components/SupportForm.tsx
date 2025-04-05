import React, { useState } from 'react';
import { Send, ThumbsUp, User, Mail, CreditCard, MessageSquare } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  studentId: string;
  message: string;
}

interface FormFieldProps {
  label: string;
  id: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  isTextarea?: boolean;
  icon: React.ElementType;
}

function FormField({ label, id, type, value, onChange, required = false, isTextarea = false, icon: Icon }: FormFieldProps) {
  const baseClassName = "w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white";
  
  return (
    <div className="mb-6 relative">
      <label htmlFor={id} className="block text-gray-700 font-medium mb-2">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400" />
        </div>
        {isTextarea ? (
          <textarea
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`${baseClassName} min-h-[120px]`}
            rows={4}
            required={required}
          />
        ) : (
          <input
            type={type}
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={baseClassName}
            required={required}
          />
        )}
      </div>
    </div>
  );
}

export function SupportForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    studentId: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', studentId: '', message: '' });
  };

  const updateField = (field: keyof FormData) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <ThumbsUp className="h-10 w-10 text-blue-600" />
            Soutenez ma candidature
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Rejoignez le mouvement pour une faculté plus dynamique et innovante
          </p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
          <FormField
            label="Nom complet"
            id="name"
            type="text"
            value={formData.name}
            onChange={updateField('name')}
            required
            icon={User}
          />
          <FormField
            label="Email"
            id="email"
            type="email"
            value={formData.email}
            onChange={updateField('email')}
            required
            icon={Mail}
          />
          <FormField
            label="Numéro étudiant"
            id="studentId"
            type="text"
            value={formData.studentId}
            onChange={updateField('studentId')}
            required
            icon={CreditCard}
          />
          <FormField
            label="Message de soutien (optionnel)"
            id="message"
            type="text"
            value={formData.message}
            onChange={updateField('message')}
            isTextarea
            icon={MessageSquare}
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl hover:bg-blue-700 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 text-lg font-medium shadow-lg"
          >
            <Send className="h-5 w-5" />
            Envoyer mon soutien
          </button>
        </form>
      </div>
    </section>
  );
}