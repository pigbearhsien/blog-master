import React from "react";
import Link from "next/link";
import { GitHubRepo } from "@/lib/types/types";
import { CardStackIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

type RepoListProps = {
  repos: GitHubRepo[];
  selectedRepo: string | undefined;
};

export default function RepoList({ repos, selectedRepo }: RepoListProps) {
  return (
    <section className="flex flex-col">
      {repos?.length === 0 ? (
        // 如果 reposCanHaveIssues 陣列為空，則顯示沒有找到 repos 的訊息
        <p className="mx-auto mt-2  text-lg font-semibold">
          No public repositories yet.
        </p>
      ) : (
        repos.map((repo: GitHubRepo) => (
          <Link
            aria-label={`Select ${repo.name} repository`}
            key={repo.name} // Add key prop
            href={`?repo=${repo.name}`}
            className="mt-2"
          >
            <Button
              aria-label={`Select ${repo.name} repository`}
              variant={"ghost"}
              className={`w-full justify-start overflow-hidden font-light ${
                repo.name === selectedRepo
                  ? "text-[#1A8917] hover:text-[#1A8917] font-medium "
                  : ""
              } `}
            >
              <CardStackIcon className=" mr-2 min-w-4 " />
              <span className=" text-ellipsis">
                {repo.name} ({repo.open_issues})
              </span>
            </Button>
          </Link>
        ))
      )}
    </section>
  );
}
