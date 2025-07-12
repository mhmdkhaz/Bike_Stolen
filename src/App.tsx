import loadable from "@loadable/component";
import { Box } from "@mui/material";
import { Suspense, useEffect } from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { HttpResponseInterceptor } from "./interceptor/http-response.interceptor";
import { ThemeProviderWraper } from "./theme/providers/ThemeProvider";
import "./App.css";

function App() {
  const AppRoutings = loadable(() => import("./AppRouting"));

  const navigate = useNavigate();

  useEffect(() => {
    HttpResponseInterceptor(navigate);
    const handleVisibilityChange = () => {
      document.title = document.hidden ? "Come Back :(" : "Horizons school";
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);
  return (
    <>
      <Box>
        <Suspense fallback="Loading">
          <ThemeProviderWraper>
            {/* <QueryClientProvider client={queryClient}> */}
            <>
              <AppRoutings />
              <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </>
            <ReactQueryDevtools initialIsOpen={false} />
            {/* </QueryClientProvider> */}
          </ThemeProviderWraper>
        </Suspense>
      </Box>
    </>
  );
}

export default App;
