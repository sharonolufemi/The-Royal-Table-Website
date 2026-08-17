/** Exact geometry from Figma's radix-icons:dot-filled export (bullet-list marker). */
export function DotIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      aria-hidden="true"
    >
      <rect width="15" height="15" fill="white" />
      <path
        d="M7.5 5.125C8.12989 5.125 8.73398 5.37522 9.17938 5.82062C9.62478 6.26602 9.875 6.87011 9.875 7.5C9.875 8.12989 9.62478 8.73398 9.17938 9.17938C8.73398 9.62478 8.12989 9.875 7.5 9.875C6.87011 9.875 6.26602 9.62478 5.82062 9.17938C5.37522 8.73398 5.125 8.12989 5.125 7.5C5.125 6.87011 5.37522 6.26602 5.82062 5.82062C6.26602 5.37522 6.87011 5.125 7.5 5.125Z"
        fill="#8702AB"
      />
    </svg>
  );
}
