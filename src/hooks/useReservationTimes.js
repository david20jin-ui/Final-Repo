import { useContext } from 'react';
import { ReservationContext } from '../context/ReservationContext';

export default function useReservationTimes() {
  const { reserve } = useContext(ReservationContext);
  return { reserve };
}
