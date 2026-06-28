
export default function Testimonials() {
    const reviews = [
        {
            name: "Ahmed Khan",
            location: "Lahore",
            review:
                "Amazing experience! Hunza tour was perfectly organized. Highly recommended.",
        },
        {
            name: "Sarah Ali",
            location: "Islamabad",
            review:
                "The best travel experience of my life. Beautiful places and excellent service.",
        },
        {
            name: "Bilal Hussain",
            location: "Karachi",
            review:
                "Luxury transport, professional guides, and unforgettable memories.",
        },
        {
            name: "Ayesha Malik",
            location: "Rawalpindi",
            review:
                "Skardu trip was fantastic. Everything was managed professionally.",
        },
        {
            name: "Usman Tariq",
            location: "Faisalabad",
            review:
                "Excellent hospitality and breathtaking destinations.",
        },
        {
            name: "Fatima Noor",
            location: "Peshawar",
            review:
                "Travel With Haider made our family tour truly memorable.",
        },
    ];

    return (
        <section
            id="reviews"
            className="py-24 bg-[#F5F7FA]"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">

                    <p className="text-orange-500 font-bold uppercase tracking-[5px] mb-4">
                        Testimonials
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        What Our Travelers Say
                    </h2>

                </div>

                {/* Review Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="
                bg-white
                p-8
                rounded-3xl
                shadow-lg
                hover:shadow-2xl
                transition
              "
                        >
                            <div className="text-yellow-500 text-xl mb-4">
                                ⭐⭐⭐⭐⭐
                            </div>

                            <p className="text-gray-600 mb-6">
                                "{review.review}"
                            </p>

                            <h3 className="font-bold text-xl">
                                {review.name}
                            </h3>

                            <p className="text-gray-500">
                                {review.location}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

