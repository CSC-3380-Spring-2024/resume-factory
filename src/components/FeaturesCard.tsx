interface Props {
  title: string;
  icon: React.ReactNode;
}

export const FeaturesCard: React.FC<Props> = ({ icon, title }) => {
  return (
    <div className="group w-[209px] rounded-lg bg-bg p-6 shadow-card transition-all duration-300 ease-in-out hover:bg-accent">
      <div className="mb-4 flex flex-col items-center justify-between gap-4 transition-all group-hover:text-bg">
        {icon}
        <h3 className="max-w-fit text-center font-mono text-xl font-semibold leading-7 [text-wrap:balance]">
          {title}
        </h3>
      </div>
    </div>
  );
};
