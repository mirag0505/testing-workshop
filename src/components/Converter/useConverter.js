import { useState } from "react";
import { rubToUsd } from "../../domain/converter";

export function useConverter(initialRubValue, course) {
  const calculatedUsdAmount = rubToUsd(initialRubValue, course);
  const [rub, setRub] = useState(initialRubValue);
  const [usd, setUsd] = useState(calculatedUsdAmount);

  function updateRub(value) {
    const rub = value;
    const usd = rubToUsd(rub, course);
    setRub(rub);
    setUsd(usd);
  }

  return {
    rub,
    usd,
    updateRub,
    updateUsd: setUsd,
  };
}
