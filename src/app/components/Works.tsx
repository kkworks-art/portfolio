import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { createPortal } from "react-dom";
import nakajimaPC from "../../imports/works_image_01-1.png";
import nakajimaSP from "../../imports/works_image_02-1.png";
import nakajimaRecruitPC from "../../imports/works_image_05.png";
import nakajimaRecruitSP from "../../imports/works_image_06.png";
import nakajimaDetail from "../../imports/works_image_03-1.png";
import nakajimaDetailSP from "../../imports/works_image_04-1.png";
import nakajimaRecruitDetail from "figma:asset/fe22cca2ae89cb678c897106f159ce3676665ace.png";
import nakajimaRecruitDetailPC from "../../imports/works_image_07.png";
import nakajimaRecruitDetailSP from "../../imports/works_image_08.png";
import chuoKotsuPC from "../../imports/works_image_09.png";
import chuoKotsuDetail from "../../imports/works_image_10.png";
import humanSystemPC from "../../imports/works_image_11-1.jpg";
import humanSystemDetail from "../../imports/works_image_12.png";
import zenkoIllust from "figma:asset/ff39c38a88a33c1ac38042e62b88933e5f88d492.png";
import scenarioWriting from "figma:asset/0949597722a317222c2f8bc7cbc74bb54f136aac.png";
import scenarioExample from "figma:asset/237bcb6133b89588d064d2072f6750e0a7be581c.png";
import corporatePC from "../../imports/pc_01.png";
import corporateSP from "../../imports/sp_01.png";
import corporatePC2 from "../../imports/pc_02.png";
import corporateSP2 from "../../imports/sp_02.png";
import corporatePC3 from "../../imports/pc_03.png";
import corporateSP3 from "../../imports/sp_03.png";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  imageUrl: string;
  imageUrl2: string;
  details: string[];
}

