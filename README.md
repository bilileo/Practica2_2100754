# Práctica de Componentes, Layout y Dashboard

## Componentes reutilizables (ui/)

Button, Card y Badge — construidos con props y children.

## Layout (layout/)

Navbar y Sidebar, compuestos en app/layout.tsx alrededor de {children}.

## Dashboard (dashboard/)

StatCard muestra indicadores desde un arreglo con .map().

## Server Components

DashboardPage y layout.tsx no usan "use client": solo componen otros componentes.

## Client Components

Sidebar y SearchBox usan "use client" por usePathname y useState.