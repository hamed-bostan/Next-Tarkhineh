import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ContentSection({ details }) {
  return (
    <Accordion type="single" collapsible className="w-full text-[#353535]">
      {details.map((item) => (
        <AccordionItem value={item.id} className="px-4 py-2" key={item.id}>
          <AccordionTrigger className="hover:no-underline p-0 text-start">
            {item.title}
          </AccordionTrigger>
          <AccordionContent>{item.information}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
