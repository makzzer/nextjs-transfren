import Image from "next/image";
import SocialCard from "./Components/SocialCard"; // Importar el componente SocialCard
import React from "react";
import Card from "./Components/Card";
import Carrousel from "./Components/Carrousel";

export default function Home() {
  return (
    <>


      <main className="bg-gray-50 mx-auto">
      <div className="overflow-hidden">
        <Carrousel />
      </div>
        <h1 className="py-4 uppercase md:mx-none text-4xl md:text-6xl md:pl-10  md:text-center mb-6 md:mt-4 font-extrabold text-gray-900 text-center">
          Nuestros clientes{" "}
        </h1>

        <div className="md:p-2 p-0 md:min-w-full">
          <div className="grid md:px-12 px-6 grid-cols-1 md:grid-cols-3 md:gap-4 gap-8 pt-4 ">
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
        <div className="flex md:flex-row flex-col justify-center mt-10">
          <SocialCard url="https://www.instagram.com/tu-cuenta-de-instagram" />
          <SocialCard url="https://www.facebook.com/tu-pagina-de-facebook" />
          <SocialCard url="https://web.whatsapp.com/" />
          <SocialCard url="https://www.youtube.com/tu-canal-de-youtube" />
          <SocialCard url="https://web.telegram.org/" />
        </div>
      </main>
    </>
  );
}
