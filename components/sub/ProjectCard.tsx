import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  id: number;
}

const ProjectCard = ({ src, title, description, id }: Props) => {
  return (
    <div className="relative flex flex-col md:w-[33.33%] overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={500}
        height={500}
        className="w-full h-full "
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
      <Link
        className="px-4 py-2 text-center text-white"
        href={`/projectDetails/${id}`}
      >
        Details
      </Link>
    </div>
  );
};

export default ProjectCard;
