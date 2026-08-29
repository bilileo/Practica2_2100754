interface CardProps {
  children: React.ReactNode;
}

export function Card({ children }: CardProps) {
  return (
    <div className="rounded-xl border p-5 shadow-sm">
      {children}
    </div>
  );
}