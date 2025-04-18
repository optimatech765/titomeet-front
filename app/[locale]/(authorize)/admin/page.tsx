/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { StatusComponent } from "@/components/status.component";
import { Card, CardBody, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, TableCell, TableRow } from "@heroui/react";
import { BriefcaseBusiness, CalendarCheck, Ellipsis, HandCoins, Users } from "lucide-react";
import Link from "next/link";
import React, { Fragment, useEffect } from "react";
import { CustomChart } from "../../../../components/charts/user.chart.component";
import { RevenueChart } from "@/components/charts/revenu.chart.component";
import { useAdminEventsStore } from "@/stores/admin/admin.events.store";
import { UseAdminStateStore } from "@/stores/admin/admin.home.stat.store";
import { AwaitDataLoader, AwaitDataLoaderStats } from "@/components/await.data.loader";
import { formatDate2 } from "@/utils/functions/date.function";
import { TableComponent } from "@/components/table.component";



const Dashboard = () => {

  return (
    <Fragment>
      <h1 className="text-2xl font-extrabold text-gray-900">
        Tableau de bord
      </h1>
      <AdminState />
      {/* <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-2.5 mt-6">
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
      </section> */}

      <section className="grid md:grid-cols-2 gap-6 mt-6">

        <Card className="">
          <CardBody>
            <div className="mt-5">
              <h2 className=" font-bold">Revenu</h2>
              <RevenueChart />
            </div>

          </CardBody>
        </Card>
        <Card >
          <CardBody>
            <div className="mt-5">
              <h2 className=" font-bold">Utilisateur</h2>
              <CustomChart />
            </div>
          </CardBody>
        </Card>
      </section>

      <section className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="overflow-auto w-full">
          <LastEvents />
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

const AdminState = () => {
  const {
    valueList,
    fetchList,
    isLoading,
  } = UseAdminStateStore()

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <>
      <AwaitDataLoaderStats
        dataLength={valueList?.length}
        isLoading={isLoading}
        emptyMessage={<h1>Erreur lors de la récupération des détails</h1>}
      >
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-2.5 mt-6">
          <div className="bg-[#17C964] overflow-hidden relative text-white p-6 rounded-lg shadow-lg flex items-center h-[126px]">
            <div className="bg-white rounded-full p-2 flex items-center justify-center">
              <Users className="w-8 h-8 text-[#17C964]" />
            </div>

            <div className="ml-4">
              <p className="text-sm opacity-80 font-bold">Utilisateurs</p>
              <p className="text-2xl font-bold">{valueList?.totalUsers}</p>
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
              <p className="text-2xl font-bold">{valueList?.totalBookings}</p>
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
              <p className="text-2xl font-bold">{valueList?.totalEvents}</p>
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
              <p className="text-2xl font-bold">{valueList?.totalProviders}</p>
            </div>

            <div className="absolute -right-1 z-0 -bottom-4 flex items-center justify-center">
              <BriefcaseBusiness className="w-12 h-12 text-slate-300" />
            </div>
          </div>
        </section>
      </AwaitDataLoaderStats>

    </>

  )
}

const LastEvents = () => {
  const { items, isLoading, fetchItems } = useAdminEventsStore()

  useEffect(() => {
    fetchItems({ limit: 5 })
  }, []);

  return (
    <Fragment>
      <AwaitDataLoader
        dataLength={items.length}
        isLoading={isLoading}
        emptyMessage={<h1>Erreur lors de la récupération des détails</h1>}
      >
        <TableComponent
          showSearchBar={false}
          objectHookName={useAdminEventsStore}
          title="Evènements récents"
          columns={[
            { name: "Date", uid: "startDate", sortable: true },
            { name: "Evènement", uid: "name", sortable: true },
            { name: "Status", uid: "status", sortable: true },
            { name: "Actions", uid: "actions", sortable: false },
          ]}
          valuesList={items}
          emptyContent={<p>Aucun résultat</p>}
          isLoading={isLoading}
        >
          {items.map((item) => (
            <TableRow key={item.id} className="">
              <TableCell >{formatDate2(item.startDate)}</TableCell>
              <TableCell >{item.name}</TableCell>
              <TableCell ><StatusComponent status={item.status} /></TableCell>
              <TableCell >
                <div>
                  <Dropdown>
                    <DropdownTrigger>
                      <div className="flex items-center justify-center">
                        <Ellipsis className="text-default-300" />
                      </div>

                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions">
                      <DropdownItem key="new">New file</DropdownItem>
                      <DropdownItem key="copy">Copy link</DropdownItem>
                      <DropdownItem key="edit">Edit file</DropdownItem>
                      <DropdownItem key="delete" className="text-danger" color="danger">
                        Delete file
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </TableCell>



            </TableRow>
          ))}

        </TableComponent>
      </AwaitDataLoader>
    </Fragment>

  )
}