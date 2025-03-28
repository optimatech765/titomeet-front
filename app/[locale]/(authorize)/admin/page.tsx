/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { StatusComponent } from "@/components/status.component";
import { Button, Card, CardBody, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react";
import { BriefcaseBusiness, CalendarCheck, EllipsisIcon, HandCoins, Users } from "lucide-react";
import Link from "next/link";
import React, { Fragment } from "react";
import { CustomChart } from "../../../../components/charts/user.chart.component";
import { RevenueChart } from "@/components/charts/revenu.chart.component";



const Dashboard = () => {

  const renderCell = React.useCallback((user: any, columnKey: any) => {
    const cellValue = user[columnKey];

    switch (columnKey) {

      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">{user.team}</p>
          </div>
        );
      case "status":
        return (
          <StatusComponent status={cellValue} />
        );
      case "actions":
        return (
          <div className="relative flex justify-end items-center gap-2">
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
                  <EllipsisIcon className="text-default-300" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem key="view">View</DropdownItem>
                <DropdownItem key="edit">Edit</DropdownItem>
                <DropdownItem key="delete">Delete</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Fragment>
      <h1 className="text-2xl font-extrabold text-gray-900">
        Tableau de bord
      </h1>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-2.5 mt-6">
        <div className="bg-[#17C964] overflow-hidden relative text-white p-6 rounded-lg shadow-lg flex items-center h-[126px]">
          <div className="bg-white rounded-full p-2 flex items-center justify-center">
            <Users className="w-8 h-8 text-[#17C964]" />
          </div>

          <div className="ml-4">
            <p className="text-sm opacity-80 font-bold">Utilisateurs</p>
            <p className="text-2xl font-bold">2152</p>
          </div>
          <div className="absolute -right-1 z-0 -bottom-4 flex items-center justify-center">
            <Users className="w-12 h-12 text-slate-300" />
          </div>
        </div>
        <div className="bg-orange-500 overflow-hidden relative text-white p-6 rounded-lg shadow-lg flex items-center">
          <div className="bg-white rounded-full p-2 flex items-center justify-center">
            <HandCoins className="w-8 h-8 text-orange-500" />
          </div>
          <div className="ml-4">
            <p className="text-sm opacity-80 font-bold">Gains</p>
            <p className="text-2xl font-bold">250000</p>
          </div>
          <div className="absolute -right-1 z-0 -bottom-4 flex items-center justify-center">
            <HandCoins className="w-12 h-12 text-slate-300" />
          </div>
        </div>
        <div className="bg-red-500 overflow-hidden relative text-white p-6 rounded-lg shadow-lg flex items-center">
          <div className="bg-white rounded-full p-2 flex items-center justify-center">
            <CalendarCheck className="w-8 h-8 text-red-500" />
          </div>
          <div className="ml-4">
            <p className="text-sm opacity-80 font-bold">Evènements</p>
            <p className="text-2xl font-bold">500</p>
          </div>
          <div className="absolute -right-1 z-0 -bottom-4 flex items-center justify-center">
            <CalendarCheck className="w-12 h-12 text-slate-300" />
          </div>
        </div>
        <div className="bg-blue-500 overflow-hidden relative text-white p-6 rounded-lg shadow-lg flex items-center">
          <div className="bg-white rounded-full p-2 flex items-center justify-center">
            <BriefcaseBusiness className="w-8 h-8 text-blue-500" />
          </div>
          <div className="ml-4">
            <p className="text-sm opacity-80 font-bold">Prestataires</p>
            <p className="text-2xl font-bold">50</p>
          </div>

          <div className="absolute -right-1 z-0 -bottom-4 flex items-center justify-center">
            <BriefcaseBusiness className="w-12 h-12 text-slate-300" />
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-6 mt-6">

        <Card className="">
          <CardBody>
            <div className="mt-5">
              <h2 className=" font-bold">Utilisateurs</h2>
              <CustomChart />
            </div>

          </CardBody>
        </Card>
        <Card >
          <CardBody>
            <div className="mt-5">
              <h2 className=" font-bold">Revenu</h2>
              <RevenueChart />
            </div>
          </CardBody>
        </Card>
      </section>

      <section className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="overflow-auto w-full">
          <h2 className="text-2xl font-extrabold mb-2">Evènements récents</h2>
          <Card className="border-1">
            <CardBody>
              <Table

                // isVirtualized={true}
                fullWidth={true}
                removeWrapper
                aria-label="Example static collection table"
                className='mt-2'
                classNames={{
                  th: "text-sm font-medium text-gray-700 bg-slate-300",
                  tbody: " font-semibold",
                  wrapper: "overflow-auto max-h-[200px] shadow-xl",
                  base:"overflow-auto w-full"
                }} >
                <TableHeader className='' columns={columns}>
                  {(column) => (
                    <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                      {column.name}
                    </TableColumn>
                  )}
                </TableHeader>
                <TableBody items={Paiements}>
                  {(item) => (
                    <TableRow key={item.id}>
                      {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                    </TableRow>
                  )}
                </TableBody>
              </Table>

            </CardBody>

          </Card>
        </div>
        <div className="rounded-lg ">
          <h2 className="text-2xl font-extrabold mb-2">Notifications</h2>
          <Card>

            <CardBody>
              {/* create timeline vertical */}
              <div className="flex justify-between items-center mb-2 text-xs">
                <h3 className="font-bold">Aujourd&lsquo;hui</h3>
                <Link href="/events/1" className="text-primary text-xs">
                  Voir tous
                </Link>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative border-l-1 border-slate-300 ">
                  {timelineData.map((event, index) => (
                    <div key={index} className="">
                      <div className="absolute -left-12">
                        <p className="text-sm text-gray-500">{event.date}</p>
                      </div>
                      <div key={index} className="mb-3 ml-3">
                        <div className="absolute -left-2 w-4 h-4 bg-primary rounded-full border-4 border-white"></div>
                        <p className="text-gray-700">{event.description}</p>

                      </div>
                    </div>

                  ))}
                </div>
              </div>

            </CardBody>


          </Card>

        </div>
      </section>
    </Fragment>
  );
};

export default Dashboard;

const columns = [
  { name: "Date", uid: "date" },
  { name: "Evènement", uid: "event" },
  { name: "Statut", uid: "status" },
  { name: "ACTIONS", uid: "actions" },
];


const Paiements = [
  {
    id: 1,
    date: "2025-03-10",
    event: "Conférence Tech",
    paiement: "Carte Bancaire",
    amount: 150,
    status: "active"
  },
  {
    id: 2,
    date: "2025-03-11",
    event: "Atelier Blockchain",
    paiement: "PayPal",
    amount: 200,
    status: "paused"
  },
  {
    id: 3,
    date: "2025-03-12",
    event: "Séminaire IA",
    paiement: "Virement",
    amount: 300,
    status: "vacation"
  }
]


const timelineData = [
  {
    title: "Étape 1",
    date: "12:14",
    description: "Début du projet avec la planification initiale.",
  },
  {
    title: "Étape 2",
    date: "12:14",
    description: "Développement du prototype et tests internes.",
  },
  {
    title: "Étape 3",
    date: "12:14",
    description: "Mise en production et lancement officiel.",
  },
];