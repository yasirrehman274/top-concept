import Image from "next/image";

type LogoProps = {
  size?: number; // default 60px
  className?: string;
};

export default function Logo({ size = 60, className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Dark/Light logo swap */}
      <Image
        src="/Logo-dark.png"
        alt="Top Concept"
        width={size}
        height={size}
        className="object-contain dark:hidden"
      />
      <Image
        src="/Logo.png"
        alt="Top Concept"
        width={size}
        height={size}
        className="object-contain hidden dark:block"
      />

      <h2 className="font-bold text-xl md:text-3xl text-gray-600 dark:text-white leading-tight">
        TOP <br /> Concept
      </h2>
    </div>
  );
}
