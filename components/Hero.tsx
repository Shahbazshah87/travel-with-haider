
export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen overflow-hidden pt-32"
        >
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/videos/hero.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 pt-20npm run dev
            ">
                <div className="max-w-7xl mx-auto px-6">

                    <p className="text-orange-400 font-bold uppercase tracking-[5px] mb-4">
                        Explore Northern Pakistan
                    </p>

                    <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                        Discover The Beauty
                        <br />
                        Of Pakistan
                    </h1>

                    <p className="text-gray-200 text-lg md:text-xl mt-8 max-w-2xl">
                        Travel With Haider offers unforgettable
                        adventures to Hunza, Skardu, Fairy Meadows,
                        Naran, Kashmir and the most beautiful
                        destinations of Northern Pakistan.
                    </p>

                    <div className="flex flex-wrap gap-5 mt-10">

                        <a
                            href="#packages"
                            className="
                bg-orange-500
                hover:bg-orange-600
                text-white
                px-8
                py-4
                rounded-full
                font-bold
                transition
              "
                        >
                            Explore Tours
                        </a>

                        <a
                            href="#contact"
                            className="
                border-2
                border-white
                text-white
                px-8
                py-4
                rounded-full
                font-bold
                hover:bg-white
                hover:text-black
                transition
              "
                        >
                            Book Now
                        </a>

                    </div>

                </div>
            </div>
        </section>
    );
}

