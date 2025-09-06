import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Link as LinkIcon,
  QrCode,
  BarChart3,
  Shield,
  Zap,
  Globe,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import SplitText from "@/components/ui/split-text";

export default function Landing() {
  const navigate = useNavigate();

  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleShorten = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/shorten`,
        { url }
      );
      setShortUrl(response.data.shortUrl);
    } catch (error) {
      console.error("Error shortening URL:", error);
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="relative h-full w-full bg-white">
          <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <section className="py-20 lg:py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-2 text-center">
              <Badge variant="secondary" className="mb-4">
                🚀 Trusted by users worldwide
              </Badge>

              <div className="pb-4">
                <SplitText
                  tag="h1"
                  text="Shorten. Share. Simplify."
                  className="text-6xl font-bold text-black"
                  delay={100}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                />
              </div>

              <p className="text-xl text-black/70 mb-8 max-w-2xl">
                Transform long URLs into compact, easy-to-share links in seconds. <br />
                Fast, reliable, and hassle-free.
              </p>

              {/* Input & Button */}
              <Card className="relative bg-white/80 backdrop-blur-sm border shadow-elegant">
                <CardContent className="p-8 mx-auto">
                  <div className="text-center space-y-6 mx-4 sm:mx-40">
                    <div className="p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center bg-black">
                      <LinkIcon className="h-8 w-8 text-white" />
                    </div>

                    <p className="text-black/70">Insert your URL and shorten it.</p>

                    <div className="flex w-full max-w-2xl mt-6">
                      <input
                        type="text"
                        placeholder="Paste your link here"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="flex-grow px-6 py-2 rounded-l-full bg-white border focus:outline-none focus:ring-2 focus:ring-black text-black"
                      />
                      <Button
                        onClick={handleShorten}
                        className="py-2 rounded-r-full bg-black text-white hover:bg-white hover:text-black transition"
                      >
                        Shorten
                      </Button>
                    </div>

                    {/* Shortened URL */}
                    {shortUrl && (
                      <Card className="mt-6 border bg-white/70 backdrop-blur-sm shadow-sm">
                        <CardContent className="flex items-center justify-between p-4">
                          <a
                            href={shortUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black font-medium hover:underline"
                          >
                            {shortUrl}
                          </a>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => navigator.clipboard.writeText(shortUrl)}
                            className="hover:bg-black/10 rounded-full"
                          >
                            <Copy className="h-5 w-5 text-black" />
                          </Button>
                        </CardContent>
                      </Card>
                    )}

                    {/* Download QR */}
                    {shortUrl && (
                      <Button
                        variant="outline"
                        size="lg"
                        className="px-16 border-black text-black hover:bg-black hover:text-white transition"
                        onClick={() => {
                          const shortId = shortUrl.split("/").pop();
                          const qrUrl = `${import.meta.env.VITE_API_URL}/qr/${shortId}`;

                          const link = document.createElement("a");
                          link.href = qrUrl;
                          link.download = `qr-${shortId}.png`;
                          link.click();
                        }}
                      >
                        Download QR Code
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Key Features */}
              <div className="mt-10">
                <h2 className="text-xl font-bold text-center mb-6 text-black">
                  Key Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                  <Card className="border hover:shadow-md transition">
                    <CardContent className="flex items-center gap-2 p-4 text-black">
                      <LinkIcon className="h-5 w-5" />
                      <span className="font-medium">Shorten URLs</span>
                    </CardContent>
                  </Card>
                  <Card className="border hover:shadow-md transition">
                    <CardContent className="flex items-center gap-2 p-4 text-black">
                      <QrCode className="h-5 w-5" />
                      <span className="font-medium">Generate QR Codes</span>
                    </CardContent>
                  </Card>
                  <Card className="border hover:shadow-md transition">
                    <CardContent className="flex items-center gap-2 p-4 text-black">
                      <BarChart3 className="h-5 w-5" />
                      <span className="font-medium">Track Clicks</span>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-black">
              Ready to take control of your links?
            </h2>
            <p className="text-xl text-black/70 mb-8">
              Join thousands of teams already using sh0rten to power their campaigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => navigate("/signup")}
                className="bg-black text-white hover:bg-white hover:text-black transition"
              >
                Get started free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-black text-black hover:bg-black hover:text-white transition"
              >
                Contact sales
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t py-12 bg-white/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <div className="bg-black p-2 rounded-lg">
                  <LinkIcon className="h-6 w-6 text-white" />
                </div>
                <span className="font-bold text-xl text-black">sh0rten</span>
              </div>
              <p className="text-sm text-black/70">
                © 2025 sh0rten. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
