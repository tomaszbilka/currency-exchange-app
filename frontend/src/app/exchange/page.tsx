import Exchange from "../components/Exchange";
import RedirectButton from "../components/RedirectButton";

export default function ExchangePage() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 max-w-[400px]">
      <h2 className="text-3xl mb-4">Exchange page</h2>
      <Exchange />
      <div className="absolute left-8 top-8">
        <RedirectButton />
      </div>
    </div>
  );
}
