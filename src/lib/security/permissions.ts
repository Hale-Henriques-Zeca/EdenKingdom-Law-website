export type Role =
  | "SUPER_ADMIN"
  | "JURIST"
  | "AUDITOR"
  | "INVESTIGATOR"
  | "POLICE"
  | "ESCORT"
  | "GOVERNANCE"
  | "OBSERVER";

export const Permissions = {
  VIEW_CASES: ["SUPER_ADMIN", "JURIST", "AUDITOR", "INVESTIGATOR"],
  EDIT_CASES: ["SUPER_ADMIN", "JURIST"],
  VIEW_LAWS: ["SUPER_ADMIN", "JURIST", "GOVERNANCE"],
  EDIT_LAWS: ["SUPER_ADMIN"],
  VIEW_PROOFS: ["SUPER_ADMIN", "INVESTIGATOR"],
  VIEW_GOVERNANCE: ["SUPER_ADMIN", "GOVERNANCE"],
};

export function hasPermission(
  role: Role,
  permission: keyof typeof Permissions
) {
  return Permissions[permission].includes(role);
}
