import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Copy, Link as LinkIcon, Download } from 'lucide-react';
import SplitText from '@/components/ui/split-text';
import axios from 'axios';

interface HeroSectionProps {
  heroRef: React.RefObject<HTMLDivElement>;
  featuresRef: React.RefObject<HTMLDivElement>;
}

export default function HeroSection({ heroRef, featuresRef }: HeroSectionProps) {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleShorten = async () => {
    try {
      console.log('API URL:', `${import.meta.env.VITE_API_URL}/api/shorten`);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/shorten`,
        { url }
      );
      setShortUrl(response.data.shortUrl);
    } catch (error) {
      console.error('Error shortening URL:', error.response || error.message);
    }
  };

  const handleDownloadQr = async () => {
    try {
      const shortId = shortUrl.split('/').pop();
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/qr/${shortId}`,
        { responseType: 'blob' }
      );

      
      const blob = new Blob([response.data], { type: 'image/png' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${shortId}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading QR code:', error.response || error.message);
    }
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-16" ref={heroRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-6">
        <Badge variant="secondary" className="mb-2">
          🚀 Trusted by users worldwide
        </Badge>

        <div className="pb-2">
          <SplitText
            tag="h1"
            text="Shorten. Share. Simplify."
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black"
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

        <p className="text-base sm:text-lg md:text-xl text-black/70 max-w-2xl mb-8">
          Transform long URLs into compact, easy-to-share links in seconds. <br />
          Fast, reliable, and hassle-free.
        </p>

        
        <Card className="relative z-30 bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl shadow-2xl w-full max-w-xl">
          <CardContent className="p-6 sm:p-8">
            <div className="text-center space-y-6">
              <div className="p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center bg-black">
                <LinkIcon className="h-8 w-8 text-white" />
              </div>

              <p className="text-black/70">Insert your URL and shorten it.</p>

              <div className="flex flex-col sm:flex-row w-full mt-6">
                <input
                  type="text"
                  placeholder="Paste your link here"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="flex-grow px-4 py-3 rounded-l-full bg-white/80 border border-gray-200 border-r-0 focus:outline-none text-black"
                />
                <Button
                  onClick={handleShorten}
                  className="py-3 px-6 rounded-r-full bg-black text-white hover:bg-white hover:text-black border border-black transition"
                >
                  Shorten
                </Button>
              </div>

              {shortUrl && (
                <Card className="mt-4 sm:mt-6 border bg-white/70 backdrop-blur-sm shadow-md">
                  <CardContent className="flex flex-col sm:flex-row items-center justify-between p-4 gap-2">
                    <a
                      href={shortUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black font-medium hover:underline break-all"
                    >
                      {shortUrl}
                    </a>
                    <div className="flex gap-2">
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => navigator.clipboard.writeText(shortUrl)}
                        className="hover:bg-black/10 rounded-full"
                      >
                        <Copy className="h-5 w-5 text-black" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={handleDownloadQr}
                        className="hover:bg-black/10 rounded-full"
                        title="Download QR Code"
                      >
                        <Download className="h-5 w-5 text-black" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div
        className="hidden md:flex justify-center absolute -bottom-6 w-full cursor-pointer"
        onClick={() => featuresRef.current?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ArrowDown className="h-8 w-8 text-black animate-bounce" />
      </div>
    </section>
  );
}