
export default function Packages() {
    const packages = [
        {
            title: "Hunza Premium Tour",
            duration: "5 Days / 4 Nights",
            price: "PKR 35,000",
            features: [
                "Luxury Transport",
                "Hotel Stay",
                "Tour Guide",
                "Photography Spots",
            ],
        },
        {
            title: "Skardu Adventure",
            duration: "7 Days / 6 Nights",
            price: "PKR 55,000",
            features: [
                "Luxury Transport",
                "Hotel Stay",
                "Breakfast Included",
                "Adventure Activities",
            ],
        },
        {
            title: "Fairy Meadows Tour",
            duration: "6 Days / 5 Nights",
            price: "PKR 45,000",
            features: [
                "Transport",
                "Camping",
                "Guide",
                "Photography",
            ],
        },
    ];

    return (
        <section
            id="packages"
            className="py-24 bg-gray-100"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">

                    <p className="text-orange-500 font-bold uppercase tracking-[5px] mb-4">
                        Tour Packages
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Choose Your Adventure
                    </h2>

                </div>

                {/* Package Cards */}
                <div className="grid lg:grid-cols-3 gap-8">

                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className="
                bg-white
                rounded-3xl
                shadow-xl
                p-8
                hover:-translate-y-2
                hover:shadow-2xl
                transition
              "
                        >
                            <h3 className="text-3xl font-bold mb-4">
                                {pkg.title}
                            </h3>

                            <p className="text-gray-500 mb-6">
                                {pkg.duration}
                            </p>

                            <div className="text-4xl font-bold text-orange-500 mb-8">
                                {pkg.price}
                            </div>

                            <ul className="space-y-4 mb-8">
                                {pkg.features.map((item, i) => (
                                    <li key={i}>
                                        ✓ {item}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className="
                  block
                  text-center
                  bg-orange-500
                  hover:bg-orange-600
                  text-white
                  py-4
                  rounded-full
                  font-bold
                  transition
                "
                            >
                                Book Now
                            </a>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

