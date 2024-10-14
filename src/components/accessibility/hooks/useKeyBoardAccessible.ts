import { KeyboardEvent, useCallback } from "react";

type KeyHandler = (event: KeyboardEvent) => void;

export const useKeyboardAccessible = (
  onEnter?: KeyHandler,
  onSpace?: KeyHandler,
) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case "Enter":
          onEnter?.(event);
          break;
        case " ":
          onSpace?.(event);
          break;
      }
    },
    [onEnter, onSpace],
  );

  return {
    tabIndex: 0,
    onKeyDown: handleKeyDown,
  };
};
