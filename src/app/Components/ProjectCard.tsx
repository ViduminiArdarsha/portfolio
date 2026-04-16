import Link from "next/link";

export default function ProjectCard({ slug }: { slug: string }) {
  return (
    <Link href={`/projects/${slug}`} className="block">
      <div className="bg-gray-200 h-96 rounded-md" />
    </Link>
  );
}
