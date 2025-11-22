#!/bin/zsh
# project-repos.sh - Mapping of project names to GitHub repositories
# This file is sourced by generate-project-images.sh

typeset -A PROJECT_REPOS

# Assign values to the associative array.
# Note the syntax: key followed by value, separated by spaces within the ()
PROJECT_REPOS=(
    "dxtalent" "https://github.com/dipandhali2021/DXTalent"
    "pathos" "https://github.com/dipandhali2021/pathos"
    "members-dx-dashboard" "https://github.com/dipandhali2021/members-dx-dashboard"
    "c4gt-rbac" "https://github.com/dipandhali2021/mifos-keycloak-rbac"
    "portfolio" "https://github.com/dipandhali2021/portfolio"
)

