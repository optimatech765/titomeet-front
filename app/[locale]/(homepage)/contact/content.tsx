/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Button, Input, Textarea, Select, SelectItem, Divider } from '@heroui/react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Headphones, Users } from 'lucide-react';

export const ContactInterface = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    contactReason: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactReasons = [
    { key: 'organisateur', label: 'Je suis organisateur d\'événements' },
    { key: 'prestataire', label: 'Je suis prestataire' },
    { key: 'sponsor', label: 'Je souhaite faire du sponsoring' },
    { key: 'support', label: 'Support technique' },
    { key: 'autre', label: 'Autre demande' }
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@titomeet.com',
      description: 'Réponse sous 24h',
      color: 'primary'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+229 XX XX XX XX',
      description: 'Lun-Ven 8h-18h',
      color: 'secondary'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      value: 'Abomey-Calavi, Atlantique, Bénin',
      description: 'Rendez-vous sur demande',
      color: 'secondary-blue'
    },
    {
      icon: Clock,
      title: 'Horaires',
      value: '8h00 - 18h00',
      description: 'Lundi au Vendredi',
      color: 'primary'
    }
  ];

  const handleInputChange = (field:string, value:string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message envoyé avec succès !');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        contactReason: ''
      });
    }, 2000);
  };

  const getColorClasses = (color:string) => {
    const colors = {
      'primary': {
        bg: 'bg-[#EE3540]',
        text: 'text-[#EE3540]',
        border: 'border-[#EE3540]',
        hover: 'hover:bg-[#EE3540]/10'
      },
      'secondary': {
        bg: 'bg-[#F08621]',
        text: 'text-[#F08621]',
        border: 'border-[#F08621]',
        hover: 'hover:bg-[#F08621]/10'
      },
      'secondary-blue': {
        bg: 'bg-[#28B0E6]',
        text: 'text-[#28B0E6]',
        border: 'border-[#28B0E6]',
        hover: 'hover:bg-[#28B0E6]/10'
      }
    } as any;
    return colors[color] || colors.primary;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FEEBEC] to-white section-container">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Contactez-nous
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une question ? Un projet ? Notre équipe est là pour vous accompagner
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                const colorClasses = getColorClasses(method.color);
                
                return (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardBody className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-full ${colorClasses.bg}`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800 mb-1">
                            {method.title}
                          </h3>
                          <p className={`font-medium ${colorClasses.text} mb-1`}>
                            {method.value}
                          </p>
                          <p className="text-sm text-gray-500">
                            {method.description}
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                );
              })}
            </div>

            {/* Quick Actions */}
            <Card className="bg-gradient-to-r from-[#EE3540] to-[#F08621] text-white">
              <CardBody className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Headphones className="w-6 h-6" />
                  <h3 className="font-semibold text-lg">Support Urgent ?</h3>
                </div>
                <p className="text-sm mb-4 opacity-90">
                  Pour une assistance immédiate, contactez-nous directement
                </p>
                <Button
                  className="w-full bg-white text-[#EE3540] font-semibold hover:bg-gray-100"
                  size="lg"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Appeler maintenant
                </Button>
              </CardBody>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-6 h-6 text-[#EE3540]" />
                  <h2 className="text-2xl font-bold text-gray-800">
                    Envoyez-nous un message
                  </h2>
                </div>
              </CardHeader>
              <CardBody className="pt-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Nom complet"
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      classNames={{
                        input: "text-gray-700",
                        label: "text-gray-600"
                      }}
                    />
                    <Input
                      label="Email"
                      type="email"
                      placeholder="votre.email@exemple.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      classNames={{
                        input: "text-gray-700",
                        label: "text-gray-600"
                      }}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Téléphone"
                      placeholder="+229 XX XX XX XX"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      classNames={{
                        input: "text-gray-700",
                        label: "text-gray-600"
                      }}
                    />
                    <Select
                      label="Je suis..."
                      placeholder="Sélectionnez votre profil"
                      value={formData.contactReason}
                      onChange={(e) => handleInputChange('contactReason', e.target.value)}
                      classNames={{
                        label: "text-gray-600"
                      }}
                    >
                      {contactReasons.map((reason) => (
                        <SelectItem key={reason.key}>
                          {reason.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>

                  <Input
                    label="Sujet"
                    placeholder="Objet de votre message"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    required
                    classNames={{
                      input: "text-gray-700",
                      label: "text-gray-600"
                    }}
                  />

                  <Textarea
                    label="Message"
                    placeholder="Décrivez votre demande en détail..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                    minRows={5}
                    classNames={{
                      input: "text-gray-700",
                      label: "text-gray-600"
                    }}
                  />

                  <Divider />

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      type="submit"
                      className="flex-1 bg-[#EE3540] text-white font-semibold hover:bg-[#EE3540]/90"
                      size="lg"
                      isLoading={isSubmitting}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Envoi en cours...'
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Envoyer le message
                        </>
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="bordered"
                      className="border-[#28B0E6] text-[#28B0E6] hover:bg-[#28B0E6]/10"
                      size="lg"
                      onClick={() => setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: '',
                        message: '',
                        contactReason: ''
                      })}
                    >
                      Réinitialiser
                    </Button>
                  </div>
                </form>
              </CardBody>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <Card className="bg-white shadow-lg">
            <CardBody className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Questions Fréquentes
                </h2>
                <p className="text-gray-600">
                  Trouvez rapidement des réponses à vos questions
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-[#EE3540] p-3 rounded-full w-12 h-12 mx-auto mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Comment devenir organisateur ?
                  </h3>
                  <p className="text-sm text-gray-600">
                    Inscrivez-vous et choisissez le pack organisateur
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-[#F08621] p-3 rounded-full w-12 h-12 mx-auto mb-4">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Délai de réponse ?
                  </h3>
                  <p className="text-sm text-gray-600">
                    Nous répondons sous 24h maximum
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-[#28B0E6] p-3 rounded-full w-12 h-12 mx-auto mb-4">
                    <Headphones className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Support technique ?
                  </h3>
                  <p className="text-sm text-gray-600">
                    Support disponible 7j/7 pour les urgences
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};
