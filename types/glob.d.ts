import { DecodedToken } from "@/lib/server/authMiddleware";
import "next";

declare module "next" {
  interface NextApiRequest {
    user?: DecodedToken | null;
  }
}

type DecimalValue = { $numberDecimal: string };

interface GenericModule {
  _id: string | Types.ObjectId;
  url: string;
  name: string;
}

interface AdminModuleProps {
  module?: string;
  module_id?: string;
}

interface ImportMeta {
  glob<T = unknown>(
    pattern: string,
    options?: { eager?: boolean; import?: string }
  ): Record<string, () => Promise<T>>;
}

interface SingleProductProps {
  _id: string | Types.ObjectId;
  name: string;
  titleamt?: string;
  weight?: string;
  type?: string;
  url?: string;
  media_id?: MediaProps;
  medias?: MediaProps[];
}

interface RelatedContent {
  faq: FaqProps[];
  testimonials: ITestimonialProps[];
  achievements: AchievementProps[];
  blogs: SingleBlogPageProps[];
  comments: CommentProps[];
  products: ProductProps[];
}