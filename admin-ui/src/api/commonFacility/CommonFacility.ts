import { Reservation } from "../reservation/Reservation";

export type CommonFacility = {
  availabilities?: Array<Reservation>;
  createdAt: Date;
  facilityType?: "sky_lounge" | "spa_fitness" | "sauna" | null;
  id: string;
  updatedAt: Date;
};
