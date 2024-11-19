import {radjhani} from "./fonts/fonts.js";
import type {Metadata} from "next";
import Image from "next/image.js";
import NosPresations from "./components/Nos-prestations/Page.tsx";
import AvisClient from "@/app/components/Avis-client/Page.tsx";
import {motion} from "motion/react"

// Metadata
export const metadata: Metadata = {
  title: "Garage V Parrot | Accueil",
  description:
    "Avec 15 ans d'expérience, Vincent Parrot a fondé un garage à Toulouse pour offrir un service de réparation automobile de confiance et des voitures d'occasion de qualité. Son équipe qualifiée s'engage à fournir un service personnalisé et transparent pour répondre aux besoins spécifiques de chaque client.",
  robots: "index, follow, noindex, nofollow, noarchive",
};

export default function Home() {
  return (
    <>
      {/* Qui sommes-nous */}
      <section className='max-w-full md:my-[150px]'>
        {/* Image */}
        <div
          className='flex flex-col lg:flex-row justify-around items-center gap-20 lg:gap-0 m-auto mt-16 max-w-[1600px]'>
          <Image
            src={"/Home/qui-somme-nous.png"}
            alt={"mécanicien avec les bras croiser"}
            width={450}
            height={450}
            className='rounded-full aspect-auto sm:min-w-[250px]'
          />
          <div>
            {/* Title + content */}
            <h1
              className={`text-center mb-5 font-semibold text-4xl text-garage-red ${radjhani.className}`}>
              Qui-sommes-nous !
            </h1>
            <p className={`max-w-[600px] leading-relaxed`}>
              Fort de ses 15 années d’expérience dans le domaine de la
              réparation automobile, Vincent Parrot a décidé en 2021 de
              concrétiser son rêve entrepreneurial en ouvrant un garage à
              Toulouse. Ce projet est né de sa volonté de proposer aux
              Toulousains un lieu de confiance où ils peuvent non seulement
              faire entretenir leur véhicule avec soin, mais aussi acheter des
              voitures d’occasion soigneusement sélectionnées. À travers son
              garage, Vincent Parrot met un point d’honneur à offrir un service
              personnalisé et de qualité, où chaque client peut se sentir
              rassuré quant à l’expertise et à l'intégrité des services
              proposés. Son équipe, composée de professionnels qualifiés,
              s'engage à répondre aux besoins spécifiques de chaque véhicule,
              tout en garantissant une transparence totale dans les réparations
              et l'entretien. Le garage est également un acteur local engagé,
              soucieux de contribuer à la mobilité durable en proposant des
              véhicules d'occasion en excellent état, permettant à ses clients
              de trouver la voiture qui correspond à leurs attentes, sans
              compromis sur la qualité.
            </p>
          </div>
        </div>
      </section>

      {/* Nos prestations */}
      <section>
        <h2
          className={`mx-auto my-20 ${radjhani.className}`}>
          Nos prestations
        </h2>
        <motion.div><NosPresations/></motion.div>
      </section>

      {/* Avis client */}
      <section>
        <AvisClient/>
      </section>
    </>
  );
}
