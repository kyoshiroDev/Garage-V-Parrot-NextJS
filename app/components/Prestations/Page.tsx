import Image from 'next/image'

export default function Prestations() {
  return (
    <div className="flex flex-col justify-items-end items-center max-w-[900px] m-auto gap-10 border-solid border-2 border-slate-200 rounded-xl p-5 ">
      <h2 className="border-none text-2xl p-0">Révision voiture</h2>
      <p>
        La révision de voiture intervient tous les 15 à 20 000 kilomètres, elle
        est obligatoire à l’entretien de votre véhicule. Chez V.PARROT, nous
        sommes experts de la révision constructeur. Celle-ci permet d’assurer le
        fonctionnement de votre véhicule et de garantir votre sécurité tout en
        préservant la Garantie Constructeur de votre voiture.
      </p>
      <Image
        src="/Entretien-véhicule/révision-voiture.jpeg"
        alt="révision d'un véhicule"
        width={700}
        height={100}
        className="rounded-2xl aspect-auto w-auto h-auto"
      />
      <p>
        Nos techniciens respectent votre plan d’entretien à la lettre et
        proposent plusieurs forfaits incluant la vidange, le remplacement des
        filtres à air ou encore le diagnostic de la batterie. Au total, nous
        contrôlons jusqu’à 135 points pour fournir un entretien mécanique
        optimal et adapté aux besoins de votre véhicule.
      </p>
      <div className="flex flex-col justify-center items-center border border-garage-red p-5 rounded-3xl">
        <p>CONTACT</p>
        <p>Par téléphone: 06.85.97.42.35</p>
        <p>
          ou via nôtre{' '}
          <span className="text-garage-red hover:text-garage-red-hover cursor-pointer">
            formulaire
          </span>
        </p>
      </div>
    </div>
  )
}
