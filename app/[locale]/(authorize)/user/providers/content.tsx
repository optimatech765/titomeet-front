/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Area, AreaChart } from 'recharts';
import { Calendar, TrendingUp, DollarSign, Clock, Heart, LayoutDashboard, FileText, Settings, CreditCard, Menu, User } from 'lucide-react';
import { PrestataireDemandes } from './demandes/content';
import { PageProfileUpdateContent } from '../profil/update/content';

export const EventDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  // Navigation items
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'demandes', label: 'Demandes', icon: FileText },
    { id: 'transactions', label: 'Transactions', icon: CreditCard },
    { id: 'parametres', label: 'Paramètres', icon: Settings },
    { id: 'autres', label: 'Autres', icon: Menu },
  ];

  // Données simulées pour les statistiques
  const monthlyRevenue = [
    { month: 'Jan', revenue: 45000, events: 12 },
    { month: 'Fév', revenue: 52000, events: 15 },
    { month: 'Mar', revenue: 48000, events: 13 },
    { month: 'Avr', revenue: 61000, events: 18 },
    { month: 'Mai', revenue: 75000, events: 22 },
    { month: 'Juin', revenue: 83000, events: 25 },
  ];

  const eventTypes = [
    { name: 'Mariages', value: 45, color: '#EE3540' },
    { name: 'Corporatif', value: 30, color: '#F08621' },
    { name: 'Anniversaires', value: 15, color: '#28B0E6' },
    { name: 'Autres', value: 10, color: '#FEEBEC' },
  ];

  const weeklyBookings = [
    { day: 'Lun', bookings: 5 },
    { day: 'Mar', bookings: 8 },
    { day: 'Mer', bookings: 12 },
    { day: 'Jeu', bookings: 7 },
    { day: 'Ven', bookings: 15 },
    { day: 'Sam', bookings: 25 },
    { day: 'Dim', bookings: 18 },
  ];

  const StatCard = ({ title, value, icon: Icon, trend, color = "primary" }: any) => {
    const colorClasses: any = {
      primary: "border-red-500 bg-red-50",
      secondary: "border-orange-500 bg-orange-50",
      "secondary-blue": "border-blue-500 bg-blue-50",
      tertiary: "border-pink-200 bg-pink-50"
    };

    const iconColorClasses: any = {
      primary: "text-red-500",
      secondary: "text-orange-500",
      "secondary-blue": "text-blue-500",
      tertiary: "text-pink-400"
    };

    return (
      <div className={`bg-white rounded-lg shadow-md border-l-4 ${colorClasses[color]} p-6 transition-all hover:shadow-lg`}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
            <p className="text-3xl font-bold text-gray-900">{value}</p>
            {trend && (
              <p className={`text-sm ${trend > 0 ? 'text-green-600' : 'text-red-600'} flex items-center mt-2`}>
                <TrendingUp className="w-4 h-4 mr-1" />
                {trend > 0 ? '+' : ''}{trend}% ce mois
              </p>
            )}
          </div>
          <Icon className={`w-12 h-12 ${iconColorClasses[color]}`} />
        </div>
      </div>
    );
  };

  const Sidebar = () => (
    <div className={`bg-white shadow-lg transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-16'} min-h-screen`}>
      {/* Logo */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveMenu(item.id)}
              className={`w-full flex items-center px-4 py-3 text-left transition-colors ${activeMenu === item.id
                ? 'bg-red-50 text-red-600 border-r-2 border-red-500'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
            >
              <Icon className={`w-5 h-5 ${isSidebarOpen ? 'mr-3' : 'mx-auto'}`} />
              {isSidebarOpen && <span className="font-medium">{item.label}</span>}
            </button>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className={`absolute bottom-4 left-0 right-0 px-4 ${isSidebarOpen ? 'w-64' : 'w-16'}`}>
        <div className={`flex items-center p-3 bg-gray-50 rounded-lg ${!isSidebarOpen && 'justify-center'}`}>
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-gray-600" />
          </div>
          {isSidebarOpen && (
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">Jean Dupont</p>
              <p className="text-xs text-gray-500">Prestataire</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );


  const DashboardContent = () => (
    <div className="p-6">
      {/* Filtres de période */}
      <div className="mb-6">
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex space-x-4">
            {[
              { key: 'week', label: 'Cette semaine' },
              { key: 'month', label: 'Ce mois' },
              { key: 'quarter', label: 'Ce trimestre' },
              { key: 'year', label: 'Cette année' }
            ].map((period) => (
              <button
                key={period.key}
                onClick={() => setSelectedPeriod(period.key)}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${selectedPeriod === period.key
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {period.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cartes de statistiques principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Événements totaux"
          value="127"
          icon={Calendar}
          trend={15}
          color="primary"
        />
        <StatCard
          title="Chiffre d'affaires"
          value="€89,500"
          icon={DollarSign}
          trend={23}
          color="secondary"
        />
        <StatCard
          title="Clients satisfaits"
          value="98%"
          icon={Heart}
          trend={5}
          color="secondary-blue"
        />
        <StatCard
          title="Événements à venir"
          value="34"
          icon={Clock}
          trend={-8}
          color="tertiary"
        />
      </div>

      {/* Graphiques principaux */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Revenus mensuels */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenus mensuels</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={monthlyRevenue}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`€${value.toLocaleString()}`, 'Revenus']} />
              <Area type="monotone" dataKey="revenue" stroke="#EE3540" fill="#FEEBEC" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Types d'événements */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Répartition par type d&rsquo;événement</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={eventTypes}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {eventTypes.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Graphique des réservations hebdomadaires */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Réservations cette semaine</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={weeklyBookings}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="bookings" fill="#F08621" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Événements récents */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Événements récents</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-600">Événement</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Client</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Date</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Type</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Revenus</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Statut</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Mariage Sophie & Marc', client: 'Sophie Dubois', date: '25 Juin 2025', type: 'Mariage', revenue: '€8,500', status: 'Terminé' },
                { name: 'Gala Entreprise TechCorp', client: 'TechCorp SAS', date: '20 Juin 2025', type: 'Corporatif', revenue: '€12,000', status: 'Terminé' },
                { name: 'Anniversaire 50 ans', client: 'Pierre Martin', date: '18 Juin 2025', type: 'Anniversaire', revenue: '€3,200', status: 'Terminé' },
                { name: 'Lancement produit', client: 'Innovation Ltd', date: '15 Août 2025', type: 'Corporatif', revenue: '€9,800', status: 'Planifié' },
              ].map((event, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{event.name}</td>
                  <td className="py-3 px-4 text-gray-600">{event.client}</td>
                  <td className="py-3 px-4 text-gray-600">{event.date}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${event.type === 'Mariage' ? 'bg-red-100 text-red-800' :
                      event.type === 'Corporatif' ? 'bg-orange-100 text-orange-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                      {event.type}
                    </span>
                  </td>
                  <td className="py-3 px-4 font-semibold text-gray-900">{event.revenue}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${event.status === 'Terminé' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                      {event.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
 

  const renderContent = () => {
    switch (activeMenu) {
      case 'dashboard':
        return <DashboardContent />;
      case 'demandes':
        return <PrestataireDemandes />;
      case 'parametres':
        return  <PageProfileUpdateContent />;
     
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* <Header /> */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          {renderContent()}
          {children}
        </main>
      </div>
    </div>
  );
};

