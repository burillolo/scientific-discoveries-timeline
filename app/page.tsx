import Hero from "@/components/Hero";
import CardComponent from "@/components/CardComponent";
import Navbar from "@/components/Navbar";

const image_avatar = "scratchmascot.png";
const image_post = "ford.jpg";

interface InfoDescubrimientos  {
  title: string,
  description: string,
  image: string,
  avatar: string
}

const descubrimientos: InfoDescubrimientos[] = [
  {title: "Descubrimiento 1", description: "Un nuevo avance en la biotecnología.", image: image_post, avatar: image_avatar},
  {title: "Descubrimiento 2", description: "Un hallazgo espacial revolucionario.", image: image_post, avatar: image_avatar},
  {title: "Descubrimiento 3", description: "Innovaciones en inteligencia artificial.", image: image_post, avatar: image_avatar},
  {title: "Descubrimiento 4", description: "Una nueva esperanza en medicina", image: image_post, avatar: image_avatar},
  {title: "Descubrimiento 5", description: "La última novedad en transporte", image: image_post, avatar: image_avatar},
];

export default function Home() {
  return (
    <div className="bg-[#E0E0E8]">
      <Hero />
      <Navbar />
      <div className="flex flex-col gap-6 mt-10 items-center">
        {descubrimientos.map((descubrimiento, index) => (
          <CardComponent key={index} title={descubrimiento.title} imageUrl={descubrimiento.image} avatarUrl={descubrimiento.avatar} description={descubrimiento.description}/>
        ))}
      </div>
    </div>
  );
}