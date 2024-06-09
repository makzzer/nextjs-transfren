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
          <div className="grid md:px-12 px-6 grid-cols-1 lg:grid-cols-3 md:gap-4 gap-8 pt-4 ">
            <Card
              title="Audi Q3"
              description="Ralizamos rectificación de discos y cambio de pastillas en este lujoso modelo alemán."
              imageUrl="/111.jpeg"
            />
            <Card
              title="Peugeot 208 Feline"
              description="Realizamos una rectificación de discos delanteros en uno de los autos mas vendidos de Argentina."
              imageUrl="/444.jpeg"
            />
            <Card
              title="Ford Americana"
              description="Relizamos una restauración en este clásico americano, reparaciones y cambio de pastillas."
              imageUrl="/222.jpeg"
            />
          </div>
        </div>

        {/* Integración del componente SocialCard */}
        <div className="flex lg:flex-row flex-col justify-center mt-10">
          <SocialCard url="https://www.instagram.com/service.frenos/?igsh=MTRhb290eGxpYnQydA%3D%3D" />
          <SocialCard url="https://api.whatsapp.com/send?phone=541121544527" />
          <SocialCard url="https://www.facebook.com/transfren?mibextid=qi2Omg&rdid=L0xsNjGd9yPf7SmG&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FVx6BndLLvW3mNRh1%2F%3Fmibextid%3Dqi2Omg" />
          {/*<SocialCard url="https://www.youtube.com/tu-canal-de-youtube" />*/}
          {/*<SocialCard url="https://web.telegram.org/" />*/}
        </div>
      </main>
    </>
  );
}
