import React from "react";
import { createEffect } from "solid-js";
import PullToRefresh from "../UI/PullToRefresh";

const TestPage = () => {
  const handleRefresh = () => {
    console.log("Refreshing...");
  };
  return (
    <>
      <PullToRefresh onRefresh={handleRefresh}>
        <div style={{ height: "80vh" }}>Your content here</div>
      </PullToRefresh>
    </>
  );
};

export default TestPage;
