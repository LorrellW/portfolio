import SocialLinks from "./SocialLinks";
export default function Footer() {

    return (
        <footer className="grid grid-cols-3 border-t place-items-center text-md p-4 md:p-6 ">
            <div className = "text-gray-400">© {new Date().getFullYear()} Lorrell Winfield</div>
            <div className=" text-zinc-500  text-sm" ></div>
            <div className="place-content-end"><SocialLinks /></div>
        </footer>
    );
}
