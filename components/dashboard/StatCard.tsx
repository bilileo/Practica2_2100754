interface StatCardProps {
label: string;
value: string | number;
}

export function StatCard({ label, value }: StatCardProps) {
    return (
        <div className="rounded-xl border p-6 text-center shadow-sm">
            <p className="text-3xl font-bold text-blue-600">{value}</p>
            <p className="text-gray-500 mt-1">{label}</p>
        </div>
    );
}