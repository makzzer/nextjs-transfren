import Image from "next/image";
import SocialCard from "./Components/SocialCard"; // Importar el componente SocialCard
import React from "react";
import Card from "./Components/Card";

export default function Home() {
  return (
    <>
      <div className="transition-all duration-500 max-w-6xl mx-auto md:flex md:flex-col items-center container justify-between content-center md:px-10 ">
        <div className="md:mb-0 mb-8 w-screen">
          <Image
            className=""
            src="/lambo.jpg"
            width={1920}
            height={1080}
            alt="Foto de lamborghini"
            objectFit="cover"
            quality={100}
            priority
          />
        </div>
      </div>

      <main className="">
        <h1 className="py-4 uppercase md:mx-none text-4xl md:text-6xl md:pl-10 font-semibold text-center md:text-center mb-6">
          Nuestros clientes{" "}
        </h1>

        <div className="md:p-2 p-0md:min-w-full">
          <div className="grid px-12 grid-cols-1 md:grid-cols-3 gap-4">
            <Card
              
              title="Lamborghini Aventador"
              description="Un auto deportivo de lujo con un diseño elegante y un rendimiento increíble."
              imageUrl="/aventator.jpg"
              
            />
            <Card
              title="Ferrari LaFerrari"
              description="Un superdeportivo híbrido que combina potencia y eficiencia."
              imageUrl="/lafe.jpg"
            />
            <Card
              title="Porsche 911"
              description="El clásico Porsche 911, conocido por su manejo preciso y su estilo icónico."
              imageUrl="/porsche911.jpg"
            />
          </div>
        </div>


        {/* Integración del componente SocialCard */}
        <div className="flex md:flex-row flex-col justify-center mt-8">
          <SocialCard url="https://www.instagram.com/tu-cuenta-de-instagram" />
          <SocialCard url="https://www.facebook.com/tu-pagina-de-facebook" />
          <SocialCard url="https://www.twitch.tv/tu-canal-de-twitch" />
          <SocialCard url="https://www.youtube.com/tu-canal-de-youtube" />
        </div>
      </main>
    </>
  );
}
