import Link from "next/link";

interface FooterLink {
  label: string;
  url: string;
}

interface Props {
  mainLink: FooterLink;
  subLinks: FooterLink[];
}

export const FooterColumn: React.FC<Props> = ({ mainLink, subLinks }) => {
  return (
    <div className="flex flex-col gap-2 text-xl">
      <Link className="font-mono font-semibold" href={mainLink.url}>
        {mainLink.label}
      </Link>
      {subLinks.map((link, index) => (
        <Link className="" href={link.url} key={index}>
          {link.label}
        </Link>
      ))}
    </div>
  );
};
