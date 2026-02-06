---
theme: seriph
background: https://cover.sli.dev
title: Élan Framework Introduction
info: |
  ## Élan Framework
  Presentation for European Central Banks
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
---

# Élan
## Institutional Governance Engineering

The disciplined momentum of a system that knows *why* it moves.

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/nnworkspace/elan" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
Presenter Notes:
- Welcome everyone.
- Title: Élan. Derived from "Enable Automation".
- Purpose: A workbench for high-stakes projects (like Digital Euro).
-->

---
transition: fade-out
---

# The Institutional Challenge

Why do large-scale institutional projects struggle?

<div class="grid grid-cols-2 gap-10 mt-10">

<div v-click>

### It's rarely a lack of skill.
It's usually **Semantic Entropy**.

The gap between:
- **Policy Intent** (Laws, Rules)
- **Technical Implementation** (Code, configs)

</div>

<div v-click>

### The Symptom: Documentation Theatre

- **Rules** live in static pdfs.
- **Code** lives in dynamic Git.
- **They drift apart.**

</div>

</div>

<!--
Presenter Notes:
- We have great lawyers and great engineers.
- The problem is the gap between them.
- "Semantic Entropy": The gradual loss of meaning as you move from Policy to Code.
-->

---

# The Solution: Élan

A demonstrative workbench for **Institutional Governance Engineering**.

<div class="mt-10 p-6 bg-gray-100 rounded-lg dark:bg-gray-800 border-l-8 border-blue-600">

## Philosophy: Integrity > Velocity

In high-stakes environments (e.g., Currency, Medical, Aerospace), you must prove that **what you built matches what you intended**.

</div>

<br>

### The "V-Model" Reimagined
It is not about a slow waterfall process. It is about explicit **Layers of Intent**.

---

# The Anatomy of the Workbench

A visual stacking of intent.

<div class="grid grid-cols-2 gap-4">

<div>

| Layer | Name | Purpose |
|---|---|---|
| **00** | **Project Governance** | The "Constitution" |
| **10** | **Legal Framework** | The Mandate |
| **20** | **Rulebook** | The Operational Logic |
| **30** | **Architecture** | The Design & Boundaries |
| **40** | **Specifications** | The Load-Bearing Structure |
| **50** | **Tests** | **The Evidence** |
| **60** | **Code** | The Implementation |
| **70** | **Reports** | **The Confidence** |
| **80** | **Automation** | The "Police" |

</div>

<div class="flex items-center justify-center">

```mermaid {scale: 0.9}
graph TD
    L[10-Legal] --> R[20-Rulebook]
    R --> S[40-Specs]
    S --> T[50-Tests]
    T --> C[60-Code]
    
    auth[80-Automation] -.->|Enforces| L
    auth -.->|Enforces| R
    auth -.->|Enforces| S
    auth -.->|Enforces| T
    auth -.->|Enforces| C
    
    T -.->|Generates| Rep[70-Reports]
    C -.->|Generates| Rep
```

</div>

</div>

---

# 40-Specifications: The Pivot Point

Specifications are the **load-bearing structure** of the project.

<div class="grid grid-cols-2 gap-10 mt-6">

<div>

### What they are NOT
- Tickets (Jira, Issues)
- Ephemera
- "Nice to have"

</div>

<div>

### What they ARE
- **Stable**
- **Versioned**
- **Machine-Readable**
- **Normative**

</div>

</div>

> "Tickets coordinate work. Specifications define the system."

---

# 50-Tests: The Evidence (Test-Driven Governance)

We define **HOW** we verify before we build **WHAT** verifies.

<div class="grid grid-cols-2 gap-10 mt-6">
<div>

### Claims
"The system must preclude reverse-waterfall failure."

</div>

<div>

### Evidence
"Here is the cryptographic proof / test run that confirms it."

</div>
</div>

<br>

**Key Principle**:
Verification artefacts (50) are **upstream** of Implementation (60).
Code exists primarily to **pass the tests** and produce the evidence.

---

# 60-Code: The Workbench

Implementation is distributed, but governance is unified.

<div class="grid grid-cols-2 gap-4">

<div>

### Component-Based
- **Not a Monolith**.
- Components owned by different institutions (ECB, PSPs, etc.).
- Different technology stacks (Java, Node, Rust).

</div>

<div>

### Unified by Governance
- Every component has a `manifest.yaml`.
- Every component traces back to `40-Specs`.
- Every component is policed by `80-Automation`.

</div>

</div>

---

# 80-Automation: The "Police"

Active Governance vs. Passive Documentation.

<div class="mt-4">

**Bureaucracy-as-Code**
Linting rules (`LINT-C1`, `LINT-T2`) enforce the constitution.

</div>

```mermaid
sequenceDiagram
    participant Dev as Developer
    participant Git as Workbench
    participant CI as 80-Automation
    
    Dev->>Git: Commit Code
    Git->>CI: Trigger Pipeline
    CI->>CI: Check Traceability (Spec -> Code)
    CI->>CI: Check Evidence (Tests Passed?)
    
    alt Violation
        CI-->>Dev: ❌ Reject: "LINT-T2: Missing Spec Reference"
    else Compliance
        CI-->>Dev: ✅ Accept & Generate Report
    end
```

---

# 70-Reports: The Confidence (For Managers)

Where "Trust" becomes visible.

<div class="mt-6 p-4 border border-green-500 rounded">

### Not Manual Status Slides
These are **Automated, Truth-Based Views**.

*   **Progress**: What % of the Rulebook is implemented?
*   **Coverage**: Which specs are missing tests?
*   **Compliance**: Are we legally safe?

</div>

<br>

Managers do not need to read code. They need to read **Audit-Ready Evidence**.
This folder provides exactly that, generated fresh on every commit.

---

# Traceability: The Golden Thread

Every artefact is linked.

```mermaid
graph LR
    Law(Law) --> Rule(Rule)
    Rule --> Spec(Specification)
    Spec --> Test(Test/Evidence)
    Test --> Impl(Implementation)
    
    style Law fill:#f9f,stroke:#333,stroke-width:2px
    style Impl fill:#bbf,stroke:#333,stroke-width:2px
    style Test fill:#bfb,stroke:#333,stroke-width:4px
```

<div class="text-center mt-10 text-xl font-bold">
If the chain breaks, the build fails.
</div>

---
layout: center
class: text-center
---

# Summary

**Élan** is a system that allows diverse builders to work together without losing intent.

It replaces "Trust me" with **"Here is the proof"**.

<div class="mt-10">
  <span class="text-2xl font-mono">Clone. Fork. Adapt.</span>
</div>
