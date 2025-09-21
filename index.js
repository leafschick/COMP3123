const http = require("http");
const { fetchAllStaff, listStaffNamesAsc, calculateTotalPayroll } = require("./Employee");

// Bind to all interfaces to avoid any localhost/IPv6 weirdness
const HOST = process.env.HOST || "0.0.0.0";
const PORT = Number(process.env.PORT) || 8081;

console.log("Lab 03 - NodeJs");

const server = http.createServer((req, res) => {
  if (req.method !== "GET") {
    res.writeHead(405, { "Content-Type": "application/json; charset=utf-8" });
    return res.end(JSON.stringify({ error: "Method Not Allowed" }));
  }

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    return res.end("<h1>Welcome to Lab Exercise 03</h1>");
  }

  if (req.url === "/employee") {
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    return res.end(JSON.stringify(fetchAllStaff()));
  }

  if (req.url === "/employee/names") {
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    return res.end(JSON.stringify(listStaffNamesAsc()));
  }

  if (req.url === "/employee/totalsalary") {
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    return res.end(JSON.stringify({ total_salary: calculateTotalPayroll() }));
  }

  res.writeHead(404, { "Content-Type": "application/json; charset=utf-8" });
  return res.end(JSON.stringify({ error: "Not Found" }));
});

server.on("error", (e) => {
  console.error("SERVER ERROR:", e);
});

server.listen(PORT, HOST, () => {
  console.log(`Server listening at http://${HOST}:${PORT}`);
});