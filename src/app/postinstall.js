const { execSync } = require("child_process");

if (process.platform === "linux") {
  console.log("Detected Linux environment. Installing @next/swc-linux-x64-gnu...");
  execSync("npm install @next/swc-linux-x64-gnu", { stdio: "inherit" });
} else {
  console.log("Skipping SWC installation for non-Linux environments.");
}
