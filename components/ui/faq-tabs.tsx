"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FaqEntry {
  question: string;
  answer: string;
}

export type FaqCategories = Record<string, string>;
export type FaqData = Record<string, FaqEntry[]>;

interface FAQProps {
  title?: string;
  subtitle?: string;
  categories: FaqCategories;
  faqData: FaqData;
  className?: string;
}

// Main reusable FAQ component
export const FAQ = ({
  title = "FAQs",
  subtitle = "Frequently Asked Questions",
  categories,
  faqData,
  className,
}: FAQProps) => {
  const categoryKeys = Object.keys(categories);
  const [selectedCategory, setSelectedCategory] = useState(categoryKeys[0]);

  return (
    <section
      className={cn(
        "relative overflow-hidden px-4 py-12 text-[#FFFBEB]",
        className
      )}
    >
      <FAQHeader title={title} subtitle={subtitle} />
      <FAQTabs
        categories={categories}
        selected={selectedCategory}
        setSelected={setSelectedCategory}
      />
      <FAQList faqData={faqData} selected={selectedCategory} />
    </section>
  );
};

const FAQHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="relative z-10 flex flex-col items-center justify-center text-center">
    <span className="mb-4 bg-gradient-to-r from-[#FF7AAC] to-[#FFA6C8] bg-clip-text text-sm font-bold uppercase tracking-[0.2em] text-transparent">
      {subtitle}
    </span>
    <h2 className="mb-8 text-5xl md:text-7xl font-black uppercase tracking-tight">
      {title}
    </h2>
    <span
      aria-hidden="true"
      className="absolute -top-[350px] left-[50%] z-0 h-[500px] w-[600px] max-w-[90vw] -translate-x-[50%] rounded-full bg-gradient-to-r from-[#FF7AAC]/15 to-[#4742B8]/20 blur-3xl pointer-events-none"
    />
  </div>
);

interface FAQTabsProps {
  categories: FaqCategories;
  selected: string;
  setSelected: (key: string) => void;
}

const FAQTabs = ({ categories, selected, setSelected }: FAQTabsProps) => (
  <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 md:gap-4">
    {Object.entries(categories).map(([key, label]) => (
      <button
        key={key}
        type="button"
        onClick={() => setSelected(key)}
        className={cn(
          "relative overflow-hidden whitespace-nowrap rounded-full border px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider transition-colors duration-500 cursor-pointer",
          selected === key
            ? "border-[#FF7AAC] text-[#1A1B41]"
            : "border-white/15 bg-transparent text-[#FFFBEB]/50 hover:text-[#FFFBEB] hover:border-white/30"
        )}
      >
        <span className="relative z-10">{label as string}</span>
        <AnimatePresence>
          {selected === key && (
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.4, ease: "backIn" }}
              className="absolute inset-0 z-0 bg-gradient-to-r from-[#FF7AAC] to-[#FFA6C8]"
            />
          )}
        </AnimatePresence>
      </button>
    ))}
  </div>
);

interface FAQListProps {
  faqData: FaqData;
  selected: string;
}

const FAQList = ({ faqData, selected }: FAQListProps) => {
  // Hanya satu item yang boleh terbuka dalam satu waktu
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    setOpenIndex(0);
  }, [selected]);

  return (
  <div className="mx-auto mt-10 md:mt-12 max-w-3xl">
    <AnimatePresence mode="wait">
      {Object.entries(faqData).map(([category, questions]) => {
        if (selected === category) {
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "backIn" }}
              className="space-y-3 md:space-y-4"
            >
              {(questions as FaqEntry[]).map((faq, index) => (
                <FAQItem
                  key={index}
                  {...faq}
                  open={openIndex === index}
                  onToggle={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                />
              ))}
            </motion.div>
          );
        }
        return null;
      })}
    </AnimatePresence>
  </div>
  );
};

interface FAQItemProps extends FaqEntry {
  open: boolean;
  onToggle: () => void;
}

const FAQItem = ({ question, answer, open, onToggle }: FAQItemProps) => {
  const isOpen = open;

  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      className={cn(
        "rounded-2xl border backdrop-blur-sm transition-colors",
        isOpen
          ? "border-[#FF7AAC]/50 bg-white/[0.07]"
          : "border-white/10 bg-white/[0.03]"
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 p-5 md:p-6 text-left cursor-pointer"
      >
        <span
          className={cn(
            "text-base md:text-lg font-bold transition-colors",
            isOpen ? "text-white" : "text-[#FFFBEB]/60"
          )}
        >
          {question}
        </span>
        <motion.span
          variants={{
            open: { rotate: "45deg" },
            closed: { rotate: "0deg" },
          }}
          transition={{ duration: 0.2 }}
          className={cn(
            "shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-colors",
            isOpen
              ? "bg-[#FF7AAC] border-[#FFFBEB] text-[#1A1B41]"
              : "border-[#FFFBEB]/25 text-[#FFFBEB]/60"
          )}
        >
          <Plus className="h-4 w-4 stroke-[2.5]" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : "0px",
          marginBottom: isOpen ? "20px" : "0px",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden px-5 md:px-6"
      >
        <p className="text-sm text-[#FFFBEB]/65 leading-relaxed">{answer}</p>
      </motion.div>
    </motion.div>
  );
};
