import getOs, { handleCopyFile } from "./node_integration.js";
import cjs from "./node.cjs";
import { telDesensitization } from "javascript-common-tools";

// getOs();
// handleCopyFile();
cjs.joinPath();
console.log(telDesensitization("13599999999", 2));
