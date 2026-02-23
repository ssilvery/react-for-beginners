import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => { setKeyword(event.target.value); }
  useEffect(() => {
    console.log("I run only once");
  }, []);

  useEffect(() => {
      console.log("SEARCH 'keyword' FOR" );
  }, [keyword]);
  useEffect(() => {
      console.log("SEARCH 'counter'");
  }, [counter]);
  useEffect(() => {
      console.log("===============");
  }, [keyword, counter]);
  
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1 className={styles.title}>{counter}</h1>
      <Button text={"click me"} onClick={onClick} />
    </div>
  );
}

export default App;
