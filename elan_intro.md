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

Ning Zhao

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

- **Policy** lives in OpenText servers
- **Requirements** live in Jira tickets
- **Architecture** lives in SharePoint documents
- **Code** lives in Git repositories
- **Tests** live somewhere else
- **They drift apart.**

</div>

</div>

<br>

<div v-click>

> Civilisations do not fail because they lack ambition. They fail when intent cannot survive the journey from vision to execution.

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

## Philosophy: Disciplined Momentum

_A system that moves with confidence, because its constraints are visible, its intent explicit, and its decisions traceable in a logically unified environment._

</div>

<br>

### The "V-Model" Reimagined
It is not about a slow waterfall process. It is about explicit **Layers of Intent** supercharged by Markdown, Git, and modern automation.

---

# The Anatomy of the Workbench

A visual stacking of intent.

<div class="grid grid-cols-2 gap-2 text-xs">

<div class="anatomy-table">

| Layer | Name | Purpose |
|---|---|---|
| **00** | **Project Governance** | The "Constitution" |
| **10** | **Legal Framework** | The Mandate |
| **15** | **Requirements** | The Needs |
| **20** | **Rulebook** | The Operational Logic |
| **25** | **Business Architecture** | Interactions & Privacy |
| **30** | **System Architecture** | The Components |
| **40** | **Specifications** | Load-Bearing Structure |
| **50** | **Tests** | **The Evidence** |
| **60** | **Code** | The Implementation |
| **70** | **Reports** | **The Confidence** |
| **80** | **Automation** | The "Police" |

</div>

<div class="flex items-start justify-center -mt-22">

```mermaid {scale: 0.45}
graph TD
    Req[15-Requirements] --> |references| L[10-Legal]
    R[20-Rulebook] --> |references| Req
    BA[25-Business Arch] --> |references| R
    SA[30-System Arch] --> |references| BA
    S[40-Specs] --> |references| SA
    T[50-Tests] --> |references| S
    C[60-Code] --> |references| T
    
    auth[80-Automation] -.->|Enforces| L
    auth -.->|Enforces| Req
    auth -.->|Enforces| R
    auth -.->|Enforces| BA
    auth -.->|Enforces| SA
    auth -.->|Enforces| S
    auth -.->|Enforces| T
    auth -.->|Enforces| C
    auth -.->|Generates| Rep[70-Reports]
    
```

</div>

</div>

<style>
.anatomy-table table { font-size: 0.8rem; }
.anatomy-table td, .anatomy-table th {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
  line-height: 1.2 !important;
}
</style>

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

> Civilised systems begin with law.

<br>

<div v-click>
<div class="flex justify-center mt-4">

```mermaid {scale: 0.45}
graph LR
    Req(15-requirements) --> |traces| Law(10-legal)
    Rule(20-rulebook) --> |traces| Req
    BArch(25-business-arch) --> |traces| Rule
    SArch(30-system-arch) --> |traces| BArch
    Spec(40-specifications) --> |traces| SArch
    Test(50-tests) --> |traces| Spec
    Impl(60-code) --> |traces| Test
    
    style Law fill:#f9f,stroke:#333,stroke-width:2px
    style Impl fill:#bbf,stroke:#333,stroke-width:2px
    style Test fill:#bfb,stroke:#333,stroke-width:4px
```

</div>

<div class="text-center text-sm font-bold text-red-600 dark:text-red-400">
If the chain breaks, the build fails.
</div>

</div>

---

# 00-project-governance: The Instruments

We use precise instruments to enforce the constitution.

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<a href="https://github.com/nnworkspace/elan/blob/main/00-project-governance/artefact-classification.md" target="_blank" class="block !text-current !no-underline hover:scale-[1.02] transition-transform duration-200">
<div class="governance-card h-full">
  <h4><code>artefact-classification.md</code></h4>
  <p><b>Visibility & Handling</b>. Every file must declare its classification (public, restricted, confidential), owner, and audience in the front matter.</p>
