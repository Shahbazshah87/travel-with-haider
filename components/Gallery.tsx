
export default function Gallery() {
    const images = [
        {
            src: "/destinations/hunza.jpg",
            title: "Hunza Valley",
        },
        {
            src: "/destinations/skardu.jpg",
            title: "Skardu",
        },
        {
            src: "/destinations/fairy.jpg",
            title: "Fairy Meadows",
        },
        {
            src: "/gallery/campfire.jpg",
            title: "Camp Fire",
        },
        {
            src: "/gallery/jeep.jpg",
            title: "Jeep Adventure",
        },
        {
            src: "/gallery/bonfire.jpg",
            title: "Night Camping",
        },
    ];

    return (
        <section
            id="gallery"
            className="py-24 bg-white"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">

                    <p className="text-orange-500 font-bold uppercase tracking-[5px] mb-4">
                        Gallery
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Explore Our Adventures
                    </h2>

                </div>

                {/* Images */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="
                overflow-hidden
                rounded-3xl
                shadow-xl
                group
              "
                        >
                            <img
                                src={image.src}
                                alt={image.title}
                                className="
                  w-full
                  h-80
                  object-cover
                  group-hover:scale-110
                  transition
                  duration-500
                "
                            />

                            <div className="bg-white p-5">
                                <h3 className="text-xl font-bold">
                                    {image.title}
                                </h3>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

