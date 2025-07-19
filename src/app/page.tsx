import { DarkModeToggle } from "@/components/common/darkmode-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div>
      <Input />
      <Button className="dark:bg-amber-500 bg-blue-600">Hello</Button>
      <DarkModeToggle />
    </div>
  );
}