</div>
</a>

<a href="https://github.com/nnworkspace/elan/blob/main/00-project-governance/logical-system-and-visibility.md" target="_blank" class="block !text-current !no-underline hover:scale-[1.02] transition-transform duration-200">
<div class="governance-card h-full">
  <h4><code>logical-system-and-visibility.md</code></h4>
  <p><b>The Boundary</b>. Logical Unity vs. Physical Distribution. The system is one, even if repos are many.</p>
</div>
</a>

<a href="https://github.com/nnworkspace/elan/blob/main/00-project-governance/communication-and-project-management.md" target="_blank" class="block !text-current !no-underline hover:scale-[1.02] transition-transform duration-200">
<div class="governance-card h-full">
  <h4><code>communication-and-project-management.md</code></h4>
  <p><b>The Dialogue</b>. "Communication is part of the system." Issues are records of reasoning, not just task trackers.</p>
</div>
</a>

</div>

<div>

<a href="https://github.com/nnworkspace/elan/blob/main/00-project-governance/branching-strategy.md" target="_blank" class="block !text-current !no-underline hover:scale-[1.02] transition-transform duration-200">
<div class="governance-card h-full">
  <h4><code>branching-strategy.md</code></h4>
  <p><b>The Workflow</b>. Protected Main. Feature Branches. No Release Branches (Tags only).</p>
</div>
</a>

<a href="https://github.com/nnworkspace/elan/blob/main/00-project-governance/commit-message-conventions.md" target="_blank" class="block !text-current !no-underline hover:scale-[1.02] transition-transform duration-200">
<div class="governance-card h-full">
  <h4><code>commit-message-conventions.md</code></h4>
  <p><b>The History</b>. Strict rules (Conventional Commits) to ensure the git log is an audit trail.</p>
</div>
</a>

<a href="https://github.com/nnworkspace/elan/blob/main/00-project-governance/linting-rules.md" target="_blank" class="block !text-current !no-underline hover:scale-[1.02] transition-transform duration-200">
<div class="governance-card h-full">
  <h4><code>linting-rules.md</code></h4>
  <p><b>The Enforcer</b>. Automated rules (<code>LINT-C1</code>) that fail the build if governance is violated.</p>
</div>
</a>

</div>

</div>

---

# 00 Linting: The Automatic Enforcement of Governance

> **Linting**: an automated check that scans files and **rejects changes** when they violate predefined rules.

<div class="grid grid-cols-2 gap-10 mt-6">

<div>

**No meetings. No reminders. No interpretation.**

Just: _Rule violated → change refused by Git._

<br>

### In most software projects
Linting checks code style and syntax.<br> 
Helpful, but not essential.

</div>

<div>

### In Élan
Linting checks **mandate compliance**:

- Does this spec reference the Rulebook?
- Does it match the Architecture version?
- Are privacy rules violated in the code?
- Do tests and code cite the correct specification?

If yes: ❌ The build fails. The change cannot be merged.

</div>

</div>

<br>

> **The Git repository itself becomes the guardian of intent.**


---

# 00 Configuration Management

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

> Civilised systems require a shared understanding of time and state.

---

# 10-legal-framework: The Mandate

Policy is not background context; it is **foundational input**.

<div class="grid grid-cols-2 gap-10 mt-6">

<div>

### Purpose
Preserve legislative intent so it survives the journey to code.

- **Content**: Treaties, Regulations, Acts.
- **Role**: Defines **Rights**.
- **Form**: The external authority every layer below must trace to.

</div>

<div>

### Why it leads
Every rule, specification, and line of code ultimately answers to a mandate here. Nothing downstream may invent authority the law did not grant.

</div>

</div>

<br>

> The mandate is the root of the chain of custody.

---

# 15-requirements: Where the Rules Come From

Between the mandate and the rulebook: the **needs**.

