import CompanionForm from "@/components/CompanionForm";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { newCompanionPermissions } from "@/lib/actions/companion.actions";
import Image from "next/image";
import Link from "next/link";

const NewCompanion = async () => {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const canCreateCompanion = await newCompanionPermissions();

  return (
    <main className="min-lg:w-1/3 min-md:w-2/3 items-center justify-center flex flex-col gap-8">
      {/* Always show the Companion Builder form */}
      <article className="w-full gap-4 flex flex-col">
        <h1>Companion Builder</h1>
        <CompanionForm />
      </article>

      {/* Always show the Upgrade section */}
      <article className="companion-limit text-center flex flex-col items-center gap-4">
        <Image
          src="/images/limit.svg"
          alt="Companion limit reached"
          width={360}
          height={230}
        />
        <div className="cta-badge">Upgrade your plan</div>
        <h1>You’ve Reached Your Limit</h1>
        <p>
          You’ve reached your companion limit. Upgrade to create more companions
          and access premium features.
        </p>
        <Link href="/subscription" className="btn-primary w-full justify-center">
          Upgrade My Plan
        </Link>
      </article>
    </main>
  );
};

export default NewCompanion;
