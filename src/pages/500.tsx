import { Link } from "react-router-dom";

export default function ServerError() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <h1 className="text-6xl font-bold text-primary">500</h1>
      <h2 className="text-2xl font-semibold text-foreground">Server Error</h2>
      <p className="text-muted-foreground">
        A temporary server error has occurred. Please try again later.
      </p>
      <Link 
        to="/"
        className="mt-4 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Back to Home
      </Link>
    </div>
  );
}