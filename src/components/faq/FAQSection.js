import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqDetails } from "@/lib/faq";

export default function FAQSection() {
  return (
    <div className="px-5 pt-3 pb-6">
      <Accordion
        type="single"
        collapsible
        className="w-full text-[#353535] border border-[#CBCBCB] rounded-sm"
      >
        {faqDetails.map((item) => (
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
