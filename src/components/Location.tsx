import { MapPin, Phone, Globe } from "lucide-react";

export default function Location() {
  return (
    <section id="location" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-serif text-deep-navy mb-6">Discover Sefrou</h2>
          <p className="text-deep-navy/70 mb-8 leading-relaxed text-lg">
            Located at the edge of the Middle Atlas mountains, Sefrou is a city rich in history and culture. Known for its ancient medina, beautiful waterfalls, and the annual Cherry Festival, it offers a peaceful alternative to the bustling streets of nearby Fes.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-rose-accent shrink-0 mt-1" />
              <div>
                <h4 className="font-medium text-deep-navy">Address</h4>
                <p className="text-deep-navy/70">304 Derb el Miter<br />Sefrou 31000, Morocco</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-rose-accent shrink-0 mt-1" />
              <div>
                <h4 className="font-medium text-deep-navy">Phone</h4>
                <p className="text-deep-navy/70">05 35 66 11 16</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Globe className="w-6 h-6 text-rose-accent shrink-0 mt-1" />
              <div>
                <h4 className="font-medium text-deep-navy">Website</h4>
                <p className="text-deep-navy/70">lamaisondeslallas.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[400px] md:h-[500px] rounded-3xl overflow-hidden bg-dusty-blush/50 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.6918930089655!2d-4.8380097890389715!3d33.82871487313039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9f9bb6c0e96257%3A0x9443a13044ed06e2!2sLa%20Maison%20des%20Lallas!5e1!3m2!1sen!2sma!4v1772465627052!5m2!1sen!2sma"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="La Maison des Lallas Location"
          />
        </div>
      </div>
    </section>
  );
}
