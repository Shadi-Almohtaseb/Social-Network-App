import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { db } from "../firebase.config";
const useFetchPosts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const query = ref(db, "posts");
    return onValue(query, (snapshot) => {
      if (snapshot.exists()) {
        setData(snapshot.val());
      }
    });
  }, []);

  function sortByDate(a, b) {
    if (b.date > a.date) {
      return 1;
    }
    if (b.date < a.date) {
      return -1;
    }
    return 0;
  }

  const sorted = data.sort(sortByDate);

  return { sorted, data, sortByDate };
};
export { useFetchPosts };