<div class="grid grid-cols-2 gap-10 mt-6">

<div>

### Purpose
Capture intent in the language of people, before it becomes operational logic.

- **User journeys**: how real actors experience the system.
- **Functional requirements**: what must be possible (the URD).
- **End-to-end flows**: the paths that cross many rules.

</div>

<div>

### Two flows, never conflated

- **Down (derivation):** traceability flows Rulebook to Architecture to Specs.
- **Up (origination):** requirements *feed* the Rulebook. The needs come first.

`REQ-ONB-*` and `REQ-LIQ-*` trace down into the rules they justify.

</div>

</div>

<br>

> The needs come first. Everything downstream exists to satisfy them.

<!--
Presenter Notes:
- Layer 15 sits between Legal (10) and Rulebook (20).
- Two flows: requirements originate upward; traceability derives downward.
- Naming discipline (PDR-0003): "functional" is overloaded, so the layer is "Requirements", never "Functional Design".
-->

---

# 20-rulebook: The Operational Logic

The bridge between Law and Tech.

<div class="grid grid-cols-2 gap-10 mt-6">

<div>

### Purpose
Translate mandates and needs into **operational rules**.

- **Content**: Domain logic (e.g. Payments, Medical).
- **Role**: Defines **Obligations**.
- **Upstream**: Gives effect to `15-requirements`, under the authority of `10-legal-framework`.

</div>

<div>

### The pivot point
Rules are the first artefacts precise enough to be cited downstream. Architecture, specifications, tests, and code all anchor to a rule via `@rule=SET-RULEBOOK`.

</div>

</div>

<br>

> Code does not implement policy; code implements rules.

---

# 25-business-architecture: Who Interacts, Who Sees What

The institution's design intent, kept **above implementation**.

<div class="grid grid-cols-2 gap-10 mt-6">

<div>

### Two Views

- **System Context**  
  How actors relate: Eurosystem, PSPs, Users. Who is responsible for what.
- **Security & Privacy Zones**  
  Trust boundaries and data visibility: the privacy firewall.

</div>

<div>

### The Altitude
This layer says *what must be true and who may know what*, not *which components are built*.

`@rule=SET-RULEBOOK:0.9.0`: every choice satisfies a rule.

</div>

</div>

<br>

> In real programmes the owner boundary often falls here: the institution owns the business architecture; a vendor builds what realises it.

---

# 30-system-architecture: The Components

The realisation: **which components are built** to make the design real.

<div class="grid grid-cols-2 gap-10 mt-6">

<div>

### Component Inventory
The logical blocks and services.

- **Settlement Engine**, **Alias Service**
- **DESP**, **Access Gateway**
- **Liquidity Engine**, **KMS**

</div>

<div>

### Traceability Bridge
Specifications are **anchored** to the system architecture.

`Upstream Arch: @arch=SET-ARCH:0.1.0`

**Constraint**: You cannot specify a feature that violates the architectural boundaries.

</div>

</div>

<br>

> Architecture tells the builder **where** the walls are, so the Specification can define **how** to paint them.

---

# 40-specifications: The Load-Bearing Bridge
Where intent stops being abstract, and starts being enforceable

<div class="grid grid-cols-2 gap-10 mt-6">

<div>

```mermaid {scale: 0.6}
flowchart TD
    A[10 Legal & Policy] --> Req[15 Requirements]
    Req --> B[20 Rulebook]
    B --> BA[25 Business Architecture]
    BA --> C[30 System Architecture]
    C --> D[40 Specifications]
    D --> E[50 Tests]
    D --> F[60 Code]
    D --> G[70 Reports]

    style D fill:#FCD34D,stroke:#F59E0B,stroke-width:4px,rx:10,ry:10,color:#000
```

</div>

<div>

### Specifications are the first layer that is

- readable enough for non-engineers
- technical enough to implement
- structured enough to automate
- precise enough to audit

