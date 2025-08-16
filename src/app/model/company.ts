export class Company {
  ruc!: string;
  name!: string;
  direccion!: {
    city: string;
    principalStreet: string;
    secondaryStreet: string;
    code: string;
  };
}