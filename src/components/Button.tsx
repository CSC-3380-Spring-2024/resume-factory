import Link from "next/link";

interface Props {
  label: string;
}

export const Button: React.FC<Props> = ({ label }) => {
  return (
    <Link
      href="/"
      className="rounded border-2 border-accent bg-accent px-5 py-3 font-mono text-xl text-bg shadow transition-colors hover:bg-bg hover:text-accent"
    >
      {label}
    </Link>
  );
};
