export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: User.Address;
  phone: string;
  website: string;
  company: User.Company;
}

export namespace User {
  export type Company = {
    name: string;
    catchPhrase: string;
    bs: string;
  };

  export type Geo = {
    lat: string;
    lng: string;
  };

  export type Address = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
  };
}