</div>

</div>

---

# 40-specifications: Serves Two Kinds of Readers

<div class="grid grid-cols-2 gap-10 mt-6">

<div>

### <span class="emoji-fix">🧑</span> Humans see:
- Scope
- Rules
- Diagrams
- Intent

</div>

<div>

### <span class="emoji-fix">🤖</span> Machines see:
- State transition tables
- Data dictionaries with regex
- Step-numbered sequence diagrams
- Explicit Rule and Architecture references

</div>

</div>

<br>

> A human can understand the system.  
> A machine can enforce the system.


---

# 40-specifications: The Authoritative Definition of the System

<div class="grid grid-cols-2 gap-10 mt-6">

<div>


> Tickets describe tasks. Specifications define and drive the system.

<div v-click>

<br>

<div class="text-xs -mt-2">

| **Tickets / Issues** | **Specifications** |
|---|---|
| Conversational | Deliberate |
| Fragmented | Holistic |
| Optimised for throughput | Optimised for understanding |
| Hard to audit later | Designed to be audited |
| Disappear over time | Stable reference for years |

</div>

</div>

<div v-click>

In Élan:

> Tickets may reference specs. Tickets must never replace specs.

</div>

</div>

<div>

<div v-click>

### A Spec Set: defines a single feature or business process

Example sets:
- User Onboarding (`SPEC-SET-ONB`)
- Liquidity Reservation (`SPEC-SET-LIQ`)

Each set is versioned as **one atomic unit** via `manifest.yaml`.

</div>

</div>

</div>

---

# 40 Inside a Spec Set: A Structured Semantic Unit

<div class="grid grid-cols-2 gap-10 mt-6">

<div>

## Five views

<br>
<div class="text-xs -mt-2">

<div class="grid grid-cols-[1.5fr_2fr_1.5fr] gap-2 font-bold border-b pb-2 mb-2">
  <div>View</div>
  <div>Purpose</div>
  <div>Nature</div>
</div>

<a href="https://github.com/nnworkspace/elan/blob/main/40-specifications/liquidity-reservation/liquidity-reservation-spec-overview.md" target="_blank" class="grid grid-cols-[1.5fr_2fr_1.5fr] gap-2 border-b py-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded px-1 transition-colors !no-underline !text-current">
  <div><strong>Overview (ROOT)</strong></div>
  <div>Scope, traceability, document map</div>
  <div>Governance view</div>
</a>

<a href="https://github.com/nnworkspace/elan/blob/main/40-specifications/liquidity-reservation/liquidity-reservation-behaviour-spec.md" target="_blank" class="grid grid-cols-[1.5fr_2fr_1.5fr] gap-2 border-b py-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded px-1 transition-colors !no-underline !text-current">
  <div><strong>Behaviour</strong></div>
  <div>State machines & rules</div>
  <div>Logic view</div>
</a>

<a href="https://github.com/nnworkspace/elan/blob/main/40-specifications/liquidity-reservation/liquidity-reservation-data-model-spec.md" target="_blank" class="grid grid-cols-[1.5fr_2fr_1.5fr] gap-2 border-b py-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded px-1 transition-colors !no-underline !text-current">
  <div><strong>Data Model</strong></div>
  <div>Entities & constraints</div>
  <div>Schema view</div>
</a>

<a href="https://github.com/nnworkspace/elan/blob/main/40-specifications/liquidity-reservation/liquidity-reservation-interfaces-spec.md" target="_blank" class="grid grid-cols-[1.5fr_2fr_1.5fr] gap-2 border-b py-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded px-1 transition-colors !no-underline !text-current">
  <div><strong>Interfaces</strong></div>
  <div>Flows & protocols</div>
  <div>Interaction view</div>
</a>

