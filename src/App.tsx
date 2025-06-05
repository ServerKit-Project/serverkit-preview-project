import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rocket } from "lucide-react";
import serverkitSignature from "@/assets/serverkit_logo_signature.png";
import logo from "@/assets/logo.png";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      {/* 간단한 테스트 헤더 */}
      <header className="mb-8 flex items-center justify-between border-b border-border pb-4">
        <div className="flex items-center space-x-3">
          <img
            src={serverkitSignature}
            alt="ServerKit"
            className="w-30 h-auto"
          />
        </div>
        <div className="flex items-center space-x-4">
          <Badge className="bg-primary-green text-black">Beta</Badge>

          <Button variant="outline" size="sm">
            Sign In
          </Button>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="text-center">
        <div className="mb-8">
          <img
            src={logo}
            alt="ServerKit"
            className="max-w-48 w-full h-auto mx-auto mb-6"
          />
        </div>

        <div className="space-y-4 mb-8">
          <h1 className="text-4xl font-bold">Background Test</h1>
          <p className="text-muted-foreground">
            Testing if bg-background and text-foreground work properly
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <Button
            size="lg"
            className="bg-primary-green hover:bg-primary-green/90 text-black"
          >
            Get Started
            <Rocket className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg">
            Documentation
          </Button>
        </div>

        {/* 색상 테스트 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <div className="p-4 bg-card border border-border rounded-lg">
            <p className="text-card-foreground">Card</p>
          </div>
          <div className="p-4 bg-muted border border-border rounded-lg">
            <p className="text-muted-foreground">Muted</p>
          </div>
          <div className="p-4 bg-primary text-primary-foreground rounded-lg">
            <p>Primary</p>
          </div>
          <div className="p-4 bg-secondary text-secondary-foreground rounded-lg">
            <p>Secondary</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
