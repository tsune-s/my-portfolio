'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const reviews = [
  {
    id: 1,
    name: 'セリーナ・ゴンザレス様',
    role: '株式会社ムイビエン 代表取締役',
    content: '非常に丁寧な対応と、的確なアドバイスをいただきました。期待以上の成果を出すことができました。',
    image: '/a.png'
  },
  {
    id: 2,
    name: 'マイケル・マッケンジー様',
    role: 'アシアシ株式会社 マーケティング部長',
    content: '専門的な知識と経験を活かした提案により、大きな成果を上げることができました。',
    image: '/b.png'
  },
  {
    id: 3,
    name: '木村薫様',
    role: 'ほげほげ株式会社 PR部長',
    content: '技術的な課題に対して、迅速かつ的確な解決策を提案していただきました。',
    image: '/c.png'
  }
];

export default function Home() {
  const scrollToProfile = () => {
    const profileSection = document.getElementById('profile');
    profileSection?.scrollIntoView({ behavior: 'smooth' }); //smooth
  };

  const scrollToWorks = () => {
    const worksSection = document.getElementById('works');
    worksSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
            className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden gradient-border"
          >
            <Image
              src="/profile.png"
              alt="プロフィール写真"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl font-bold mb-4 gradient-text"
          >
            オフィスツネ
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-4x1 md:text-2xl text-blue-500 mb-8"
          >
            ポートフォリオサイトへようこそ
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProfile}
              className="px-6 py-3 glass-effect rounded-lg transition-all duration-300"
            >
              プロフィール
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToWorks}
              className="px-6 py-3 glass-effect rounded-lg transition-all duration-300"
            >
              作品一覧
            </motion.button>
            <motion.a
              href="https://coconala.com/services/2041171?ref=top_histories&ref_kind=home&ref_no=1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg transition-all duration-300"
            >
              ココナラで依頼する
            </motion.a>
            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeAFIMM-B5xvU4HRdeV5JdumBShLbuwgDWJOcXQLtLwMb-SKg/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-all duration-300"
            >
              お問い合わせ
            </motion.a>
          </motion.div>
        </motion.div>

        {/* お客様の声セクション */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">お客様の声</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}                
                transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                className="glass-effect p-6 rounded-x1"
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{review.name}</h3>
                    <p className="text-sm text-gray-400">{review.role}</p>
                  </div>
                </div>
                <p className="text-gray-300">{review.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* プロフィールセクション */}
        <motion.section
          id="profile"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">プロフィール</h2>
          <div className="glass-effect p-8 rounded-xl max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">経歴</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <div>
                      <p className="font-semibold">2020年 - 現在</p>
                      <p className="text-gray-300">フリーランスエンジニア</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <div>
                      <p className="font-semibold">2018年 - 2020年</p>
                      <p className="text-gray-300">大手通信会社</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <div>
                      <p className="font-semibold">2015年 - 2018年</p>
                      <p className="text-gray-300">パッケージソフトウェア開発</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">スキル</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-2">フロントエンド</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">React</span>
                      <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">Next.js</span>
                      <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">TypeScript</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">バックエンド</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">Node.js</span>
                      <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">Python</span>
                      <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">Django</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* サービス内容セクション */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">サービス内容</h2>
          <div className="glass-effect p-8 rounded-xl max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">エクセル業務効率化</h3>
                  <p className="text-gray-300">
                    ・業務プロセスの自動化<br />
                    ・データ入力・集計の効率化<br />
                    ・マクロ開発・カスタマイズ
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">エクセル研修</h3>
                  <p className="text-gray-300">
                    ・初級から上級までのカスタマイズ研修<br />
                    ・実務に即した実践的なトレーニング<br />
                    ・VBAプログラミング講座
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">データ分析</h3>
                  <p className="text-gray-300">
                    ・ビジネスデータの可視化<br />
                    ・統計分析・予測モデル構築<br />
                    ・レポート作成支援
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">システム開発</h3>
                  <p className="text-gray-300">
                    ・Webアプリケーション開発<br />
                    ・業務システムの構築<br />
                    ・API開発・インテグレーション
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 作品一覧セクション */}
        <motion.section
          id="works"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">作品一覧</h2>
          <div className="glass-effect p-8 rounded-xl max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">今日の運勢 🎍</h3>
                <p className="text-gray-300 mb-6">
                  シンプルで使いやすいおみくじアプリケーション。<br />
                  毎日の運勢を気軽にチェックできます。<br />
                  モダンなデザインと直感的なUIで、楽しく運勢を占えます。
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">Tailwind CSS</span>
                </div>
              </div>
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-2xl mx-auto max-w-2xl">
                <Image
                  src="/omikuji-preview.png"
                  alt="おみくじアプリのプレビュー"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <motion.a
                  href="https://www.omikuji.officetsune.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg text-lg font-semibold transition-all duration-300"
                >
                  おみくじを引く！
                </motion.a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* お問い合わせセクション */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl font-bold mb-8 gradient-text">お問い合わせ</h2>
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeAFIMM-B5xvU4HRdeV5JdumBShLbuwgDWJOcXQLtLwMb-SKg/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg text-lg font-semibold transition-all duration-300"
          >
            お問い合わせフォームへ
          </motion.a>
        </motion.section>
      </div>
    </main>
  );
}
