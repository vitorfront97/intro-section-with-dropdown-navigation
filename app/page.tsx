import Navbar from "./src/widgets/Navbar";
import Main from "./src/widgets/Main";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Main />
    </div>
  )
}
