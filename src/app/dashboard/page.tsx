import { WidgetItem } from "@/components";

const DashboardPage = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <WidgetItem
        title="Global Activities"
        description="Compared to last week $13,988"
        values={["$23,988", "2%"]}
      />
    </div>
  );
};

export default DashboardPage;
