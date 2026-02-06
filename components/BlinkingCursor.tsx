'use client';

export function BlinkingCursor({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-block ${className}`}
      style={{ animation: 'blink 1s step-end infinite' }}
    >
      _
    </span>
  );
}
