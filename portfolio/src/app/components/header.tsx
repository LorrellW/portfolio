
import HomeLinklogo from "@/app/components/HomeLinkLogo";

export default function Header() {
    const message = "{ Header. }"

  return (
    <header className="grid grid-cols-3 h-fit text-sm text-zinc-500 place-items-center top-0 right-6 z-50 w-full bg-background/80 md:p-6">
        <div ><HomeLinklogo/></div>
        <div>{message}</div>
        <div className="grid-flow-col justify-items-center"></div>
    </header>
  );
}
