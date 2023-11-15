import { useEffect, RefObject } from "react";
interface EventListenerProps {
  target: EventTarget | null;
}

export function useOnHoverOutside(
  ref: RefObject<HTMLElement>,
  handler: (event: EventListenerProps) => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler({ target: event.target });
    };

    document.addEventListener("mouseover", listener);

    return () => {
      document.removeEventListener("mouseout", listener);
    };
  }, [ref, handler]);
}
