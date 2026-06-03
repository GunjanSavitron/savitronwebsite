import { useRouter } from "next/router";
import PrivacyPolicy from "@amitkk/basic/static/policy/PrivacyPolicy";
import RefundPolicy from "@amitkk/basic/static/policy/RefundPolicy";
import TermsConditions from "@amitkk/basic/static/policy/TermsAndConditions";

const policyMap = {
  "privacy-policy": PrivacyPolicy,
  "refund-policy": RefundPolicy,
  "terms-conditions": TermsConditions,
} as const;

type PolicySlug = keyof typeof policyMap;

export default function PolicyPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug || Array.isArray(slug)) return null;

  // Type guard: check if slug is a valid key in policyMap
  if (!Object.keys(policyMap).includes(slug)) {
    return <div>Policy not found</div>;
  }

  // Now TS knows slug is a key of policyMap
  const PolicyComponent = policyMap[slug as PolicySlug];

  return <PolicyComponent />;
}
