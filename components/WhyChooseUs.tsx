
export default function WhyChooseUs() {
    const features = [
        {
            icon: "🏔️",
            title: "Expert Guides",
            desc: "Professional local tour guides.",
        },
        {
            icon: "🚌",
            title: "Luxury Transport",
            desc: "Comfortable buses and transport.",
        },
        {
            icon: "🏨",
            title: "Premium Hotels",
            desc: "Best accommodation facilities.",
        },
        {
            icon: "🛡️",
            title: "Safe Travel",
            desc: "Your safety is our priority.",
        },
        {
            icon: "📷",
            title: "Photography Spots",
            desc: "Visit the best scenic locations.",
        },
        {
            icon: "📞",
            title: "24/7 Support",
            desc: "Always available for assistance.",
        },
    ];

    return (
        <section className="py-24 bg-[#0B1F3A]">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <p className="text-orange-400 font-bold uppercase tracking-[5px] mb-4">
                        Why Choose Us
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Why Travel With Haider?
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white/10 rounded-3xl p-8"
                        >
                            <div className="text-5xl mb-6">
                                {feature.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4">
                                {feature.title}
                            </h3>

                            <p className="text-gray-300">
                                {feature.desc}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

