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
   `support@cddchen.com`
3. **Response Time**:
   We typically review and respond to inquiries within 1-2 business days.

---

## Quick Start & Host Setup

Cloud utilizes a **direct client-to-host architecture**. The mobile application (iOS / Android) operates as a control console that directly connects to the `cc-agent-host` instance running on your local workstation, virtual machine, or private server.

### 1. Host System Requirements
- **Operating System**: macOS, Linux
- **Runtime**: Node.js >= 22.0.0
- **Prerequisites**: Git, Claude Agent SDK runtime environment

### 2. Launching the Host Service
On your development machine or remote server, configure the environment variables and start the Host daemon:

```bash
# 1. Configure the authentication token and listening port
export HOST_AUTH_TOKEN="your-secure-random-token"
export HOST_PORT=3000

# 2. Launch the cc-agent-host service
node dist/index.js --port 3000
```

### 3. Pairing with Mobile Client
1. Launch **Cloud** on your mobile device;
2. Navigate to **Connection Settings**;
3. Enter your Host address (e.g., LAN IP `http://192.168.1.100:3000`, Tailscale node, or reverse proxy domain);
4. Enter the matching `HOST_AUTH_TOKEN`;
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
- **Support Email**: `support@cddchen.com`
- **Current Version**: v1.0.0
