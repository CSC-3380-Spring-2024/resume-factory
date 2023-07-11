interface Props {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const BenefitsCard: React.FC<Props> = ({ description, icon, title }) => {
  return (
    <div className="max-w-sm rounded-lg bg-bg p-6 shadow-card">
      <div className="mb-4 flex flex-row items-end justify-between">
        <h3 className="font-mono text-2xl font-semibold leading-8 [text-wrap:balance]">
          {title}
        </h3>
        {icon}
      </div>
      <p className="text-xl leading-[1.5] text-fg-light">{description}</p>
    </div>
  );
};
