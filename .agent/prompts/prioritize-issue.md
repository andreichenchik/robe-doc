# Prioritize Issue

You are assigning priority and category labels to issue #`ISSUE_NUMBER` in the ROBE project.

## Steps

1. Read the issue using `gh issue view ISSUE_NUMBER`

2. Read `docs/_sidebar.md` and any relevant doc files to understand whether this issue touches existing, documented functionality

3. Determine the **category label** — apply exactly one:

   | Label | When to apply |
   |-------|---------------|
   | `bug` | Something is broken, not working as expected, crashes, freezes, or produces wrong results |
   | `enhancement` | New feature request, improvement to existing feature, UX suggestion |
   | `question` | User confusion about how to use existing functionality, needs better UX or documentation |

4. Determine the **priority** using these criteria:

   | Priority | Name | Criteria | Examples |
   |----------|------|----------|----------|
   | **P0** | Critical | App crashes or becomes unusable; data loss (items, outfits disappear); security vulnerabilities; core flow completely broken (can't add items, can't create outfits) | App crashes on photo upload; items disappear after sync |
   | **P1** | High | Significant bugs in core features (wardrobe, outfits, collage) without a workaround; features that unblock common user workflows; issues reported by multiple users | Collage freezes on resize; filter shows no results for existing collection |
   | **P2** | Medium | Bugs that have workarounds; feature requests that enhance existing documented functionality; UX improvements for existing flows | Move share button; add sorting options; one-click filter reset |
   | **P3** | Low | Cosmetic issues; nice-to-have features with no current user pain; platform expansion requests (Android, web); ideas for future consideration | Swipe-to-delete gesture; nested wardrobes; donation option |

   **Tie-breaking rules:**
   - If the issue is a `bug` that affects a documented core feature, lean toward higher priority
   - If the issue is an `enhancement` for undocumented/future functionality, lean toward lower priority
   - If the issue mentions multiple users or repeated feedback, bump up one level
   - When uncertain between two levels, pick the lower one — it's easier to escalate than to de-prioritize

5. Apply the category label:
   ```
   gh issue edit ISSUE_NUMBER --add-label "<label>"
   ```

6. Set the priority on the GitHub Project:

   a. Look up the Priority field and its option IDs:
   ```
   gh project field-list PROJECT_NUMBER --owner PROJECT_OWNER --format json
   ```
   Find the field named "Priority" and match the option name (P0/P1/P2/P3) to get the correct option ID.

   b. Get the project node ID:
   ```
   gh project view PROJECT_NUMBER --owner PROJECT_OWNER --format json
   ```

   c. Find the project item ID for this issue:
   ```
   gh project item-list PROJECT_NUMBER --owner PROJECT_OWNER --format json
   ```
   Find the item where `content.number` equals ISSUE_NUMBER.

   d. Set the Priority field:
   ```
   gh project item-edit --project-id <project-node-id> --id <item-id> --field-id <priority-field-id> --single-select-option-id <option-id>
   ```

   If the item is not found in the project, skip this step and note it in a comment.

7. Add a brief comment to the issue explaining the assigned priority and category:
   ```
   gh issue comment ISSUE_NUMBER --body "**Priority:** P<N> — <one-line reason>
   **Category:** <label> — <one-line reason>"
   ```
