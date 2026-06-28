
export default function Footer() {
    return (
        <footer className="bg-black text-white py-16">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid md:grid-cols-4 gap-10">

                    {/* Company */}
                    <div>
                        <h2 className="text-3xl font-bold mb-6">
                            Travel With
                            <span className="text-orange-400">
                                {" "}Haider
                            </span>
                        </h2>

                        <p className="text-gray-400 leading-7">
                            Explore the beauty of Northern Pakistan
                            with professional tour management,
                            luxury transport and unforgettable
                            travel experiences.
                        </p>
                    </div>

                    {/* Destinations */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">
                            Destinations
                        </h3>

                        <ul className="space-y-3 text-gray-400">
                            <li>Hunza Valley</li>
                            <li>Skardu</li>
                            <li>Fairy Meadows</li>
                            <li>Naran Kaghan</li>
                            <li>Deosai Plains</li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">
                            Services
                        </h3>

                        <ul className="space-y-3 text-gray-400">
                            <li>Family Tours</li>
                            <li>Group Tours</li>
                            <li>Private Tours</li>
                            <li>Corporate Tours</li>
                            <li>Adventure Tours</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">
                            Contact
                        </h3>

                        <ul className="space-y-3 text-gray-400">
                            <li>📞 +92 XXX XXXXXXX</li>
                            <li>📧 travelwithhaider@gmail.com</li>
                            <li>📍 Islamabad, Pakistan</li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center">

                    <p className="text-gray-500">
                        © 2026 Travel With Haider.
                        All Rights Reserved.
                    </p>

                </div>

            </div>
        </footer>
    );
}

