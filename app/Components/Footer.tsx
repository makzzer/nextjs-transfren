const Footer: React.FC = () => {
    return (
      <footer className="bg-white text-dark pb-8 pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700">
        <div className="flex mt-4 items-center justify-center md:col-span-1">
        <span className="font-semibold text-4xl text-black">
                <span className="text-red-600">T</span>ransfren.</span>
              
            </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col items-center justify-center">
            <p className="text-sm text-center">&copy; {new Date().getFullYear()} Todos los derechos reservados</p>
            <p className="text-sm text-center">Powered by nextJs  <span role="img" aria-label="Love"></span></p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  