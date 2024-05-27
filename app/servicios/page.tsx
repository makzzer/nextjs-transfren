import { FC } from 'react';
import Image from 'next/image';

const services = [
  {
    title: 'Rectificaciones de Discos',
    description: 'Ofrecemos servicios de rectificación de discos para asegurar que tus frenos funcionen de manera óptima y segura.',
    image: '/recti.jpg'
  },
  {
    title: 'Venta de Insumos',
    description: 'Tenemos una amplia variedad de insumos de alta calidad para tus frenos, asegurando la máxima durabilidad y rendimiento.',
    image: '/venta.jpg'
  },
  {
    title: 'Reparaciones',
    description: 'Realizamos todo tipo de reparaciones de frenos para mantener tu vehículo en perfectas condiciones de seguridad.',
    image: '/repa.jpg'
  }
];

const Servicios: FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center">Nuestros Servicios</h2>
        <p className="mt-4 text-gray-600 text-center text-lg max-w-2xl mx-auto">
          En nuestro taller, ofrecemos una variedad de servicios para asegurar que tu vehículo esté siempre en las mejores condiciones.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="relative w-full h-48">
                <Image src={service.image} alt={service.title} layout="fill" objectFit="cover" className="rounded-t-lg"/>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-gray-900">{service.title}</h3>
              <p className="mt-4 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
