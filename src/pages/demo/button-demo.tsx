// React import not needed in modern React with JSX transform
import { Button } from "@/components/ui/button";
import { Download, Send, Loader2 } from "lucide-react";

const ButtonDemo = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Button Component Demo</h1>
      
      {/* Button Variants */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Button Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="default">Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </section>
      
      {/* Button Sizes */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Button Sizes</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button size="default">Default</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button size="icon" className="h-10 w-10">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </section>
      
      {/* Button States */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Button States</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Normal</Button>
          <Button disabled>Disabled</Button>
          <Button variant="outline" disabled>
            Disabled Outline
          </Button>
        </div>
      </section>
      
      {/* Buttons with Icons */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Buttons with Icons</h2>
        <div className="flex flex-wrap gap-4">
          <Button>
            <Send className="mr-2 h-4 w-4" /> Send
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Download
          </Button>
          <Button disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </Button>
        </div>
      </section>
      
      {/* Interactive Examples */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Interactive Examples</h2>
        <div className="flex flex-wrap gap-4">
          <Button
            onClick={() => alert('Button clicked!')}
          >
            Click Me
          </Button>
          <Button
            variant="secondary"
            className="transition-all hover:scale-105"
          >
            Hover Effect
          </Button>
          <Button
            className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-violet-500 hover:to-pink-500"
          >
            Gradient
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ButtonDemo;