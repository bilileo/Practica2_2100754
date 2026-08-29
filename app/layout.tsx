import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import "./globals.css";
export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
<html lang="es">
<body>
<Navbar />
<div className="flex">
<Sidebar items={["Dashboard", "Usuarios", "Equipos","Préstamos"]} />
<main className="flex-1 p-6">{children}</main>
</div>
</body>
</html>
);
}