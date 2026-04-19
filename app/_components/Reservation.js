import { auth } from "../_lib/auth";
import { getBookedDatesByRoomId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";

async function Reservation({ room }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByRoomId(room.id),
  ]);
  const session = await auth();

  return (
    <div className="grid grid-row-2 md:grid-cols-2 border border-primary-800 min-h-[400px]">
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        room={room}
      />
      {session?.user ? (
        <ReservationForm user={session.user} room={room} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}

export default Reservation;
