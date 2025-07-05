"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Sparkles, Zap } from "lucide-react"

export default function Component({ launchDate }: { launchDate: string }) {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const targetTime = new Date(launchDate).getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
        
        .space-grotesk {
          font-family: 'Space Grotesk', sans-serif;
        }
        
        .jetbrains-mono {
          font-family: 'JetBrains Mono', monospace;
        }

        .glow-text {
          text-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
        }

        .floating {
          animation: float 6s ease-in-out infinite;
        }

        .floating-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: -3s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite alternate;
        }

        @keyframes pulse-glow {
          from { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
          to { box-shadow: 0 0 40px rgba(139, 92, 246, 0.6); }
        }

        .grid-pattern {
          background-image: 
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 grid-pattern opacity-20"></div>

        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl floating"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-500/20 rounded-full blur-xl floating-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-500/20 rounded-full blur-xl floating"></div>

        <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-4xl mx-auto text-center space-y-12">
            {/* Main Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge
                  variant="outline"
                  className="px-6 py-3 text-sm font-medium border-purple-400/50 bg-purple-500/10 text-purple-300 jetbrains-mono"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  {"<under_construction />"}
                </Badge>

                <div className="space-y-4">
                  <h1 className="text-6xl md:text-8xl font-bold text-white glow-text space-grotesk tracking-tight">
                    PORTFOLIO
                  </h1>
                  <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                </div>

                <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed space-grotesk font-light">
                  Crafting digital experiences with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-medium">
                    precision
                  </span>{" "}
                  and{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-medium">
                    creativity
                  </span>
                </p>
              </div>

              {/* Countdown Timer */}
              <Card className="bg-black/40 backdrop-blur-xl border-purple-500/30 shadow-2xl pulse-glow max-w-2xl mx-auto">
                <CardContent className="p-8 md:p-12">
                  <div className="flex items-center justify-center gap-3 mb-8">
                    <Clock className="w-6 h-6 text-purple-400" />
                    <span className="text-gray-300 font-medium text-lg space-grotesk">LAUNCHING IN</span>
                    <Sparkles className="w-6 h-6 text-purple-400" />
                  </div>

                  <div className="flex justify-center gap-6 md:gap-12">
                    <div className="text-center">
                      <div className="text-5xl md:text-6xl font-bold text-white mb-2 jetbrains-mono glow-text">
                        {timeLeft.hours.toString().padStart(2, "0")}
                      </div>
                      <div className="text-sm text-purple-300 uppercase tracking-widest space-grotesk font-medium">
                        HOURS
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="text-5xl md:text-6xl font-bold text-white mb-2 jetbrains-mono glow-text">
                        {timeLeft.minutes.toString().padStart(2, "0")}
                      </div>
                      <div className="text-sm text-purple-300 uppercase tracking-widest space-grotesk font-medium">
                        MINUTES
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="text-5xl md:text-6xl font-bold text-white mb-2 jetbrains-mono glow-text">
                        {timeLeft.seconds.toString().padStart(2, "0")}
                      </div>
                      <div className="text-sm text-purple-300 uppercase tracking-widest space-grotesk font-medium">
                        SECONDS
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Status Message */}
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 jetbrains-mono text-sm">SYSTEM STATUS: BUILDING</span>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
