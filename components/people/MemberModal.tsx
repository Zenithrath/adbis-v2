"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { type Member } from "@/data/organization";

const LEADER_ACCENT = ["#F9A8D4", "#BFDBFE"];
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function luminance(hex: string) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16) / 255;
  const g = parseInt(h.slice(2, 4), 16) / 255;
  const b = parseInt(h.slice(4, 6), 16) / 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function onColor(hex: string) {
  return luminance(hex) > 0.55 ? "#1e293b" : "#FFFBEB";
}

function RolePill({
  role,
  color,
  className,
}: {
  role: string;
  color: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest ${className || ""}`}
      style={{ backgroundColor: color, color: onColor(color) }}
    >
      {role}
    </span>
  );
}

export default function MemberModal({
  member,
  onClose,
}: {
  member: Member | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {member && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Tutup"
            onClick={onClose}
            className="absolute inset-0 bg-[#1e293b]/45 backdrop-blur-sm cursor-pointer"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto bg-[#FFFBEB] border border-[#1e293b]/15 rounded-3xl p-6 md:p-8 z-10"
          >
            <button
              type="button"
              aria-label="Tutup profil"
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#1e293b]/5 hover:bg-[#1e293b] hover:text-[#FFFBEB] border border-[#1e293b]/15 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6 pr-8">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border border-[#1e293b]/10 flex-shrink-0"
              />
              <div className="text-center sm:text-left">
                <RolePill
                  role={member.role}
                  color={LEADER_ACCENT[0]}
                  className="mb-2"
                />
                <h3 className="text-2xl font-black uppercase tracking-tight leading-tight">
                  {member.name}
                </h3>
                <p className="text-[11px] font-bold text-[#F472B6] mt-1">
                  {member.departmentName}
                </p>
                <p className="text-[11px] font-semibold text-[#1e293b]/50 mt-0.5">
                  {member.major}
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#1e293b]/10 rounded-2xl p-5 mb-4">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-[#1e293b]/40 mb-2">
                Profil
              </h4>
              <p className="text-xs text-[#1e293b]/65 leading-relaxed">
                {member.bio}
              </p>
            </div>

            {member.tasks && member.tasks.length > 0 && (
              <div className="bg-white border border-[#1e293b]/10 rounded-2xl p-5">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-[#1e293b]/40 mb-3">
                  Fokus Tugas &amp; Peran
                </h4>
                <ul className="space-y-2">
                  {member.tasks.map((task, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-[#1e293b]/65 leading-relaxed"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                        style={{ backgroundColor: LEADER_ACCENT[0] }}
                      />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
