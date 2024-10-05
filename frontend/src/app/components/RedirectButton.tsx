"use client";
import { useRouter } from "next/navigation";

type TProps = {
  path?: string;
  title?: string;
};

const RedirectButton = ({ path = "", title = "Go to back" }: TProps) => {
  const router = useRouter();

  return (
    <button
      className="border rounded-full px-4 py-2 hover:bg-gray-200 hover:text-black"
      onClick={() => router.push(`/${path}`)}
    >
      {title}
    </button>
  );
};

export default RedirectButton;
