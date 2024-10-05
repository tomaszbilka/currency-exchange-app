export default function ExchangeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen">
      {children}
    </div>
  );
}
