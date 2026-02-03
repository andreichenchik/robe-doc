# Agent Prompts

Prompt files used by GitHub Actions workflows and available for manual use via CLI.

## Prompts

| File | Used by | Purpose |
|------|---------|---------|
| `refine-issue.md` | `new-form-request.yml` | Translates, enriches, and structures issues from the feedback form |
| `prioritize-issue.md` | `new-form-request.yml` | Assigns priority (P0–P3) and category labels (bug/enhancement/question) |

## Running manually

### Prioritize a single issue

```bash
claude -p "Read .agent/prompts/prioritize-issue.md for instructions.

Apply those instructions to issue #<NUMBER>.

Use these values for placeholders:
- ISSUE_NUMBER = <NUMBER>
- PROJECT_NUMBER = 7
- PROJECT_OWNER = andreichenchik" \
  --allowedTools "Bash(gh issue view:*),Bash(gh issue edit:*),Bash(gh issue comment:*),Bash(gh project item-list:*),Bash(gh project item-edit:*),Bash(gh project field-list:*),Bash(gh project view:*),Read"
```

### Batch-prioritize backlog issues

List unpriorized issues, then run the prompt for each:

```bash
# 1. Find issues in the project without priority set
gh project item-list 7 --owner andreichenchik --format json \
  | jq -r '.items[] | select(.priority == null or .priority == "") | .content.number' \
  | while read -r num; do
      echo "=== Processing issue #$num ==="
      claude -p "Read .agent/prompts/prioritize-issue.md for instructions.

Apply those instructions to issue #$num.

Use these values for placeholders:
- ISSUE_NUMBER = $num
- PROJECT_NUMBER = 7
- PROJECT_OWNER = andreichenchik" \
        --allowedTools "Bash(gh issue view:*),Bash(gh issue edit:*),Bash(gh issue comment:*),Bash(gh project item-list:*),Bash(gh project item-edit:*),Bash(gh project field-list:*),Bash(gh project view:*),Read"
    done
```

### Refine a single issue

```bash
claude -p "Read .agent/prompts/refine-issue.md for instructions.

Apply those instructions to issue #<NUMBER>.

Use these values for placeholders:
- ISSUE_NUMBER = <NUMBER>
- SERVER_URL = https://github.com
- REPOSITORY = andreichenchik/robe-doc" \
  --allowedTools "Bash(gh issue view:*),Bash(gh issue edit:*),Bash(gh issue list:*),Read"
```

## Token requirements

The prioritization prompt needs a GitHub token with **`project` write scope** to set project fields. The default `GITHUB_TOKEN` in GitHub Actions only has `read:project`.

Options:
- Add `project` scope to the token used in the workflow
- Create a fine-grained PAT with project read/write access and add it as a repository secret
