"use client";


import { Banknote, BriefcaseBusiness, Calendar, ChartArea, Users } from "lucide-react";
import React, { Fragment } from "react";



const Dashboard = () => {
  return (
    <Fragment>
      <h1 className="text-2xl font-extrabold text-gray-900">
        Tableau de bord
      </h1>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        <div className="bg-green-500 overflow-hidden relative text-white p-6 rounded-lg shadow-lg flex items-center">
          <div className="bg-white rounded-full p-2 flex items-center justify-center">
            <Users className="w-8 h-8 text-green-500" />
          </div>

          <div className="ml-4">
            <p className="text-sm opacity-80">Utilisateurs</p>
            <p className="text-2xl font-bold">2152</p>
          </div>
          <div className="absolute -right-1 z-0 -bottom-4 flex items-center justify-center">
            <Users className="w-12 h-12 text-slate-300" />
          </div>
        </div>
        <div className="bg-orange-500 overflow-hidden relative text-white p-6 rounded-lg shadow-lg flex items-center">
          <div className="bg-white rounded-full p-2 flex items-center justify-center">
            <Banknote className="w-8 h-8 text-orange-500" />
          </div>
          <div className="ml-4">
            <p className="text-sm opacity-80">Gains</p>
            <p className="text-2xl font-bold">250000</p>
          </div>
          <div className="absolute -right-1 z-0 -bottom-4 flex items-center justify-center">
            <Banknote className="w-12 h-12 text-slate-300" />
          </div>
        </div>
        <div className="bg-red-500 overflow-hidden relative text-white p-6 rounded-lg shadow-lg flex items-center">
          <div className="bg-white rounded-full p-2 flex items-center justify-center">
            <Calendar className="w-8 h-8 text-red-500" />
          </div>
          <div className="ml-4">
            <p className="text-sm opacity-80">Evènements</p>
            <p className="text-2xl font-bold">500</p>
          </div>
          <div className="absolute -right-1 z-0 -bottom-4 flex items-center justify-center">
            <Calendar className="w-12 h-12 text-slate-300" />
          </div>
        </div>
        <div className="bg-blue-500 overflow-hidden relative text-white p-6 rounded-lg shadow-lg flex items-center">
          <div className="bg-white rounded-full p-2 flex items-center justify-center">
            <BriefcaseBusiness className="w-8 h-8 text-blue-500" />
          </div>
          <div className="ml-4">
            <p className="text-sm opacity-80">Prestataires</p>
            <p className="text-2xl font-bold">50</p>
          </div>

          <div className="absolute -right-1 z-0 -bottom-4 flex items-center justify-center">
            <BriefcaseBusiness className="w-12 h-12 text-slate-300" />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-6 mt-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold">Utilisateurs</h2>
          <Users className="mt-4" />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold">Revenu</h2>
          <ChartArea className="mt-4" />
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
    </Fragment>
  );
};

export default Dashboard;