/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useState } from 'react';
import { Card, CardBody, Button, Badge, Chip, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Divider, Avatar, Tabs, Tab } from '@heroui/react';
import { Check, X, Eye, Calendar, MapPin, User, Clock, Phone, Mail, Star, AlertCircle } from 'lucide-react';

export const PrestataireDemandes = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [selectedDemande, setSelectedDemande] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<any>('toutes');

  const [demandes, setDemandes] = useState([
    {
      id: 1,
      client: {
        nom: 'Marie Dupont',
        email: 'marie.dupont@email.com',
        phone: '+229 97 XX XX XX',
        avatar: 'https://i.pravatar.cc/40?img=1'
      },
      evenement: {
        nom: 'Mariage de Marie & Pierre',
        date: '2025-08-15',
        heure: '14:00',
        lieu: 'Cotonou, Bénin',
        type: 'Mariage',
        budget: '150 000 FCFA',
        invites: 120
      },
      service: 'Photographie',
      statut: 'en_attente',
      dateCreation: '2025-07-20',
      priorite: 'haute',
      message: 'Nous organisons notre mariage et recherchons un photographe professionnel. Nous aimerions avoir des photos de cérémonie et de la réception. Le style que nous préférons est naturel et candide.',
      details: {
        duree: '8 heures',
        livrables: ['Photos retouchées', 'Album photo', 'Photos numériques HD'],
        contraintes: 'Présence requise dès 13h pour les préparatifs'
      }
    },
    {
      id: 2,
      client: {
        nom: 'Jean-Baptiste Koffi',
        email: 'jb.koffi@entreprise.com',
        phone: '+229 96 XX XX XX',
        avatar: 'https://i.pravatar.cc/40?img=2'
      },
      evenement: {
        nom: 'Lancement Produit TechCorp',
        date: '2025-08-08',
        heure: '18:30',
        lieu: 'Porto-Novo, Bénin',
        type: 'Événement Corporatif',
        budget: '300 000 FCFA',
        invites: 80
      },
      service: 'Sonorisation',
      statut: 'acceptee',
      dateCreation: '2025-07-18',
      priorite: 'moyenne',
      message: 'Nous organisons le lancement de notre nouveau produit et avons besoin d\'un système de sonorisation professionnel pour une présentation et cocktail.',
      details: {
        duree: '4 heures',
        livrables: ['Système audio complet', 'Micros sans fil', 'Éclairage basique'],
        contraintes: 'Installation à partir de 17h'
      }
    },
    {
      id: 3,
      client: {
        nom: 'Sarah Mamadou',
        email: 'sarah.mamadou@gmail.com',
        phone: '+229 95 XX XX XX',
        avatar: 'https://i.pravatar.cc/40?img=3'
      },
      evenement: {
        nom: 'Anniversaire Sarah - 30 ans',
        date: '2025-07-30',
        heure: '19:00',
        lieu: 'Abomey-Calavi, Bénin',
        type: 'Anniversaire',
        budget: '80 000 FCFA',
        invites: 50
      },
      service: 'Décoration',
      statut: 'refusee',
      dateCreation: '2025-07-15',
      priorite: 'basse',
      message: 'Je fête mes 30 ans et je souhaite une décoration élégante avec des ballons et des fleurs. Thème : rose gold et blanc.',
      details: {
        duree: '6 heures',
        livrables: ['Décoration complète', 'Ballons thématiques', 'Centre de table'],
        contraintes: 'Installation le matin même'
      }
    },
    {
      id: 4,
      client: {
        nom: 'Festival Culturel',
        email: 'contact@festivalculturel.bj',
        phone: '+229 94 XX XX XX',
        avatar: 'https://i.pravatar.cc/40?img=4'
      },
      evenement: {
        nom: 'Festival des Arts 2025',
        date: '2025-09-12',
        heure: '10:00',
        lieu: 'Ouidah, Bénin',
        type: 'Festival',
        budget: '500 000 FCFA',
        invites: 1000
      },
      service: 'Sécurité',
      statut: 'en_attente',
      dateCreation: '2025-07-25',
      priorite: 'haute',
      message: 'Organisation d\'un grand festival culturel. Nous recherchons une équipe de sécurité professionnelle pour assurer la sécurité des 1000 participants attendus.',
      details: {
        duree: '12 heures',
        livrables: ['Équipe de sécurité', 'Contrôle d\'accès', 'Surveillance générale'],
        contraintes: 'Briefing obligatoire la veille'
      }
    }
  ]);

  const getStatusColor = (statut:any) => {
    const colors = {
      'en_attente': { color: 'warning', bg: 'bg-yellow-100', text: 'text-yellow-800' },
      'acceptee': { color: 'success', bg: 'bg-green-100', text: 'text-green-800' },
      'refusee': { color: 'danger', bg: 'bg-red-100', text: 'text-red-800' }
    } as any;
    return colors[statut] || colors.en_attente;
  };

  const getStatusText = (statut:any) => {
    const texts = {
      'en_attente': 'En attente',
      'acceptee': 'Acceptée',
      'refusee': 'Refusée'
    } as any;
    return texts[statut] || 'En attente';
  };

  const getPrioriteColor = (priorite : any) => {
    const colors = {
      'haute': 'danger',
      'moyenne': 'warning',
      'basse': 'success'
    } as any;
    return colors[priorite] || 'default';
  };

  const handleVoirDetails = (demande:any) => {
    setSelectedDemande(demande);
    onOpen();
  };

  const handleAccepter = (id:any) => {
    setDemandes(prev => prev.map(d => 
      d.id === id ? { ...d, statut: 'acceptee' } : d
    ));
  };

  const handleRefuser = (id:any) => {
    setDemandes(prev => prev.map(d => 
      d.id === id ? { ...d, statut: 'refusee' } : d
    ));
  };

  const filteredDemandes = demandes.filter(demande => {
    if (activeTab === 'toutes') return true;
    if (activeTab === 'en_attente') return demande.statut === 'en_attente';
    if (activeTab === 'acceptees') return demande.statut === 'acceptee';
    if (activeTab === 'refusees') return demande.statut === 'refusee';
    return true;
  });

  const getTabCounts = () => {
    return {
      toutes: demandes.length,
      en_attente: demandes.filter(d => d.statut === 'en_attente').length,
      acceptees: demandes.filter(d => d.statut === 'acceptee').length,
      refusees: demandes.filter(d => d.statut === 'refusee').length
    };
  };

  const counts = getTabCounts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FEEBEC] to-white section-container">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Mes Demandes de Prestation
          </h1>
          <p className="text-gray-600">
            Gérez vos demandes reçues et répondez aux clients
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-to-r from-[#EE3540] to-[#F08621] text-white">
            <CardBody className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90">Total</p>
                  <p className="text-2xl font-bold">{counts.toutes}</p>
                </div>
                <AlertCircle className="w-8 h-8 opacity-80" />
              </div>
            </CardBody>
          </Card>

          <Card className="border-l-4 border-yellow-500">
            <CardBody className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">En attente</p>
                  <p className="text-2xl font-bold text-yellow-600">{counts.en_attente}</p>
                </div>
                <Clock className="w-8 h-8 text-yellow-500" />
              </div>
            </CardBody>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardBody className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Acceptées</p>
                  <p className="text-2xl font-bold text-green-600">{counts.acceptees}</p>
                </div>
                <Check className="w-8 h-8 text-green-500" />
              </div>
            </CardBody>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardBody className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Refusées</p>
                  <p className="text-2xl font-bold text-red-600">{counts.refusees}</p>
                </div>
                <X className="w-8 h-8 text-red-500" />
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Tabs */}
        <Card className="mb-6">
          <CardBody className="p-0">
            <Tabs 
              selectedKey={activeTab} 
              onSelectionChange={setActiveTab}
              className="w-full"
              classNames={{
                tabList: "gap-6 w-full relative rounded-none p-4 border-b border-divider",
                cursor: "w-full bg-[#EE3540]",
                tab: "max-w-fit px-6 h-10",
                tabContent: "group-data-[selected=true]:text-white"
              }}
            >
              <Tab key="toutes" title={`Toutes (${counts.toutes})`} />
              <Tab key="en_attente" title={`En attente (${counts.en_attente})`} />
              <Tab key="acceptees" title={`Acceptées (${counts.acceptees})`} />
              <Tab key="refusees" title={`Refusées (${counts.refusees})`} />
            </Tabs>
          </CardBody>
        </Card>

        {/* Demandes List */}
        <div className="space-y-4">
          {filteredDemandes.map((demande) => {
            const statusColor = getStatusColor(demande.statut);
            
            return (
              <Card key={demande.id} className="hover:shadow-lg transition-all duration-300">
                <CardBody className="p-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left: Client & Event Info */}
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <Avatar src={demande.client.avatar} size="md" />
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <h3 className="text-lg font-semibold text-gray-800">
                              {demande.client.nom}
                            </h3>
                            <Badge color={statusColor.color} variant="flat">
                              {getStatusText(demande.statut)}
                            </Badge>
                            <Chip color={getPrioriteColor(demande.priorite)} size="sm" variant="flat">
                              Priorité {demande.priorite}
                            </Chip>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">
                            Service: <span className="font-medium">{demande.service}</span>
                          </p>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4 mb-4">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          {demande.evenement.nom}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {new Date(demande.evenement.date).toLocaleDateString('fr-FR')} à {demande.evenement.heure}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {demande.evenement.lieu}
                          </div>
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            {demande.evenement.invites} invités
                          </div>
                          <div className="flex items-center gap-2">
                            <Star className="w-4 h-4" />
                            Budget: {demande.evenement.budget}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 text-sm line-clamp-2">
                        {demande.message}
                      </p>
                    </div>

                    {/* Right: Actions */}
                    <div className="flex flex-col gap-2 min-w-[200px]">
                      <Button
                        onPress={() => handleVoirDetails(demande)}
                        variant="bordered"
                        className="border-[#28B0E6] text-[#28B0E6] hover:bg-[#28B0E6]/10"
                        size="sm"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Voir détails
                      </Button>

                      {demande.statut === 'en_attente' && (
                        <>
                          <Button
                            onPress={() => handleAccepter(demande.id)}
                            className="bg-green-600 text-white hover:bg-green-700"
                            size="sm"
                          >
                            <Check className="w-4 h-4 mr-2" />
                            Accepter
                          </Button>
                          <Button
                            onPress={() => handleRefuser(demande.id)}
                            color="danger"
                            size="sm"
                          >
                            <X className="w-4 h-4 mr-2" />
                            Refuser
                          </Button>
                        </>
                      )}

                      <div className="text-xs text-gray-500 mt-2">
                        Reçue le {new Date(demande.dateCreation).toLocaleDateString('fr-FR')}
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            );
          })}

          {filteredDemandes.length === 0 && (
            <Card>
              <CardBody className="p-8 text-center">
                <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-600 mb-2">
                  Aucune demande trouvée
                </h3>
                <p className="text-gray-500">
                  Il n&apos;y a pas de demandes dans cette catégorie pour le moment.
                </p>
              </CardBody>
            </Card>
          )}
        </div>

        {/* Modal Details */}
        <Modal isOpen={isOpen} onClose={onClose} size="2xl" scrollBehavior="inside">
          <ModalContent>
            {selectedDemande && (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  <h2 className="text-xl font-bold">Détails de la demande</h2>
                  <p className="text-sm text-gray-500">{selectedDemande.evenement.nom}</p>
                </ModalHeader>
                <ModalBody>
                  <div className="space-y-6">
                    {/* Client Info */}
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">Informations Client</h3>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <Avatar src={selectedDemande.client.avatar} size="md" />
                          <div>
                            <p className="font-medium">{selectedDemande.client.nom}</p>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <div className="flex items-center gap-1">
                                <Mail className="w-4 h-4" />
                                {selectedDemande.client.email}
                              </div>
                              <div className="flex items-center gap-1">
                                <Phone className="w-4 h-4" />
                                {selectedDemande.client.phone}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">Détails de l&rsquo;Événement</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <p className="text-sm text-gray-600 mb-1">Date & Heure</p>
                          <p className="font-medium">
                            {new Date(selectedDemande.evenement.date).toLocaleDateString('fr-FR')} à {selectedDemande.evenement.heure}
                          </p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <p className="text-sm text-gray-600 mb-1">Lieu</p>
                          <p className="font-medium">{selectedDemande.evenement.lieu}</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <p className="text-sm text-gray-600 mb-1">Budget</p>
                          <p className="font-medium">{selectedDemande.evenement.budget}</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <p className="text-sm text-gray-600 mb-1">Nombre d&rsquo;invités</p>
                          <p className="font-medium">{selectedDemande.evenement.invites} personnes</p>
                        </div>
                      </div>
                    </div>

                    {/* Service Details */}
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">Détails du Service</h3>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Service demandé</p>
                            <p className="font-medium">{selectedDemande.service}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Durée</p>
                            <p className="font-medium">{selectedDemande.details.duree}</p>
                          </div>
                        </div>
                        
                        <Divider className="my-4" />
                        
                        <div>
                          <p className="text-sm text-gray-600 mb-2">Livrables attendus</p>
                          <ul className="list-disc list-inside space-y-1">
                            {selectedDemande.details.livrables.map((livrable:any, index:number) => (
                              <li key={index} className="text-sm text-gray-700">{livrable}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <Divider className="my-4" />
                        
                        <div>
                          <p className="text-sm text-gray-600 mb-2">Contraintes particulières</p>
                          <p className="text-sm text-gray-700">{selectedDemande.details.contraintes}</p>
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3">Message du Client</h3>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-gray-700">{selectedDemande.message}</p>
                      </div>
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Fermer
                  </Button>
                  {selectedDemande.statut === 'en_attente' && (
                    <>
                      <Button
                        color="danger"
                        onPress={() => {
                          handleRefuser(selectedDemande.id);
                          onClose();
                        }}
                      >
                        Refuser
                      </Button>
                      <Button
                        className="bg-green-600 text-white"
                        onPress={() => {
                          handleAccepter(selectedDemande.id);
                          onClose();
                        }}
                      >
                        Accepter la demande
                      </Button>
                    </>
                  )}
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};