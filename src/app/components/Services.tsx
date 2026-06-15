// src/app/components/Services.tsx
import Image from "next/image";

const services = [
  { title: "Architecture", img: "/services/architecture.jpeg" },
  { title: "Interior Design", img: "/services/interior.jpeg" },
  { title: "Master Planning", img: "/services/masterplanning.jpeg" },
  { title: "MEP", img: "/services/mep.jpeg" },
  { title: "Project Management", img: "/services/projectmanagement.jpeg" },
  { title: "Contracts Management", img: "/services/contracts.jpeg" },
  { title: "BIM Services", img: "/services/bim.jpeg" },
  { title: "Supervision", img: "/services/supervision.jpeg" },
];

export default function Services() {
  return (
    <>
      <section className="py-16 px-6 max-w-7xl mx-auto relative">
        <h2 className="text-2xl font-bold text-center mb-10">SERVICES</h2>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Vertical Line in center */}
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-300 -translate-x-1/2" />

          {services.map((service) => (
            <div
              key={service.title}
              className="relative group overflow-hidden rounded-xl shadow hover:shadow-lg transition"
            >
              <Image
                src={service.img}
                alt={service.title}
                width={500}
                height={300}
                className="object-cover w-full h-56 group-hover:scale-105 transition duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-3 text-white text-sm font-semibold">
                {service.title}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
