import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQ() {
  return (
    <section className="py-24 bg-background max-w-3xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-heading mb-4">Common Questions</h2>
        <p className="text-muted-foreground font-serif">
          Understanding the Bellwether Framework.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-heading text-lg">Is Bellwether a publisher?</AccordionTrigger>
          <AccordionContent className="font-serif text-muted-foreground leading-relaxed">
            No. We are the infrastructure that powers publishers and guides authors. We do not publish books directly; we provide the technology, guidance, and tools to help you succeed on your chosen path.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="font-heading text-lg">How does the Acquisition Bot work?</AccordionTrigger>
          <AccordionContent className="font-serif text-muted-foreground leading-relaxed">
            Unlike standard forms, our bot engages you in a conversation. It uses empathetic AI to understand the nuance of your story and prepares a structured profile that industry professionals can actually use.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="font-heading text-lg">Who owns my data and work?</AccordionTrigger>
          <AccordionContent className="font-serif text-muted-foreground leading-relaxed">
            You do. Always. Bellwether is built on a foundation of author advocacy. All interactions, data, and manuscripts remain your intellectual property. We prioritize privacy above all.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="font-heading text-lg">Which publishing path is right for me?</AccordionTrigger>
          <AccordionContent className="font-serif text-muted-foreground leading-relaxed">
            That depends on your goals. Our "Pathway Advisor" helps diagnose your specific needs—whether it's the global reach of the Big Five, the speed of self-publishing, or the partnership of a hybrid model.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
