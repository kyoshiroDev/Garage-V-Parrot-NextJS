import { VehiculeInterface } from '@/lib/interface'


export default function FicheVehicule() {
  const vehicules: VehiculeInterface[] = [
    {
      image: '/occasions/renault-clio.jpg',
      marque: 'Renault',
      model: 'Clio',
      kilometrages: 15000,
      portes: 5,
      puissance: 75,
      annee: 2013,
      energie: 'Hybride',
      prix: 8500,
    },
  ]
  return (
    <div>
      {vehicules.map((vehicule, index) => (
        <div key={index}>

        </div>
      ))}
    </div>
  )
}
