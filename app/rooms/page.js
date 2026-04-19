import { Suspense } from "react";
import RoomList from "../_components/RoomList";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";

export const revalidate = 0;

export const metadata = {
  title: "Rooms",
};

export default function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? "all";

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Rooms
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious rooms, located in the heart of Dhaka, Bangladesh.
        Imagine waking up to a peaceful stay in the city, spending your days
        exploring local culture, or just relaxing in your private retreat after
        a busy day. Enjoy warm hospitality, comfort, and a calm home away from
        home. The perfect spot for a peaceful city vacation. Welcome to
        paradise.
      </p>

      <div className="flex justify-end mb-8">
        <Filter />
      </div>

      <Suspense fallback={<Spinner />} key={filter}>
        <RoomList filter={filter} />
      </Suspense>
    </div>
  );
}
