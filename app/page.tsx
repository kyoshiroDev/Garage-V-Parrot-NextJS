import { radjhani } from './fonts/fonts.js'
import type { Metadata } from 'next'
import MainLayout from './pages/layout.tsx'
import React from 'react'

// Metadata
export const metadata: Metadata = {
  title: 'Garage V Parrot | Accueil',
  description:
    "Avec 15 ans d'expérience, Vincent Parrot a fondé un garage à Toulouse pour offrir un service de réparation automobile de confiance et des voitures d'occasion de qualité. Son équipe qualifiée s'engage à fournir un service personnalisé et transparent pour répondre aux besoins spécifiques de chaque client.",
  robots: 'index, follow, noindex, nofollow, noarchive',
}

const QuiSommeNous = React.lazy(
  () => import('./components/Qui-somme-nous/Page.tsx')
)
const NosPrestations = React.lazy(
  () => import('./components/Nos-prestations/Page.tsx')
)
const AvisClients = React.lazy(
  () => import('@/app/components/Avis-clients/Page.tsx')
)

export default function Home() {
  return (
    <MainLayout>
      {/* Qui sommes-nous */}
      <QuiSommeNous />

      {/* Nos prestations */}
      <section>
        <h2 className={`mx-auto my-20 ${radjhani.className}`}>
          Nos prestations
        </h2>
        <NosPrestations />
      </section>

      {/* Avis client */}
      <section>
        <AvisClients />
      </section>
    </MainLayout>
  )
}
