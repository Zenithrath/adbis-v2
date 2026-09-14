"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import type { Department, Member } from "@/data/organization";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function DeptDetail({
  dept,
  onSelectMember,
}: {
  dept: Department;
  onSelectMember: (m: Member) => void;
}) {
  return (
    <section id="departemen" className="scroll-mt-24 w-full border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-16 md:py-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={dept.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <Reveal>
              <div className="mb-10 text-center">
                <span className="text-[10px] font-bold tracking-widest uppercase text-white/40 block mb-3">
                  • Pimpinan Departemen
                </span>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none text-white">
                  {dept.shortName}
                </h2>
              </div>
            </Reveal>

            {/* Foto Kadep & Wakadep */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20 max-w-4xl mx-auto">
              {[
                { member: dept.head, label: "Kepala Departemen" },
                { member: dept.coHead, label: "Wakil Kepala Departemen" },
              ].map(({ member, label }) => (
                <div
                  key={member.id}
                  className="group flex flex-col items-center cursor-pointer"
                  onClick={() => onSelectMember(member)}
                >
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#F9A8D4] mb-3">
                    {label}
                  </span>
                  <div className="relative w-full max-w-[400px] rounded-3xl overflow-hidden border-[3px] border-[#1e293b] shadow-[8px_8px_0px_#1e293b] transition-transform duration-300 group-hover:-translate-y-2 bg-white">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto block"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mb-10">
              <h3 className="text-2xl font-black uppercase tracking-tight text-white">
                Staff Departemen
              </h3>
              <div className="w-16 h-1 bg-[#F9A8D4] mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {dept.staff.map((staff) => (
                <button
                  key={staff.id}
                  type="button"
                  onClick={() => onSelectMember(staff)}
                  className="group relative text-left bg-white border-2 border-[#1e293b]/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#1e293b] hover:shadow-[4px_4px_0px_#1e293b] hover:-translate-y-1 cursor-pointer"
                >
                  <div className="w-full relative bg-[#f1f5f9]">
                    <img
                      src={staff.image}
                      alt={staff.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto block"
                    />
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
