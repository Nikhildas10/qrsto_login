import BgLogin from "./components/BgLogin";
import Login from "./components/Login";

export default function Home() {
  return (
    <main className="flex">
    <Login/>
    <BgLogin/>
    </main>
  );
}
