import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ClipboardList, Sparkles, TrendingUp } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { Card, CardContent } from "@/components/ui/card";
import { getTreatmentDefinition } from "@/lib/client-form/schema";
import ClientFormSubmissionsManager from "./ClientFormSubmissionsManager";

export default async function AdminClientFormPage() {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }

  const profile = await prisma.profile.findUnique({
    where: { userId: user.id },
  });

  if (!profile || profile.role !== "admin") {
    return (
      <div className="p-20 text-center text-lg text-red-600">
        You don&apos;t have permission to view this page.
      </div>
    );
  }

  const submissions = await prisma.clientFormSubmission.findMany({
    orderBy: { submittedAt: "desc" },
    select: {
      id: true,
      formVersion: true,
      selectedTreatments: true,
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      submittedAt: true,
    },
  });

  const serialized = submissions.map((s) => ({
    ...s,
    submittedAt: s.submittedAt.toISOString(),
  }));

  const { thisWeekCount, topTreatmentLabel } =
    computeSubmissionStats(serialized);

  return (
    <div className="w-full">
      <div className="mb-8 space-y-1">
        <h1 className="text-3xl font-bold">Client Form Submissions</h1>
        <p className="text-muted-foreground">
          Review completed intake forms submitted by clients.
        </p>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard
          icon={ClipboardList}
          label="Total submissions"
          value={String(serialized.length)}
        />
        <StatCard
          icon={TrendingUp}
          label="This week"
          value={String(thisWeekCount)}
        />
        <StatCard
          icon={Sparkles}
          label="Most requested treatment"
          value={topTreatmentLabel}
        />
      </div>

      <ClientFormSubmissionsManager submissions={serialized} />
    </div>
  );
}

type SubmissionSummary = {
  selectedTreatments: string[];
  submittedAt: string;
};

function computeSubmissionStats(submissions: SubmissionSummary[]) {
  const oneWeekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
  const thisWeekCount = submissions.filter(
    (s) => new Date(s.submittedAt).getTime() >= oneWeekAgo,
  ).length;

  const treatmentCounts = new Map<string, number>();
  for (const s of submissions) {
    for (const t of s.selectedTreatments) {
      treatmentCounts.set(t, (treatmentCounts.get(t) ?? 0) + 1);
    }
  }
  const topTreatmentEntry = [...treatmentCounts.entries()].sort(
    (a, b) => b[1] - a[1],
  )[0];
  const topTreatmentLabel = topTreatmentEntry
    ? (getTreatmentDefinition(topTreatmentEntry[0])?.name ??
      topTreatmentEntry[0])
    : "—";

  return { thisWeekCount, topTreatmentLabel };
}

function StatCard({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <Card>
      <CardContent className="flex items-center gap-4 py-5">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-olive-100 text-olive-700">
          <Icon className="size-5" />
        </span>
        <div className="min-w-0">
          <p className="truncate text-lg font-semibold text-foreground">
            {value}
          </p>
          <p className="text-sm text-muted-foreground">{label}</p>
        </div>
      </CardContent>
    </Card>
  );
}
