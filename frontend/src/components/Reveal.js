import { useEffect, useRef, useState } from "react";

function Reveal({ children, className = "", delay = 0, as = "div" }) {
  const [visible, setVisible] = useState(false);
  const elementRef = useRef(null);
  const Tag = as;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return undefined;
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={elementRef}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
