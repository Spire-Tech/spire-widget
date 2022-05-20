import { useMemo } from "preact/hooks"
import useIsMounted from "./useMounted"

const useValidate = (value, testParameter, status, message) => {
  const mounted = useIsMounted()
  return useMemo(() => (mounted.current && (!value || !testParameter) ? message : ''), [value, mounted, status])
}

export default useValidate