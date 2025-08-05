import type { JSX, ReactNode } from "react";

import React from "react";

type SectionProps = {
  header: ReactNode;
  children?: ReactNode;
  centerContent?: boolean;
  headerBorder?: boolean;
}

export function Section({ children, header, centerContent, headerBorder = true }: SectionProps): JSX.Element {
  let sectionClass = "flex-1 flex flex-col gap-4";
  let headerClass = "pb-2";

  if (centerContent) {
    sectionClass = sectionClass.concat(" items-center");
  }

  if (headerBorder) {
    headerClass = headerClass.concat(" border-b border-slate-200");
  }

  return (
    <section className={sectionClass}>
      <header className={headerClass}>
        <>
          {header}
        </>
      </header>
      {children}
    </section>
  );
}
