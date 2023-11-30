import { useState, useEffect } from "react";

type HeadingType = {
  id: string;
  text: string | null;
  level: string;
};

const usePostToc = () => {
  const [activeId, setActiveId] = useState<string>("");
  const [headings, setHeadings] = useState<HeadingType[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.95, rootMargin: "-70px 0px -70% 0px" }
    );

    const headingElements: NodeListOf<HTMLHeadingElement> =
      document.querySelectorAll("h2, h3");

    let headings: HeadingType[] = [];

    for (const headingElement of headingElements) {
      headings = [
        ...headings,
        {
          id: headingElement.id,
          text: headingElement.innerHTML,
          level: headingElement.tagName.toLowerCase().replace("h", ""),
        },
      ];

      observer.observe(headingElement);
    }
    setHeadings(headings);
    return () => {
      observer.disconnect();
    };
  }, []);

  const handleClick = (id: string) => {
    const targetHeading = document.getElementById(id);

    if (targetHeading === null) {
      return;
    }
    window.scrollTo({
      top: targetHeading.offsetTop - 100,
      behavior: "smooth",
    });
  };

  return {
    activeId,
    headings,
    handleClick,
  };
};

export default usePostToc;
