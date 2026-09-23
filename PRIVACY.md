# Privacy Policy / 隐私政策

**Last updated: September 23, 2026**  
**最近更新日期：2026 年 9 月 23 日**

This Privacy Policy explains how **Cloud** ("we", "our", or "the App") handles your data and respects your privacy.  
本隐私政策旨在向您说明 **Cloud**（“我们”、“我们的”或“本应用”）如何处理您的数据并保护您的个人隐私。

---

## 1. 核心隐私原则 / Core Privacy Principles

Cloud 专为重视代码安全与隐私保护的软件工程师设计：
- **零中继与零存储 (Zero-Relay, Zero-Storage)**：我们不设任何收集或缓存您代码、Prompt、聊天会话的云端中间服务器；
- **纯私有直连 (Direct Private Connection)**：客户端与您指定的 Host 服务端建立端到端直连通信；
- **无用户画像与追踪 (No Tracking, No Profiling)**：本应用不包含广告 SDK、第三方追踪代码或分析 SDK。

---

## 2. 数据收集与处理说明 / Information We Collect

### 2.1 本地存储的配置与凭据 (Local Connection Data)
为了使应用正常连接至您的开发环境，应用会在本地持久化保存：
- 服务端地址与端口（如 `192.168.1.x:3000` 或域名）；
- 鉴权访问令牌 (Host Access Token)；
- 界面外观、字体大小及语言等偏好设置。

**安全保证**：敏感访问令牌由操作系统的硬件安全模块托管（iOS 采用 **Keychain**，Android 采用 **EncryptedSharedPreferences / Keystore**），外部应用无法读取。

### 2.2 传输中的会话与代码数据 (Session & Code Data)
- 会话交互、代码高亮、终端输出均仅在移动端与您的 Host 服务端之间传输；
- 数据均直接流向您自己托管或配置的服务端，本应用开发者无法获知、收集或审查您的任何业务数据。

---

## 3. 第三方服务与 SDK / Third-Party Services

- 本应用**不集成**任何第三方商业广告（如 Google AdMob）、行为数据分析平台（如 Google Analytics、Firebase Analytics、Flurry 等）；
- 本应用使用 Claude Agent SDK 协议与服务端通信，相关 LLM API 调用直接取决于您在服务端配置的模型服务商。请遵循相应模型服务商的数据与隐私条款。

---

## 4. 数据安全保障 / Security Measures

- 支持基于 TLS/HTTPS/WSS 的端到端加密传输；
- 支持敏感操作（命令执行、文件覆写）移动端双重确认与审批机制；
- 移动端会话缓存仅用于离线浏览历史，用户可随时通过“清空缓存”或“移除 Host”在端侧彻底擦除所有关联数据。

---

## 5. 儿童隐私 / Children's Privacy

本应用面向专业软件开发者，不针对也不意图收集 13 岁以下未成年人的个人信息。

---

## 6. 隐私政策的更新 / Changes to This Policy

若隐私政策有重大变更，我们将通过 GitHub 仓库公布最新修订版本。

---

## 7. 联系我们 / Contact Us

如果您对本隐私政策有任何疑问或需要行使您的数据权利，请通过以下方式联系：
- **GitHub Issues**: [https://github.com/cddchen/Cloud/issues](https://github.com/cddchen/Cloud/issues)
- **Email**: `cddch1n@icloud.com`
