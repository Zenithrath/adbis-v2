"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import MemberModal, { type Member } from "@/components/MemberModal";
import { CreativeCard, DeptCard } from "@/components/CreativeCards";
import peopleData from "@/data/people.json";

export default function PeoplePage() {
  const [selected, setSelected] = useState<Member | null>(null);
  const [open, setOpen] = useState(false);
  const [activeDept, setActiveDept] = useState<string | null>(null);

  const openMember = (m: Member) => {
    setSelected(m);
    setOpen(true);
  };

  return (
    <div className="flex flex-col bg-[#f8f7ff]">
      {/* Header — violet poster */}
      <section className="hero-violet relative overflow-hidden border-b-[3px] border-[#2d2a32]">
        <div className="hero-dots-pattern" />
        <div className="hero-texture-lines" />
        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 sm:py-14 text-center">
          <span className="inline-flex bg-white px-4 py-1.5 rounded-full font-black text-xs tracking-[0.08em] text-[#2d2a32] shadow">✦ OUR PEOPLE — 03</span>
          <h1 className="mt-4 syne-black text-3xl sm:text-5xl leading-[0.9] tracking-[-0.02em]">
            <span className="text-[#fff9c4]">STRUKTUR &</span><br />
            <span className="text-[#ff9ebb]">ORANG-ORANG</span> <span className="text-[#c4ccff]">HEBAT</span>
          </h1>
          <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-white/80 max-w-2xl mx-auto">
            Klik struktur atau anggota untuk lihat profil lengkap. Semua departemen bisa di-expand untuk detail jobdesc & anggota.
          </p>
        </div>
      </section>

      {/* Org Chart */}
      <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-8 sm:py-10 w-full">
        <CreativeCard className="p-4 sm:p-6 lg:p-8 overflow-x-auto" index={0}>
          <div className="min-w-[720px]">
            <div className="flex justify-center">
              <motion.button
                onClick={() => openMember({ name: "Ketua Himpunan", role: "Ketua Himpunan", dept: "BPH", desc: "Pemimpin utama HMPS, penanggung jawab visi & arah gerak kabinet.", focus: "Leadership, strategi & representasi eksternal." })}
                className="group bg-[#ff9ebb] border-[3px] border-[#2d2a32] rounded-2xl px-6 py-4 shadow-[4px_4px_0_#2d2a32] hover:shadow-[6px_6px_0_#2d2a32] hover:-translate-y-0.5 transition text-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <p className="font-black text-[10px] tracking-[0.14em] text-[#2d2a32]">LEVEL 1</p>
                <p className="syne-black text-sm text-[#2d2a32]">Ketua Himpunan</p>
                <p className="text-xs font-bold text-[#2d2a32]/60 mt-1">Klik untuk profil ✦</p>
              </motion.button>
            </div>
            <div className="flex justify-center my-3"><span className="w-0.5 h-6 bg-[#2d2a32]" /></div>

            <div className="flex justify-center">
              <motion.button
                onClick={() => openMember({ name: "Wakil Ketua Himpunan", role: "Wakil Ketua Himpunan", dept: "BPH", desc: "Mendampingi ketua & koordinasi lintas departemen.", focus: "Koordinasi internal & eksekusi program." })}
                className="bg-[#c4ccff] border-[3px] border-[#2d2a32] rounded-2xl px-6 py-3 shadow-[4px_4px_0_#2d2a32] hover:shadow-[6px_6px_0_#2d2a32] hover:-translate-y-0.5 transition"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <p className="font-black text-[10px] text-[#2d2a32]">LEVEL 2</p>
                <p className="syne-black text-sm text-[#2d2a32]">Wakil Ketua Himpunan</p>
              </motion.button>
            </div>
            <div className="flex justify-center my-3"><span className="w-0.5 h-6 bg-[#2d2a32]" /></div>

            <div className="flex justify-center">
              <div className="bg-[#fff9c4] border-[3px] border-[#2d2a32] rounded-2xl px-4 py-3 shadow-[4px_4px_0_#2d2a32] w-full max-w-[520px]">
                <p className="font-black text-[10px] tracking-[0.14em] text-center text-[#2d2a32]">BPI — BADAN PENGURUS INTI</p>
                <div className="mt-2 grid grid-cols-2 gap-3">
                  <motion.button
                    onClick={() => openMember({ name: "Sekretaris Umum", role: "Sekretaris Umum", dept: "BPI", desc: "Administrasi & kesekretariatan.", focus: "Arsip & surat-menyurat." })}
                    className="bg-white border-2 border-[#2d2a32] rounded-xl py-2.5 font-black text-xs hover:bg-[#c4ccff] transition text-[#2d2a32]"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Sekretaris Umum
                  </motion.button>
                  <motion.button
                    onClick={() => openMember({ name: "Bendahara Umum", role: "Bendahara Umum", dept: "BPI", desc: "Pengelolaan keuangan himpunan.", focus: "Budgeting & transparansi." })}
                    className="bg-white border-2 border-[#2d2a32] rounded-xl py-2.5 font-black text-xs hover:bg-[#ff9ebb] transition text-[#2d2a32]"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Bendahara Umum
                  </motion.button>
                </div>
              </div>
            </div>
            <div className="flex justify-center my-3"><span className="w-0.5 h-6 bg-[#2d2a32]" /></div>
            <div className="flex justify-center"><span className="w-[80%] h-0.5 bg-[#2d2a32]" /></div>
            <div className="grid grid-cols-7 gap-2 mt-3">
              {peopleData.departments.map((dept) => (
                <div key={dept.id} className="flex flex-col items-center">
                  <span className="w-0.5 h-4 bg-[#2d2a32]" />
                  <motion.button
                    onClick={() => setActiveDept(activeDept === dept.id ? null : dept.id)}
                    className={`w-full border-2 border-[#2d2a32] rounded-xl px-1 py-3 text-center shadow-[2px_2px_0_#2d2a32] hover:-translate-y-0.5 transition ${activeDept === dept.id ? "bg-[#2d2a32] text-white" : "bg-white hover:bg-[#fff9c4]"}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-base">{dept.icon}</span>
                    <p className="syne-black text-[10px] leading-tight mt-1">{dept.short}</p>
                    <p className="font-black text-[7px] mt-1 opacity-60">{activeDept === dept.id ? "TUTUP ✕" : "LIHAT ↓"}</p>
                  </motion.button>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-6 text-center text-xs font-black tracking-wide text-[#2d2a32]/40">✦ KLIK KARTU UNTUK EXPAND DETAIL DEPARTEMEN</p>
        </CreativeCard>
      </section>

      {/* Departments Detail — Creative Cards */}
      <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14 w-full">
        <div className="grid gap-5">
          {peopleData.departments.map((dept) => (
            <DeptCard
              key={dept.id}
              name={dept.name}
              short={dept.short}
              desc={dept.desc}
              icon={dept.icon}
              color={dept.color}
              kadep={dept.kadep}
              wakadep={dept.wakadep}
              index={peopleData.departments.indexOf(dept)}
              isActive={activeDept === dept.id}
              onClick={() => setActiveDept(activeDept === dept.id ? null : dept.id)}
            />
          ))}
        </div>
      </section>

      <MemberModal open={open} onClose={() => setOpen(false)} member={selected} />
    </div>
  );
}