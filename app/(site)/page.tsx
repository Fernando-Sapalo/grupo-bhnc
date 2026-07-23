import { Heading } from "@/components/common/Heading";

export default function HomePage() {
  return (
    <main className="space-y-8 p-8">
      <Heading as="h1" size="display" align="center">
        Engenharia que impulsiona o futuro.
      </Heading>

      <Heading as="h2" size="xl">
        Os Nossos Serviços
      </Heading>

      <Heading as="h3" size="lg" align="center">
        Por que Escolher a BHNC
      </Heading>

      <Heading color="white" className="bg-black p-4">
        Building Angola's Future
      </Heading>
    </main>
  );
}
