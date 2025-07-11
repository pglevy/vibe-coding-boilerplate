import { Download, Send, Loader2 } from "lucide-react";

const ButtonDemo = () => {
  return (
    <div className="p-sail-more max-w-4xl mx-auto">
      <h1 className="text-sail-extra-large font-bold mb-sail-more">SAIL Button Demo</h1>
      
      {/* Button Variants */}
      <section className="mb-sail-even-more">
        <h2 className="text-sail-medium-plus font-semibold mb-sail-standard">Button Variants</h2>
        <div className="flex flex-wrap gap-4">
          <button className="bg-sail-accent text-white px-sail-standard py-sail-less rounded-sail-semi-rounded text-sail-medium font-medium hover:opacity-90">
            Primary
          </button>
          <button className="bg-sail-negative text-white px-sail-standard py-sail-less rounded-sail-semi-rounded text-sail-medium font-medium hover:opacity-90">
            Destructive
          </button>
          <button className="bg-sail-bg-standard text-sail-secondary px-sail-standard py-sail-less border border-sail-secondary rounded-sail-semi-rounded text-sail-medium font-medium hover:bg-gray-50">
            Outline
          </button>
          <button className="bg-gray-100 text-sail-standard px-sail-standard py-sail-less rounded-sail-semi-rounded text-sail-medium font-medium hover:bg-gray-200">
            Secondary
          </button>
          <button className="bg-transparent text-sail-accent px-sail-standard py-sail-less rounded-sail-semi-rounded text-sail-medium font-medium hover:bg-blue-50">
            Ghost
          </button>
          <button className="bg-transparent text-sail-accent px-sail-standard py-sail-less rounded-sail-semi-rounded text-sail-medium font-medium hover:underline">
            Link
          </button>
        </div>
      </section>
      
      {/* Button Sizes */}
      <section className="mb-sail-even-more">
        <h2 className="text-sail-medium-plus font-semibold mb-sail-standard">Button Sizes</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <button className="bg-sail-accent text-white px-sail-standard py-sail-less rounded-sail-semi-rounded text-sail-medium font-medium hover:opacity-90">
            Standard
          </button>
          <button className="bg-sail-accent text-white px-sail-less py-sail-even-less rounded-sail-semi-rounded text-sail-small font-medium hover:opacity-90">
            Small
          </button>
          <button className="bg-sail-accent text-white px-sail-more py-sail-standard rounded-sail-semi-rounded text-sail-medium-plus font-medium hover:opacity-90">
            Large
          </button>
          <button className="bg-sail-accent text-white p-sail-less rounded-sail-semi-rounded hover:opacity-90 h-10 w-10 flex items-center justify-center">
            <Download className="h-4 w-4" />
          </button>
        </div>
      </section>
      
      {/* Button States */}
      <section className="mb-sail-even-more">
        <h2 className="text-sail-medium-plus font-semibold mb-sail-standard">Button States</h2>
        <div className="flex flex-wrap gap-4">
          <button className="bg-sail-accent text-white px-sail-standard py-sail-less rounded-sail-semi-rounded text-sail-medium font-medium hover:opacity-90">
            Normal
          </button>
          <button disabled className="bg-gray-300 text-gray-500 px-sail-standard py-sail-less rounded-sail-semi-rounded text-sail-medium font-medium cursor-not-allowed">
            Disabled
          </button>
          <button disabled className="bg-sail-bg-standard text-gray-400 px-sail-standard py-sail-less border border-gray-300 rounded-sail-semi-rounded text-sail-medium font-medium cursor-not-allowed">
            Disabled Outline
          </button>
        </div>
      </section>
      
      {/* Buttons with Icons */}
      <section className="mb-sail-even-more">
        <h2 className="text-sail-medium-plus font-semibold mb-sail-standard">Buttons with Icons</h2>
        <div className="flex flex-wrap gap-4">
          <button className="bg-sail-accent text-white px-sail-standard py-sail-less rounded-sail-semi-rounded text-sail-medium font-medium hover:opacity-90 flex items-center">
            <Send className="mr-2 h-4 w-4" /> Send
          </button>
          <button className="bg-sail-bg-standard text-sail-secondary px-sail-standard py-sail-less border border-sail-secondary rounded-sail-semi-rounded text-sail-medium font-medium hover:bg-gray-50 flex items-center">
            <Download className="mr-2 h-4 w-4" /> Download
          </button>
          <button disabled className="bg-gray-300 text-gray-500 px-sail-standard py-sail-less rounded-sail-semi-rounded text-sail-medium font-medium cursor-not-allowed flex items-center">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </button>
        </div>
      </section>
      
      {/* Interactive Examples */}
      <section>
        <h2 className="text-sail-medium-plus font-semibold mb-sail-standard">Interactive Examples</h2>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => alert('Button clicked!')}
            className="bg-sail-accent text-white px-sail-standard py-sail-less rounded-sail-semi-rounded text-sail-medium font-medium hover:opacity-90"
          >
            Click Me
          </button>
          <button className="bg-gray-100 text-sail-standard px-sail-standard py-sail-less rounded-sail-semi-rounded text-sail-medium font-medium transition-all hover:scale-105">
            Hover Effect
          </button>
          <button className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-violet-500 hover:to-pink-500 text-white px-sail-standard py-sail-less rounded-sail-semi-rounded text-sail-medium font-medium">
            Gradient
          </button>
        </div>
      </section>
    </div>
  );
};

export default ButtonDemo;