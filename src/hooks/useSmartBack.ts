/**
 * useSmartBack
 * Smart back navigation:
 * - If there's browser history, goes back
 * - Otherwise falls back to the provided defaultPath
 */
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

export function useSmartBack(defaultPath: string = "/") {
  const navigate = useNavigate();

  const goBack = useCallback(() => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(defaultPath);
    }
  }, [navigate, defaultPath]);

  return goBack;
}
