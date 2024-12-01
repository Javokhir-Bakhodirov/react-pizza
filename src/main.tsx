import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ProductContext } from "./context/Context.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            refetchOnWindowFocus: false,
            staleTime: 1000 * 60 * 10,

            // @ts-ignore
            cacheTime: 1000 * 60 * 5,
        },
    },
});

createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <Provider store={store}>
                <ProductContext>
                    <App />
                </ProductContext>
            </Provider>
        </BrowserRouter>
    </QueryClientProvider>
);
