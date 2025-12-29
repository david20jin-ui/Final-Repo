import BookingAPI from '../BookingAPI';

export function createSubmitForm(navigate) {
  return async function submitForm(formData) {
    try {
      if (typeof window !== 'undefined' && typeof window.submitAPI === 'function') {
        const ok = await window.submitAPI(formData);
        if (ok) navigate('/confirmed');
        return ok;
      }
      const res = await BookingAPI.submitBooking(formData);
      if (res && res.success) {
        navigate('/confirmed');
        return true;
      }
    } catch (err) {
      // ignore and return false
    }
    return false;
  };
}
