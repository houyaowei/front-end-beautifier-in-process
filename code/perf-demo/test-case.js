function init() {
  document.body.append("from Load");
}
function load() {
  //资源包括HTML 文档、 XHR 对象、链接(例如样式表)或 SVG 元素
  // const Resource = performance.getEntriesByType("resource");
  // console.log("Resource:", Resource);

  //fp和fcp
  const paintEntities = window.performance.getEntriesByType("paint");
  paintEntities.forEach((item) => {
    const { name, startTime } = item;
    console.log(`Metric Name: ${name}, StartTime: ${startTime}`);
  });

  // LCP
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      console.log("LCP candidate:", entry.startTime, entry);
    }
  }).observe({ type: "largest-contentful-paint", buffered: true });

  //fid
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      const delay = entry.processingStart - entry.startTime;
      console.log("FID candidate:", delay, entry);
    }
  }).observe({ type: "first-input", buffered: true });

  new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      console.log("navigation candidate: ", entry.startTime, entity);
    }
  }).observe({ entryTypes: ["navigation"] });

  //cls
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      // 只将不带有最近用户输入标志的布局偏移计算在内。
      if (!entry.hadRecentInput) {
        const firstSessionEntry = sessionEntries[0];
        const lastSessionEntry = sessionEntries[sessionEntries.length - 1];

        if (
          sessionValue &&
          entry.startTime - lastSessionEntry.startTime < 1000 &&
          entry.startTime - firstSessionEntry.startTime < 5000
        ) {
          sessionValue += entry.value;
          sessionEntries.push(entry);
        } else {
          sessionValue = entry.value;
          sessionEntries = [entry];
        }
        if (sessionValue > clsValue) {
          clsValue = sessionValue;
          clsEntries = sessionEntries;
          console.log("CLS:", clsValue, clsEntries);
        }
      }
    }
  }).observe({ type: "layout-shift", buffered: true });
}

function test_other_func() {
  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    for (const entry of entries) {
      console.log("resource entity:", entry);
    }
  });
  observer.observe({ entryTypes: ["measure"] });

  setTimeout(() => {
    const unprocessedEntries = observer.takeRecords();
    for (const entry of unprocessedEntries) {
      console.log("Unprocessed entry:", entry);
    }
  }, 1000);
}

init();
setTimeout(() => {
  load();
  test_other_func();
}, 2000);
