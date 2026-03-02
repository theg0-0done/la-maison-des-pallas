import { motion } from "motion/react";
import masterclassActivity from "../assets/masterclassActivity.mp4"
import tourActivity from "../assets/tourActivity.mp4"
import hammanActivity from "../assets/hammamActivity.mp4"

const activities = [
    {
        id: 1,
        title: "Culinary Masterclass",
        description: "Discover the secrets of authentic Moroccan cuisine with our master chef. Learn to balance spices and create iconic dishes like tagine and couscous in our riad's kitchen.",
        color: "bg-soft-beige",
        video: masterclassActivity
    },
    {
        id: 2,
        title: "Medina Guided Tour",
        description: "Lose yourself in the vibrant alleys of Sefrou's ancient medina. Our local guides will lead you through centuries of history, exploring hidden artisan workshops and bustling souks.",
        color: "bg-white",
        video: tourActivity
    },
    {
        id: 3,
        title: "Traditional Hammam",
        description: "Rejuvenate body and soul in our private hammam. Experience the ancient ritual of cleansing with black soap, eucalyptus, and a restorative rhassoul clay mask.",
        color: "bg-dusty-blush",
        video: hammanActivity
    }
];

function Card({ activity, i }: any) {
    return (
        <div className="sticky top-0 h-screen w-full flex items-center justify-center pt-24 pb-12 px-6">
            <motion.div
                initial={{ y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`relative w-full max-w-6xl mx-auto h-[78vh] lg:h-[70vh] flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-2xl ${activity.color}`}
            >
                <div className="w-full lg:w-1/2 h-1/2 lg:h-full relative overflow-hidden">
                    <video src={activity.video} autoPlay muted loop playsInline className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"></video>
                </div>
                <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex flex-col justify-center p-8 lg:p-16 border-t lg:border-t-0 lg:border-l border-deep-navy/10">
                    <h2 className="text-3xl lg:text-5xl font-serif text-deep-navy mb-6">{activity.title}</h2>
                    <p className="text-lg text-deep-navy/70 leading-relaxed mb-8">{activity.description}</p>
                    <button className="self-start uppercase tracking-widest text-sm font-medium text-rose-accent border-b border-rose-accent pb-1 hover:text-deep-navy hover:border-deep-navy transition-colors">
                        Discover More
                    </button>
                </div>
            </motion.div>
        </div>
    );
}

export default function Activities() {
    return (
        <section id="activities" className="relative w-full bg-soft-beige pb-24">
            <div className="w-full px-6 max-w-7xl mx-auto pt-32 pb-12 text-center">
                <h2 className="text-rose-accent text-sm uppercase tracking-[0.2em] font-semibold mb-6">Experiences</h2>
                <h3 className="text-4xl md:text-5xl font-serif text-deep-navy">Curated Activities</h3>
            </div>

            <div className="relative">
                {activities.map((activity, i) => (
                    <Card key={activity.id} activity={activity} i={i} />
                ))}
            </div>
        </section>
    );
}
