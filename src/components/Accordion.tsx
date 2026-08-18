"use client";
import { useState } from "react";
const items = [
  ["Assess", "Map your current estate, dependencies, risk, and cloud readiness."],
  ["Migrate", "Move in deliberate phases with validation at every step."],
  ["Optimize", "Build stronger security, visibility, reliability, and cost control."],
];
export function Accordion() { const [active, setActive] = useState(0); return <div className="accordion">{items.map(([title, text], index) => { const isOpen = active === index; return <div className={isOpen ? "accordion-item open" : "accordion-item"} key={title}>
  <h3><button aria-expanded={isOpen} aria-controls={`panel-${index}`} onClick={() => setActive(isOpen ? -1 : index)}><span>0{index + 1}</span>{title}<b aria-hidden>⌄</b></button></h3>
  <div id={`panel-${index}`} hidden={!isOpen}><p>{text}</p></div>
</div>; })}</div>; }
