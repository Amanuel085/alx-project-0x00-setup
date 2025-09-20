import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>

      <div className="flex gap-4 flex-wrap mb-6">
        <Button title="Small Rounded" styles="text-sm rounded-sm" />
        <Button title="Medium Rounded" styles="text-base rounded-md" />
        <Button title="Large Rounded" styles="text-lg rounded-full" />
        <Button title="Extra Rounded" styles="text-lg rounded-lg" />
      </div>

      <Card />
      <Card />
    </div>
  );
};

export default Landing;