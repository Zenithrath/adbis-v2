"use client";

import { DEPARTMENTS } from "@/data/organization";
import Marquee from "@/components/shared/Marquee";

export default function PeopleMarquee() {
  const items = [...DEPARTMENTS, ...DEPARTMENTS].map((d) => d.shortName);
  return <Marquee items={items} />;
}
