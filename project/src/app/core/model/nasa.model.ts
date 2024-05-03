export interface AsteroidModel {
  id: string,
  name: string,
  englishName: string,
  isPlanet: true,
  moons: [
    {
      moon: string,
      rel: string
    }
  ],
  semimajorAxis: 0,
  perihelion: 0,
  aphelion: 0,
  eccentricity: 0,
  inclination: 0,
  mass: {
    massValue: 0,
    massExponent: 0
  },
}

export interface BodiesModel {
  bodies: AsteroidModel[];
}
