import { ArticleWorkspace } from "@/components/article-workspace";
import { DashboardPage } from "@/components/dashboard-page";

export default function NewEditorArticlePage() {
  return (
    <DashboardPage
      eyebrow="New content"
      title="Create an article."
      description="Create a complete rich-text article. The database assigns its permanent searchable ID after saving."
    >
      <ArticleWorkspace createOnly />
    </DashboardPage>
  );
}
