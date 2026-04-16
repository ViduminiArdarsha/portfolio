import Link from "next/link";

export default function ProjectPageCard({ slug }: { slug: string }) {
  return (
    <Link href={`/projects/${slug}`} className="block">
      <div className="bg-gray-200 h-96 rounded-md" />
      <p className="mt-3">This Project is...</p>
    </Link>
  );
}