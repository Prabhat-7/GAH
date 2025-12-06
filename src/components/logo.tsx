import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex">
      <div className="w-fit">
        <Image
          src="/logo.png"
          alt="Logo"
          className="rounded-full"
          width={60}
          height={60}
        />
      </div>
      <div className="flex flex-col">
        <h1 className="font-bold text-2xl text-primary leading-none">
          Girls Accessories{" "}
        </h1>
        <p className="text-primary text-lg">hub</p>
      </div>
    </div>
  );
}
