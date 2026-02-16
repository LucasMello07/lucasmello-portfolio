import { Home, User, Code, Briefcase, Mail } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

const navItems = [
  { name: "Home", url: "#home", icon: Home },
  { name: "Sobre Mim", url: "#sobre", icon: User },
  { name: "Habilidades", url: "#habilidades", icon: Code },
  { name: "Projetos", url: "#projetos", icon: Briefcase },
  { name: "Contato", url: "#contato", icon: Mail },
];

const Header = () => {
  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return <NavBar items={navItems} onItemClick={handleClick} />;
};

export default Header;
