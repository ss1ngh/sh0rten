import { Card, CardContent } from "@/components/ui/card";
import { Link as LinkIcon, QrCode, BarChart3 } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="mt-20 px-4 sm:px-6 pb-20">
      <h2 className="text-3xl font-bold text-center mb-12 text-black">
        Key Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Card className="border shadow-md hover:shadow-lg transition h-full">
          <CardContent className="p-8 flex flex-col items-center text-center space-y-4 h-full">
            <div className="p-4 rounded-full bg-black text-white">
              <LinkIcon className="h-8 w-8" />
            </div>
            <h3 className="font-semibold text-xl text-black">Shorten URLs</h3>
            <p className="text-black/70 text-sm leading-relaxed flex-grow">
              Quickly transform long, messy links into short and memorable ones.
            </p>
          </CardContent>
        </Card>

        <Card className="border shadow-md hover:shadow-lg transition h-full">
          <CardContent className="p-8 flex flex-col items-center text-center space-y-4 h-full">
            <div className="p-4 rounded-full bg-black text-white">
              <QrCode className="h-8 w-8" />
            </div>
            <h3 className="font-semibold text-xl text-black">Generate QR Codes</h3>
            <p className="text-black/70 text-sm leading-relaxed flex-grow">
              Instantly create QR codes for every short link.
            </p>
          </CardContent>
        </Card>

        <Card className="border shadow-md hover:shadow-lg transition h-full">
          <CardContent className="p-8 flex flex-col items-center text-center space-y-4 h-full">
            <div className="p-4 rounded-full bg-black text-white">
              <BarChart3 className="h-8 w-8" />
            </div>
            <h3 className="font-semibold text-xl text-black">Custom URLs</h3>
            <p className="text-black/70 text-sm leading-relaxed flex-grow">
              Create custom short URLs that are recognizable, professional, and designed to drive more clicks.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
