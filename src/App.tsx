import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useIntlayer } from "react-intlayer";
import { LocaleSwitcher } from "./components/LocaleSwitcher";
import { useI18nHTMLAttributes } from "./hooks/useI18nHTMLAttributes";
import { LocaleRouter } from "./components/LocaleRouter";

function AppContent() {
  useI18nHTMLAttributes();
  const content = useIntlayer("app");

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt={content.viteLogo.value} />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="logo react"
            alt={content.reactLogo.value}
          />
        </a>

        {content.insert({ stuf: 9 }).value}
      </div>
      <p className="read-the-docs">{content.readTheDocs}</p>
      <LocaleSwitcher />
    </>
  );
}

function App() {
  return (
    <LocaleRouter>
      <AppContent />
    </LocaleRouter>
  );
}

export default App;
