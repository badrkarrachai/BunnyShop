import React, { useRef, useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref:any, setVisible:any) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event:any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setVisible(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setVisible]);
}

/**
 * Component that alerts if you click outside of it
 */
interface OutsideAlerterProps{
  children: any;
  setVisible:any;
  classOfIt:string;
}
export default function OutsideAlerter(props:OutsideAlerterProps) {
  const wrapperRef = useRef(null);
  const { setVisible } = props;
  

  useOutsideAlerter(wrapperRef, setVisible);

  return <div className={props.classOfIt} ref={wrapperRef}>{props.children}</div>;
}
