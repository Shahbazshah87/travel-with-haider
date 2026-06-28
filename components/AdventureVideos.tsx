
export default function AdventureVideos() {
    const videos = [
        {
            src: "/videos/bus1.mp4",
            title: "Luxury Bus Journey",
        },
        {
            src: "/videos/bus2.mp4",
            title: "Mountain Adventure",
        },
        {
            src: "/videos/bus3.mp4",
            title: "Tourist Experience",
        },
        {
            src: "/videos/bus4.mp4",
            title: "Northern Pakistan Tour",
        },
    ];

    return (
        <section
            id="videos"
            className="py-24 bg-black"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">

                    <p className="text-orange-400 font-bold uppercase tracking-[5px] mb-4">
                        Adventure Videos
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Experience The Journey
                    </h2>

                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                        Explore our unforgettable adventures through
                        cinematic travel experiences and beautiful
                        destinations of Northern Pakistan.
                    </p>

                </div>

                {/* Video Grid */}
                <div className="grid md:grid-cols-2 gap-8">

                    {videos.map((video, index) => (
                        <div
                            key={index}
                            className="
                bg-gray-900
                rounded-3xl
                overflow-hidden
                shadow-2xl
              "
                        >
                            <video
                                controls
                                className="w-full h-[350px] object-cover"
                            >
                                <source
                                    src={video.src}
                                    type="video/mp4"
                                />
                            </video>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white">
                                    {video.title}
                                </h3>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}
