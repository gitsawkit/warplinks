import Card from "./components/Card"
import { links } from "./data/links"

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold">WarpLinks</h1>
      <main className="flex flex-col items-center justify-center bg-gray-900 text-white">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-10">
          {links.map((link, index) => (
            <Card key={index} title={link.title} href={link.href} description={link.description} logoUrl={link.logoUrl} />
          ))}
        </div>
      </main>
    </div>
  );
}
