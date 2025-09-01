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
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left side: Companion Builder Form */}
        <article className="w-full lg:w-1/2 flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Companion Builder</h1>
          <CompanionForm />
        </article>

        {/* Right side: Upgrade Section */}
        <article className="w-full lg:w-1/2 companion-limit flex flex-col items-center gap-4 text-center">
          <Image
            src="/images/limit.svg"
            alt="Companion limit reached"
            width={360}
            height={230}
          />
          <div className="cta-badge bg-blue-500 text-white px-4 py-2 rounded-full">
            Upgrade your plan
          </div>
          <h1 className="text-2xl font-bold">You’ve Reached Your Limit</h1>
          <p className="text-gray-600">
            You’ve reached your companion limit. Upgrade to create more companions
            and access premium features.
          </p>
          <Link 
            href="/subscription" 
            className="btn-primary w-full lg:w-3/4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            Upgrade My Plan
          </Link>
        </article>
      </div>
    </main>
  );
};

export default NewCompanion;