![Java](https://img.shields.io/badge/Built%20With-Java-blue)
![last commit](https://img.shields.io/github/last-commit/RushikeshDeveloper007/SailPoint-IIQ-Integration-Accelerator)
![Status](https://img.shields.io/badge/Project-Active-brightgreen)

# SailPoint IIQ Integration Accelerator

An enterprise-grade SailPoint IdentityIQ integration project that simulates real-world identity governance, provisioning automation, and compliance workflows. Built to showcase expertise in SailPoint engineering, lifecycle orchestration, access reviews, and DSAR compliance for privacy regulations.

---

## 🔑 What's Included

- **Custom REST Connector** – Java-based SailPoint IIQ connector for REST API integration
- **Joiner-Mover-Leaver Automation** – Beanshell rules for provisioning and lifecycle management
- **Mock Target System** – Node.js API simulating a real HR/business app
- **Test Data Generator** – Java-based script to simulate HR-driven identity events
- **DSAR Generator** – Script to simulate privacy compliance (GDPR, CCPA)
- **RBAC Role Modeling** – JSON-based business-aligned access structure
- **Access Review Template** – Sample review campaign to simulate certification
- **IAM Audit Summary** – Mock audit report validating access controls and compliance readiness

---

## 💻 Developer Tools

### 1. Mock Deployment Tool (`iiq-deploy.sh`)
Simulates deployment of a rule or object to IIQ.
```bash
./workflows/dev-tools/iiq-deploy.sh rules/ProvisioningRule.xml

### 🔄 Sample Usage: Mock Deploy

```bash
$ ./workflows/dev-tools/iiq-deploy.sh rules/ProvisioningRule.xml
 Simulating deployment of rules/ProvisioningRule.xml to SailPoint IdentityIQ...
✅ Mock deploy completed successfully.