<a href="https://github.com/nnworkspace/elan/blob/main/40-specifications/liquidity-reservation/openapi.yaml" target="_blank" class="grid grid-cols-[1.5fr_2fr_1.5fr] gap-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded px-1 transition-colors !no-underline !text-current">
  <div><strong>API</strong></div>
  <div>openapi.yaml</div>
  <div>Projection of Data + Interfaces</div>
</a>

<br>

</div>

This separation is not stylistic.<br>
It allows **different automation and linting** for each document.

</div>


<div>

<div v-click>

### A self-contained system of references

```mermaid{scale: 0.6}
flowchart TB

    Overview@{ shape: doc, label:"SPEC-XX-ROOT<br/>Overview & Traceability"}

    FUNC[[SPEC-XX-FUNC<br/>State Machines & Rules]]
    DATA[(SPEC-XX-DATA<br/>Entities & Constraints)]
    INT{{SPEC-XX-INT<br/>Flows & Protocols}}
    API([openapi.yaml<br/>Executable Contract])

    Overview -. "defines scope for" .-> FUNC
    Overview -. "defines scope for" .-> DATA
    Overview -. "defines scope for" .-> INT

    FUNC -- "operates on" --> DATA
    FUNC -- "is realised through" --> INT
    DATA -- "is encoded in" --> API
    INT -- "is implemented by" --> API
```
Nothing here stands alone. Each document is meaningful **only in relation to the others**.

</div>

</div>

</div>

---

# 40 Governance Through References: The Golden Thread
Élan governs the system **by reference, not by human memory**.

<div class="grid grid-cols-2 gap-8 mt-4 text-sm">

<div>

**Each Specification Set declares:**

- `@rule=SET-RULEBOOK:x.y.z`
- `@arch=SET-ARCH:x.y.z`
- Its own Global IDs
- Its own version via `manifest.yaml`

</div>

<div>

**This allows CI to detect automatically:**

- Missing rule coverage
- Architecture drift
- Specification drift
- Missing or outdated tests

</div>

</div>

<div v-click>

<br>

### The result: an unbroken chain of custody from Law to Code

<div class="grid grid-cols-[3fr_2fr] gap-4 items-center text-sm">

<div>

```mermaid {scale: 0.7}
flowchart LR
    RULE["Rule: LIQ-01<br>(Waterfall)"]:::legal
    SPEC["Spec: TR-LIQ-04<br>(2PC Logic)"]:::spec
    CODE["Code: LiquidityEngine<br>(Java)"]:::code
    TEST["Test: TST-LIQ-001<br>(Happy Path)"]:::test

    RULE -->|Mandates| SPEC
    SPEC -->|Governs| CODE
    TEST -->|Verifies| CODE
    TEST -->|Validates| SPEC

    classDef legal fill:#d946ef,stroke:#a21caf,color:white,rx:10,ry:10
    classDef spec fill:#FCD34D,stroke:#F59E0B,stroke-width:4px,color:black,rx:10,ry:10
    classDef code fill:#3b82f6,stroke:#1d4ed8,color:white,rx:10,ry:10
    classDef test fill:#10b981,stroke:#047857,color:white,rx:10,ry:10
```

</div>

<div class="text-sm">

**Automation ensures:**
- If Specs change → Tests must change.
- If Tests change → Code must change.

<br>

> Systemic drift becomes mechanically detectable.

</div>

</div>

</div>

---

# 40 One Spec Set → Three Forms of Evidence

<div class="grid grid-cols-2 gap-10 mt-6 text-sm">

<div>

### For Testing

Specs become **test generators**

- State tables → transition tests
- Interface steps → contract tests
- Constraints → failure tests
- Diagrams → mock behaviour

<br>

### For Code

Specs become **implementation blueprints**

- Data model → DB & API schemas
- Functional rules → state machines
- Interface contracts → API schemas and Protobufs
- Privacy rules → linting logic

</div>

<div>

### For Audit

Specs create a **chain of custody**

