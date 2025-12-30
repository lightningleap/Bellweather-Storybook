import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function Inquiries() {
  return (
    <section className="py-24 bg-background max-w-3xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-heading mb-4">Inquiries</h2>
        <p className="text-muted-foreground font-serif">
          Common questions regarding our submission and publication process.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-heading text-lg">Do you accept unsolicited manuscripts?</AccordionTrigger>
          <AccordionContent className="font-serif text-muted-foreground leading-relaxed">
            Yes, during our open reading periods. We accept fiction, creative non-fiction, and poetry collections. Please refer to our submissions page for current guidelines.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="font-heading text-lg">What is your distribution network?</AccordionTrigger>
          <AccordionContent className="font-serif text-muted-foreground leading-relaxed">
            We distribute globally through major channels, but our primary focus is on independent bookstores and direct-to-consumer sales, ensuring a closer relationship with our readers.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="font-heading text-lg">Do you offer digital editions?</AccordionTrigger>
          <AccordionContent className="font-serif text-muted-foreground leading-relaxed">
            While we revere the physical book, we understand the accessibility of digital formats. All our titles are available as high-quality eBooks.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="font-heading text-lg">How can I review a Bellwether title?</AccordionTrigger>
          <AccordionContent className="font-serif text-muted-foreground leading-relaxed">
            Review copies are available for accredited members of the press and booksellers. Please contact our publicity department.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
