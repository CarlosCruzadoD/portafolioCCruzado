import './styles/sectionSvg.css';
import type { ReactNode } from "react";

interface SectionSvgProps {
  children: ReactNode;
}

const SectionSvg = ({ children }: SectionSvgProps) => {
  return (
    <div className="icon-container flex items-center justify-center">
        {children}
    </div>
  )
}

export default SectionSvg