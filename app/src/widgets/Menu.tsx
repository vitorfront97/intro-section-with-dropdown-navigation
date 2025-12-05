import Button from "../components/Button";
import Dropdown from "../widgets/Dropdown";

interface menuProps {
  openMenu: boolean;
};

export default function Menu({openMenu}: menuProps) {
  return (
    <div className={`w-2/3 h-full py-20 px-8 absolute top-0 right-0 bg-this-gray-50 z-50 transition-all duration-200 ${openMenu ? "visible opacity-100" : "invisible opacity-0"} md:py-2 md:w-auto md:h-auto md:flex md:items-center md:static md:visible md:opacity-100 md:bg-transparent`}>
      <ul className="flex flex-col gap-6 text-this-gray-500 text-[16px] font-medium md:h-auto md:flex-row md:items-center">
        <li>
          <Dropdown
            side="left"
            icon={true}
            name="Features"
            items={["Todo List", "Calendar", "Reminders", "Planning"]}
          />
        </li>
        <li>
          <Dropdown side="right" name="Company" items={["History", "Our Team", "Blog"]} />
        </li>
        <li>Careers</li>
        <li>About</li>
      </ul>
      <div className="flex flex-col items-center md:flex-row">
        <Button>Login</Button>
        <Button border="border-2 hover:border-this-gray-950">Register</Button>
      </div>
    </div>
  );
}
