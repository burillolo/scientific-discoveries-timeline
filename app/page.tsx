import Hero from "@/components/Hero";
import CardComponent from "@/components/CardComponent";
import Navbar from "@/components/Navbar";

import { default as descubrimientos } from './data/descubrimientos';

const image_avatar = "avatar-nebrija.png";
const image_post_crispr = "crispr.jpg";
const image_post_davinci = "davinci.webp";
const image_post_llm = "ia.png";
const image_post_ondas = "ondas.jpg";
const image_post_auto = "ford.jpg";

interface InfoDescubrimientos  {
  descubrimiento: string,
  titulo: string,
  descripcion: string,
  imagen: string,
  avatar: string
}

const { crisp, ondas, llms, davinci, automovil } = descubrimientos;

const posts: InfoDescubrimientos[] = [
  {descubrimiento: "Edición genética: CRISPR-Cas9", titulo: "Un nuevo avance en la biotecnología", descripcion: crisp, imagen: image_post_crispr, avatar: image_avatar},
  {descubrimiento: "Detección de ondas gravitacionales", titulo: "Un hallazgo espacial revolucionario", descripcion: ondas, imagen: image_post_ondas, avatar: image_avatar},
  {descubrimiento: "Modelos lenguajes basados en transformadores (LLMs)", titulo: "Innovaciones en inteligencia artificial", descripcion: llms, imagen: image_post_llm, avatar: image_avatar},
  {descubrimiento: "El robot da Vinci ", titulo: "Una nueva esperanza en medicina", descripcion: davinci, imagen: image_post_davinci, avatar: image_avatar},
  {descubrimiento: "El automóvil", titulo: "El hito que cambió la forma de conocer el transporte", descripcion: automovil, imagen: image_post_auto, avatar: image_avatar},
];

export default function Home() {
  return (
    <div className="bg-[#E0E0E8]">
      <Hero />
      <Navbar />
      <div className="flex flex-col gap-6 mt-10 items-center">
        {posts.map(({descubrimiento, titulo, imagen, avatar, descripcion}, index) => (
          <CardComponent key={index} cabecera={descubrimiento} titulo={titulo} imageUrl={imagen} avatarUrl={avatar} descripcion={descripcion}/>
        ))}
      </div>
    </div>
  );
}