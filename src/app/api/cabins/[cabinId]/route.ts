import { getBookedDatesByCabinId, getCabin } from '@/lib/data-service';

export async function GET(requst: Request, { params }: { params: { cabinId: string } }) {
  const { cabinId } = await params;

  try {
    const [cabin, bookingDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);

    return Response.json({ cabin, bookingDates });
  } catch {
    return Response.json({ message: 'Error getting cabins data' });
  }
}
