import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <main className="container mx-auto min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-lg flex flex-col gap-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold">TubeScript</h1>
          <p className="text-muted-foreground mt-2">
            Enter a topic and let AI do the rest.
          </p>
        </div>
        
        <div className="grid w-full items-center gap-2">
          <Label htmlFor="video-topic">Your Video Topic</Label>
          <Input type="text" id="video-topic" placeholder="e.g., The Lost City of Atlantis" />
        </div>

        <Button className="w-full">Generate Script</Button>
      </div>
    </main>
  );
}
