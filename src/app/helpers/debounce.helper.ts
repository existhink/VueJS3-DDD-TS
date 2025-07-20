/**
 * @description Handle debounce function
 * @param func - The function to debounce
 * @param delay - The debounce delay in milliseconds
 * @returns {Function} - The debounced function
 * @example debounce((value) => console.log(value), 1000)()
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
