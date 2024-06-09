import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="bg-white shadow-lg rounded-lg p-8 md:p-16">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center">Quiénes Somos</h2>
          <p className="mt-6 text-gray-600 text-center text-lg">
            Bienvenidos a nuestro taller mecánico especializado en frenos. Somos un negocio familiar atendido por padre e hijo, dedicados a ofrecer el mejor servicio y atención a nuestros clientes.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col items-center text-center">
              <Image src="/3.jpeg" alt="Padre" width={160} height={160} className="rounded-full md:min-h-[220px]"/>
              <h3 className="mt-6 text-2xl font-bold text-gray-900">Hector Diaz</h3>
              <p className="mt-2 text-gray-600">Fundador y Experto en Frenos</p>
              <p className="mt-4 text-gray-600">Con más de 30 años de experiencia en la industria, Hector es el corazón y el alma de nuestro taller.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image src="/f.jpeg" alt="Hijo" width={160} height={160} className="rounded-full md:min-h-[220px]"/>
              <h3 className="mt-6 text-2xl font-bold text-gray-900">Federico Diaz</h3>
              <p className="mt-2 text-gray-600">Mecánico y Técnico en Frenos</p>
              <p className="mt-4 text-gray-600">Fede ha seguido los pasos de su padre y aporta energía y conocimiento moderno al negocio.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;