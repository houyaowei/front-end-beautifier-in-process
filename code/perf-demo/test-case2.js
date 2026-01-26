// mark标记
performance.mark("mark-test-start");

const observer = new PerformanceObserver((entryList) => {
  entryList.getEntries().forEach((entry) => {
    var logMark = "";
    var logMeasure = "";
    if (entry.entryType === "mark") {
      logMark = `${entry.name}的startTime是: ${entry.startTime}`;
      console.log(logMark);
    }
    if (entry.entryType === "measure") {
      console.log(
        (logMeasure = `${entry.name}的duration时间是: ${entry.duration}`),
      );
    }
  });
});
observer.observe({
  entryTypes: ["mark", "measure"],
});
performance.mark("mark-test-end");
//点击事件
document.getElementById("btn").addEventListener("click", () => {

  const testMeasure = performance.measure("mark-test-start", "mark-test-end");
  console.log(testMeasure);
});
