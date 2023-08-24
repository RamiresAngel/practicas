export class Character {
  info: Info;
  results: Results[];
}

export class Info {
  count: number;
  pages: number;
  next: string;
  prev: null;
}

export class Results {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode = new Array<string>();
  url: string;
  created: string
}

export class Origin {
  name: string;
  url: string
}

export class Location {
  name: string;
  url: string
}
