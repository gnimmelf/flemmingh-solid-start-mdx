import { createMemo, For } from "solid-js";
import { linkOverlay } from "styled-system/patterns";
import { getRoutesPageData } from "~/utils/getRoutesPageData";
import { type PageData } from "~/utils/getRouteComponentExport";
import { Card } from "./Card";
import { CardContainer } from "./CardContainer";

export const defaultSort = (a: PageData, b: PageData) => {
  return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
};

export function TeaserList(props: {
  path: string;
  style?: Record<string, string>;
  filter?: (a: PageData, idx?: number) => boolean;
  sort?: (a: PageData, b: PageData) => number;
}) {
  const articles = getRoutesPageData(props.path);

  const sorted = createMemo(() =>
    articles()?.toSorted(props.sort || defaultSort)
  );

  return (
    <CardContainer>
      <For each={sorted()} fallback={<div>No items</div>}>
        {(article) => (
          <Card title={article.meta.title}>
            <p>{article.meta.intro}</p>
            <p>
              <a class={linkOverlay()} href={article.path}>
                Read more
              </a>
            </p>
          </Card>
        )}
      </For>
    </CardContainer>
  );
}
