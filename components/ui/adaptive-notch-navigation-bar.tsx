"use client";

import {
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";

import { LayoutGroup, motion } from "framer-motion";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

import type {
  ButtonHTMLAttributes,
  ComponentType,
  HTMLAttributes,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
} from "react";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export type NotchPosition = "top" | "bottom";

export interface NotchItemData {
  id: string;
  label: string;
  icon?: LucideIcon | ComponentType<{ className?: string }>;
  badge?: string;
  disabled?: boolean;
}

export interface NotchWingProps {
  position?: NotchPosition;
  className?: string;
}

export function NotchLeftWing({
  position = "top",
  className,
}: NotchWingProps) {
  const isBottom = position === "bottom";

  return (
    <svg
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 20 20"
      fill="none"
      shapeRendering="geometricPrecision"
      className={cn(
        "pointer-events-none absolute right-full size-3.5 md:size-4.5 overflow-visible select-none text-black transition-colors duration-200",
        isBottom ? "bottom-0" : "top-0",
        className
      )}
    >
      <path
        d={
          isBottom
            ? "M 0 20 C 11.046 20 20 11.046 20 0 H 21 V 21 H 0 Z"
            : "M 0 0 C 11.046 0 20 8.954 20 20 H 21 V -1 H 0 Z"
        }
        fill="currentColor"
      />
    </svg>
  );
}

export function NotchRightWing({
  position = "top",
  className,
}: NotchWingProps) {
  const isBottom = position === "bottom";

  return (
    <svg
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 20 20"
      fill="none"
      shapeRendering="geometricPrecision"
      className={cn(
        "pointer-events-none absolute left-full size-3.5 md:size-4.5 overflow-visible select-none text-black transition-colors duration-200",
        isBottom ? "bottom-0" : "top-0",
        className
      )}
    >
      <path
        d={
          isBottom
            ? "M 20 20 C 8.954 20 0 11.046 0 0 H -1 V 21 H 20 Z"
            : "M 20 0 C 8.954 0 0 8.954 0 20 H -1 V -1 H 20 Z"
        }
        fill="currentColor"
      />
    </svg>
  );
}

export function NotchCornerLeftWing({
  position = "top",
  className,
}: NotchWingProps) {
  const isBottom = position === "bottom";

  return (
    <svg
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 20 20"
      fill="none"
      shapeRendering="geometricPrecision"
      className={cn(
        "pointer-events-none absolute left-0 size-3.5 md:size-4.5 overflow-visible select-none text-black transition-colors duration-200",
        isBottom ? "bottom-full" : "top-full",
        className
      )}
    >
      <path
        d={
          isBottom
            ? "M 0 20 H 20 C 8.954 20 0 11.046 0 0 V 20 Z"
            : "M 0 0 H 20 C 8.954 0 0 8.954 0 20 V 0 Z"
        }
        fill="currentColor"
      />
    </svg>
  );
}

export function NotchCornerRightWing({
  position = "top",
  className,
}: NotchWingProps) {
  const isBottom = position === "bottom";

  return (
    <svg
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 20 20"
      fill="none"
      shapeRendering="geometricPrecision"
      className={cn(
        "pointer-events-none absolute right-0 size-3.5 md:size-4.5 overflow-visible select-none text-black transition-colors duration-200",
        isBottom ? "bottom-full" : "top-full",
        className
      )}
    >
      <path
        d={
          isBottom
            ? "M 20 20 H 0 C 11.046 20 20 11.046 20 0 V 20 Z"
            : "M 20 0 H 0 C 11.046 0 20 8.954 20 20 V 0 Z"
        }
        fill="currentColor"
      />
    </svg>
  );
}

export interface NotchItemProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onSelect"> {
  id: string;
  label: string;
  isActive: boolean;
  icon?: LucideIcon | ComponentType<{ className?: string }>;
  badge?: string;
  disabled?: boolean;
  onSelect: (id: string) => void;
}

