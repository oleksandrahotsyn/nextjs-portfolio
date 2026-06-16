const URL = "https://nextjs-portfolio-red-seven-91.vercel.app/api/contact";

const requestsCount = 10;

async function sendRequest(index) {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: `load test ${index}`,
        contact: "0000000000",
        service: "test",
        message: "stress test",
        website: "",
      }),
    });

    const text = await response.text();

    console.log(`#${index} | status: ${response.status} | ${text}`);
  } catch (error) {
    console.error(`#${index} error:`, error.message);
  }
}

async function runStressTest() {
  console.log("Stress test started...");

  for (let i = 1; i <= requestsCount; i++) {
    await sendRequest(i);
  }

  console.log("Stress test finished.");
}

runStressTest();