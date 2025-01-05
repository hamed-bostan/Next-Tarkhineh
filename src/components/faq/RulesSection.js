import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { rulesDetails } from "@/lib/faq";

export default function RulesSection() {
  return (
    <div className="px-5 pt-3 pb-6">
      <Accordion
        type="single"
        collapsible
        className="w-full text-[#353535] border border-[#CBCBCB] rounded-sm"
      >
        {rulesDetails.map((item) => (
          <AccordionItem value={item.value} className="px-4">
            <AccordionTrigger className="hover:no-underline py-2">
              {item.title}
            </AccordionTrigger>
            <AccordionContent>{item.information}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
