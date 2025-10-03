import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus, Target, TrendingUp, Flag } from "lucide-react";

type Status = "On Track" | "At Risk" | "Completed";

interface KeyResult {
  id: number;
  description: string;
  progress: number;
  status: Status;
}

interface Okr {
  id: number;
  objective: string;
  team: string;
  owner: string;
  ownerInitials: string;
  quarter: string;
  progress: number;
  keyResults: KeyResult[];
}

const initialOkrs: Okr[] = [
  {
    id: 1,
    objective: "Enhance Member Digital Banking Experience",
    team: "Digital Products",
    owner: "Alice Johnson",
    ownerInitials: "AJ",
    quarter: "Q4 2025",
    progress: 65,
    keyResults: [
      {
        id: 1,
        description: "Reduce mobile app login time by 20%",
        progress: 75,
        status: "On Track",
      },
      {
        id: 2,
        description: "Increase mobile check deposit adoption by 15%",
        progress: 50,
        status: "On Track",
      },
      {
        id: 3,
        description: "Achieve a 4.8-star average app store rating",
        progress: 70,
        status: "On Track",
      },
    ],
  },
  {
    id: 2,
    objective: "Increase New Member Acquisition through Community Outreach",
    team: "Marketing & Growth",
    owner: "Ben Carter",
    ownerInitials: "BC",
    quarter: "Q4 2025",
    progress: 35,
    keyResults: [
      {
        id: 1,
        description: "Sponsor 5 local community events",
        progress: 80,
        status: "On Track",
      },
      {
        id: 2,
        description:
          "Launch a member referral program generating 200 new accounts",
        progress: 10,
        status: "At Risk",
      },
      {
        id: 3,
        description: "Increase website traffic from local SEO by 25%",
        progress: 15,
        status: "At Risk",
      },
    ],
  },
  {
    id: 3,
    objective: "Streamline the Mortgage Application Process",
    team: "Lending Operations",
    owner: "Clara Davis",
    ownerInitials: "CD",
    quarter: "Q4 2025",
    progress: 90,
    keyResults: [
      {
        id: 1,
        description: "Decrease average application-to-close time to 21 days",
        progress: 85,
        status: "On Track",
      },
      {
        id: 2,
        description: "Implement e-signature for 95% of mortgage documents",
        progress: 100,
        status: "Completed",
      },
      {
        id: 3,
        description: "Reduce manual data entry by 40% with new OCR software",
        progress: 85,
        status: "On Track",
      },
    ],
  },
];

const statusColors: Record<Status, string> = {
  "On Track":
    "bg-green-100 text-green-800 border-green-300 dark:bg-green-900/50 dark:text-green-300 dark:border-green-700",
  "At Risk":
    "bg-yellow-100 text-yellow-800 border-yellow-300 dark:bg-yellow-900/50 dark:text-yellow-300 dark:border-yellow-700",
  Completed:
    "bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-900/50 dark:text-blue-300 dark:border-blue-700",
};

function OkrDashboardPage() {
  const [okrs] = useState<Okr[]>(initialOkrs);
  const [selectedQuarter, setSelectedQuarter] = useState("Q4 2025");

  const filteredOkrs = okrs.filter((okr) => okr.quarter === selectedQuarter);

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 bg-background">
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Credit Union OKRs
          </h1>
          <p className="text-muted-foreground">
            Objectives & Key Results for {selectedQuarter}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Select value={selectedQuarter} onValueChange={setSelectedQuarter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Quarter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Q3 2025">Q3 2025</SelectItem>
              <SelectItem value="Q4 2025">Q4 2025</SelectItem>
              <SelectItem value="Q1 2026">Q1 2026</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Objective
          </Button>
        </div>
      </header>

      <main className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {filteredOkrs.map((okr) => (
          <Card key={okr.id} className="flex flex-col">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg font-semibold leading-tight pr-4">
                  {okr.objective}
                </CardTitle>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={`https://api.dicebear.com/8.x/initials/svg?seed=${okr.owner}`}
                    />
                    <AvatarFallback>{okr.ownerInitials}</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <CardDescription>{okr.team} Department</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="space-y-4">
                {okr.keyResults.map((kr) => (
                  <div key={kr.id}>
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-sm text-muted-foreground">
                        {kr.description}
                      </p>
                      <Badge
                        variant="outline"
                        className={statusColors[kr.status]}
                      >
                        {kr.status === "At Risk" && (
                          <Flag className="mr-1.5 h-3 w-3 text-yellow-600 dark:text-yellow-400" />
                        )}
                        {kr.status === "On Track" && (
                          <TrendingUp className="mr-1.5 h-3 w-3 text-green-600 dark:text-green-400" />
                        )}
                        {kr.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Progress value={kr.progress} className="w-full" />
                      <span className="text-sm font-medium text-foreground w-12 text-right">
                        {kr.progress}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <Separator className="my-4" />
            <CardFooter className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4" />
                <span>Overall Progress</span>
              </div>
              <span className="font-bold text-foreground">{okr.progress}%</span>
            </CardFooter>
          </Card>
        ))}
      </main>
    </div>
  );
}

export default OkrDashboardPage;