export const NotchItem = forwardRef<HTMLButtonElement, NotchItemProps>(
  (
    {
      id,
      label,
      isActive,
      icon: Icon,
      badge,
      disabled,
      className,
      onClick,
      onSelect,
      ...props
    },
    ref
  ) => {
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      if (disabled) {
        event.preventDefault();
        return;
      }

      onSelect(id);
      onClick?.(event);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        if (!disabled) {
          onSelect(id);
        }
      }
    };

    return (
      <button
        ref={ref}
        type="button"
        role="tab"
        aria-selected={isActive}
        aria-disabled={disabled}
        disabled={disabled}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={cn(
          "relative flex h-9 md:h-9.5 cursor-pointer items-center gap-2 rounded-full px-4 text-xs md:text-sm font-medium transition-colors outline-none select-none",
          "focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-1",
          isActive
            ? "font-semibold text-white"
            : "text-zinc-400 hover:text-white",
          disabled && "cursor-not-allowed pointer-events-none opacity-40",
          className
        )}
        {...props}
      >
        {isActive && (
          <motion.span
            layoutId="notch-active-pill"
            className="absolute inset-0 rounded-full bg-zinc-800 shadow-sm border border-white/10"
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
            }}
          />
        )}

        <span className="relative z-10 flex items-center gap-2">
          {Icon && (
            <Icon
              className={cn(
                "size-4 shrink-0 transition-colors",
                isActive
                  ? "text-white"
                  : "text-zinc-400 group-hover:text-white"
              )}
            />
          )}

          <span className="leading-none whitespace-nowrap">{label}</span>

          {badge && (
            <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-[10px] font-bold tracking-tight uppercase text-zinc-300">
              {badge}
            </span>
          )}
        </span>
      </button>
    );
  }
);

NotchItem.displayName = "NotchItem";

