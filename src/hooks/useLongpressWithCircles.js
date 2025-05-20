import { useRef, useState } from "react";

export default function useLongpressWithCircles(contentRef, circlesRef) {
  const positionX = useRef(0);
  const timerRef = useRef(0);
  const isLongpress = useRef(false);
  const [circleGreen, setCircleGreen] = useState(0);

  function startPressTimer(e) {
    isLongpress.current = false;
    timerRef.current = setTimeout(() => {
      isLongpress.current = true;
      positionX.current = e.clientX || e.touches[0].clientX;
    }, 100);
  }

  function handleOnMouseDown(e) {
    startPressTimer(e);
  }
  function handleOnMove(e) {
    if (!isLongpress.current) return;

    const currentX = e.clientX || e.touches[0].clientX;
    const delta = positionX.current - currentX;

    // console.log("delta: ", delta);

    // with item : 320px
    if (Math.abs(delta) > 350) {
      // console.log("delta in if: ", delta);
      contentRef.current.scrollLeft += delta; // move list

      let newIndex = circleGreen;

      // طبق حرکت لیست بیایم دایره مورد نظر رو پیدا کنیم
      if (delta > 0 && newIndex < circlesRef.current.length - 1) {
        newIndex++;
      } else if (delta < 0 && newIndex > 0) {
        newIndex--;
      }

      if (newIndex !== circleGreen) {
        // console.log("green new : ", newIndex);
        setCircleGreen(newIndex);
      }
      positionX.current = currentX;
    }
  }

  function handleOnMouseUp() {
    clearTimeout(timerRef.current);
  }

  return {
    handlers: {
      onMouseDown: handleOnMouseDown,
      onMouseMove: handleOnMove,
      onMouseUp: handleOnMouseUp,
      onTouchStart: handleOnMouseDown,
      onTouchMove: handleOnMove,
      onTouchEnd: handleOnMouseUp,
    },
    circleGreen,
  };
}
