import { useEffect, useRef, useState } from "react";

function useHover() {
    const [ isHovered, setisHovered ] = useState(false)
    const hoverRef = useRef(null)

    function handleMouseEnter() {
      setisHovered(true);
    }

    function handleMouseLeave() {
      setisHovered(false);
    }

    useEffect(() => {
      const domRef = hoverRef.current

      domRef.addEventListener("mouseover", handleMouseEnter);
      domRef.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        domRef.removeEventListener("mouseover", handleMouseEnter);
        domRef.removeEventListener("mouseleave", handleMouseLeave);
      }
    }, [])

    return [ isHovered, hoverRef ]
}

export default useHover;