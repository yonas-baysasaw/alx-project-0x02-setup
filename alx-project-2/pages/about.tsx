// pages/about.tsx (Updated)
import Header from "../components/layout/Header";
import Button from "../components/common/Button";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto mt-8 p-4">
        <h1 className="text-3xl font-bold mb-6">About Page</h1>
        <div className="flex space-x-4">
          <Button label="Small & Square" size="small" shape="rounded-sm" />
          <Button label="Medium & Rounded" size="medium" shape="rounded-md" />
          <Button label="Large & Pill" size="large" shape="rounded-full" />
        </div>
      </main>
    </div>
  );
};
export default AboutPage;