```mermaid
flowchart LR
    R[Rulebook Rule] --> S[Specification ID]
    S --> T[Test Case]
    S --> C[Code Module]
```
An auditor can walk:

> Rule → Spec → Test → Code → Evidence

No explanation required.


</div>

</div>

---

# 40-specifications: Where Governance Becomes Code

These are not documents.<br>
They are **machine-parsable representations of institutional invariants**.

<div class="grid grid-cols-2 gap-10 mt-6">

<div>

### Examples (e.g. Digital Euro)

- One person → one identity
- One euro issued → one euro reserved
- No PII leakage
- No double spending

The same specification structure can express any such invariant.

</div>

<div>

### What this enables

Systems where:

- Engineers cannot accidentally violate policy
- Privacy is enforced by schema, not guidelines
- Monetary conservation is enforced by state machines
- Tests, code, and audits share the same reference

</div>

</div>

<br>

> **Governance becomes code. Code becomes auditable governance.**

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

> Unit tests belong in the code (60). **System Assurance** belongs here (50).

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

> Components first, not features. Unified by Manifests.

---

# 70-reports: Derived Evidence

Not manually authored. **Generated from the Truth**.

<div class="grid grid-cols-2 gap-8 mt-6">

<div>

### 1. The Matrix ("Traceability")
- **`traceability/`**: Links Specs (`40-`) to Code (`60-`).
- *Proof that every line of code has a reason.*

<br>

### 2. The Risk State ("Assurance")
- **`assurance/`**: Security & Test validation results.
- **`dependencies/`**: SBOM & Supply Chain risks.

</div>

<div>

### 3. The Audit ("Compliance")
- **`compliance/`**: Evidence snapshots for regulators.
- **`weekly-progress/`**: Automated status summaries.

<br>

> Trust comes from **Reproducibility**, not PowerPoints.

</div>

</div>

---

# 80-automation: Active Governance Engine

The **Constitutional Rails**.

<div class="grid grid-cols-2 gap-8 mt-6 text-sm">

<div>

### 1. Pipelines ("The Factory")
- **Gatekeeper**: Static Policy & Drift Detection.
- **Orchestration**: Ephemeral TestNets & Conformance.
- **Reporting**: Chain of Custody & WORM Archiving.

<br>

### 2. Analytical ("The Risk Engine")
- **Spec Architect**: Parses Markdown into Semantic Graph.
- **Change Impact Analyzer**: Calculates "Blast Radius".

<br>

### 3. AI Oracle ("The Advisor")
- **RAG-based**: Context-aware guidance.
- **Reduction**: Low cognitive load.

<br>

> Bureaucracy-as-Code: Turning bottlenecks into enablers.

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
layout: center
class: text-center
---

# Summary: Institutional Confidence

Élan solves **Semantic Entropy** by bridging the gap between institutional ambition and execution.

<div class="grid grid-cols-3 gap-6 mt-6 text-sm">

<div class="summary-card constitution">

### 1. The Constitution
Governance is not external. It is **integral part of the living system** (folder 00-20).<br>
*Policy intent is the first dependency.*

</div>

<div class="summary-card execution">

### 2. The Execution
A unified environment for diverse builders (folders 25-60).<br>
*Trace or Fail.*

</div>

<div class="summary-card automation">

### 3. The Automation
Active constraints that prevent drift (folder 80).<br>
*Integrity with lightning speed.*

</div>

</div>

<div class="mt-8 text-center">

> We replace "Documentation Theatre" with **"Executable Truth"**.

</div>

<div class="mt-6 text-center flex flex-col items-center gap-0">
  <span class="text-xl font-mono p-2 border rounded">Clone. Fork. Adapt.</span>
  
  <a href="https://github.com/nnworkspace/elan" target="_blank" alt="GitHub"
    class="-mt-4 text-4xl slidev-icon-btn hover:text-blue-600 transition duration-300">
    <carbon-logo-github />
  </a>
</div>
