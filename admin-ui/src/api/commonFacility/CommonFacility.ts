import { Reservation } from "../reservation/Reservation";

export type CommonFacility = {
  availabilities?: Array<Reservation>;
  createdAt: Date;
  facilityType?: "SkyLounge" | "SpaFitness" | null;
  id: string;
  updatedAt: Date;
};
