import * as Accordion from "@radix-ui/react-accordion";
import { LuChevronDown } from "react-icons/lu";

interface Props {
  question: string;
  answer: string;
  value: string;
}

export const FAQItem: React.FC<Props> = ({ question, answer, value }) => {
  return (
    <Accordion.Item
      className="mx-auto mb-5 w-[908px] rounded bg-bg p-5 text-xl shadow-card"
      value={value}
    >
      <Accordion.Header className="">
        <Accordion.Trigger className="flex w-full flex-row items-center justify-between font-mono">
          {question} <LuChevronDown size="25px" className="text-accent" />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="mt-4 leading-7 text-fg-light">
        {answer}
      </Accordion.Content>
    </Accordion.Item>
  );
};
