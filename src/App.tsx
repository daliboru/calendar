import "./App.css";
import Calendar from "./Calendar";

function App() {
  return (
    <div className="h-screen overflow-hidden relative background opacity-90 flex flex-col justify-between">
      <h1 className="mt-10 text-white font-semibold text-lg text-center flex justify-center items-center">
        Custom calendar by 👨🏻‍💻
        <a
          href="https://github.com/daliboru"
          target="_blank"
          rel="noreferrer"
          className="flex justify-center items-center text-white"
        >
          daliboru
        </a>
      </h1>
      <Calendar />
      <footer className="text-white text-center mb-10">
        <a
          href="https://daliborbelic.com/"
          className="text-green-300 text-base"
          target="_blank"
          rel="noreferrer"
        >
          &copy; Dalibor Belic
        </a>
        , check out my{" "}
        <a
          className="text-green-300 text-base"
          href="https://blog.daliborbelic.com/"
          target="_blank"
          rel="noreferrer"
        >
          blog
        </a>
      </footer>
    </div>
  );
}

export default App;
