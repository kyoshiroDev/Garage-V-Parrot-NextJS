'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { radjhani } from '../../fonts/fonts.js'

export default function QuiSommeNous() {
  return (
    <section className="max-w-full md:my-[150px]">
      {/* Image */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-20 lg:gap-0 m-auto mt-16 w-full md:max-w-[1600px]">
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <Image
            src={'/Home/qui-somme-nous.png'}
            alt={'mécanicien avec les bras croiser'}
            width={150}
            height={150}
            className="rounded-full aspect-auto w-[200px] h-[200px] lg:w-[500px] lg:h-[500px]"
            priority={true}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4, ease: 'easeInOut' }}
        >
          {/* Title + content */}
          <h1
            className={`text-center mb-5 font-semibold text-3xl text-garage-red ${radjhani.className}`}
          >
            Qui-sommes-nous !
          </h1>
          <p
            className={`max-w-[400px] md:min-w-[600px] md:ml-20 leading-relaxed p-5`}
          >
            Fort de ses 15 années d’expérience dans le domaine de la réparation
            automobile, Vincent Parrot a décidé en 2021 de concrétiser son rêve
            entrepreneurial en ouvrant un garage à Toulouse. Ce projet est né de
            sa volonté de proposer aux Toulousains un lieu de confiance où ils
            peuvent non seulement faire entretenir leur véhicule avec soin, mais
            aussi acheter des voitures d’occasion soigneusement sélectionnées. À
            travers son garage, Vincent Parrot met un point d’honneur à offrir
            un service personnalisé et de qualité, où chaque client peut se
            sentir rassuré quant à l’expertise et à l'intégrité des services
            proposés. Son équipe, composée de professionnels qualifiés, s'engage
            à répondre aux besoins spécifiques de chaque véhicule, tout en
            garantissant une transparence totale dans les réparations et
            l'entretien. Le garage est également un acteur local engagé,
            soucieux de contribuer à la mobilité durable en proposant des
            véhicules d'occasion en excellent état, permettant à ses clients de
            trouver la voiture qui correspond à leurs attentes, sans compromis
            sur la qualité.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
