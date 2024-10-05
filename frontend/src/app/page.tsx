import Image from "next/image";
import RedirectButton from "./components/RedirectButton";

export const revalidate = 60;

export default async function Home() {
  const data = await fetch("http://localhost:5000/transactions/current-rate")
    .then((res) => res.json())
    .catch((error) => console.log(error));

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-4 items-center">
          <h3 className="text-2xl">Current EUR to PLN exchange rate:</h3>
          <div className="text-3xl">{data?.currentRate || "-"}</div>
          <RedirectButton path="exchange" title="Go to exchange" />
        </div>
      </main>
      <footer className="row-start-3 flex gap-2 flex-wrap items-center justify-center">
        Made by
        <a
          href="https://github.com/tomaszbilka"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Tomasz Bilka
        </a>
      </footer>
    </div>
  );
}
