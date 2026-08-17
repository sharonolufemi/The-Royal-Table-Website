import { RESERVE_URL } from "../constants";

type ReserveButtonProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function ReserveButton({
  className = "",
  children = "Reserve",
}: ReserveButtonProps) {
  return (
    <a
      href={RESERVE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`font-helvetica inline-flex items-center justify-center whitespace-nowrap rounded-md border border-[rgba(237,204,246,0.2)] bg-main-purple text-white transition-colors hover:bg-cta-hover hover:text-main-purple active:scale-95 active:bg-cta-hover active:text-main-purple md:border-0 ${className}`}
    >
      {children}
    </a>
  );
}
