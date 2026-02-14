# Refine Form Request

You are processing issue #`ISSUE_NUMBER` created from a form submission.

## Steps

1. Read the current issue title and body using `gh issue view ISSUE_NUMBER`

2. Translate the form content to English (the original may be in any language)

3. Create a concise, meaningful English title (the original title is just "NEW REQUEST" placeholder, replace it entirely)

4. Gather documentation context:
   - Read `docs/_sidebar.md` to get the full documentation index
   - Identify which features, entities, or flows are mentioned or implied by the request
   - Read the relevant doc files to understand what is already documented
   - Compose a "Documentation Context" section that starts with a brief summary paragraph (1-3 sentences) explaining how this request relates to what is already documented — what exists, what would need to change, what gaps there are
   - Below the summary, list links to relevant docs
   - Use this link format: `SERVER_URL/REPOSITORY/blob/main/docs/<path>`
   - Each link should have a one-line note on why it is relevant
   - Omit this section entirely if no docs are relevant

5. Find related issues:
   - Run `gh issue list --state open --limit 50` to list open issues
   - Identify any that overlap with or relate to the new request
   - Compose a "Related Issues" section listing them as `#N — <brief note on relation>`
   - Omit this section entirely if no open issues are related

6. Update the issue body with this structure:
   - Translated English description of the request at the top
   - A "## Documentation Context" section (if relevant docs found)
   - A "## Related Issues" section (if related issues found)
   - A horizontal rule (`---`)
   - Original body text preserved unchanged below the rule

7. Apply the changes:
   - `gh issue edit ISSUE_NUMBER --title "<new title>" --body "<new body>"`
   - `gh issue edit ISSUE_NUMBER --add-label "refined"`
