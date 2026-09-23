# Cloud - Technical Support & Knowledge Base

[中文版本 (Chinese Version)](./readme_ch.md)

Welcome to the official technical support and documentation hub for **Cloud** (Mobile Companion & Control Terminal for AI Coding Agents).

> **Brand & Technology Disclaimer**
> An independent product powered by the Claude Agent SDK.
> Not affiliated with, endorsed by, or sponsored by Anthropic.
> 本产品是基于 Claude Agent SDK 构建的独立产品，与 Anthropic 不存在隶属、背书或赞助关系。

---

## Quick Navigation

- [Technical Support & Feedback](#technical-support--feedback)
- [Quick Start & Host Setup](#quick-start--host-setup)
- [FAQ & Troubleshooting](#faq--troubleshooting)
- [Privacy & Security Commitment](#privacy--security-commitment)
- [Terms & Documentation](#terms--documentation)
- [Contact Us](#contact-us)

---

## Technical Support & Feedback

If you encounter any issues, unexpected behaviors, or have feature suggestions while using Cloud, please reach out via:

1. **GitHub Issues (Recommended)**:
   - [Submit a Bug Report](https://github.com/cddchen/Cloud/issues/new?template=bug_report.md)
   - [Submit a Feature Request](https://github.com/cddchen/Cloud/issues/new?template=feature_request.md)
2. **Support Email**:
   `cddch1n@icloud.com`

---

## Quick Start & Host Setup

Cloud utilizes a **direct client-to-host architecture**. The mobile application (iOS / Android) operates as a control console, connecting to the `cloud host` running on your local workstation or cloud server via `Public Network / LAN / Tailscale Mesh`. Data is transmitted directly based on the `Claude Agent SDK`, without passing through any third-party intermediate services.

### 1. Host System Requirements & Model Authorization
- **Operating System**: macOS, Linux
- **Runtime**: Node.js >= 22.0.0
- **Core Prerequisite**: **Claude Code** (Host requires a locally installed, functional Claude Code environment)
- **Model Authentication Options (Flexible)**:
  - **Official Subscription**: Works out-of-the-box with official Anthropic Claude subscriptions (Pro / Team / Enterprise, etc.) logged into Claude Code;
  - **Third-Party API / Reverse Proxy**: Fully supports custom API Keys and proxy endpoints via environment variables (such as `ANTHROPIC_API_KEY` and `ANTHROPIC_BASE_URL`), seamlessly working with third-party providers or corporate internal gateways.

### 2. Launching the Host Service
Configure parameters or environment variables on your workstation or server and start the Host:

```bash
# 1. Start via CLI parameters
# Default port: 8787 (if not specified)
# Default token: random 6-digit number (if not specified)
# Default network: LAN (omit --global) or Public/Tailscale (--global)
npx @cddchen/cloud@latest start --port=8787 --token=your-secure-random-token --global

# 2. Or configure via environment variables
export HOST_AUTH_TOKEN="your-secure-random-token"
export HOST_PORT=3000
npx @cddchen/cloud@latest start --global
```

### 3. Pairing with Mobile Client
1. Launch **Cloud** on your mobile device;
2. Navigate to **Connection Settings**;
3. Enter your Host address (e.g., LAN IP `http://192.168.1.100:3000` or Tailscale node address);
4. Enter the configured `token`;
5. Tap **Test & Connect**. Once connected, your active workspaces and sessions will automatically synchronize.

---

## FAQ & Troubleshooting

### Q1: Mobile app displays "Connection Failed" or "Request Timeout"?
- **Network Reachability**: Ensure your mobile device and the Host server are on the same local Wi-Fi network, or interconnected via a private VPN/mesh network (such as Tailscale or WireGuard).
- **Firewall & Ports**: Check that your host firewall allows inbound connections on the configured port (default: 3000).
- **iOS Local Network Permission**: On iOS, make sure you have granted Local Network permissions to Cloud (`Settings -> Privacy & Security -> Local Network -> Cloud`).

### Q2: Authentication failed ("Invalid Token")?
- The token entered in the mobile app must strictly match the `HOST_AUTH_TOKEN` environment variable on the Host.
- Verify that no leading or trailing whitespace was accidentally copied.

### Q3: Will long-running agent tasks abort if the phone locks or goes to background?
- **No.** The Host server holds authoritative agent state and execution lifecycles. Agent reasoning, command runs, and tool chains continue uninterrupted on the host.
- When the mobile app returns to the foreground, it performs automatic replay and snapshot reconciliation to immediately catch up with the latest progress.

### Q4: How does sensitive operation approval work?
- When an agent attempts potentially destructive operations (e.g., file overwrites, deletions, or high-risk bash commands), execution halts until confirmed.
- An interactive **Approval Sheet** immediately appears on your phone, allowing you to review the exact command and either approve it or reject it with additional instructions.

### Q5: Is Claude Code mandatory on the Host? What authorization methods are supported?
- **Yes.** Cloud Host operation fundamentally relies on the locally configured **Claude Code** environment.
- **Highly Flexible Authorization**:
  1. **Official Subscription**: Log in directly with your official Claude Pro / Team / Enterprise account on the host;
  2. **Third-Party API / Proxy**: Fully supports configuring custom API keys and proxy base URLs (e.g., `ANTHROPIC_API_KEY`, `ANTHROPIC_BASE_URL`), without restrictions from official web subscriptions.

---

## Privacy & Security Commitment

- **Zero Relay & Direct Connection**: All code snippets, prompts, terminal outputs, and chat histories stream exclusively between your mobile device and your private Host. No intermediary cloud server caches or inspects your intellectual property.
- **Hardware-Backed Credential Storage**: Sensitive credentials (such as access tokens) are stored in the platform's secure enclave (iOS **Keychain** / Android **Keystore**).
- **Zero Telemetry**: No third-party behavioral trackers, analytics frameworks, or ad SDKs are bundled.

---

## Terms & Documentation

- [Privacy Policy (App Store Compliant)](./PRIVACY.md)
- [Terms of Service](./TERMS.md)
- [中文版支持页面 (Chinese Support Page)](./readme_ch.md)

---

## Contact Us

- **Maintainer**: cddchen
- **Repository**: [https://github.com/cddchen/Cloud](https://github.com/cddchen/Cloud)
- **Support Email**: `cddch1n@icloud.com`
- **Current Version**: v1.0.0
