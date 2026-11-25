"use client";

import {
  useSearchParams,
  usePathname,
  useRouter,
} from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function ProjectSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", "1");

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    router.replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  }, 300);

  return (
    <input
      type="search"
      placeholder="Search projects..."
      defaultValue={searchParams.get("query") ?? ""}
      onChange={(event) => handleSearch(event.target.value)}
      className="my-4 w-full rounded-md border border-gray-300 px-4 py-2"
    />
  );
}