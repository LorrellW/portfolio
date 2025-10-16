
import HomeLinklogo from "@/app/components/HomeLinkLogo";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
    const message = "{ Header. }"

  return (
    <header className="grid grid-cols-3 h-fit text-sm text-zinc-500  top-0 right-6 z-50 w-full bg-background/80 md:p-6">
        <div ><HomeLinklogo/></div>
        <div className="grid place-items-center">{message}</div>
        <div className="grid place-content-end"><ThemeToggle/></div>
    </header>
  );
}
