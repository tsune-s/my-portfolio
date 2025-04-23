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
    name: '木村薫',
    role: 'ほげほげ株式会社 開発部長',
    content: '技術的な課題に対して、迅速かつ的確な解決策を提案していただきました。',
    image: '/c.png'
  }
];

export default function Home() {
  const scrollToProfile = () => {
    const profileSection = document.getElementById('profile');
    profileSection?.scrollIntoView({ behavior: 'smooth' }); //smooth
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
              src="/profile.jpg"
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
              className="px-6 py-3 glass-effect rounded-lg transition-all duration-300"
            >
              作品一覧
            </motion.button>
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
                      <p className="text-gray-300">株式会社テック シニアエンジニア</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <div>
                      <p className="font-semibold">2015年 - 2018年</p>
                      <p className="text-gray-300">株式会社デベロップ エンジニア</p>
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
      </div>
    </main>
  );
}
