import FicheVehicule from '@/components/FicheVehicule'

export default function Occasions() {
  return (
    <>
      <h1 className="text-center text-3xl text-garage-red font-semibold">
        Nos Occasions
      </h1>
      <div className="m-auto grid ">
        <FicheVehicule />
      </div>
    </>
  )
}
