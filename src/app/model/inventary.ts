import { Branch } from "./Branch";
import { Company } from "./company";

export class Inventory {
  id!: string;
  company!: Company;
  branches!: Branch[];
}