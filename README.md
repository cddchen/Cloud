# Cloud - Technical Support & Knowledge Base / 技术支持与帮助中心

Welcome to the official technical support page for **Cloud** (Mobile Companion for AI Coding Agents).  
欢迎访问 **Cloud** 官方公开技术支持与帮助中心。

> **Brand & SDK Disclaimer / 品牌与技术依赖免责声明**  
> An independent product powered by the Claude Agent SDK.  
> Not affiliated with, endorsed by, or sponsored by Anthropic.  
> 本产品是基于 Claude Agent SDK 构建的独立产品，与 Anthropic 不存在隶属、背书或赞助关系。

---

## 快速导航 / Quick Links

- [技术支持与问题反馈 / Support & Feedback](#技术支持与问题反馈--support--feedback)
- [快速入门与服务端配置 / Quick Start & Host Setup](#快速入门与服务端配置--quick-start--host-setup)
- [常见问题与故障排查 / FAQ & Troubleshooting](#常见问题与故障排查--faq--troubleshooting)
- [安全与隐私政策 / Security & Privacy Policy](#安全与隐私政策--security--privacy-policy)
- [联系与沟通 / Contact Us](#联系与沟通--contact-us)

---

## 技术支持与问题反馈 / Support & Feedback

如果您在使用 Cloud 过程中遇到任何问题、异常报错或有新功能建议，请通过以下方式联系我们：

1. **GitHub Issues (推荐)**：  
   - [提交缺陷报告 (Bug Report)](https://github.com/cddchen/Cloud/issues/new?template=bug_report.md)
   - [提交功能建议 (Feature Request)](https://github.com/cddchen/Cloud/issues/new?template=feature_request.md)
2. **技术支持邮箱 (Support Email)**：  
   `support@cddchen.com`
3. **响应时间承诺**：  
   我们通常会在 1-2 个工作日内对所有 Issue 和邮件进行响应与处理。

---

## 快速入门与服务端配置 / Quick Start & Host Setup

Cloud 采用 **客户端-服务端直连架构**。移动端应用（iOS / Android）作为控制终端，直接连接至您本地工作站或云服务器上运行的 `cc-agent-host`。

### 1. 服务端环境要求
- **操作系统**：macOS, Linux
- **运行时环境**：Node.js >= 22.0.0
- **依赖工具**：Git、Claude Agent SDK 运行环境

### 2. 启动 Host 服务
在您的开发工作站或服务器上配置环境变量并启动 Host：

```bash
# 1. 设置工作区与安全访问令牌 (Token)
export HOST_AUTH_TOKEN="your-secure-random-token"
export HOST_PORT=3000

# 2. 启动 cc-agent-host 服务
node dist/index.js --port 3000
```

### 3. 移动端配对连接
1. 打开手机端 **Cloud** 应用；
2. 进入 **连接设置 (Connection Settings)** 页面；
3. 输入您的 Host 访问地址（例如局域网 IP `http://192.168.1.100:3000` 或 Tailscale 节点地址）；
4. 填入预设的 `HOST_AUTH_TOKEN`；
5. 点击 **测试并连接**，状态变为“已连接”即可开始使用。

---

## 常见问题与故障排查 / FAQ & Troubleshooting

### Q1: 移动端提示“连接失败”或“网络超时”？
- **局域网连通性**：确认手机与 Host 服务端位于同一 Wi-Fi 或已组建内网（如 Tailscale / WireGuard）。
- **防火墙与端口**：确认服务端防火墙已放行对应端口（默认 3000）。
- **iOS 本地网络权限**：首次启动 iOS 客户端时，请确保已允许“本地网络访问”权限（设置 -> 隐私 -> 本地网络 -> Cloud）。

### Q2: 提示“鉴权失败 (Authentication Failed)”？
- 移动端填写的访问 Token 必须与 Host 端启动时配置的 `HOST_AUTH_TOKEN` 严格一致；
- 请检查是否包含多余的首尾空格或特殊换行符。

### Q3: 任务执行中途息屏或网络切换，会话会丢失吗？
- **不会**。Cloud 服务端作为权威状态源（Authoritative State），持有 Agent 运行时的完整状态机；
- 移动端支持断线自动恢复重连，重新打开 App 或恢复网络后，系统通过增量 Action 重放（Replay）与快照对齐，自动同步至当前最新会话进度。

### Q4: 敏感操作审批机制是如何运作的？
- 当 Agent 尝试执行危险命令（例如删除文件、修改重要代码或执行高风险 Bash 命令）时，服务端会触发挂起拦截；
- 您的移动端会即时收到审批弹窗（Approval Sheet），您可以选择“批准执行”或“拒绝并给出补充指示”。未经您的明确授权，Agent 无法越权执行。

---

## 安全与隐私政策 / Security & Privacy Policy

- **端到端纯直连**：您的代码文件、终端指令、模型对话均仅在您的手机与您的私有服务端之间直接传输，**绝不经过任何第三方转存服务器**。
- **凭据本地硬件级保护**：访问 Token 等凭据仅保存在手机端系统的安全存储中（iOS Keychain / Android Keystore）。
- **无追踪、无分析**：本应用不包含任何第三方广告 SDK 或行为追踪统计组件。

完整政策请参阅：[隐私政策 (Privacy Policy)](./PRIVACY.md) 与 [服务条款 (Terms of Service)](./TERMS.md)。

---

## 联系与沟通 / Contact Us

- **开发者 / 组织**：cddchen
- **官方 GitHub**：[https://github.com/cddchen/Cloud](https://github.com/cddchen/Cloud)
- **技术支持邮箱**：`support@cddchen.com`
- **最新版本**：v1.0.0
