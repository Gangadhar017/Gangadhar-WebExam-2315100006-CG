import React from "react";
import SearchBar from "./SearchBar";
import { useSearchParams } from "react-router-dom";

export default function Navbar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  return (
    <header className="border-b">
      <div className="container-wide flex items-center justify-between px-6 py-4">
        
        {/* LEFT: Logo */}
        <div className="flex items-center gap-3">
          <div className="rounded-full w-8 h-8 flex items-center justify-center border">
            🛒
          </div>
          <span className="font-semibold">Web3 Shopping Cart</span>
        </div>

        {/* RIGHT: Search bar */}
        <div className="hidden md:block w-72">
          <SearchBar 
            value={searchQuery}
            onChange={(val) => {
              if (val) setSearchParams({ search: val });
              else setSearchParams({});
            }}
          />
        </div>

      </div>
    </header>
  );
}
