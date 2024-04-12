import { Reservation } from "../reservation/Reservation";
import { Property } from "../property/Property";

export type CommonFacility = {
  availabilities?: Array<Reservation>;
  createdAt: Date;
  facilityType?: "sky_lounge" | "spa_fitness" | "sauna" | null;
  id: string;
  property?: Property | null;
  status: string | null;
  updatedAt: Date;
};
