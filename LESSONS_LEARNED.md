# Lessons Learned

A running list of lessons picked up while developing this site. Add new ones at the bottom, numbered, with the lesson itself plus *why* and *how to apply it*.

## 1. Don't automatically run browser testing for site changes

**Lesson:** After making changes to the site, do not automatically open a browser, take screenshots, or otherwise run browser verification. Only do browser testing when it is explicitly asked for.

**Why:** Freyja handles browser testing herself for the most part. Automatic verification adds time and noise to every change without being asked for.

**How to apply:** Make the change, describe what was changed, and stop. If browser testing would be useful, mention it as an option rather than doing it. Run it only when explicitly requested.

## 2. Don't commit, push, or ask about committing unless asked

**Lesson:** Do not commit or push changes, and do not ask whether to commit or push. Only do either when explicitly asked.

**Why:** Freyja handles git herself. Prompting about it after every change is just noise.

**How to apply:** Make the change, describe what was changed, and stop. Leave the working tree uncommitted. Don't offer commit or push buttons or questions at the end of a turn.
