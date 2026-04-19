import Room from "@/app/_components/Room";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getRoom, getRooms } from "@/app/_lib/data-service";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const room = await getRoom(params.roomId);

  return {
    title: `Room ${room.name}`,
  };
}

// This is for static page generation. if you have finite small amout of pages, then you can pre generate the pages so that it's not dynamic and it is fast.
// export async function generateStaticParams() {
//   const rooms = await getRooms();

//   const ids = rooms.map((room) => ({ roomId: String(room.id) }));

//   return ids;
// }

export default async function Page({ params }) {
  const room = await getRoom(params.roomId);

  const { name } = room;

  return (
    <div className="max-w-6xl mx-auto mt-0 md:mt-8">
      <Room room={room} />

      <div>
        <h2 className="text-2xl md:text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve {name} today. Pay on arrival.
        </h2>

        <Suspense fallback={<Spinner />}>
          <Reservation room={room} />
        </Suspense>
      </div>
    </div>
  );
}
