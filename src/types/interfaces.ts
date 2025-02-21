// NOTE: cabins
export interface ICabinType {
  id: string;
  name: string;
  image: string;
  description: string;
  discount: number;
  maxCapacity: number;
  regularPrice: number;
}

// NOTE: Settings
export interface IBookingSettings {
  breakfastPrice: number;
  createdAt: string;
  id: number;
  maxBookingLength: number;
  maxGuestsPerBooking: number;
  minBookingLength: number;
}

// NOTE: Guest
export interface IGuest {
  countryFlag: string;
  createdAt: string;
  email: string;
  fullName: string;
  id: 2;
  nationalID: string;
  nationality: string;
}

// NOTE: Bookings

export interface IBooking {
  cabinId: number | any;
  cabins: { name: string | any; image: string | any } | any;
  createdAt: string | any;
  endDate: string | any;
  guestId: number | any;
  id: number | any;
  numGuests: number | any;
  numNights: number | any;
  status: string | any;
  startDate: string | any;
  totalPrice: number | any;
}
