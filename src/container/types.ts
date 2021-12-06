export interface Cars {
  name: string;
  id: string;
  image: string;
  price: string;
  cc: string;
  type: string;
  fuelType: string;
  speed: string;
}

export interface CarsBrand {
  name: string;
  id: string;
  image: string;
  carList: Cars[];
}
