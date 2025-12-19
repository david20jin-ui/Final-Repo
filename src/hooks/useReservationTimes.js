import { useContext } from 'react';
import { ReservationContext } from '../context/ReservationContext';

export default function useReservationTimes() {
  const { times, reserve } = useContext(ReservationContext);
  return { times, reserve };
}
