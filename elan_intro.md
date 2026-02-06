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

### It's rarely a lack of domain skill.
It's usually **Semantic Entropy**.

The gap between:
- **Policy Intent** (Laws, Rules)
- **Technical Implementation** (Code, configs)

</div>

<div v-click>

### The Symptom: Documentation Theatre

- **Rules** live in static Word documents or PDFs.
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

<div class="grid grid-cols-2 gap-2 text-xs">

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

```mermaid {scale: 0.4}
graph TD
    R[20-Rulebook] --> |references| L[10-Legal]
    A[30-Arch] --> |references| R[20-Rulebook]
    S[40-Specs] --> |references| A[30-Arch]
    T[50-Tests] --> |references| S[40-Specs]
    C[60-Code] --> |references| T[50-Tests]
    
    auth[80-Automation] -.->|Enforces<br>governance| L
    auth -.->|Enforces<br>governance| R
    auth -.->|Enforces<br>governance| A
    auth -.->|Enforces<br>governance| S
    auth -.->|Enforces<br>governance| T
    auth -.->|Enforces<br>governance| C
    auth -.->|Generates| Rep[70-Reports]
    
    Rep -.-> |Summarizes| L
    Rep -.-> |Summarizes| R
    Rep -.-> |Summarizes| A
    Rep -.-> |Summarizes| S
    Rep -.-> |Summarizes| T
    Rep -.-> |Summarizes| C
```

</div>

</div>

---

# 00-project-governance: The Constitution

The rules of the workbench.

<div class="grid grid-cols-2 gap-10 mt-6">

<div>

### Normative by Design
Governance is not an overlay. It is **part of the system**.

- **Who**: Project Governance Board.
- **What**: Defines how we work, not what we build.
- **Why**: To prevent institutional amnesia.

</div>

<div>

### Key Purpose
Establishes the **Fundamental Constraints**:

1.  **Classification**: What is Public vs. Restricted?
2.  **Traceability**: How do we link Policy to Code?
3.  **Auditability**: How do we prove what happened?

</div>

</div>

<br>

> "Civilised systems begin with law."

---

# 00-project-governance: The Instruments

We use precise instruments to enforce the constitution.

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

### artefact-classification.md
**Visibility & Handling**.
Every file must declare its audience (Public, Confidential) and Owner.

### logical-system-and-visibility.md
**The Boundary**.
Logical Unity vs. Physical Distribution. The system is one, even if repos are many.

</div>

<div>

### branching-strategy.md
**The Workflow**.
Protected Main. Feature Branches. No Release Branches (Tags only).

### commit-message-conventions.md
**The History**.
Strict rules (Conventional Commits) to ensure the git log is an audit trail.

### linting-rules.md
**The Enforcer**.
Automated rules (`LINT-C1`) that fail the build if governance is violated.

</div>

</div>

---

# 00-project-governance: Configuration Management

How we maintain order over time.

<div class="grid grid-cols-2 gap-10 mt-6">

<div>

### The Philosophy: Atomic Baselines
We do not version files. **We version Sets**.

- **Manifests** (`manifest.yaml`) are the Single Source of Truth.
- A "Release" is a snapshot of verifyable, compatible components.

</div>

<div>

### Version-Aware Traceability
Dependencies are explicit.

`Trace: @spec=SPEC-SET-ONB:1.2.0`

**Drift Detection**:
If code targets `v1.2.0` but the spec is `v1.3.0`, the build fails.

</div>

</div>

<br>

> "Civilised systems require a shared understanding of time and state."

---

# 10-Legal & 20-Rulebook: The Policy Foundation

The inputs to the system.

<div class="grid grid-cols-2 gap-10 mt-6">

<div>

### 10-Legal Framework
**The Mandate**.
Policy is not background context; it is **foundational input**.

- **Purpose**: Preserves legislative intent.
- **Content**: Treaties, Regulations, Acts.
- **Role**: Defines **Rights**.

</div>

<div>

### 20-Rulebook
**The Operational Logic**.
The bridge between Law and Tech.

- **Purpose**: Translates "Mandates" into "Rules".
- **Content**: Domain Logic (e.g. Payments, Medical).
- **Role**: Defines **Obligations**.

</div>

</div>

<br>

> "Code does not implement policy; code implements rules."

---

# 30-architecture: The Blueprint

Architecture acts as both **Reference** and **Constraint**.

<div class="grid grid-cols-2 gap-10 mt-6">

<div>

### Three Primary Views

- **System Context**  
  High-level ecosystem view.
