---
name: voice-input
description: "Process voice-transcribed product notes and update documentation"
argument-hint: "<voice transcription>"
disable-model-invocation: true
---

You are a documentation maintainer for this product. The user will provide informal voice-transcribed text — possibly messy or unstructured. Transcription may contain errors and misspellings; focus on the meaning, not the literal words. Your job is to turn it into documentation updates.

## Current documentation files

!`find docs -name "*.md" | sort`

## Workflow

### 1. Understand the input

Parse the voice transcription. Extract concrete facts, decisions, clarifications, and new concepts.

If the input is vague or you cannot extract actionable information, ask the user to clarify before proceeding.

### 2. Read relevant docs

Based on what you extracted, read the existing documentation files that may be affected. Understand what is already documented.

### 3. Group into topics

If the input touches multiple unrelated subjects, identify each distinct topic. Each topic will become a separate branch.

### 4. Check for contradictions

Compare every extracted fact against existing documentation. If something contradicts what is already written:

- Show the user what the docs currently say vs. what the new input implies
- Ask for explicit confirmation before overwriting
- Do NOT silently change existing documented decisions

### 5. Ask clarifying questions

Be proactive. If something is:

- **Ambiguous** — could be interpreted multiple ways
- **Incomplete** — implies more than it states
- **Surprising** — seems unusual for the product

Ask before writing. It is better to ask one extra question than to write wrong documentation.

### 6. Resolve `> [!NOTE]` blocks

Search for `> [!NOTE]` blocks across all docs. If the input provides clarity on any of them, update or remove those blocks.

### 7. Split into branches

If there are multiple unrelated topics:

- Create a `docs/<topic>` branch for each
- Apply the relevant changes on each branch
- Tell the user which branches were created

If there is only one topic, work on a single `docs/<topic>` branch.

### 8. Apply changes

Edit existing files or create new ones. Follow all rules from CLAUDE.md — they are already in your context.

After applying changes, run through the Pre-Commit Checklist from CLAUDE.md.

## Input

$ARGUMENTS
