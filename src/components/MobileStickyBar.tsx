import Link from "next/link";
import { site } from "@/lib/site";

export function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--line)] bg-white/95 p-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a href={site.phoneHref} className="btn btn-secondary py-3 text-sm">
          Call
        </a>
        <Link href="/contact#appointment" className="btn btn-primary py-3 text-sm">
          Request Appointment
        </Link>
      </div>
    </div>
  );
}
