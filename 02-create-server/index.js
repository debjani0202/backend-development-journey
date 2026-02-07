const http = require("http");

const server = http.createServer((req, res) => {
  
  res.setHeader("Content-Type", "application/json");

  if (req.url === "/news") {
    const newsData = {
      status: 1,
      data: [
        { newsId: 1, title: "hello js" },
        { newsId: 2, title: "hello java" },
        { newsId: 3, title: "hello python" }
      ]
    };

    res.end(JSON.stringify(newsData));
    return;
  }

  // Default response
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello from Node.js Server");
});

server.listen(8000, () => {
  console.log("Server running at http://localhost:8000");
});
