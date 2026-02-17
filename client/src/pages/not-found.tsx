import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="text-center space-y-6 p-8">
        <AlertCircle className="w-16 h-16 text-primary mx-auto opacity-50" />
        <h1 className="font-display text-4xl font-bold text-foreground">404 Page Not Found</h1>
        <p className="text-muted-foreground text-lg max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/">
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 py-6 uppercase tracking-widest text-xs">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
