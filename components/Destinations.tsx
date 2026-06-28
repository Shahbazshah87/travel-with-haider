
export default function Destinations() {
    const destinations = [
        {
            image: "/destinations/hunza.jpg",
            title: "Hunza Valley",
            desc: "Experience the breathtaking beauty of Hunza Valley.",
        },
        {
            image: "/destinations/skardu.jpg",
            title: "Skardu",
            desc: "Explore mountains, lakes and adventure in Skardu.",
        },
        {
            image: "/destinations/fairy.jpg",
            title: "Fairy Meadows",
            desc: "Discover the magical views of Nanga Parbat.",
        },
        {
            image: "/destinations/naran.jpg",
            title: "Naran Kaghan",
            desc: "Visit Pakistan's most famous tourist destination.",
        },
        {
            image: "/destinations/deosai.jpg",
            title: "Deosai Plains",
            desc: "Experience the world's second-highest plateau.",
        },
    ];

    return (
        <section
            id="destinations"
            className="py-24 bg-white"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">

                    <p className="text-orange-500 font-bold uppercase tracking-[5px] mb-4">
                        Popular Destinations
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Explore Northern Pakistan
                    </h2>

                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {destinations.map((place, index) => (
                        <div
                            key={index}
                            className="
                bg-white
                rounded-3xl
                overflow-hidden
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-2
                transition
              "
                        >
                            <img
                                src={place.image}
                                alt={place.title}
                                className="w-full h-72 object-cover"
                            />

                            <div className="p-6">

                                <h3 className="text-2xl font-bold mb-3">
                                    {place.title}
                                </h3>

                                <p className="text-gray-600">
                                    {place.desc}
                                </p>

                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

