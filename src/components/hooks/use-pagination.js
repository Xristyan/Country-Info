import { useEffect } from "react";
import { useState } from "react";
let numOfShowElements = 25;
const usePagination = (data) => {
  const [pagination, setPagination] = useState([0, numOfShowElements]);

  useEffect(() => {
    setPagination([0, numOfShowElements]);
  }, [data]);
  const pageDown = () => {
    if (pagination[0] === 0) {
      return;
    }
    setPagination((prevPag) => {
      return prevPag.map((el) => {
        return el - numOfShowElements;
      });
    });
  };
  const pageUp = () => {
    if (data.length <= pagination[1]) return;
    setPagination((prevPag) => {
      return prevPag.map((el) => {
        return el + numOfShowElements;
      });
    });
  };

  return { pagination, pageUp, pageDown };
};
export default usePagination;
