import { motion } from "motion/react";
import { Calendar, ArrowRight } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "React 19の新機能について",
    date: "2026.04.01",
    category: "Technology",
    excerpt: "React 19で追加された新機能と、それが開発にもたらす影響について解説します。"
  },
  {
    id: 2,
    title: "デザインシステム構築のベストプラクティス",
    date: "2026.03.28",
    category: "Design",
    excerpt: "効率的なデザインシステムの構築方法と、チームでの運用について考察します。"
  },
  {
    id: 3,
    title: "Tailwind CSS v4の変更点まとめ",
    date: "2026.03.25",
    category: "Technology",
    excerpt: "Tailwind CSS v4で導入された新しい機能と、移行時の注意点について。"
  },
  {
    id: 4,
    title: "アクセシビリティを意識したWeb制作",
    date: "2026.03.20",
    category: "Design",
    excerpt: "誰もが使いやすいWebサイトを作るためのアクセシビリティの基本を解説。"
  },
  {
    id: 5,
    title: "パフォーマンス最適化のテクニック",
    date: "2026.03.15",
    category: "Technology",
    excerpt: "Webサイトの表示速度を改善するための具体的な手法を紹介します。"
  }
];

export function Blog() {
  return (
    <div className="lg:pl-[350px] min-h-screen py-12 lg:py-20 px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl lg:text-5xl mb-12 text-center lg:text-left">
          <span className="bg-gradient-to-r from-green-800 to-emerald-700 bg-clip-text text-transparent">
            BLOG
          </span>
        </h2>

        <div className="max-w-4xl">
          <div className="space-y-6">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-gray-200 shadow-lg hover:border-green-300 transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-xs px-3 py-1 bg-green-50 text-green-700 rounded-full border border-green-200">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        <time>{post.date}</time>
                      </div>
                    </div>
                    
                    <h3 className="text-xl lg:text-2xl mb-3 text-gray-900 group-hover:text-green-600 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <motion.div
                    className="text-green-600 opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ x: 5 }}
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}