const webProjects: Project[] = [
  {
    id: 7,
    title: "コーポレートサイト運用 / LPフロントエンド実装",
    category: "企業 / 運用 / LP制作 / フロントエンド実装",
    description: "コーポレートサイトの更新業務およびLPのフロントエンド実装を担当\nデザインカンプをもとに、HTML/CSSコーディングおよびJavaScriptによる動的表現の実装を行った\n\n担当範囲\n・HTML/CSSコーディング（レスポンシブ対応）\n・JavaScript / jQueryによるインタラクション実装\n・画像書き出しおよび最適化\n・WordPressでの更新対応\n\n実装\n・デザインカンプのレイアウト・余白・視認性を考慮した再現性の高いコーディング\n・JavaScriptによるアニメーションおよび動的表現の実装\n・画像最適化による表示パフォーマンスへの配慮\n・更新作業を考慮した構造設計\n\n成果\n・更新作業の効率化により制作スピードを向上\n・継続的な更新業務において、安定した品質での運用を実現",
    tags: ["HTML5", "CSS3", "JavaScript", "jQuery", "WordPress", "Responsive", "LP制作"],
    imageUrl: corporatePC,
    imageUrl2: corporateSP,
    details: [
      "使用ツール: HTML / CSS / JavaScript / jQuery / WordPress / Photoshop / Illustrator"
    ]
  },
  {
    id: 1,
    title: "コーポレートサイト構築/実装",
    category: "企業 / リニューアル / フルスクラッチ / デザイン / コーディング / WordPress構築",
    description: "課題\n・更新作業が煩雑で属人化しており、非エンジニアでは対応が難しい状態だった\n\n工夫\n・更新しやすいようにコンテンツ構造を整理し、WordPressを用いてHTMLの知識がなくても更新可能な構成に設計\n\n結果\n・更新作業の負担軽減と属人化の解消を実現し、運用効率を向上\n\n実装\n・レスポンシブ対応（ブレークポイント設計によりデバイスごとに最適化）\n・共通パーツ（ボタン・見出し等）を整理した再利用可能なCSS設計\n・WordPressカスタムテーマの構築\n・ブロックエディタを活用し、HTMLを記述せずに更新可能な管理画面を設計\n・入力ルールを整理し、非エンジニアでも運用できるようマニュアルを作成",
    tags: ["HTML5", "CSS3", "JavaScript", "jQuery", "WordPress", "Responsive", "UI設計"],
    imageUrl: nakajimaPC,
    imageUrl2: nakajimaSP,
    details: [
      "制作期間：2か月（採用情報サイト含む）",
      "使用ツール: Photoshop / Illustrator / HTML / CSS / WordPress / JavaScript"
    ]
  },
  {
    id: 2,
    title: "採用サイト構築/実装",
    category: "企業 / 採用サイト / デザイン / コーディング / WordPress構築",
    description: "課題\n・更新作業が煩雑で属人化しており、非エンジニアでは対応が難しい状態だった\n・採用情報が整理されておらず、必要な情報にたどり着きにくい\n・求職者が企業情報を把握しづらい構成になっていた\n\n工夫\n・更新しやすいようにコンテンツ構造を整理し、WordPressを用いてHTMLの知識がなくても更新可能な構成に設計\n・職種、条件ごとに情報を整理し、構造を再設計\n\n結果\n・必要な情報へ最短2クリック以内で到達できる構成に整理\n・更新作業の負担軽減と属人化の解消を実現し、運用効率を向上\n\n実装\n・セクション分割による情報の視認性向上\n・見出し階層の整理（h構造の最適化）\n・レスポンシブ対応（ブレークポイント設計によりデバイスごとに最適化）\n・共通パーツ（ボタン・見出し等）を整理した再利用可能なCSS設計\n・WordPressカスタムテーマの構築\n・ブロックエディタを活用し、HTMLを記述せずに更新可能な管理画面を設計\n・入力ルールを整理し、非エンジニアでも運用できるようマニュアルを作成",
    tags: ["HTML5", "CSS3", "JavaScript", "jQuery", "WordPress", "Responsive", "UI設計", "Recruitment"],
    imageUrl: nakajimaRecruitPC,
    imageUrl2: nakajimaRecruitSP,
    details: [
      "制作期間：2か月（コーポレートサイト含む）",
      "使用ツール: Photoshop / Illustrator / HTML / CSS / WordPress / JavaScript"
    ]
  },
  {
    id: 3,
    title: "コーポレートサイト設計/構築",
    category: "企業 / 新規制作 / デザイン / コーディング",
    description: "課題\n・企業としての公式情報発信手段が存在しなかった\n・事業内容や会社情報を外部に伝える基盤が未整備だった\n\n工夫\n・ヒアリングをもとに企業情報を整理し、サイト全体の構成を設計\n・情報の優先順位を定義（事業内容 → 実績 → 会社概要）し、サービス理解を先行させた上で信頼性を補強する構成とした\n・初見ユーザーでも理解しやすいよう、情報導線を整理\n・シンプルなレイアウトで視認性と可読性を確保\n\n成果\n・企業情報を外部に発信する基盤を新規構築\n・情報構造を整理したことで、事業内容を段階的に理解できる構成を実現\n\n実装\n・サイト構成設計（約20ページ）\n・情報のグルーピングおよび見出し階層の設計\n・HTML / CSSによるフルスクラッチ実装",
    tags: ["HTML5", "CSS3", "UI設計", "Corporate", "New Site"],
    imageUrl: chuoKotsuPC,
    imageUrl2: "https://images.unsplash.com/photo-1730324771492-0bd0155537d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHJlc3RhdXJhbnQlMjBmb29kJTIwbWVudXxlbnwxfHx8fDE3NzUzMTgzOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    details: [
      "制作期間：1か月",
      "使用ツール: Photoshop / Illustrator / HTML / CSS"
    ]
  },
  {
    id: 4,
    title: "コーポレートサイト・ECサイト設計/構築",
    category: "企業 / ECサイト / 新規制作 / デザイン / コーディング",
    description: "課題\n・新規事業開始にあたり、販売および情報発信の基盤が存在しなかった\n・商品説明に関する問い合わせ対応の負担が想定されていた\n\n工夫\n・コーポレートサイトとECサイトの役割を整理し、構成を設計\n・商品理解を促進するため、説明ページおよびFAQコンテンツを設計\n・水色を基調とした配色で清潔感を表現し、商材特性に合わせたデザインに調整\n・装飾を抑えたシンプルなレイアウトで視認性と可読性を確保\n\n成果\n・販売および情報発信を担うWeb基盤を新規構築\n・FAQ整備により、問い合わせ対応の負担軽減に寄与\n\n実装\n・サイト構成設計（コーポレート／EC）\n・商品ページおよびFAQページの設計・制作\n・HTML / CSSによるコーディング\n・EC-CUBEを用いたEC機能の実装",
    tags: ["HTML5", "CSS3", "UI設計", "Corporate", "E-commerce", "New Site"],
    imageUrl: humanSystemPC,
    imageUrl2: "https://images.unsplash.com/photo-1503341149971-3a47827adfbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmclMjBtb2JpbGUlMjBhcHB8ZW58MXx8fHwxNzc1MzE4Mzk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    details: [
      "制作期間：2か月（コーポレートサイト、ECサイトそれぞれ1か月）",
      "使用ツール: Photoshop / Illustrator / HTML / CSS / EC-CUBE"
    ]
  }
];

