'use client';

import CounterSection from '@/components/home/Data';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <main className="text-gray-800 bg-white">
            {/* Full-width Image Section */}
            <section className="relative w-full">
                <img
                    src="/Email-cloud-solution-services-businessmail-partner-google-workspace.png"
                    alt="Email Cloud Solution"
                    className="w-full h-auto object-cover"
                />
            </section>

            {/* About Us Content */}
            <section className="py-16 px-6 sm:px-12 max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">
                    About <span className="text-blue-600">Us</span>
                </h2>

                <p className="text-gray-800 leading-7 mb-6">
                    <span className="text-green-600 font-medium">Skynetiks Technologies: </span>{" "}
                    <span className="font-semibold text-gray-700">
                        A SAP, Google, Acronis & Microsoft partner
                    </span>{" "}
                    was founded in year 2003 with an objective of{" "}
                    <span className="font-semibold text-gray-700">IT consulting & custom software development</span>. Later, realizing the
                    importance of internet technology future, Skynetiks Technologies associated with Times Internet Limited for
                    distribution and delivery of the mailing solution meramail.com
                </p>

                <p className="text-gray-700 leading-7">
                    A name reckoned with for its reliability and dependability, Skynetiks Technologies is known for impeccable
                    technical expertise and delivering capabilities.{" "}
                    <span className="font-semibold text-gray-700">
                        A great renewal ratio 87% is an evident achievement. In the span of two decade, we have served more than
                        5k satisfied customers
                    </span>{" "}
                    from all the segments of business. Majority of these are SME's and medium enterprises. The industry verticals
                    served are pharma, automobile, garments, healthcare, infrastructure, event management, discrete manufacturing.
                </p>
            </section>

            {/* Counter Section */}
            <CounterSection />

        </main>
    );
}