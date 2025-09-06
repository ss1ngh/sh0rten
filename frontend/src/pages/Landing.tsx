import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { 
  Link as LinkIcon, 
  QrCode, 
  BarChart3, 
  Shield, 
  Zap, 
  Globe,
  Star,
  Check,
  ArrowRight
} from "lucide-react";
import { useState } from "react";

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
  }

  const features = [
    {
      icon: LinkIcon,
      title: "URL Shortening",
      description: "Transform long URLs into short, memorable links instantly"
    },
    {
      icon: QrCode,
      title: "QR Code Generation",
      description: "Generate QR codes for your shortened URLs automatically"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Track clicks, locations, and performance metrics"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Redirect your links in milliseconds worldwide"
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "CDN-powered redirects from 100+ locations globally"
    }
  ];

  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gap-2 items-center flex flex-col">
            <div className="text-center lg:text-center">
              <Badge variant="secondary" className="mb-4">
                🚀 Trusted by users worldwide
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold -tracking-wide mb-6">
                Shorten. Share. Simplify.
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Transform long URLs into compact, easy-to-share links in seconds. <br></br>Fast, reliable, and hassle-free.
              </p>
              
              {/* <div className="sm:flex-row gap-4 justify-center lg:justify-center">
                <Button 
                  size="lg" 
                  onClick={() => navigate("/dashboard")}
                  className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                >
                  Get started free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>  */}
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-20"></div>
              <Card className="relative bg-background/80 backdrop-blur-sm border shadow-elegant">
                <CardContent className="p-8 mx-auto">
                  <div className="text-center space-y-6 mx-40">
                    <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                      <LinkIcon className="h-8 w-8 text-white" />
                    </div>
                    
                    <div>
                      <p className="text-muted-foreground">
                        Insert your URL and shorten it.
                      </p>
                    </div>

                    <div className="flex w-full max-w-2xl mx-2 mt-6">
                      <input
                        type="text"
                        placeholder="Paste your link here"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="flex-grow px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <Button 
                        onClick={handleShorten}
                        className="rounded-lg mx-4 bg-gradient-primary hover:shadow-glow transition-all duration-300"
                      >
                        Shorten
                      </Button>
                    </div>

                    {/* copy shortUrl */}
                    {shortUrl && (
                      <Card className="mt-6 border shadow-elegant bg-background/70 backdrop-blur-sm">
                        <CardContent className="flex items-center justify-between p-4">
                          <a 
                            href={shortUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-primary font-medium hover:underline"
                          >
                            {shortUrl}
                          </a>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => navigator.clipboard.writeText(shortUrl)}
                            className="hover:bg-muted rounded-full"
                          >
                            <Copy className="h-5 w-5" />
                          </Button>
                        </CardContent>
                      </Card>
                    )}

                    {/* download qr button */}
                    <Button
                      variant="outline"
                      size="lg"
                      className="px-16"
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

                    

                    {/* <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Custom domains</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>QR codes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Analytics</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>API access</span>
                      </div>
                    </div> */}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* key features*/}
            <div className="mt-10">
              <h2 className="text-xl font-bold text-center mb-6">Key Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <Card className="border shadow-sm hover:shadow-md transition">
                  <CardContent className="flex items-center gap-2 p-4">
                    <LinkIcon className="h-5 w-5 text-primary" />
                    <span className="font-medium">Shorten URLs</span>
                  </CardContent>
                </Card>
                <Card className="border shadow-sm hover:shadow-md transition">
                  <CardContent className="flex items-center gap-2 p-4">
                    <QrCode className="h-5 w-5 text-primary" />
                    <span className="font-medium">Generate QR Codes</span>
                  </CardContent>
                </Card>
                <Card className="border shadow-sm hover:shadow-md transition">
                  <CardContent className="flex items-center gap-2 p-4">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <span className="font-medium">Track Clicks</span>
                  </CardContent>
                </Card>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Everything you need to manage your links
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to help you track, analyze, and optimize your link performance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="bg-gradient-primary p-3 rounded-lg w-fit mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials Section
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Loved by teams worldwide
            </h2>
            <p className="text-xl text-muted-foreground">
              See what our customers are saying about sh0rten
            </p>
          </div>
          
          
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to take control of your links?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of teams already using sh0rten to power their campaigns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate("/signup")}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              Get started free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Contact sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="bg-gradient-primary p-2 rounded-lg">
                <LinkIcon className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl">sh0rten</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2025 sh0rten. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}