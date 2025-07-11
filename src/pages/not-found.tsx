import { AlertCircle } from "lucide-react";
import { Link } from 'wouter';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md mx-4 bg-sail-bg-standard rounded-sail-semi-rounded border border-sail-secondary">
        <div className="p-sail-standard">
          <div className="flex mb-sail-standard gap-2">
            <AlertCircle className="h-8 w-8 text-sail-negative" />
            <h1 className="text-sail-large font-bold text-sail-standard">404 Page Not Found</h1>
          </div>

          <p className="mt-sail-standard text-sail-standard text-sail-secondary">
            <Link href="/" className="text-sail-accent underline hover:text-blue-800">
              Return to home page
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}