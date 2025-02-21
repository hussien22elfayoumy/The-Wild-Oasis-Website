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
