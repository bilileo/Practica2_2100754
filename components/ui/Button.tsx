interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  status: "primary" | "secondary";
}

export function Button({ children, onClick, status }: ButtonProps) {
    const colors = {
        primary: "bg-blue-500 hover:bg-blue-600",
        secondary: "bg-gray-500 hover:bg-gray-600",
    }; 
    return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg ${colors[status]} text-white`}
    >
      {children}
    </button>
  );
}