interface NotchDropdownItemProps {
  item: NotchItemData;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export function NotchDropdownItem({
  item,
  isSelected,
  onSelect,
}: NotchDropdownItemProps) {
  const Icon = item.icon;

  const handleClick = () => {
    onSelect(item.id);
  };

  return (
    <button
      type="button"
      role="option"
      aria-selected={isSelected}
      disabled={item.disabled}
      onClick={handleClick}
      className={cn(
        "flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl px-3.5 py-2.5 text-left text-sm outline-none transition-colors select-none",
        "focus-visible:ring-2 focus-visible:ring-zinc-400",
        isSelected
          ? "bg-zinc-800 font-semibold text-white"
          : "text-zinc-400 hover:bg-zinc-900 hover:text-white active:bg-zinc-800",
        item.disabled && "cursor-not-allowed pointer-events-none opacity-40"
      )}
    >
      <div className="flex items-center gap-2.5">
        {Icon && (
          <Icon
            className={cn(
              "size-4 shrink-0",
              isSelected ? "text-white" : "text-zinc-400"
            )}
          />
        )}

        <span>{item.label}</span>
      </div>

      {isSelected && (
        <Check className="size-4 text-white" />
      )}
    </button>
  );
}

export interface FloatingNotchNavbarProps {
  items: NotchItemData[];
  activeId?: string;
  defaultActiveId?: string;
  position?: NotchPosition;
  logo?: ReactNode;
  rightContent?: ReactNode;
  showLogo?: boolean;
  showRightContent?: boolean;
  onActiveChange?: (id: string) => void;
  className?: string;
}

export function AdaptiveNotchNavbar({
  items,
  activeId: controlledActiveId,
  defaultActiveId,
  position = "top",
  logo,
  rightContent,
  showLogo = true,
  showRightContent = true,
  onActiveChange,
  className,
}: FloatingNotchNavbarProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const layoutGroupId = useId();

  const [internalActiveId, setInternalActiveId] = useState<string>(
    defaultActiveId || items[0]?.id || ""
  );

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const isBottom = position === "bottom";

  const activeId =
    controlledActiveId !== undefined ? controlledActiveId : internalActiveId;

  const activeIndex = useMemo(() => {
    const index = items.findIndex((item) => item.id === activeId);
    return index >= 0 ? index : 0;
  }, [items, activeId]);

  const activeItem = items[activeIndex] || items[0];

  const handleSelect = useCallback(
    (id: string) => {
      if (controlledActiveId === undefined) {
        setInternalActiveId(id);
      }
      setIsDropdownOpen(false);
      onActiveChange?.(id);
    },
    [controlledActiveId, onActiveChange]
  );

  const handleToggleDropdown = useCallback(() => {
    setIsDropdownOpen((prev) => !prev);
  }, []);

  const handleCloseDropdown = useCallback(() => {
    setIsDropdownOpen(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <>
      {/* Mobile Backdrop */}
      <div
        aria-hidden="true"
        onClick={handleCloseDropdown}
        className={cn(
          "fixed inset-0 z-40 transition-opacity duration-200 ease-out xl:hidden",
          isDropdownOpen
            ? "pointer-events-auto bg-black/50 backdrop-blur-xs opacity-100"
            : "pointer-events-none opacity-0"
        )}
      />

      {/* 1. Desktop Left Logo Notch (Wide & Spacious) */}
      {showLogo && logo && (
        <aside
          aria-label="Brand logo notch"
          className={cn(
            "hidden xl:flex fixed left-0 z-50 h-12 px-6 select-none bg-black text-white transition-colors duration-200 shadow-md",
            isBottom
              ? "bottom-0 rounded-tr-[28px] items-end"
              : "top-0 rounded-br-[28px] items-center",
            className
          )}
        >
          <div className="flex items-center text-white">
            {logo}
          </div>
          <NotchRightWing position={position} />
          <NotchCornerLeftWing position={position} />
        </aside>
      )}

      {/* 2. Desktop Center Menu Notch (Wider Island & Larger Pills) */}
      <header
        role="tablist"
        aria-orientation="horizontal"
        className={cn(
          "hidden xl:flex fixed left-1/2 -translate-x-1/2 z-50 h-12.5 px-5 bg-black text-white select-none transition-colors duration-200 shadow-md",
          isBottom
            ? "bottom-0 rounded-t-[28px] items-end"
            : "top-0 rounded-b-[28px] items-center",
          className
        )}
      >
        <NotchLeftWing position={position} />
        <NotchRightWing position={position} />

        <LayoutGroup id={layoutGroupId}>
          <div className="flex items-center gap-1.5">
            {items.map((item) => (
              <NotchItem
                key={item.id}
                id={item.id}
                label={item.label}
                icon={item.icon}
                badge={item.badge}
                disabled={item.disabled}
                isActive={item.id === activeId}
                onSelect={handleSelect}
              />
            ))}
          </div>
        </LayoutGroup>
      </header>

      {/* 3. Desktop Right Action Notch (Wide & Spacious) */}
      {showRightContent && rightContent && (
        <aside
          aria-label="User actions notch"
          className={cn(
            "hidden xl:flex fixed right-0 z-50 h-12 px-6 select-none bg-black text-white transition-colors duration-200 shadow-md",
            isBottom
              ? "bottom-0 rounded-tl-[28px] items-end"
              : "top-0 rounded-bl-[28px] items-center",
            className
          )}
        >
          <NotchLeftWing position={position} />
          <NotchCornerRightWing position={position} />

          <div className="flex items-center text-white">
            {rightContent}
          </div>
        </aside>
      )}

      {/* ========================================================================= */}
      {/* TABLET & MOBILE VIEW (< 1280px): SINGLE COMPACT NOTCH ISLAND (Wide & Clean) */}
      {/* ========================================================================= */}
      <div
        ref={containerRef}
        className={cn(
          "xl:hidden fixed z-50 flex flex-col bg-black text-white select-none transition-colors duration-200",
          "w-auto min-w-[300px] sm:min-w-[360px] left-1/2 -translate-x-1/2 px-4.5 shadow-2xl",
          isBottom
            ? "bottom-0 rounded-t-[26px]"
            : "top-0 rounded-b-[26px]",
          className
        )}
      >
        <NotchLeftWing position={position} />
        <NotchRightWing position={position} />

        {/* Unified Horizontal Bar */}
        <div
          className={cn(
            "w-auto xl:w-max lg:w-full flex h-11 items-center justify-between gap-3 sm:gap-5",
            isBottom ? "items-center" : "items-center"
          )}
        >
          {/* Left Logo Slot */}
          {showLogo && logo && (
            <div className="flex shrink-0 items-center text-white">
              {logo}
            </div>
          )}

          {/* Center Dropdown Page Trigger */}
          <button
            type="button"
            aria-expanded={isDropdownOpen}
            aria-haspopup="listbox"
            aria-label="Toggle navigation menu"
            onClick={handleToggleDropdown}
            className="group flex h-8.5 w-full cursor-pointer items-center justify-center gap-2 rounded-full px-3 text-xs sm:text-sm font-semibold text-white outline-none transition-colors hover:bg-zinc-800/60 focus-visible:ring-2 focus-visible:ring-zinc-400"
          >
            {activeItem?.icon && (
              <activeItem.icon className="size-4 shrink-0 text-zinc-400" />
            )}

            <span className="leading-none">{activeItem?.label}</span>

            {isBottom ? (
              <ChevronUp
                className={cn(
                  "size-4 text-zinc-400 transition-transform duration-200",
                  isDropdownOpen && "rotate-180"
                )}
              />
            ) : (
              <ChevronDown
                className={cn(
                  "size-4 text-zinc-400 transition-transform duration-200",
                  isDropdownOpen && "rotate-180"
                )}
              />
            )}
          </button>

          {/* Right Action Slot */}
          {showRightContent && rightContent && (
            <div className="flex shrink-0 items-center justify-end text-white w-max">
              {rightContent}
            </div>
          )}
        </div>

        {/* Expandable Dropdown Drawer */}
        <div
          role="listbox"
          aria-label="Navigation options"
          className={cn(
            "grid transition-[grid-template-rows,opacity] duration-200 ease-out w-full",
            isDropdownOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0 pointer-events-none"
          )}
        >
          <div className="overflow-hidden">
            <div
              className={cn(
                "flex w-full flex-col gap-1 px-0.5 border-t border-zinc-800",
                isBottom ? "pb-2.5 pt-1.5" : "pt-1.5 pb-3"
              )}
            >
              {items.map((item) => (
                <NotchDropdownItem
                  key={item.id}
                  item={item}
                  isSelected={item.id === activeId}
                  onSelect={handleSelect}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export interface NotchNavProps extends HTMLAttributes<HTMLDivElement> {
  items: NotchItemData[];
  activeId?: string;
  defaultActiveId?: string;
  position?: NotchPosition;
  logo?: ReactNode;
  rightContent?: ReactNode;
  showLogo?: boolean;
  showRightContent?: boolean;
  children?: ReactNode;
  onActiveChange?: (id: string) => void;
}

export function NotchNav({
  items,
  activeId,
  defaultActiveId,
  position = "top",
  logo,
  rightContent,
  showLogo = true,
  showRightContent = true,
  children,
  onActiveChange,
  className,
  ...props
}: NotchNavProps) {
  return (
    <div
      className={cn(
        "relative min-h-screen w-full overflow-x-hidden bg-[#FAF3E8] text-[#2b2140]",
        className
      )}
      {...props}
    >
      <AdaptiveNotchNavbar
        items={items}
        activeId={activeId}
        defaultActiveId={defaultActiveId}
        position={position}
        logo={logo}
        rightContent={rightContent}
        showLogo={showLogo}
        showRightContent={showRightContent}
        onActiveChange={onActiveChange}
      />
      <div>{children}</div>
    </div>
  );
}
