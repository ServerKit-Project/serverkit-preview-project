import logo from "@/assets/Simbol.png";

function WelcomeServerkit() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      {/* 메인 컨텐츠 */}
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <img
            src={logo}
            alt="ServerKit"
            className="w-32 h-auto mx-auto animate-fade-in"
          />

          <div className="space-y-6">
            <h1 className="text-6xl font-bold tracking-tight">
              Welcome to <span className="text-primary-green">ServerKit</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              From Diagram to Full-stack App
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeServerkit;