const otherProjects: Project[] = [
  {
    id: 5,
    title: "イラストレーション",
    category: "企業 / イラスト制作 / 名刺デザイン",
    description: "名刺などに使用する似顔絵イラストを制作（約10名分）。人物の特徴を的確に捉えた表現で好評を得た。\n\n・顔の輪郭やパーツの特徴を整理し、識別しやすいデフォルメで表現\n・名刺での使用を想定し、視認性と印象のバランスを考慮して設計\n・修正依頼に迅速に対応し、要望を反映した形で納品",
    tags: ["Illustration", "Portrait", "Design"],
    imageUrl: zenkoIllust,
    imageUrl2: "https://images.unsplash.com/photo-1638454795595-0a0abf68614d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBpbnRlcmlvbiUyMG1vZGVybiUyMGRlc2lnbnxlbnwxfHx8fDE3NzUzMTg0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    details: [
      "【クライアント】",
      "某建設会社",
      "",
      "使用ツール: Photoshop / Illustrator"
    ]
  },
  {
    id: 6,
    title: "シナリオライティング",
    category: "ゲームコンテンツ / シナリオライティング",
    description: "会社が設定した世界観をもとに、ユーザーから寄せられた行動データに基づいたシナリオを執筆。冒険ものを中心に、戦闘からギャグまで幅広いジャンルに対応。\n\n・世界観との整合性を保ちながら、ユーザー行動に沿った展開を設計\n・ジャンルごとのトーン（緊張感／軽快さ）を調整し、違和感のないストーリー構成を意識\n・誰が読んでも理解できるよう、平易な表現で構成し可読性を重視\n\n成果\n・担当シナリオが人気投票で月間1位を獲得\n・ユーザーからの評価を獲得し、継続的な閲読につながった",
    tags: ["Scenario Writing", "Game Content", "Creative Writing"],
    imageUrl: scenarioWriting,
    imageUrl2: scenarioExample,
    details: [
      "【クライアント】",
      "某ゲーム会社",
      "",
      "使用ツール: テキストエディタ / WORD"
    ]
  }
];

