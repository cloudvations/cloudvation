'use client';

import { useEffect, useState } from 'react';

const items = [
  ['Assess', 'Map your current estate, dependencies, risk, and cloud readiness.'],
  ['Migrate', 'Move in deliberate phases with validation at every step.'],
  ['Optimize', 'Build stronger security, visibility, reliability, and cost control.'],
];

const AUTO_ADVANCE_MS = 4000;

export function Accordion() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (isPaused || prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % items.length);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <div
      className="accordion"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      {items.map(([title, text], index) => {
        const isOpen = active === index;

        return (
          <div className={isOpen ? 'accordion-item open' : 'accordion-item'} key={title}>
            <h3>
              <button
                aria-expanded={isOpen}
                aria-controls={`panel-${index}`}
                onClick={() => setActive(index)}
              >
                <span>0{index + 1}</span>
                {title}
                <b aria-hidden="true">⌄</b>
              </button>
            </h3>
            <div id={`panel-${index}`} role="region" aria-hidden={!isOpen}>
              <p>{text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
