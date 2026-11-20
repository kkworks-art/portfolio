import { motion } from "motion/react";
import { Code, Palette, Globe, TrendingUp, Briefcase } from "lucide-react";

const strengths = [
  {
    icon: Globe,
    title: "柔軟な対応力と幅広いスキルセット",
    description: "Web制作から運用、コンテンツ制作まで一貫して対応可能です。フロントエンド開発に加え、EC運用や更新業務にも携わっており、制作から運用までの流れを踏まえた対応が可能です。"
  },
  {
    icon: Palette,
    title: "デザインとコーディングの両面スキル",
    description: "デザイン意図を踏まえたコーディングにより、再現性の高いUI構築が可能です。HTML/CSS設計とJavaScript実装により、安定した品質でのフロントエンド開発に対応しています。"
  },
  {
    icon: TrendingUp,
    title: "長期的な視点でのサイト運営能力",
    description: "長年の運用経験をもとに、更新しやすい構造設計や業務効率化を意識したサイト構築が可能です。実務ではWordPressの導入による更新性の改善や、Excelを用いたHTML自動生成ツールの作成を行い、更新作業の効率化と運用負荷の軽減を実現しました。"
  }
];

const skillCategories = [
  {
    category: "フロントエンド",
    skills: ["HTML5", "CSS3", "JavaScript", "jQuery", "ActionScript"]
  },
  {
    category: "デザインツール",
    skills: ["Illustrator", "Photoshop", "Fireworks", "Flash", "Canva", "Figma"]
  },
  {
    category: "バックエンド・CMS",
    skills: ["PHP", "WordPress", "EC-CUBE", "楽天RMS", "Yahoo!ショッピング", "Amazon", "Shopify", "HubSpot"]
  },
  {
    category: "コードツール",
    skills: ["Dreamweaver", "VSCode"]
  },
  {
    category: "オフィス・コミュニケーション",
    skills: ["Excel", "Word", "PowerPoint", "Teams", "Slack", "Zoom", "Chatwork", "Backlog"]
  },
  {
    category: "バージョン管理",
    skills: ["Git / GitHub", "Subversion"]
  }
];

export function About() {
  return (
    <div className="min-h-screen py-12 lg:py-20 px-6 lg:px-16 lg:ml-[350px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl lg:text-5xl mb-12 text-center lg:text-left">
          <span className="bg-gradient-to-r from-green-800 to-emerald-700 bg-clip-text text-transparent">
            ABOUT
          </span>
        </h2>

        <div className="max-w-4xl">
          {/* このサイトについて */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 lg:p-12 mb-8 border border-gray-200 shadow-lg"
          >
            <h3 className="text-2xl mb-6 text-gray-900">このサイトについて</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                このサイトは、小林香織のポートフォリオ（作品集）です。本サイトでは自身の制作実績の内、個人制作のサイトや業務委託で行った事例を掲載しています。
              </p>
            </div>
          </motion.div>

          {/* プロフィール */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 lg:p-12 mb-8 border border-gray-200 shadow-lg"
          >
            <h3 className="text-2xl mb-6 text-gray-900">プロフィール</h3>
            <div className="mb-6">
              <p className="text-lg text-gray-800 mb-4">氏名：小林　香織</p>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <h4 className="text-xl text-gray-900 mb-3">自己紹介</h4>
              <p>
                Web制作・運用において約20年以上の実務経験があります。
                コーポレートサイトやECサイトを中心に、デザイン・コーディング・更新運用まで一貫して対応してきました。
              </p>
              <p>
                直近ではWordPressを用いたサイト制作・運用に従事し、キャンペーンLPやバナー制作、HTML/CSSコーディングを担当しています。
                また、JavaScriptやjQueryを用いた動的表現の実装にも対応可能です。
              </p>
              <p>
                更新業務の効率化に取り組み、Excelを用いたHTML自動生成ツールを作成。
                作業時間の短縮と更新作業の属人化解消に貢献しました。
                EC分野ではShopify等を用いたサイト運用・商品登録・改善提案にも携わってきました。
              </p>
              <p>
                長期的な運用を前提とした設計・更新しやすい構造づくりを強みとしています。
              </p>
            </div>
          </motion.div>

          {/* 強み */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-5 h-5 bg-gradient-to-br from-green-800 to-emerald-700 rounded-full flex-shrink-0 translate-y-0.5"></div>
              <h3 className="text-2xl text-gray-900">強み</h3>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-1 gap-6">
            {strengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <motion.div
                  key={strength.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white/90 backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-gray-200 shadow-lg hover:border-green-300 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl mb-3 text-gray-900">{strength.title}</h4>
                      <p className="text-gray-600 leading-relaxed">
                        {strength.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* スキル */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-5 h-5 bg-gradient-to-br from-green-800 to-emerald-700 rounded-full flex-shrink-0 translate-y-0.5"></div>
              <h3 className="text-2xl text-gray-900">スキル</h3>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              return (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="bg-white/90 backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-gray-200 shadow-lg hover:border-green-300 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl mb-3 text-gray-900">{category.category}</h4>
                      <ul className="text-gray-600 leading-relaxed">
                        {category.skills.map((skill) => (
                          <li key={skill}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}