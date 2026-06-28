
export default function ContactSection() {
    return (
        <section
            id="contact"
            className="py-24 bg-[#0B1F3A]"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">

                    <p className="text-orange-400 font-bold uppercase tracking-[5px] mb-4">
                        Contact Us
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Book Your Dream Tour
                    </h2>

                </div>

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Left Side */}
                    <div className="bg-white rounded-3xl p-10">

                        <h3 className="text-3xl font-bold mb-8">
                            Travel Information
                        </h3>

                        <div className="space-y-6">

                            <div>
                                <h4 className="font-bold text-lg">
                                    📍 Office
                                </h4>
                                <p className="text-gray-600">
                                    Islamabad, Pakistan
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-lg">
                                    📞 Phone
                                </h4>
                                <p className="text-gray-600">
                                    +92 XXX XXXXXXX
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-lg">
                                    📧 Email
                                </h4>
                                <p className="text-gray-600">
                                    travelwithhaider@gmail.com
                                </p>
                            </div>

                            <div>
                                <h4 className="font-bold text-lg">
                                    🚐 Services
                                </h4>
                                <p className="text-gray-600">
                                    Family Tours • Group Tours • Private Tours
                                </p>
                            </div>

                        </div>

                        <a
                            href="https://wa.me/923000000000"
                            target="_blank"
                            className="
                mt-10
                inline-block
                bg-green-500
                hover:bg-green-600
                text-white
                px-8
                py-4
                rounded-full
                font-bold
                transition
              "
                        >
                            WhatsApp Booking
                        </a>

                    </div>

                    {/* Right Side Form */}
                    <div className="bg-white rounded-3xl p-10">

                        <form className="space-y-6">

                            <input
                                type="text"
                                placeholder="Full Name"
                                className="
                  w-full
                  p-4
                  border
                  rounded-xl
                  outline-none
                "
                            />

                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="
                  w-full
                  p-4
                  border
                  rounded-xl
                  outline-none
                "
                            />

                            <input
                                type="text"
                                placeholder="Destination"
                                className="
                  w-full
                  p-4
                  border
                  rounded-xl
                  outline-none
                "
                            />

                            <input
                                type="number"
                                placeholder="Number of Travelers"
                                className="
                  w-full
                  p-4
                  border
                  rounded-xl
                  outline-none
                "
                            />

                            <textarea
                                rows={5}
                                placeholder="Message"
                                className="
                  w-full
                  p-4
                  border
                  rounded-xl
                  outline-none
                "
                            />

                            <button
                                className="
                  w-full
                  bg-orange-500
                  hover:bg-orange-600
                  text-white
                  py-4
                  rounded-full
                  font-bold
                  transition
                "
                            >
                                Book Your Tour
                            </button>

                        </form>

                    </div>

                </div>

            </div>
        </section>
    );
}

