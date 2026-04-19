import Image from "next/image";
import Link from "next/link";
import bg from "@/public/bg.jpg";

export default function Page() {
  return (
    <div className="mt-24">
      <Image
        fill
        placeholder="blur"
        quality={80}
        className="object-cover object-top"
        src={bg}
        alt="HotelBytezz stay in Dhaka, Bangladesh"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-8xl text-primary-50 mb-10 tracking-tight font-normal relative">
          Welcome to paradise.
        </h1>
        <p className="sr-only">
          Explore HotelBytezz by Alamin (CodeWithAlamin). Find unique
          destinations, thrilling activities, and plan your next hotel getaway.
        </p>
        <Link
          href="/rooms"
          className="bg-accent-500 px-4 py-4 md:px-8 md:py-6 text-primary-900 text-lg font-semibold hover:bg-accent-600 transition-all relative"
        >
          Explore luxury rooms
        </Link>
      </div>
    </div>
  );
}