- **Component Inventory**  
  Logical blocks & services.
- **Security & Privacy Zones**  
  Data boundaries & trust.

</div>

<div>

### Traceability Bridge
Specifications are **anchored** to the architecture.

`Upstream Arch: @arch=SET-ARCH:0.1.0`

**Constraint**: You cannot specify a feature that violates the architectural boundaries.

</div>

</div>

<br>

> "Architecture tells the builder **where** the walls are, so the Specification can define **how** to paint them."

---

# 40-specifications: The Pivot Point

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
- **Easily consumable by machine**
- **Normative**

</div>

</div>

<br>

> "Tickets coordinate work. Specifications define the system."

---

# 50-tests: The Evidence

Not just "testing". **System-Level Assurance**.

<div class="grid grid-cols-2 gap-10 mt-6">
<div>

### The Philosophy
We define **How to Verify** before we build **What Verifies**.

- **Claims**: "What must be true?" (Stable)
- **Evidence**: "How do we prove it?" (Evolving)
- **Tools**: Implementation details (Transient)

</div>

<div>

### Assurance Categories
Structured evidence, not random scripts.

- **100-Conformance**: Functional Scenarios.
- **200-Contracts**: API Schemas & Interfaces.
- **300-Security**: Abuse Cases & Auth Rules.
- **400-Operational**: Performance & Resilience SLOs.
- **900-Vectors**: Golden Data & Invariants.

</div>
</div>

<br>

> "Unit tests belong in the code (60). **System Assurance** belongs here (50)."

---

# 60-code: The Workbench

Implementation is distributed, but governance is unified.

<div class="grid grid-cols-2 gap-8 mt-6">

<div>

### Domain Components
The actual functional pieces (illustrative).
- **`access-gateway`**: Entry point.
- **`desp`**: Central processing.
- **`psp-1`**: Participant adapter.

*Owned by different institutions. May live in different repos.*

</div>

<div>

### Governance Instrumentation
Shared libraries that enforce the references to upstream specs and other rules.
- **`governance-common-java`**
- **`governance-common-rust`**
- **`governance-common-nodejs`**

*Polyglot unification of traceability.*

</div>

</div>

> "Components first, not features. Unified by Manifests."

---

# 70-reports: Derived Evidence

Not manually authored. **Generated from the Truth**.

<div class="grid grid-cols-2 gap-8 mt-6">

<div>

### 1. The Matrix ("Traceability")
- **`traceability/`**: Links Specs (`40-`) to Code (`60-`).
- *Proof that every line of code has a reason.*

### 2. The Risk State ("Assurance")
- **`assurance/`**: Security & Test validation results.
- **`dependencies/`**: SBOM & Supply Chain risks.

</div>

<div>

### 3. The Audit ("Compliance")
- **`compliance/`**: Evidence snapshots for regulators.
- **`weekly-progress/`**: Automated status summaries.

<br>

> "Trust comes from **Reproducibility**, not PowerPoints."

</div>

</div>

---

# 80-automation: Active Governance Engine

The **Constitutional Rails**.

<div class="grid grid-cols-2 gap-8 mt-6">

<div>

### 1. Pipelines ("The Factory")
- **Gatekeeper**: Static Policy & Drift Detection.
- **Orchestration**: Ephemeral TestNets & Conformance.
- **Reporting**: Chain of Custody & WORM Archiving.

### 2. Analytical ("The Risk Engine")
- **Spec Architect**: Parses Markdown into Semantic Graph.
- **Change Impact Analyzer**: Calculates "Blast Radius".

### 3. AI Oracle ("The Advisor")
- **RAG-based**: Context-aware guidance.
- **Reduction**: Low cognitive load.

<br>

> "Bureaucracy-as-Code: Turning bottlenecks into enablers."

</div>

<div>

```mermaid {scale: 0.5}
sequenceDiagram
    actor Contributor
    participant Git as Workbench
    participant CI as 80-Automation
    
    Contributor->>Git: Commit
    Git->>CI: Pipeline
    CI->>CI: Trace Check
    CI->>CI: Evidence Check
    CI->>CI: Change Impact Analysis
    CI->>CI: Other Checks and Analysis
    
    alt Violation
        CI-->>Contributor: ❌ Reject
    else Compliance
        CI-->>Contributor: ✅ Accept
    end
```

</div>

</div>

---

# Traceability: The Golden Thread

Every artefact is linked.

```mermaid
graph LR
    Law(Law) --> Rule(Rule)
    Rule --> Arch(Architecture)
    Arch --> Spec(Specification)
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
