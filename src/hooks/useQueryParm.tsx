import { useEffect, useState } from 'react';

const useQueryParam = (paramName: string): string | null => {
  const [paramValue, setParamValue] = useState<string | null>(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const value = searchParams.get(paramName);
    setParamValue(value);
  }, [paramName]);

  return paramValue;
};

export default useQueryParam;
