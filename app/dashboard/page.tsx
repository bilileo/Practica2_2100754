import { StatCard } from "@/components/dashboard/StatCard";

import { Card } from "@/components/ui/Card";

import { Badge } from "@/components/ui/Badge";

const stats = [

{ label: "Equipos", value: 125 },

{ label: "Préstamos", value: 32 },

{ label: "Usuarios", value: 87 },

];

export default function DashboardPage() {

return (

<main className="p-8 space-y-6">

<h1 className="text-2xl font-bold">Dashboard</h1>

<div className="grid grid-cols-3 gap-4">

{stats.map((s) => (

<StatCard key={s.label} {...s} />

))}

</div>

<Card>

<div className="flex justify-between items-center">

<h2 className="font-semibold">Macbook Air M2</h2>

<Badge text="Disponible" status="success" />

</div>

</Card>

</main>

);

}