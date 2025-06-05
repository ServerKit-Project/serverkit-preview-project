import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rocket, BookOpen } from "lucide-react";
import serverkitSignature from "@/assets/serverkit_logo_signature.png";
import logo from "@/assets/logo.png";

function WelcomeServerkit() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* 상단 헤더 */}
      <header className="h-16 border-b border-border bg-muted flex items-center justify-between px-6">
        <div className="flex items-center space-x-6">
          <img
            src={serverkitSignature}
            alt="ServerKit"
            className="w-32 h-auto"
          />
        </div>
        <div className="flex items-center">
          <Badge className="bg-primary-green text-black">Beta</Badge>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          {/* 중앙 컨텐츠 */}
          <main className="mt-12">
            <div className="text-center space-y-8">
              <img
                src={logo}
                alt="ServerKit"
                className="max-w-48 w-full h-auto mx-auto"
              />

              <div className="space-y-4">
                <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-green to-primary">
                  Welcome to ServerKit
                </h1>
                <p className="text-4xl font-bold text-foreground/80">
                  From Diagram to Full-Stack App!
                </p>
              </div>

              <div className="flex justify-center gap-4 mt-8">
                <Button
                  size="lg"
                  className="bg-primary-green hover:bg-primary-green/90 text-black px-8 cursor-pointer"
                >
                  Get Started
                  <Rocket className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 cursor-pointer"
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Documentation
                </Button>
              </div>

              {/* 기능 하이라이트 */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16">
                <div className="p-6 rounded-xl bg-card border border-border hover:border-primary-green transition-colors">
                  <h3 className="font-semibold mb-2">Powerful Data Modeling</h3>
                  <p className="text-muted-foreground text-sm">
                    Design and manage your data structure with intuitive visual
                    tools
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border hover:border-primary-green transition-colors">
                  <h3 className="font-semibold mb-2">Visual Query Creation</h3>
                  <p className="text-muted-foreground text-sm">
                    Build complex queries through an intuitive visual interface
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border hover:border-primary-green transition-colors">
                  <h3 className="font-semibold mb-2">Visual Scripting</h3>
                  <p className="text-muted-foreground text-sm">
                    Accelerate development with powerful visual scripting tools
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default WelcomeServerkit;
