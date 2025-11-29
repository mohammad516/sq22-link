"use client";

import { motion } from "framer-motion";

interface ColorFilterProps {
  colors: string[];
  selectedColor: string | null;
  onColorSelect: (color: string | null) => void;
}

const colorMap: Record<string, string> = {
  white: "#FFFFFF",
  black: "#000000",
  green: "#22C55E",
  navy: "#1E3A8A",
};

export default function ColorFilter({ colors, selectedColor, onColorSelect }: ColorFilterProps) {
  return (
    <div className="flex items-center gap-4 flex-wrap">
      <span className="text-sm font-semibold text-[#252A34]">Filter by Color:</span>
      <button
        onClick={() => onColorSelect(null)}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          selectedColor === null
            ? "bg-[#08D9D6] text-white shadow-md"
            : "bg-[#EAEAEA] text-[#252A34] hover:bg-[#08D9D6]/20"
        }`}
      >
        All
      </button>
      {colors.map((color) => (
        <motion.button
          key={color}
          onClick={() => onColorSelect(selectedColor === color ? null : color)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${
            selectedColor === color
              ? "border-[#08D9D6] shadow-lg scale-110"
              : "border-[#EAEAEA] hover:border-[#08D9D6]/50"
          }`}
          style={{
            backgroundColor: colorMap[color] || color,
          }}
          aria-label={`Filter by ${color}`}
        />
      ))}
    </div>
  );
}

