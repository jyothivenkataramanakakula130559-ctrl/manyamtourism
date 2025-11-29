interface ScrollLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const ScrollLink = ({ href, children, onClick }: ScrollLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      onClick?.();
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-foreground/80 hover:text-foreground transition-colors font-medium"
    >
      {children}
    </a>
  );
};
