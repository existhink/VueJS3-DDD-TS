import { ref, type Ref } from 'vue';
import type { AxiosRequestConfig } from 'axios';

export const useHttpAbort = () => {
  const httpAbort_request: Ref<Record<string, AbortController>> = ref({});

  const httpAbort_abortAllRequest = (): void => {
    if (Object.keys(httpAbort_request.value).length > 0) {
      Object.values(httpAbort_request.value).forEach((controller: AbortController) => {
        if (!controller.signal.aborted) controller.abort();
      });
      httpAbort_request.value = {};
    }
  };

  /**
   * @description Clear request id from state ref
   */
  const httpAbort_clearRequest = (id: string): void => {
    if (httpAbort_request.value[id]) delete httpAbort_request.value[id];
  };

  /**
   * @description Handle abort request by id.
   */
  const httpAbort_abortRequest = (id: string): void => {
    const request = httpAbort_request.value[id] ?? null;

    if (request && !request.signal.aborted) {
      request.abort();
    }

    httpAbort_clearRequest(id);
  };

  /**
   * @description Handle abort requests by list of ids.
   */
  const httpAbort_abortRequests = (ids: string[]): void => {
    for (const id of ids) {
      httpAbort_abortRequest(id);
    }
  };

  /**
   * @description Handle set abort controller.
   */
  const httpAbort_setAbortController = (id: string): AxiosRequestConfig => {
    const abortController = new AbortController();
    httpAbort_request.value[id] = abortController;

    return { signal: abortController.signal };
  };

  /**
   * @description Handle register abort controller.
   */
  const httpAbort_registerAbort = (id: string): AxiosRequestConfig => {
    if (httpAbort_request.value[id]) httpAbort_abortRequest(id);

    return httpAbort_setAbortController(id);
  };

  return {
    httpAbort_abortRequest,
    httpAbort_abortRequests,
    httpAbort_abortAllRequest,
    httpAbort_clearRequest,
    httpAbort_registerAbort,
    httpAbort_setAbortController,
  };
};
