"use client";

import { useState } from "react";

export function SearchBox() {

const [query, setQuery] = useState("");

return (

<input

value={query}

onChange={(e) => setQuery(e.target.value)}

placeholder="Buscar activos..."

className="border rounded-lg px-3 py-2 w-full"

/>

);

}