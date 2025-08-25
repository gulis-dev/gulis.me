import { useMDXComponent } from "next-contentlayer/hooks";
export function Mdx({ code }: { code: string }) {
  const MDXContent = useMDXComponent(code);
  return <div className="prose prose-neutral dark:prose-invert"><MDXContent /></div>;
}