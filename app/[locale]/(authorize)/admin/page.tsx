"use client";

import { Avatar } from "@heroui/react";
import { BaggageClaimIcon, Bell, BriefcaseBusiness, Calendar, ChartArea, LayoutDashboard, School, Search, User, Users, Wallet, X } from "lucide-react";
import React from "react";



 const  Dashboard = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[1440px] h-[1024px] relative">
        <header className="fixed w-[1169px] h-[100px] left-[271px] border-t border-r border-b top-0 bg-white border-[#00000026] flex items-center justify-between px-6">
          <div className="relative w-72 h-12 bg-white rounded-[20.57px] overflow-hidden border border-[#00000026] flex items-center px-4">
            <Search className="w-4 h-4"  />
            <input
              type="text"
              placeholder="Rechercher"
              className="ml-2 text-sm text-gray-600 outline-none"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="w-6 h-6 text-gray-600" />
            <Avatar color="default" isBordered size="lg" />
          </div>
        </header>

        <aside className="fixed w-[271px] h-full border-r border-[#00000026] bg-white">
          <div className="flex flex-col items-center py-6">
            <X className="w-[223px] h-[78px]"  />
          </div>
          <nav className="mt-6">
            <ul className="space-y-4">
              <li className="flex items-center px-6 py-3 bg-red-500 text-white rounded-lg">
                <LayoutDashboard
                  className="w-6 h-6"
                 
                />
                <span className="ml-3">Tableau de bord</span>
              </li>
              <li className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 rounded-lg">
                <Calendar className="w-6 h-6"  />
                <span className="ml-3">Evènements</span>
              </li>
              <li className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 rounded-lg">
                <User className="w-6 h-6" />
                <span className="ml-3">Utilisateurs</span>
              </li>
              <li className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 rounded-lg">
                <BriefcaseBusiness
                  className="w-6 h-6"
                 
                />
                <span className="ml-3">Prestataires</span>
              </li>
              <li className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 rounded-lg">
                <Wallet className="w-6 h-6" />
                <span className="ml-3">Paiement</span>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="ml-[271px] mt-[100px] p-6">
          <h1 className="text-2xl font-extrabold text-gray-900">
            Tableau de bord
          </h1>

          <section className="grid grid-cols-4 gap-6 mt-6">
            <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg flex items-center">
              <Users className="w-12 h-12" />
              <div className="ml-4">
                <p className="text-sm opacity-80">Utilisateurs</p>
                <p className="text-2xl font-bold">2152</p>
              </div>
            </div>
            <div className="bg-orange-500 text-white p-6 rounded-lg shadow-lg flex items-center">
              <BaggageClaimIcon className="w-12 h-12" />
              <div className="ml-4">
                <p className="text-sm opacity-80">Gains</p>
                <p className="text-2xl font-bold">250000</p>
              </div>
            </div>
            <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg flex items-center">
              <Calendar className="w-12 h-12" />
              <div className="ml-4">
                <p className="text-sm opacity-80">Evènements</p>
                <p className="text-2xl font-bold">500</p>
              </div>
            </div>
            <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg flex items-center">
              <School className="w-12 h-12" />
              <div className="ml-4">
                <p className="text-sm opacity-80">Prestataires</p>
                <p className="text-2xl font-bold">50</p>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-lg font-bold">Utilisateurs</h2>
              <Users  className="mt-4" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-lg font-bold">Revenu</h2>
              <ChartArea  className="mt-4" />
            </div>
          </section>

          <section className="grid grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-lg font-bold">Evènements récents</h2>
              <table className="w-full mt-4">
                <thead>
                  <tr className="text-left text-gray-600">
                    <th className="py-2">DATE</th>
                    <th className="py-2">EVENEMENT</th>
                    <th className="py-2">STATUT</th>
                    <th className="py-2">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="py-2">01/01/25</td>
                    <td className="py-2">Afterwork Event</td>
                    <td className="py-2 text-green-500">Validé</td>
                    <td className="py-2">...</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-lg font-bold">Notifications</h2>
              <p className="mt-4 text-sm">
                John Doe a soumis l&apos;événement Afterwork Startups pour validation
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;