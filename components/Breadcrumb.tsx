"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbProps {
  categoryName: string;
}

export default function Breadcrumb({ categoryName }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm text-[#252A34]/70 mb-6">
      <Link
        href="/"
        className="hover:text-[#08D9D6] transition-colors"
      >
        Home
      </Link>
      <ChevronRight size={16} className="text-[#252A34]/40" />
      <span className="text-[#252A34] font-medium">{categoryName}</span>
    </nav>
  );
}

