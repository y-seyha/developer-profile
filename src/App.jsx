import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function StatusBadge({ isAvailable }) {
  return (
    <span className={isAvailable ? "text-green-600" : "text-gray-500"}>
      {isAvailable ? "Open to work" : "Busy learning"}
    </span>
  );
}

function Section({ title, children }) {
  return (
    <section className="mt-6">
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>

      <div className="mt-2 text-gray-700">{children}</div>
    </section>
  );
}

function ProjectCard({ title, status }) {
  return (
    <Card className="transition hover:shadow-md">
      <CardHeader>
        <CardTitle className="text-gray-900">{title}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <Badge>{status}</Badge>

        <Button className="transition hover:opacity-90">View project</Button>
      </CardContent>
    </Card>
  );
}

function App() {
  const name = "Yoeun Seyha";

  return (
    <div className="mx-auto max-w-6xl p-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <main className="md:col-span-2">
          <h1 className="text-3xl font-bold text-gray-900">{name}</h1>

          <p className="mt-4 text-gray-700">
            My goal is to build strong React fundamentals and become a better
            full-stack developer.
          </p>

          <div className="mt-4">
            <StatusBadge isAvailable={true} />
          </div>

          <Section title="About Me">
            <p>I am learning React and building my frontend fundamentals.</p>
          </Section>

          <Section title="My Projects">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <ProjectCard title="Developer Profile" status="Completed" />

              <ProjectCard title="Todo App" status="In Progress" />
            </div>
          </Section>
        </main>

        <aside className="rounded-lg border p-6">
          <h2 className="text-xl font-bold text-gray-900">Sidebar</h2>

          <p className="mt-2 text-gray-500">
            React learner and aspiring full-stack developer.
          </p>
        </aside>
      </div>
    </div>
  );
}

export default App;
