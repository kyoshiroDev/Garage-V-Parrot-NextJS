export interface ChildrenInterface {
  children: React.ReactNode
}

export interface NosPrestationsInterface {
  id: number
  prestation: string
  image: string
}

export interface PrestationsInterface {
  title: string
  textSup: string
  imageSrc: string
  imageAlt: string
  textInf: string
}

export interface MenuInterface {
  id: number
  name: string
  href: string
}

export interface AvisClientInterface {
  id: number
  name: string
  note: number
  content: string
}

export interface VehiculeInterface {
  image: string
  marque: string
  model: string
  kilometrages: number
  portes: number
  puissance: number
  annee: number
  energie: string
  prix: number
}
