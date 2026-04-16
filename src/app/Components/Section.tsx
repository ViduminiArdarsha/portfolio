export default function Section({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="px-10 py-8 justify-center">
      {title && <h2 className="text-2xl font-semibold mb-6">{title}</h2>}
      {children}
    </section>
  );
}
