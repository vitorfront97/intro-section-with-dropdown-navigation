import Navbar from "./src/widgets/Navbar";
import Main from "./src/widgets/Main";

export default function Home() {
  return (
    <div className="pb-8 flex flex-col">
      <Navbar />
      <Main />
    </div>
  )
}
