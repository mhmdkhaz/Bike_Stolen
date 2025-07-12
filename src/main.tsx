import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./App";
import { ThemeProviderWraper } from "./theme/providers/ThemeProvider";
import queryClient from "./queryClient";

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus: false,
//       retry: false,
//     },
//   },
// });

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <BrowserRouter>
      <Suspense fallback="Loading...">
        <QueryClientProvider client={queryClient}>
          <ThemeProviderWraper>
            <ToastContainer />
            <App />
          </ThemeProviderWraper>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Suspense>
    </BrowserRouter>
  );
} else {
  console.error("Root element not found!");
}
