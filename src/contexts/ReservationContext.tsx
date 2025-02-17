'use client';
import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';
import { DateRange } from 'react-day-picker';

interface IReservationCtx {
  range: DateRange | undefined;
  setRange: Dispatch<SetStateAction<DateRange | undefined>>;
  resetRange: () => void;
}

const initialState = {
  from: undefined,
  to: undefined,
};

const ReservationContext = createContext<IReservationCtx>({
  range: {
    from: undefined,
    to: undefined,
  },
  setRange: () => {},
  resetRange: () => {},
});

export function ReservationProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [range, setRange] = useState<DateRange | undefined>(initialState);

  const resetRange = () => setRange(initialState);
  const ctxValue = {
    range,
    setRange,
    resetRange,
  };

  return (
    <ReservationContext.Provider value={ctxValue}>{children}</ReservationContext.Provider>
  );
}

export function useReservationCtx() {
  const ctx = useContext(ReservationContext);

  if (!ctx) throw new Error('context used outside its provider');

  return ctx;
}
