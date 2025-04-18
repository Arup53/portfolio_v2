import DataCard from "@/components/sub/DataCard";

type Product = {
  id: number;
  stack: string;
  info: string;
  live: string;
  github: string;
  challenges: string[];
  lackings: string[];
};

async function getProductById(id: string) {
  const products: Record<string, Product> = {
    "1": {
      id: 1,
      stack:
        "React, TailwindCSS, Flowbite, Firebase, Node.js, Express.js, JWT, MongoDB",
      info: "Reconnect Hub is a web application designed to help users reconnect with their lost or found belongings. This platform provides a convenient way for users to post items they have lost or found, and enables recovery tracking in a secure and user-friendly environment.",
      live: "https://assign-11-ef9ac.firebaseapp.com",
      github: "https://github.com/Arup53/Reconnect-Hub",
      challenges: [
        "Deploying backend in Vercel caused some issues",
        "Card alignment in frontend is a pain",
      ],
      lackings: ["DDos attack vulnerability", "Website can be more optimized"],
    },
    "2": {
      id: 2,
      stack:
        "React, TailwindCSS, Flowbite, Firebase, Node.js, Express.js,  MongoDB",
      info: "FundSpring is a dynamic crowdfunding web application designed to empower users to create, manage, and contribute to impactful campaigns. It simplifies the process of fundraising and donation, offering an intuitive platform for users to support meaningful causes",
      live: "https://for-assign.web.app",
      github: "https://github.com/Arup53/FundSpring",
      challenges: [
        "Backend cors options causes some issues",
        "Swiper js causes some responsive issues",
      ],
      lackings: ["Api is not hidden properly", "Website can be more optimized"],
    },
    "3": {
      id: 3,
      stack:
        "React, TailwindCSS, Flowbite, Firebase, Node.js, Express.js,  MongoDB",
      info: "Donate Bangladesh aims to bridge the gap between donors and volunteers by creating a platform that facilitates the donation of winter clothes to those in need across Bangladesh.",
      live: "https://ph-assign-9-arup.netlify.app",
      github: "https://github.com/Arup53/Donate-Bangladesh",
      challenges: ["Firebase authentication intialization causes some issues"],
      lackings: ["Optimization Problems"],
    },
  };

  return products[id] || { name: "Unknown Product", price: "TBD" };
}

type Props = {
  params: {
    id: string;
  };
};

export default async function ProductPage({ params }: Props) {
  const project = await getProductById(params.id);
  return (
    <div className="h-[800px] flex justify-center items-center">
      <DataCard data={project} />
    </div>
  );
}
