export default function CalendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-24 pb-24">
      {children}
    </main>
  );
} 