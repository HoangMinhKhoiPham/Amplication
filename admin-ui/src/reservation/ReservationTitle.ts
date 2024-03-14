import { Reservation as TReservation } from "../api/reservation/Reservation";

export const RESERVATION_TITLE_FIELD = "availablity";

export const ReservationTitle = (record: TReservation): string => {
  return record.availablity?.toString() || String(record.id);
};
