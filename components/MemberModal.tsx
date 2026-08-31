"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export type Member = {
  name: string;
  role: string;
  dept: string;
  image?: string;
  desc?: string;
  focus?: string;
};

export default function MemberModal({
  open,
  onClose,
  member,
}: {
  open: boolean;
  onClose: () => void;
  member: Member | null;
}) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && member && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[80] bg-[#2D2A32]/60 backdrop-blur-sm"
          />
          <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 8 }}
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
              className="pointer-events-auto w-full max-w-[560px] max-h-[90vh] overflow-hidden pixel-window rounded-[24px] bg-[#f8f7ff] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-[#3f41cc] text-white border-b-[3px] border-[#2D2A32] px-5 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-white border-2 border-[#2D2A32]" />
                  <span className="w-3 h-3 rounded-full bg-[#ff9ebb] border-2 border-[#2D2A32]" />
                  <span className="font-black text-[11px] tracking-[0.12em] uppercase ml-2">Profil Anggota ✦</span>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 bg-white border-2 border-[#2D2A32] rounded-full flex items-center justify-center font-black text-sm shadow-[2px_2px_0_#2D2A32] hover:translate-y-[-1px] transition"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              <div className="overflow-auto p-6 flex flex-col gap-4">
                <div className="flex gap-4">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-2xl border-[3px] border-[#2D2A32] overflow-hidden bg-white shadow-[4px_4px_0_#2D2A32] flex items-center justify-center">
                    {member.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="font-pixel text-[10px] text-center leading-none">NO<br/>PHOTO</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="syne-black text-lg leading-none tracking-tight text-[#2d2a32]">{member.name}</h3>
                    <p className="mt-1 font-black text-[11px] tracking-[0.08em] text-[#3f41cc]">{member.role.toUpperCase()}</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-[#2d2a32] text-white rounded-full text-xs font-black tracking-wide">{member.dept}</span>
                  </div>
                </div>

                {member.desc && (
                  <div className="bg-white border-2 border-[#2d2a32] rounded-2xl p-4 shadow-[3px_3px_0_#2d2a32]">
                    <p className="font-black text-[11px] tracking-[0.08em] text-[#2d2a32]/50 mb-2">TENTANG</p>
                    <p className="text-sm leading-relaxed text-[#2d2a32]/80">{member.desc}</p>
                  </div>
                )}

                {member.focus && (
                  <div className="bg-[#c4ccff] border-2 border-[#2d2a32] rounded-2xl p-4 shadow-[3px_3px_0_#2d2a32]">
                    <p className="font-black text-[11px] tracking-[0.08em] text-[#2d2a32]/60 mb-1">FOKUS PERAN</p>
                    <p className="text-sm font-black leading-relaxed text-[#2d2a32]">{member.focus}</p>
                  </div>
                )}

                <button onClick={onClose} className="bubbly-btn w-full py-3 text-sm mt-1">
                  TUTUP ✦
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
