import { lazy, Suspense } from "react";
import Loading from "@comp/Loading/Loading";

const LazyLoad = (importFunc) => {
  const LazyComponent = lazy(importFunc);

  // eslint-disable-next-line react/display-name
  return (props) => (
    <>
      <Suspense fallback={<Loading />}>
        <LazyComponent {...props} />
      </Suspense>
    </>
  );
};

export default LazyLoad;
