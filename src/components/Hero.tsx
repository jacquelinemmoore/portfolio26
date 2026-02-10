export function Hero() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center border-b border-stone-200 pt-20 ">
      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="pl-8">
          <h1 className="text-6xl md:text-8xl mb-6 text-stone-400 tracking-tight font-weight-semi-bold">
            Jacqueline Moore
          </h1>
          <p className="text-xl md:text-2xl text-stone-600 tracking-widest font-serif">
            Senior Technical Writer
          </p>
        </div>
        <div className="flex justify-center md:justify-end pr-8">
          <img 
            src="/profile.jpg"
            alt="Portrait" 
            className="w-full max-w-sm h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}