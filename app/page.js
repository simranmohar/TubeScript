"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  const [topic, setTopic] = useState("");

  const handleGenerateClick = async () => {
    console.log("Sending topic to API:", topic);

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ topic: topic }),
      });

      const data = await response.json();

      // This log will appear in the BROWSER console
      console.log("Response from API:", data);
      
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

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
          <Input 
            type="text" 
            id="video-topic" 
            placeholder="e.g., The Lost City of Atlantis"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>

        <Button className="w-full" onClick={handleGenerateClick}>
          Generate Script
        </Button>
      </div>
    </main>
  );
}