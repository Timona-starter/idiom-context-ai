import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const FeedbackPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thank you for your feedback!");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-white">Submit Feedback</h1>
        <p className="text-gray-400 mb-8">
          We'd love to hear your thoughts! Let us know what you like, what could be improved, or any ideas you have.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name (Optional)</label>
            <Input id="name" name="name" placeholder="John Doe" className="bg-gray-700 border-gray-600 text-white" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Your Email (Optional)</label>
            <Input id="email" name="email" type="email" placeholder="you@example.com" className="bg-gray-700 border-gray-600 text-white" />
          </div>
          <div>
            <label htmlFor="feedback" className="block text-sm font-medium text-gray-300 mb-2">Your Feedback</label>
            <Textarea id="feedback" name="feedback" rows={5} required placeholder="Your feedback here..." className="bg-gray-700 border-gray-600 text-white" />
          </div>
          <Button type="submit" className="w-full">Submit Feedback</Button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackPage;