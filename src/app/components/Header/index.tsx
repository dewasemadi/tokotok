import { MENU } from "./models/constants";

export default function Header() {
  return (
    <header className="sticky top-0 py-6 bg-white shadow-md z-10">
      <div className="flex justify-between max-w-screen-xl m-auto px-4">
        <h1 className="font-bold text-lg text-green-500">
          Toko<span className="text-black">Tok</span>
        </h1>
        <div className="flex gap-6">
          {MENU.map((item) => (
            <a key={item.label} href={item.path}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
