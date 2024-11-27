import Prestations from "@/app/components/Prestations/Page";


export default function Mecanique() {
  return (
    <div className="flex flex-col justify-arround items-center gap-20 mt-10">
      <h1 className="text-4xl text-center text-garage-red font-semibold">
        Entretien du véhicule
      </h1>
      <Prestations />
    </div>
  )
}
