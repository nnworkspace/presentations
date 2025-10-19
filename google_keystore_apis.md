---
# try also 'default' to start simple
theme: seriph
# css: global.css
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: Google Keystore API and Crypto Keys
info: |
  A technical overview of how Android protects cryptographic keys in hardware.
# apply UnoCSS classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
---

# Google Keystore API<br> and Crypto Keys

Ning Zhao

<div @click="$slidev.nav.next" class="mt-12 py-1" hover:bg="white op-10">
  A technical overview of how Android protects cryptographic keys in hardware. <carbon:arrow-right />
</div>

<div class="abs-br m-6 text-xl">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="slidev-icon-btn">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" class="slidev-icon-btn">
    <carbon:logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
layout: two-cols
layoutClass: gap-16
---

# The Core Guarantee

How does the Android Keystore ensure keys are generated and remain inside secure hardware?

- It uses a combination of hardware abstraction, developer specifications, and cryptographic proof.
- Keys reside in a **hardware-backed keystore**:
  - A **Trusted Execution Environment (TEE)** - *Standard*
  - A dedicated **Secure Element (SE)** - *Highest Security*

::right::

<Toc text-sm minDepth="1" maxDepth="2" />

---
layout: image-right
layoutClass: gap-16
image: /google_keystore_apis/google_keystore_security_3_pillars.png
title: Three pillars of security
---

## Three Pillars of Security

1. **Hardware Abstraction**
    - The Keymaster HAL

2. **Developer Specifications**
    - Requesting StrongBox

3. **Cryptographic Proof**
    - Key Attestation

---
layout: image-left
layoutClass: gap-16
image: /google_keystore_apis/hardware_abstraction.png
title: 1. Hardware abstraction
---

## 1. Hardware abstraction

The Android OS never handles key material directly.

- A sensitive app talks to the **Keystore API**.
- The Keystore API communicates through the **Keymaster Hardware Abstraction Layer (HAL)**.
- The **Keymaster HAL** is an interface to the device's specific secure hardware (TEE or SE).
- The **Secure Hardware** executes the commands and holds the keys.

---
layout: image-left
layoutClass: gap-16
image: /google_keystore_apis/developer_specifications.png
title: 2. Developer specifications
---

## 2. Developer specifications

A developer can demand the highest level of security available.

- Use the `setIsStrongBoxBacked(true)` method when generating a key.
- This requests that the key be stored in a **StrongBox Keymaster**.
- **StrongBox** is an implementation of the Keymaster HAL that resides in a dedicated, tamper-resistant Secure Element (SE).
- If the device has no StrongBox, the key generation will fail, providing a strict guarantee.

---
layout: two-cols-header
layoutClass: gap-16
title: '2. Developer Specifications: TEE vs. StrongBox'
--- 

## 2. Developer Specifications: TEE vs. StrongBox

::right::

### TEE Keymaster

- Standard implementation.
- Runs in the phone's Trusted Execution Environment.
- Highly secure and isolated from the main OS.

::left::

### StrongBox Keymaster

- Resides in a dedicated Secure Element (SE).
- Designed for the highest security needs (e.g., financial transactions).
- Considered more secure due to physical tamper resistance.

---
title: '2. Developer Specifications: Requesting a StrongBox Key'
---

## 2. Developer Specifications: Requesting a StrongBox Key

```java
// Example of requesting key generation in StrongBox
KeyGenParameterSpec spec = new KeyGenParameterSpec.Builder(
        "my_strongbox_key_alias",
        KeyProperties.PURPOSE_SIGN | KeyProperties.PURPOSE_VERIFY)
        .setAlgorithmParameterSpec(new ECGenParameterSpec("secp256r1"))
        .setDigests(KeyProperties.DIGEST_SHA256)
        // This is the crucial line
        .setIsStrongBoxBacked(true)
        .build();

KeyPairGenerator kpg = KeyPairGenerator.getInstance("EC", "AndroidKeyStore");
kpg.initialize(spec);
kpg.generateKeyPair();
```

---

# The Big Question...

How can we be certain the hardware *actually* followed our rules?

---
layout: image-left
layoutClass: gap-16
image: /google_keystore_apis/key_attestation_overview.png
title: '3. Key Attestation: Cryptographic Proof'
---

## 3. Key Attestation: Cryptographic Proof

When we generate a key, we can request a signed certificate chain that proves its properties.

### The Process:

- Our app requests to generate a key pair **with attestation**.
- The secure hardware (TEE or StrongBox) creates the key pair.
- The hardware then creates and signs an **attestation certificate** using a special, factory-fused attestation key.
- Our backend server receives this certificate for verification.

---

## Verifying the Attestation

By parsing the certificate, our server gets cryptographic proof of:

- **Hardware Enforcement**
  - `teeEnforced` / `strongBoxEnforced` flags in the certificate data confirm that properties (like `isStrongBoxBacked`) were enforced by the secure hardware itself.

- **Root of Trust**
  - Validating the certificate chain up to a trusted root (e.g., a Google root certificate) confirms the attestation was signed by genuine, certified hardware.

This prevents a compromised Android OS from faking a hardware-backed key.

Please refer to the presentation [_Android Key Attestation_](https://presentations-nn.vercel.app/android_key_attestation/) for more details. 

---
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: Thank you
class: text-center
---

# Thank you for your attention
