import SocialLinks from "./SocialLinks";
export default function Footer() {
    const text = "{ Footer. }"
    return (
        <footer className="grid grid-cols-3 border-t place-items-center text-md p-4 md:p-6 ">
            <div>© {new Date().getFullYear()} Lorrell Winfield</div>
            <div className=" text-zinc-500  text-sm" > {text} </div>
            <div className="place-items-end"><SocialLinks /></div>
        </footer>
    );
}
