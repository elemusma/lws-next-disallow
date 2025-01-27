import Image from "next/image";
import "../styles/headshot-icons.scss";
export default function HeadshotIcons() {
  return (
    <div className="w-full relative">
      <Image
        src="/assets/Design-Development-Tools.png"
        alt="headshot icons"
        // style={{ width: "100%" }}
        className="w-full h-auto rotate-animation"
        width={500}
        height={500}
      />
      <div
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        className="absolute h-1/2 w-1/2"
      >
        <Image
          src="/assets/Headshot_1.png"
          alt="headshot icons"
          fill
          className="" // Add any Tailwind or custom classes
        />
      </div>
    </div>
  );
}
