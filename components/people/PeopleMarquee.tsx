"use client";

import { DEPARTMENTS } from "@/data/organization";
import Marquee from "@/components/shared/Marquee";

export default function PeopleMarquee() {
  const items = DEPARTMENTS.map((d) => d.shortName);
  // duration 30s = kecepatan elegan, bisa disesuaikan
  return <Marquee items={items} duration={30} />;
}
