```javascript
// pages/about.js
import {useEffect, useState} from 'react';

export default function About() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let intervalId;
    // Simulate an API call
    intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(intervalId); // Cleanup function
  }, []);

  return (
    <div>
      <h1>About Page</h1>
      <p>Count: {count}</p>
    </div>
  );
}
```