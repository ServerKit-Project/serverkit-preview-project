import logo from "@/assets/Simbol.png";

function WelcomeServerkit() {
  return (
    <div className="fixed inset-0 grid place-items-center bg-background text-foreground">
      <div className="w-full max-w-7xl px-8">
        <div className="mx-auto grid w-full max-w-3xl gap-12 text-center">
          <img 
            src={logo} 
            alt="ServerKit"
            className="mx-auto h-32 w-32 object-contain animate-in fade-in slide-in-from-bottom-3 duration-1000"
          />
          <div className="grid gap-6">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Welcome to <span className="text-primary">ServerKit</span>
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl">
              From Diagram to Full-stack App
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeServerkit;