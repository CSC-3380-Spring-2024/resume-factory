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
    <div>
      <Link href={mainLink.url}>{mainLink.label}</Link>
      {subLinks.map((link) => (
        <Link href={link.url}>{link.label}</Link>
      ))}
    </div>
  );
};
