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
  name?: string;
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

  constructor() {
    this.episode = new Array<string>();
    this.origin = new Origin();
    this.location = new Location();
    this.name = '';
    this.status = '';
    this.species = '';
    this.gender = '';
  }
}

export class Origin {
  name: string;
  url: string;

  constructor() {
    this.name = '';
    this.url = '';
  }
}

export class Location {
  name: string;
  url: string;

  constructor() {
    this.name = '';
    this.url = '';
  }
}