export function Works() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const handleClick = (e: React.MouseEvent, project: Project) => {
    e.stopPropagation();
    // Don't open modal for Illustration project (id: 5)
    if (project.id === 5) return;
    setSelectedProject(project);
  };

  const closeModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedProject(null);
  };

  const formatDescription = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, index) => {
      // Check if line is a heading (課題、工夫、結果、成果、実装、担当範囲、使用技術、実装ポイント、案件概要、制作ポイント)
      const headingMatch = line.match(/^(課題|工夫|結果|成果|実装|担当範囲|使用技術|実装ポイント|案件概要|制作ポイント)$/);
      if (headingMatch) {
        return (
          <span key={index} className="block font-bold text-gray-900 mt-2 mb-2 first:mt-0 flex items-center gap-2 text-base">
            <span className="text-green-700">●</span>
            <span>{headingMatch[1]}</span>
          </span>
        );
      }
      // Check if line is a bullet point (starts with ・)
      if (line.startsWith('・')) {
        return (
          <span key={index} className="block pl-[0.5rem] -indent-[0.5rem]">
            {line}{'\n'}
          </span>
        );
      }
      return <span key={index}>{line}{'\n'}</span>;
    });
  };

  return (
    <div className="min-h-screen py-12 lg:py-20 px-6 lg:px-16 lg:ml-[350px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl lg:text-5xl mb-16 text-center lg:text-left">
          <span className="bg-gradient-to-r from-green-800 to-emerald-700 bg-clip-text text-transparent">
            WORKS
          </span>
        </h2>

        {/* WEB制作セクション */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-green-800 to-emerald-700 rounded-full"></div>
              <h3 className="text-2xl lg:text-3xl">
                <span className="bg-gradient-to-r from-green-800 to-emerald-700 bg-clip-text text-transparent">
                  WEB制作
                </span>
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-green-800/20 to-transparent"></div>
            </div>
          </motion.div>

          <div className="space-y-24">
            {webProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 shadow-lg"
            >
              <div className="grid grid-cols-1 gap-0">
                {/* Image Section - 2 images side by side with device frames */}
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-8 lg:p-12">
                  {(project.id <= 2 || project.id === 7) ? (
                    // Show both PC and Mobile frames for projects 1, 2, and 7
                    <div className="flex flex-col items-center">
                      <div className="flex flex-col lg:grid lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12 max-w-5xl mx-auto">
                        {/* PC Monitor Frame - First on mobile, left on desktop */}
                        <div className="flex flex-col items-center lg:justify-center">
                          <div className="w-full bg-gray-900 rounded-t-lg p-3 shadow-2xl">
                            <div className="bg-white rounded-sm overflow-hidden aspect-video">
                              <img
                                src={project.imageUrl}
                                alt={`${project.title} - PC`}
                                className="w-full h-full object-cover object-top"
                              />
                            </div>
                          </div>
                          {/* Monitor Stand */}
                          <div className="w-24 h-6 bg-gray-800 rounded-b-lg"></div>
                          <div className="w-32 h-3 bg-gray-700 rounded-full mt-1"></div>
                        </div>

                        {/* Smartphone Frame - Second on mobile, right on desktop */}
                        <div className="flex items-center justify-center">
                          <div className="relative bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl w-48">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-5 bg-gray-900 rounded-b-2xl z-10"></div>
                            <div className="bg-white rounded-[2rem] overflow-hidden aspect-[9/16]">
                              <img
                                src={project.imageUrl2}
                                alt={`${project.title} - Mobile`}
                                className="w-full h-full object-cover object-top"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {project.id === 7 && (
                        <div className="mt-6 px-4 py-3 bg-white border-l-4 border-green-600 rounded-r-lg">
                          <p className="text-sm font-medium text-gray-800">ファーストビュー</p>
                        </div>
                      )}

                      {/* Second image set for project 7 */}
                      {project.id === 7 && (
                        <>
                          <div className="flex flex-col lg:grid lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12 max-w-5xl mx-auto mt-8">
                            {/* PC Monitor Frame */}
                            <div className="flex flex-col items-center lg:justify-center">
                              <div className="w-full bg-gray-900 rounded-t-lg p-3 shadow-2xl">
                                <div className="bg-white rounded-sm overflow-hidden aspect-video">
                                  <img
                                    src={corporatePC2}
                                    alt={`${project.title} - 商品紹介エリア PC`}
                                    className="w-full h-full object-cover object-top"
                                  />
                                </div>
                              </div>
                              {/* Monitor Stand */}
                              <div className="w-24 h-6 bg-gray-800 rounded-b-lg"></div>
                              <div className="w-32 h-3 bg-gray-700 rounded-full mt-1"></div>
                            </div>

                            {/* Smartphone Frame */}
                            <div className="flex items-center justify-center">
                              <div className="relative bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl w-48">
                                {/* Notch */}
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-5 bg-gray-900 rounded-b-2xl z-10"></div>
                                <div className="bg-white rounded-[2rem] overflow-hidden aspect-[9/16]">
                                  <img
                                    src={corporateSP2}
                                    alt={`${project.title} - 商品紹介エリア Mobile`}
                                    className="w-full h-full object-cover object-top"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-6 px-4 py-3 bg-white border-l-4 border-green-600 rounded-r-lg">
                            <p className="text-sm font-medium text-gray-800">商品紹介エリア：複数要素の配置と余白バランスを考慮して実装</p>
                          </div>
                        </>
                      )}
                    </div>
                  ) : (
                    // Show only PC frame for projects 3 and onwards
                    <div className="flex justify-center max-w-4xl mx-auto">
                      <div className="flex flex-col items-center w-full max-w-3xl">
                        <div className="w-full bg-gray-900 rounded-t-lg p-3 shadow-2xl">
                          <div className="bg-white rounded-sm overflow-hidden aspect-video">
                            <img
                              src={project.imageUrl}
                              alt={`${project.title} - PC`}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                        </div>
                        {/* Monitor Stand */}
                        <div className="w-24 h-6 bg-gray-800 rounded-b-lg"></div>
                        <div className="w-32 h-3 bg-gray-700 rounded-full mt-1"></div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl lg:text-3xl mb-4 text-gray-900">
                    {project.title}
                  </h3>

                  {/* コーポレートサイト (id: 1) の場合はサブタイトルを表示 */}
                  {project.id === 1 && (
                    <p className="text-green-800 font-bold mb-4">非エンジニア向け更新設計（WP構築）</p>
                  )}

                  {/* 採用サイト (id: 2) の場合はサブタイトルを表示 */}
                  {project.id === 2 && (
                    <p className="text-green-800 font-bold mb-4">最短導線を意識した情報設計</p>
                  )}

                  {/* コーポレートサイト設計 (id: 3) の場合はサブタイトルを表示 */}
                  {project.id === 3 && (
                    <p className="text-green-800 font-bold mb-4">企業理解を促す構成設計</p>
                  )}

                  {/* コーポレートサイト・ECサイト設計 (id: 4) の場合はサブタイトルを表示 */}
                  {project.id === 4 && (
                    <p className="text-green-800 font-bold mb-4">ECとコーポレートの役割設計</p>
                  )}

                  {/* イラストレーション (id: 5) の場合はサブタイトルを表示 */}
                  {project.id === 5 && (
                    <p className="text-green-800 font-bold mb-4">用途に応じた表現設計と制作</p>
                  )}

                  {/* コーポレートサイト運用 (id: 7) の場合はサブタイトルを表示 */}
                  {project.id === 7 && (
                    <p className="text-green-800 font-bold mb-4">横スクロールUIと動的表現の実装</p>
                  )}

                  <div className="text-gray-700 mb-6 leading-relaxed whitespace-pre-line">
                    {formatDescription(project.description)}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm border border-green-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-3">
                    {project.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-gray-600 leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </div>

                  {project.id !== 5 && (
                    <button
                      onClick={(e) => handleClick(e, project)}
                      className="mt-6 px-6 py-3 bg-gradient-to-r from-green-700 to-emerald-600 text-white rounded-lg hover:from-green-800 hover:to-emerald-700 transition-all shadow-md hover:shadow-lg font-medium"
                    >
                      {project.id === 6 ? 'シナリオ例を見る' : '更にデザインを見る'}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
            ))}
          </div>
        </div>

        {/* その他セクション */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-green-800 to-emerald-700 rounded-full"></div>
              <h3 className="text-2xl lg:text-3xl">
                <span className="bg-gradient-to-r from-green-800 to-emerald-700 bg-clip-text text-transparent">
                  その他
                </span>
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-green-800/20 to-transparent"></div>
            </div>
          </motion.div>

          <div className="space-y-24">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 shadow-lg"
              >
                <div className="grid grid-cols-1 gap-0">
                  {/* Image Section - 2 images side by side with device frames */}
                  <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-8 lg:p-12">
                    {project.id <= 2 ? (
                      // Show both PC and Mobile frames for first 2 projects
                      <div className="flex flex-col lg:grid lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12 max-w-5xl mx-auto">
                        {/* PC Monitor Frame - First on mobile, left on desktop */}
                        <div className="flex flex-col items-center lg:justify-center">
                          <div className="w-full bg-gray-900 rounded-t-lg p-3 shadow-2xl">
                            <div className="bg-white rounded-sm overflow-hidden aspect-video">
                              <img
                                src={project.imageUrl}
                                alt={`${project.title} - PC`}
                                className="w-full h-full object-cover object-top"
                              />
                            </div>
                          </div>
                          {/* Monitor Stand */}
                          <div className="w-24 h-6 bg-gray-800 rounded-b-lg"></div>
                          <div className="w-32 h-3 bg-gray-700 rounded-full mt-1"></div>
                        </div>

                        {/* Smartphone Frame - Second on mobile, right on desktop */}
                        <div className="flex items-center justify-center">
                          <div className="relative bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl w-48">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-5 bg-gray-900 rounded-b-2xl z-10"></div>
                            <div className="bg-white rounded-[2rem] overflow-hidden aspect-[9/16]">
                              <img
                                src={project.imageUrl2}
                                alt={`${project.title} - Mobile`}
                                className="w-full h-full object-cover object-top"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      // Show only PC frame for projects 3 and onwards
                      <div className="flex justify-center max-w-4xl mx-auto">
                        <div className="flex flex-col items-center w-full max-w-3xl">
                          <div className="w-full bg-gray-900 rounded-t-lg p-3 shadow-2xl">
                            <div className="bg-white rounded-sm overflow-hidden aspect-video">
                              <img
                                src={project.imageUrl}
                                alt={`${project.title} - PC`}
                                className="w-full h-full object-cover object-top"
                              />
                            </div>
                          </div>
                          {/* Monitor Stand */}
                          <div className="w-24 h-6 bg-gray-800 rounded-b-lg"></div>
                          <div className="w-32 h-3 bg-gray-700 rounded-full mt-1"></div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl lg:text-3xl mb-4 text-gray-900">
                      {project.title}
                    </h3>

                    {/* イラストレーション (id: 5) の場合はサブタイトルを表示 */}
                    {project.id === 5 && (
                      <p className="text-green-800 font-bold mb-4">用途に応じた表現設計と制作</p>
                    )}

                    {/* シナリオライティング (id: 6) の場合はサブタイトルを表示 */}
                    {project.id === 6 && (
                      <p className="text-green-800 font-bold mb-4">可読性を重視した構成設計</p>
                    )}

                    <div className="text-gray-700 mb-6 leading-relaxed whitespace-pre-line">
                      {formatDescription(project.description)}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm border border-green-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-3">
                      {project.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-gray-600 leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>

                    {project.id !== 5 && (
                      <button
                        onClick={(e) => handleClick(e, project)}
                        className="mt-6 px-6 py-3 bg-gradient-to-r from-green-700 to-emerald-600 text-white rounded-lg hover:from-green-800 hover:to-emerald-700 transition-all shadow-md hover:shadow-lg font-medium"
                      >
                        {project.id === 6 ? 'シナリオ例を見る' : '更にデザインを見る'}
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Modal for Mobile View */}
      {selectedProject && createPortal(
        <div
          className="fixed inset-0 bg-green-900/60 flex items-center justify-center z-[9999] p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white z-[10000] flex justify-end p-4 border-b border-gray-200 rounded-t-2xl">
              <button
                onClick={closeModal}
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors shadow-md"
              >
                <X className="w-6 h-6 text-gray-900" />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-0">
              {/* Image Section - 2 images side by side with device frames */}
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 px-8 py-6 lg:px-12 lg:py-8 flex justify-center items-center">
                <div className="scale-90 w-full">
                {selectedProject.id === 6 ? (
                  // Special layout for Scenario Writing project - show detailed image
                  <div className="flex justify-center max-w-4xl mx-auto">
                    <div className="w-full">
                      <img
                        src={selectedProject.imageUrl2}
                        alt={`${selectedProject.title} - Details`}
                        className="w-full h-auto rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                ) : selectedProject.id === 1 ? (
                  // Special layout for Nakajima Token project - show PC and SP detailed images
                  <div className="flex flex-col items-center">
                    <div className="flex flex-col lg:grid lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12 max-w-5xl mx-auto">
                      {/* PC Monitor Frame - First on mobile, left on desktop */}
                      <div className="flex flex-col items-center lg:justify-center">
                        <div className="w-full bg-gray-900 rounded-t-lg p-3 shadow-2xl">
                          <div className="bg-white rounded-sm overflow-hidden aspect-video">
                            <img
                              src={nakajimaDetail}
                              alt={`${selectedProject.title} - PC Details`}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                        </div>
                        {/* Monitor Stand */}
                        <div className="w-24 h-6 bg-gray-800 rounded-b-lg"></div>
                        <div className="w-32 h-3 bg-gray-700 rounded-full mt-1"></div>
                      </div>

                      {/* Smartphone Frame - Second on mobile, right on desktop */}
                      <div className="flex items-center justify-center">
                        <div className="relative bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl w-48">
                          {/* Notch */}
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-5 bg-gray-900 rounded-b-2xl z-10"></div>
                          <div className="bg-white rounded-[2rem] overflow-hidden aspect-[9/16]">
                            <img
                              src={nakajimaDetailSP}
                              alt={`${selectedProject.title} - SP Details`}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : selectedProject.id === 2 ? (
                  // Special layout for Nakajima Token Recruit project - show PC and SP detailed images
                  <div className="flex flex-col items-center">
                    <div className="flex flex-col lg:grid lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12 max-w-5xl mx-auto">
                      {/* PC Monitor Frame - First on mobile, left on desktop */}
                      <div className="flex flex-col items-center lg:justify-center">
                        <div className="w-full bg-gray-900 rounded-t-lg p-3 shadow-2xl">
                          <div className="bg-white rounded-sm overflow-hidden aspect-video">
                            <img
                              src={nakajimaRecruitDetailPC}
                              alt={`${selectedProject.title} - PC Details`}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                        </div>
                        {/* Monitor Stand */}
                        <div className="w-24 h-6 bg-gray-800 rounded-b-lg"></div>
                        <div className="w-32 h-3 bg-gray-700 rounded-full mt-1"></div>
                      </div>

                      {/* Smartphone Frame - Second on mobile, right on desktop */}
                      <div className="flex items-center justify-center">
                        <div className="relative bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl w-48">
                          {/* Notch */}
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-5 bg-gray-900 rounded-b-2xl z-10"></div>
                          <div className="bg-white rounded-[2rem] overflow-hidden aspect-[9/16]">
                            <img
                              src={nakajimaRecruitDetailSP}
                              alt={`${selectedProject.title} - SP Details`}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : selectedProject.id === 3 ? (
                  // Special layout for Chuo Kotsu project - show detailed image
                  <div className="flex justify-center max-w-4xl mx-auto">
                    <div className="w-full">
                      <img
                        src={chuoKotsuDetail}
                        alt={`${selectedProject.title} - Details`}
                        className="w-full h-auto rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                ) : selectedProject.id === 4 ? (
                  // Special layout for Human System project - show detailed image
                  <div className="flex justify-center max-w-4xl mx-auto">
                    <div className="w-full">
                      <img
                        src={humanSystemDetail}
                        alt={`${selectedProject.title} - Details`}
                        className="w-full h-auto rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                ) : (selectedProject.id <= 2 || selectedProject.id === 7) ? (
                  // Show both PC and Mobile frames for projects 1, 2, and 7
                  <div className="flex flex-col items-center">
                    <div className="flex flex-col lg:grid lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12 max-w-5xl mx-auto">
                      {/* PC Monitor Frame - First on mobile, left on desktop */}
                      <div className="flex flex-col items-center lg:justify-center">
                        <div className="w-full bg-gray-900 rounded-t-lg p-3 shadow-2xl">
                          <div className="bg-white rounded-sm overflow-hidden aspect-video">
                            <img
                              src={selectedProject.id === 7 ? corporatePC3 : selectedProject.imageUrl}
                              alt={`${selectedProject.title} - PC`}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                        </div>
                        {/* Monitor Stand */}
                        <div className="w-24 h-6 bg-gray-800 rounded-b-lg"></div>
                        <div className="w-32 h-3 bg-gray-700 rounded-full mt-1"></div>
                      </div>

                      {/* Smartphone Frame - Second on mobile, right on desktop */}
                      <div className="flex items-center justify-center">
                        <div className="relative bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl w-48">
                          {/* Notch */}
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-5 bg-gray-900 rounded-b-2xl z-10"></div>
                          <div className="bg-white rounded-[2rem] overflow-hidden aspect-[9/16]">
                            <img
                              src={selectedProject.id === 7 ? corporateSP3 : selectedProject.imageUrl2}
                              alt={`${selectedProject.title} - Mobile`}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Show only PC frame for projects 3 and onwards
                  <div className="flex justify-center max-w-4xl mx-auto">
                    <div className="flex flex-col items-center w-full max-w-3xl">
                      <div className="w-full bg-gray-900 rounded-t-lg p-3 shadow-2xl">
                        <div className="bg-white rounded-sm overflow-hidden aspect-video">
                          <img
                            src={selectedProject.imageUrl}
                            alt={`${selectedProject.title} - PC`}
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                      </div>
                      {/* Monitor Stand */}
                      <div className="w-24 h-6 bg-gray-800 rounded-b-lg"></div>
                      <div className="w-32 h-3 bg-gray-700 rounded-full mt-1"></div>
                    </div>
                  </div>
                )}
                </div>
              </div>

              {/* Content Section */}
              <div className="px-8 py-6 lg:px-12 lg:py-8 flex flex-col justify-center">
                <h3 className="text-2xl lg:text-3xl mb-4 text-gray-900">
                  {selectedProject.id === 6 ? "シナリオ例" : selectedProject.title}
                </h3>

                {/* コーポレートサイト (id: 1) の場合はサブタイトルを表示 */}
                {selectedProject.id === 1 && (
                  <p className="text-green-800 font-bold mb-4">更新作業の属人化を解消するため、非エンジニアでも運用可能なWordPress構造を設計・実装</p>
                )}

                {/* 採用サイト (id: 2) の場合はサブタイトルを表示 */}
                {selectedProject.id === 2 && (
                  <p className="text-green-800 font-bold mb-4">情報設計の見直しにより、求職者が必要な情報へ最短で到達できる導線を構築</p>
                )}

                {/* コーポレートサイト設計 (id: 3) の場合はサブタイトルを表示 */}
                {selectedProject.id === 3 && (
                  <p className="text-green-800 font-bold mb-4">ヒアリングをもとに情報構造を整理し、企業理解を促進するサイト構成をゼロから設計</p>
                )}

                {/* コーポレートサイト・ECサイト設計 (id: 4) の場合はサブタイトルを表示 */}
                {selectedProject.id === 4 && (
                  <p className="text-green-800 font-bold mb-4">コーポレートとECの役割を整理し、販売と情報提供を両立するサイト構成を設計・構築</p>
                )}

                {/* シナリオライティング (id: 6) の場合はサブタイトルを表示 */}
                {selectedProject.id === 6 && (
                  <p className="text-green-800 font-bold mb-4">読者理解を重視した構成設計により、情報の伝達力と可読性を高めたコンテンツ制作</p>
                )}

                {/* コーポレートサイト運用 (id: 7) の場合はサブタイトルを表示 */}
                {selectedProject.id === 7 && (
                  <p className="text-green-800 font-bold mb-4">デザインカンプをもとに、横スクロールや動的表現を含むフロントエンド実装を担当</p>
                )}

                {/* コーポレートサイト (id: 1) の場合は説明文を表示 */}
                {selectedProject.id === 1 && (
                  <div className="text-gray-700 leading-relaxed">
                    <p className="mb-4">
                      取扱商品：ブロックレイアウトで情報を整理し、視認性と一覧性を考慮して実装。<br />
                      各商品にアイコンを付与し、内容を直感的に把握できるUIを構築。
                    </p>
                    <div className="whitespace-pre-line">
                      {formatDescription(`担当範囲
フロントエンド実装、WordPressテーマ構築、更新設計（ブロックエディタ）、運用マニュアル作成

使用技術
HTML5 / CSS3 / JavaScript / jQuery / WordPress

実装ポイント
・コンテンツ構造を整理し、非エンジニアでも更新可能なWordPress構成を設計
・ブロックエディタを活用し、HTML不要で更新できる管理画面を構築
・共通パーツを整理したCSS設計により、再利用性と保守性を向上

成果
更新作業の属人化を解消し、運用負荷の軽減と更新効率の向上を実現`)}
                    </div>
                  </div>
                )}

                {/* 採用サイト (id: 2) の場合は説明文を表示 */}
                {selectedProject.id === 2 && (
                  <div className="text-gray-700 leading-relaxed">
                    <p className="mb-4">
                      就業条件：オレンジを基調とした配色設計によりセクションの統一感と視認性を担保。<br />
                      行間・余白を調整し、情報の密度をコントロールすることで可読性を意識したレイアウトを実装。
                    </p>
                    <div className="whitespace-pre-line">
                      {formatDescription(`担当範囲
フロントエンド実装、WordPressテーマ構築、情報設計、更新設計（ブロックエディタ）

使用技術
HTML5 / CSS3 / JavaScript / jQuery / WordPress

実装ポイント
・職種・条件ごとに情報を整理し、求職者が目的の情報へ到達しやすい構造に再設計
・見出し階層（h構造）とセクション分割により、可読性と視認性を向上
・ブロックエディタを活用し、非エンジニアでも更新可能な管理画面を構築

成果
情報構造の整理により、必要な情報へ最短2クリック以内で到達可能な導線を実現
更新作業の効率化と属人化の解消に貢献`)}
                    </div>
                  </div>
                )}

                {/* コーポレートサイト設計 (id: 3) の場合は説明文を表示 */}
                {selectedProject.id === 3 && (
                  <div className="text-gray-700 leading-relaxed">
                    <p className="mb-4">
                      業務実績：情報量の多いコンテンツを表形式で整理し、構造を明確化。<br />
                      表の配色設計により視認性を向上させ、情報の判別がしやすいレイアウトとして実装。
                    </p>
                    <div className="whitespace-pre-line">
                      {formatDescription(`担当範囲
サイト構成設計、情報設計、フロントエンド実装（HTML / CSS）

使用技術
HTML5 / CSS3

実装ポイント
・ヒアリングをもとに情報を整理し、約20ページのサイト構成を設計
・事業内容→実績→会社概要の順に情報優先度を設計し、段階的に理解できる導線を構築
・見出し階層と情報グルーピングにより、可読性と視認性を考慮したレイアウトを実装

成果
企業情報を外部に発信する基盤を新規構築し、事業内容を段階的に理解できる情報構造を実現`)}
                    </div>
                  </div>
                )}

                {/* コーポレートサイト・ECサイト設計 (id: 4) の場合は説明文を表示 */}
                {selectedProject.id === 4 && (
                  <div className="text-gray-700 leading-relaxed">
                    <p className="mb-4">
                      商品説明カテゴリ：メニューにサムネイル画像と説明文を組み合わせ、各カテゴリの内容を直感的に把握できる構成として実装。<br />
                      ボックスレイアウトで情報を整理し、視認性と一覧性を考慮したUIを構築。
                    </p>
                    <div className="whitespace-pre-line">
                      {formatDescription(`担当範囲
サイト構成設計（コーポレート／EC）、情報設計、フロントエンド実装、EC-CUBE構築

使用技術
HTML5 / CSS3 / EC-CUBE

実装ポイント
・コーポレートサイトとECサイトの役割を整理し、全体構成を設計
・商品理解を促進するため、商品ページおよびFAQコンテンツを設計
・シンプルなレイアウトと配色設計により、視認性と可読性を考慮したUIを実装

成果
販売および情報発信を担うWeb基盤を新規構築し、FAQ整備により問い合わせ対応の負担軽減に寄与`)}
                    </div>
                  </div>
                )}

                {/* コーポレートサイト運用 (id: 7) の場合は説明文を表示 */}
                {selectedProject.id === 7 && (
                  <div className="mb-6">
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      STORYエリア：横並びレイアウトおよびコンテンツ構造を意識して実装
                    </p>
                    <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {formatDescription(`担当範囲
HTML/CSSコーディング（レスポンシブ）、JavaScript / jQueryによる動的表現の実装、画像最適化、WordPress更新

使用技術
HTML5 / CSS3 / JavaScript / jQuery / WordPress

実装ポイント
・デザインカンプをもとに、レイアウトや余白設計を含め再現性の高いコーディングを実施
・JavaScriptによるアニメーションおよびインタラクションを実装
・画像最適化および構造設計により、表示パフォーマンスと更新性に配慮`)}
                    </div>
                  </div>
                )}

                {/* シナリオライティング (id: 6) の場合は説明文を表示 */}
                {selectedProject.id === 6 && (
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {formatDescription(`案件概要
某ゲーム会社
東洋風の新規エリア実装に伴う、シナリオオープニングを担当
シナリオタイトル：【東征】遠い約束の先へ

担当範囲
シナリオ構成設計、テキスト執筆

制作ポイント
・新規エリアの世界観を伝える導入として、背景説明と物語のフックを両立した構成を設計
・プレイヤーが継続して関わりたくなるよう、先の展開を想起させるストーリーラインを構築
・キャラクターや設定情報を段階的に提示し、理解しやすい導入を意識して執筆

成果
ユーザーから高評価を得て、継続的なプレイ意欲の向上に寄与`)}
                  </div>
                )}

                {/* その他の案件は詳細情報を表示 */}
                {selectedProject.id !== 1 && selectedProject.id !== 2 && selectedProject.id !== 3 && selectedProject.id !== 4 && selectedProject.id !== 6 && selectedProject.id !== 7 && (
                  <>

                    {selectedProject.id !== 7 && (
                      <>
                        <div className="text-gray-700 mb-6 leading-relaxed whitespace-pre-line">
                          {formatDescription(selectedProject.description)}
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {selectedProject.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm border border-green-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="space-y-3">
                          {selectedProject.details.map((detail, idx) => (
                            <p key={idx} className="text-sm text-gray-600 leading-relaxed">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}