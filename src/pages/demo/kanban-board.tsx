import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface User {
  name: string;
  avatar: string;
}

interface Story {
  id: string;
  title: string;
  description: string;
  user: User;
  tags: string[];
}

interface BoardData {
  backlog: Story[];
  "in-progress": Story[];
  review: Story[];
  done: Story[];
}

type ColumnId = keyof BoardData;

const initialBoardData: BoardData = {
  backlog: [
    {
      id: "US-01",
      title: "User Authentication",
      description:
        "As a user, I want to sign up and log in with my email so I can access my personalized content.",
      user: {
        name: "Alice Johnson",
        avatar: "https://i.pravatar.cc/150?u=alice",
      },
      tags: ["auth", "high-priority"],
    },
    {
      id: "US-02",
      title: "Podcast Discovery Page",
      description:
        "As a user, I want to browse and search for podcasts by category, popularity, or name.",
      user: { name: "Bob Williams", avatar: "https://i.pravatar.cc/150?u=bob" },
      tags: ["discovery", "feature"],
    },
    {
      id: "US-08",
      title: "Implement User Settings",
      description:
        "As a user, I want a settings page to manage my notification preferences and profile.",
      user: { name: "Eve Davis", avatar: "https://i.pravatar.cc/150?u=eve" },
      tags: ["settings", "feature"],
    },
  ],
  "in-progress": [
    {
      id: "US-03",
      title: "Episode Playback Controls",
      description:
        "As a user, I want to play, pause, and seek within a podcast episode using a persistent player.",
      user: {
        name: "Charlie Brown",
        avatar: "https://i.pravatar.cc/150?u=charlie",
      },
      tags: ["player", "core-feature"],
    },
    {
      id: "US-05",
      title: "Create Subscription System",
      description:
        "As a user, I want to subscribe to podcasts to get notified of new episodes.",
      user: {
        name: "Frank Miller",
        avatar: "https://i.pravatar.cc/150?u=frank",
      },
      tags: ["subscriptions", "high-priority"],
    },
  ],
  review: [
    {
      id: "US-06",
      title: "Episode Download for Offline",
      description:
        "As a user, I want to download episodes to listen to them offline.",
      user: { name: "Grace Lee", avatar: "https://i.pravatar.cc/150?u=grace" },
      tags: ["offline", "feature"],
    },
  ],
  done: [
    {
      id: "US-04",
      title: "Basic UI Shell & Navigation",
      description:
        "As a developer, I need a basic layout and navigation structure for the application.",
      user: {
        name: "David Smith",
        avatar: "https://i.pravatar.cc/150?u=david",
      },
      tags: ["ui", "chore"],
    },
    {
      id: "US-07",
      title: "Setup Project with Vite & TS",
      description:
        "As a developer, I need the initial project scaffolding set up.",
      user: {
        name: "David Smith",
        avatar: "https://i.pravatar.cc/150?u=david",
      },
      tags: ["setup", "chore"],
    },
  ],
};

const columnStyles: Record<ColumnId, { bg: string; title: string }> = {
  backlog: { bg: "bg-muted/20", title: "bg-slate-500" },
  "in-progress": { bg: "bg-muted/20", title: "bg-blue-500" },
  review: { bg: "bg-muted/20", title: "bg-amber-500" },
  done: { bg: "bg-muted/20", title: "bg-green-500" },
};

function PodcastKanbanPage() {
  const boardData = initialBoardData;

  const getInitials = (name: string): string => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  };

  const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="container mx-auto p-4 md:p-6">
      <header className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Podcast Player Kanban
          </h1>
          <p className="text-muted-foreground">
            User stories and development progress.
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Story
        </Button>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
        {(Object.entries(boardData) as [ColumnId, Story[]][]).map(([columnId, stories]) => (
          <div
            key={columnId}
            className={`rounded-lg ${columnStyles[columnId].bg}`}
          >
            <div className="p-4 border-b border-border">
              <div className="flex items-center gap-2">
                <span
                  className={`w-3 h-3 rounded-full ${columnStyles[columnId].title}`}
                ></span>
                <h2 className="font-semibold">
                  {capitalizeFirstLetter(columnId.replace("-", " "))}
                </h2>
                <span className="text-sm font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded-md">
                  {stories.length}
                </span>
              </div>
            </div>

            <div className="p-4 space-y-4">
              {stories.map((story) => (
                <Card
                  key={story.id}
                  className="bg-card hover:shadow-md transition-shadow"
                >
                  <CardHeader className="p-4">
                    <CardTitle className="text-base">{story.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-muted-foreground mb-4">
                      {story.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage
                            src={story.user.avatar}
                            alt={story.user.name}
                          />
                          <AvatarFallback>
                            {getInitials(story.user.name)}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-xs font-medium">
                          {story.user.name}
                        </span>
                      </div>
                      <Badge
                        variant={
                          story.tags.includes("high-priority")
                            ? "destructive"
                            : "secondary"
                        }
                        className="text-xs"
                      >
                        {story.id}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Button
                variant="ghost"
                className="w-full h-9 text-muted-foreground"
              >
                <Plus className="mr-2 h-4 w-4" /> Add card
              </Button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default PodcastKanbanPage;
