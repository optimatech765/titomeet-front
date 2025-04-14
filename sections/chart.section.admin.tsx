"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import { Card, Select, SelectItem } from "@heroui/react";

const barData = [
  { name: "Jan", revenu: 4000 },
  { name: "Fev", revenu: 3000 },
  { name: "Mar", revenu: 5000 },
  { name: "Avr", revenu: 7000 },
  { name: "Mai", revenu: 4500 },
  { name: "Juin", revenu: 6500 },
  { name: "Juil", revenu: 3000 },
  { name: "Août", revenu: 8000 },
  { name: "Sep", revenu: 7000 },
  { name: "Oct", revenu: 9000 },
  { name: "Nov", revenu: 12000 },
  { name: "Déc", revenu: 6000 },
];

const pieData = [
  { name: "Nouveaux utilisateurs", value: 69 },
  { name: "Utilisateurs actifs", value: 31 },
];

const COLORS = ["#00C49F", "#FF8042"];

export const DashboardCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Revenu */}
      <Card className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Revenu</h3>
          <Select size="sm" defaultSelectedKeys={["annee"]}>
            <SelectItem key="annee">Année</SelectItem>
            <SelectItem key="mois">Mois</SelectItem>
          </Select>
        </div>
        <div className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenu" fill="#FFA726" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Utilisateurs */}
      <Card className="p-4 flex flex-col justify-between">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Utilisateurs</h3>
          <Select size="sm" defaultSelectedKeys={["aujourdhui"]}>
            <SelectItem key="aujourdhui">Aujourd’hui</SelectItem>
            <SelectItem key="semaine">Semaine</SelectItem>
            <SelectItem key="mois">Mois</SelectItem>
          </Select>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="h-[180px] w-[180px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={3}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="text-sm space-y-1">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#00C49F]" />
              <span>Nouveaux utilisateurs</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#FF8042]" />
              <span>Utilisateurs actifs</span>
            </div>
          </div>
          <div className="font-semibold text-sm">
            Total d’utilisateurs : <span className="font-bold">5000</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
