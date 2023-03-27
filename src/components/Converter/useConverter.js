import { useState } from "react";

export function useConverter() {
  const [rub, setRub] = useState(100);
  const [dol, setDol] = useState(1);

  return {
    rub,
    dol,
    updateDol: setDol,
    updateRub: setRub,
  };
}
