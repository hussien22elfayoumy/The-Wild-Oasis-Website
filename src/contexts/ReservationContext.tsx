'use client';
import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';
import { DateRange } from 'react-day-picker';

interface IReservationCtx {
  range: DateRange | undefined;
  setRange: Dispatch<SetStateAction<DateRange | undefined>>;
}

const ReservationContext = createContext<IReservationCtx>({
  range: {
    from: undefined,
    to: undefined,
  },
  setRange: () => {},
});

export function ReservationProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [range, setRange] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });

  const ctxValue = {
    range,
    setRange,
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
