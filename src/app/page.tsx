import Card from "./components/Card"
import { links } from "./data/links"
import { profile } from "./data/profile";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-6 pt-12 pb-0 xl:p-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col xl:flex-row items-center justify-center bg-secondary">
        <div>
          <div className="p-10 gap-4">
            <Image src={profile.profilePicture} alt={profile.firstName + " " + profile.lastName} width={184} height={184} className="rounded-full border-solid border-2 border-primary"/>
            <h1 className="text-4xl font-bold pt-5 xl:pt-10">{profile.firstName} {profile.lastName}</h1>
            <p className="text-xl text-primary">{profile.description}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-10">
          {links.map((link, index) => (
            <Card key={index} title={link.title} href={link.href} description={link.description} logoUrl={link.logoUrl} />
          ))}
        </div>
      </main>
    </div>
  );
}
