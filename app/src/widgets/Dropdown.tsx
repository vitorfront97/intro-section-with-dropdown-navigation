'use client';

import { SetStateAction, useState } from "react";

interface DropdownProps {
  icon?: boolean;
  name: string;
  items: Array<string>;
  side: string
}

export default function Dropdown({ icon, name, items, side }: DropdownProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col gap-4 md:gap-0 md:relative">
      <div className="flex items-center gap-4 cursor-pointer" onClick={() => setOpen(o => !o)}>
        {name}
        <img
          src="/images/icon-arrow-down.svg"
          alt="Ícone de flecha para baixo"
        />
      </div>
      <ul className={`flex flex-col gap-3 md:bg-this-gray-50 overflow-hidden transition-all duration-300
          ${open ? "max-h-36 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"} md:py-4 md:px-8 md:max-h-none md:absolute md:top-8 md:-${side}-12 md:shadow-xl`}>
        {items.map((key, item) => (
          <li key={key} className="flex items-center gap-3">
            {icon && (
              <img src={`/images/icon-${item}.svg`} alt="Ícone de lista" />
            )}
            {items[item]}
          </li>
        ))}
      </ul>
    </div>
  );
};
